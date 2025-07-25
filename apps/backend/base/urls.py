from django.urls import path
from . import views

urlpatterns = [
    path('get_playlist/', views.get_playlist, name="get_playlist"),
    path('get_recommended_songs/', views.get_recommended_songs, name="get_recommended_songs"),
]

