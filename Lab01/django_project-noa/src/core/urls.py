from django.urls import path
from . import views

urlpatterns = [
    # API DRF
    path('api/items/', views.ItemListCreateAPI.as_view(), name='item_list_api'),
    # Vista HTML
    path('', views.item_list, name='item_list'),
    # API manual POST
    path('api/items/create/', views.api_create_item, name='api_create_item'),
    # API DELETE
    path('api/items/<int:pk>/delete/', views.api_delete_item, name='api_delete_item'),
]
