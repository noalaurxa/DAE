from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer
import json

# Vista normal (renderiza template)
def item_list(request):
    items = Item.objects.all().order_by('-created_at')
    return render(request, "core/item_list.html", {"items": items})

# API: Listar y crear items usando DRF
class ItemListCreateAPI(generics.ListCreateAPIView):
    queryset = Item.objects.all().order_by('-created_at')
    serializer_class = ItemSerializer

# API: Crear item manualmente desde fetch
@csrf_exempt
def api_create_item(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            description = data.get('description', '')

            if not name:
                return JsonResponse({'error': 'Name is required'}, status=400)

            item = Item.objects.create(name=name, description=description)

            return JsonResponse({
                'id': item.id,
                'name': item.name,
                'description': item.description,
                'created_at': item.created_at
            })
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)

    return JsonResponse({'error': 'Invalid method'}, status=400)
# API: Eliminar item
@csrf_exempt
def api_delete_item(request, pk):
    if request.method == "DELETE":
        try:
            item = Item.objects.get(pk=pk)
            item.delete()
            return JsonResponse({'success': True})
        except Item.DoesNotExist:
            return JsonResponse({'error': 'Item not found'}, status=404)
    return JsonResponse({'error': 'Invalid method'}, status=400)