from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

from dotenv import load_dotenv
import os, requests, json

load_dotenv()
spotify_client_id = os.getenv("SPOTIFY_CLIENT_ID")
spotify_client_secret = os.getenv("SPOTIFY_CLIENT_SECRET")

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
        return [True, res_json["access_token"]]
    except Exception as e:
        return [False, f"something went wrong: {e}"]

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
                    track = song["track"]
                    name = track.get("name", "")
                    artists = [artist["name"] for artist in track["artists"]]
                    song_url = f"https://open.spotify.com/track/{song["track"]["id"]}"
                    cover = next(
                        (img["url"] for img in track["album"]["images"] if img.get("width") == 300),
                        track["album"]["images"][0]["url"] if track["album"]["images"] else ""
                    )
                    all_tracks.append({
                        "name": name,
                        "artists": artists,
                        "cover": cover,
                        "song_url": song_url,
                    })
                except Exception:
                    continue

            if track_res.get("next"): offset += limit
            else: break

        playlist = {
            "name": playlist_name,
            "songs": all_tracks
        }
        return [True, playlist]
    except Exception as e:
        return [False, f"something went wrong: {e}"]

@csrf_exempt
def get_playlist(request):
    if request.method == "POST":
        try:
            # get playlist id
            body = json.loads(request.body)
            playlist_id = body["playlist_id"]
            if not playlist_id:
                return JsonResponse({"success": False, "error": "playlist_id required"})
            
            # get access_token
            access_token_ok, access_token = get_access_token()
            if not access_token_ok:
                return JsonResponse({"success": False, "error": access_token})
            
            # get playlist using playlist_id and access_token
            playlist_ok, playlist = get_playlist_details(access_token, playlist_id)
            return JsonResponse({"success": playlist_ok, "playlist": playlist})

        except Exception as e:
            return JsonResponse({"success": False, "error": f"something went wrong: {e}"})
    return JsonResponse({"success": False, "error": "only POST requests allowed"})

def suggest_songs(request):
    pass

