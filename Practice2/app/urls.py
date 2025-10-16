from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PedidoViewSet, ClienteViewSet

router = DefaultRouter()
router.register('entidad1', PedidoViewSet)
router.register('entidad2', ClienteViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
