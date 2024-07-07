from django.db import models

class Categoria(models.Model):
    name = models.CharField(max_length=100)

class Producto(models.Model):
    name = models.CharField(max_length=100)
    descripcion = models.TextField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.ImageField(upload_to='producto_images/', blank=True, null=True)