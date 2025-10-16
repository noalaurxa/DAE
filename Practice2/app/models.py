from django.db import models

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.TextField()

    def __str__(self):
        return self.nombre

class Pedido(models.Model):
    fecha = models.DateField()
    monto_total = models.DecimalField(max_digits=10, decimal_places=2)
    estado = models.CharField(max_length=50)
    cliente = models.ForeignKey(Cliente, related_name='pedidos', on_delete=models.CASCADE)

    def __str__(self):
        return f"Pedido #{self.id} - {self.cliente.nombre}"
