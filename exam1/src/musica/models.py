from django.db import models

class Artist(models.Model):
    nombre = models.CharField(max_length=100)
    nacionalidad = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class Song(models.Model):
    titulo = models.CharField(max_length=100)
    duracion = models.IntegerField(help_text="Duración en segundos")
    genero = models.CharField(max_length=50)
    artista = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name="canciones")

    def __str__(self):
        return self.titulo
