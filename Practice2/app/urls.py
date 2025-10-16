from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PedidoViewSet, ClienteViewSet
from rest_framework import routers
from .views import ClienteViewSet, PedidoViewSet

router = routers.DefaultRouter()
router.register(r'clientes', ClienteViewSet)
router.register(r'pedidos', PedidoViewSet)

urlpatterns = router.urls

