from django.apps import AppConfig

class MusicaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'musica'  # ⚠️ Debe coincidir EXACTAMENTE con el nombre de la carpeta de la app
