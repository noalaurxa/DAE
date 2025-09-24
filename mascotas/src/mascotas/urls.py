from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_mascotas, name="lista_mascotas"),
    path('crear/', views.crear_mascota, name="crear_mascota"),
]
