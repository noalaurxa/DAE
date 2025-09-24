from django.shortcuts import render, redirect
from .models import Mascota
from .forms import MascotaForm

def lista_mascotas(request):
    mascotas = Mascota.objects.all()
    return render(request, "mascotas/lista.html", {"mascotas": mascotas})


def crear_mascota(request):
    if request.method == "POST":
        form = MascotaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("lista_mascotas")
    else:
        form = MascotaForm()
    return render(request, "mascotas/crear.html", {"form": form})
