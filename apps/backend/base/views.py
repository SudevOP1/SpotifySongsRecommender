from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

import json
from .helpers import (
    get_access_token,
    get_playlist_details,
    get_rec_songs_from_gemini,
    get_rec_songs_from_spotify,
)

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

@csrf_exempt
def get_recommended_songs(request):
    if request.method == "POST":
        try:
            # get input_songs and num_recs
            body = json.loads(request.body)
            input_songs = body["songs"]
            num_recs    = body["num"]
            if not input_songs: return JsonResponse({"success": False, "error": "songs required"})
            if not num_recs:    return JsonResponse({"success": False, "error": "num required"})
            
            # get rec_songs from gemini
            rec_songs_ok, rec_songs = get_rec_songs_from_gemini(input_songs, num_recs)
            if not rec_songs_ok:
                return JsonResponse({"success": False, "error": rec_songs})
            
            # get access_token
            access_token_ok, access_token = get_access_token()
            if not access_token_ok:
                return JsonResponse({"success": False, "error": access_token})
            
            # get rec_songs from spotify
            rec_songs_ok, rec_songs = get_rec_songs_from_spotify(access_token, rec_songs)
            return JsonResponse({"success": rec_songs_ok, "recommended_songs": rec_songs})

        except Exception as e:
            return JsonResponse({"success": False, "error": f"something went wrong: {e}"})
    return JsonResponse({"success": False, "error": "only POST requests allowed"})

