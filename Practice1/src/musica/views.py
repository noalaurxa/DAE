from django.shortcuts import render, get_object_or_404, redirect
from .models import Song, Artist
from .forms import SongForm, ArtistForm
from django.db.models import Q

# Canciones
def song_list(request):
    query = request.GET.get('q')
    if query:
        songs = Song.objects.filter(Q(titulo__icontains=query) | Q(genero__icontains=query))
    else:
        songs = Song.objects.all()
    return render(request, 'musica/song_list.html', {'songs': songs})

def song_create(request):
    if request.method == 'POST':
        form = SongForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('song_list')
    else:
        form = SongForm()
    return render(request, 'musica/song_form.html', {'form': form, 'title': 'Crear Canción'})

def song_edit(request, pk):
    song = get_object_or_404(Song, pk=pk)
    if request.method == 'POST':
        form = SongForm(request.POST, instance=song)
        if form.is_valid():
            form.save()
            return redirect('song_list')
    else:
        form = SongForm(instance=song)
    return render(request, 'musica/song_form.html', {'form': form, 'title': 'Editar Canción'})

def song_delete(request, pk):
    song = get_object_or_404(Song, pk=pk)
    if request.method == 'POST':
        song.delete()
        return redirect('song_list')
    return render(request, 'musica/song_confirm_delete.html', {'song': song})

# Artistas
def artist_list(request):
    artists = Artist.objects.all()
    return render(request, 'musica/artist_list.html', {'artists': artists})

def artist_create(request):
    if request.method == 'POST':
        form = ArtistForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('artist_list')
    else:
        form = ArtistForm()
    return render(request, 'musica/artist_form.html', {'form': form, 'title': 'Crear Artista'})

def artist_edit(request, pk):
    artist = get_object_or_404(Artist, pk=pk)
    if request.method == 'POST':
        form = ArtistForm(request.POST, instance=artist)
        if form.is_valid():
            form.save()
            return redirect('artist_list')
    else:
        form = ArtistForm(instance=artist)
    return render(request, 'musica/artist_form.html', {'form': form, 'title': 'Editar Artista'})

def artist_delete(request, pk):
    artist = get_object_or_404(Artist, pk=pk)
    if request.method == 'POST':
        artist.delete()
        return redirect('artist_list')
    return render(request, 'musica/artist_confirm_delete.html', {'artist': artist})


from django.shortcuts import render
from .models import Artist


def artist_list(request):
    artists = Artist.objects.all()  # Trae todos los artistas
    return render(request, 'musica/artist_list.html', {'artists': artists})

# Crear artista
def artist_create(request):
    if request.method == 'POST':
        form = ArtistForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('artist_list')
    else:
        form = ArtistForm()
    return render(request, 'musica/artist_form.html', {'form': form})
