from django.shortcuts import render, redirect, get_object_or_404
from .models import Pet
from .forms import PetForm

# Listar y buscar
def pet_list(request):
    query = request.GET.get('q')
    if query:
        pets = Pet.objects.filter(name__icontains=query)
    else:
        pets = Pet.objects.all()
    return render(request, 'pets/pet_list.html', {'pets': pets})

# Crear
def pet_create(request):
    if request.method == 'POST':
        form = PetForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('pet_list')
    else:
        form = PetForm()
    return render(request, 'pets/pet_form.html', {'form': form})

# Editar
def pet_update(request, pk):
    pet = get_object_or_404(Pet, pk=pk)
    if request.method == 'POST':
        form = PetForm(request.POST, instance=pet)
        if form.is_valid():
            form.save()
            return redirect('pet_list')
    else:
        form = PetForm(instance=pet)
    return render(request, 'pets/pet_form.html', {'form': form})

# Eliminar
def pet_delete(request, pk):
    pet = get_object_or_404(Pet, pk=pk)
    if request.method == 'POST':
        pet.delete()
        return redirect('pet_list')
    return render(request, 'pets/pet_confirm_delete.html', {'pet': pet})
