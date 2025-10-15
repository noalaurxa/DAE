from django.urls import path
from . import views

urlpatterns = [
    # Canciones
    path('', views.song_list, name='song_list'),  # raíz
    path('song_list/', views.song_list, name='song_list'),  # ruta explícita /song_list/
    path('songs/create/', views.song_create, name='song_create'),
    path('songs/<int:pk>/edit/', views.song_edit, name='song_edit'),
    path('songs/<int:pk>/delete/', views.song_delete, name='song_delete'),

    # Artistas
    path('artists/', views.artist_list, name='artist_list'),
    path('artists/create/', views.artist_create, name='artist_create'),
    path('artists/<int:pk>/edit/', views.artist_edit, name='artist_edit'),
    path('artists/<int:pk>/delete/', views.artist_delete, name='artist_delete'),
]
