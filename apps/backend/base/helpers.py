from dotenv import load_dotenv
from google import genai
import os, requests, json, pydantic

load_dotenv()

# spotify api
spotify_client_id = os.getenv("SPOTIFY_CLIENT_ID")
spotify_client_secret = os.getenv("SPOTIFY_CLIENT_SECRET")

# gemini api
gemini_api_key = os.getenv("GEMINI_API_KEY")
max_retries = 3

def get_access_token():
    try:
        headers = {"Content-Type": "application/x-www-form-urlencoded"}
        data = {
            "grant_type": "client_credentials",
            "client_id": spotify_client_id,
            "client_secret": spotify_client_secret,
        }
        res = requests.post("https://accounts.spotify.com/api/token", headers=headers, data=data)
        res_json = res.json()
        return True, res_json["access_token"]
    except Exception as e:
        return False, f"something went wrong: {e}"

def get_song_details_from_track(track):
    try:
        return True, {
            "name": track.get("name", ""),
            "artists": [artist["name"] for artist in track["artists"]],
            "song_url": f"https://open.spotify.com/track/{track["id"]}",
            "cover": next(
                (img["url"] for img in track["album"]["images"] if img.get("width") == 300),
                track["album"]["images"][0]["url"] if track["album"]["images"] else ""
            ),
        }
    except Exception as e:
        return False, e

def get_playlist_details(access_token: str, playlist_id: str):
    try:
        headers = {"Authorization": f"Bearer {access_token}"}
        base_url = f"https://api.spotify.com/v1/playlists/{playlist_id}"
        playlist_name = requests.get(base_url, headers=headers).json()["name"]

        all_tracks = []
        offset = 0
        limit = 100

        # keep fetching until there are no more items
        while True:
            tracks_url = f"{base_url}/tracks?offset={offset}&limit={limit}"
            track_res = requests.get(tracks_url, headers=headers).json()
            if "items" not in track_res or not track_res["items"]:
                break
            for song in track_res["items"]:
                try:
                    song_details_ok, song_details = get_song_details_from_track(song["track"])
                    if song_details_ok:
                        all_tracks.append(song_details)
                    else:
                        print(song_details)
                        continue
                except Exception:
                    continue

            if track_res.get("next"): offset += limit
            else: break

        playlist = {
            "name": playlist_name,
            "songs": all_tracks
        }
        # print(f"from get_playlist_details: {json.dumps(playlist, indent=2)}") # debugging
        return True, playlist
    except Exception as e:
        return False, f"something went wrong: {e}"

def format_gemini_res(res: str):
    res = (res
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )
    try:
        songs = json.loads(res)
        return True, songs
    except Exception as e:
        return False, f"json data could not be parsed: {e}"

def get_rec_songs_from_gemini(input_songs: list[dict], num_recs: int):
    client = genai.Client(api_key=gemini_api_key)
    formatted_input_songs = "\n".join([
        f"{song['name']} by {', '.join(song['artists'])}"
        for song in input_songs
    ])

    prompt = f"""
    Given the following list of songs (each with name and artist(s)), recommend {num_recs} similar songs based on mood, genre, and musical style; also provide a reason (short explanation of why this song fits).
    Respond in this JSON format:
    [
    {{
        "name": "Song Title",
        "artists": ["Artist1", "Artist2"],
        "reason": "This song has a similar style or mood."
    }},
    ...
    ]

    {formatted_input_songs}
    """

    songs_ok = False
    tries = 0
    while (not songs_ok) and tries < max_retries:
        response = client.models.generate_content(
            model="gemini-2.5-pro",
            contents=prompt.strip(),
        )
        # print("[Gemini response text]:", response.text) # for debugging
        songs_ok, songs = format_gemini_res(response.text)
        tries += 1
    return songs_ok, songs

def get_rec_songs_from_spotify(access_token: str, songs: list[dict]):
    try:
        headers = {"Authorization": f"Bearer {access_token}"}
        base_url = f"https://api.spotify.com/v1/search"
        rec_songs = []

        # fetch 1st item for each song
        for song in songs:
            song_name = song["name"]
            artist = song["artists"][0]
            reason = song["reason"]
            try:
                params = {
                    "q": f"{song_name} {artist}",
                    "type": "track",
                    "limit": 1,
                    "offset": 0,
                }
                res_json = requests.get(base_url, params=params, headers=headers).json()

                # check for any results
                res_items = res_json.get("tracks", {}).get("items", [])
                if not res_items:
                    rec_songs.append({
                        "name": song_name,
                        "artists": song["artists"],
                        "reason": reason,
                        "found": False,
                    })
                    continue

                rec_song_ok, rec_song = get_song_details_from_track(res_items[0])
                if rec_song_ok:
                    rec_song["reason"] = reason
                    rec_song["found"] = True
                    rec_songs.append(rec_song)
                else:
                    print(rec_song)
                    continue
            except Exception as e:
                print(f"[SPOTIFY SEARCH FAIL] {song_name} by {artist}: {e}")
                continue
        
        return True, rec_songs
    except Exception as e:
        return False, f"something went wrong: {e}"


