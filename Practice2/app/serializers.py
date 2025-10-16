from rest_framework import serializers
from .models import Cliente, Pedido

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'


class PedidoSerializer(serializers.ModelSerializer):
    cliente = ClienteSerializer(read_only=True)
    cliente_id = serializers.PrimaryKeyRelatedField(
        queryset=Cliente.objects.all(), source='cliente', write_only=True
    )

    class Meta:
        model = Pedido
        fields = ['id', 'fecha', 'monto_total', 'estado', 'cliente', 'cliente_id']
