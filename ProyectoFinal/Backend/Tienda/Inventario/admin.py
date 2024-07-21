from django.contrib import admin

# Register your models here.
from .models import Categoria, Producto, Carrito, CarritoItem

admin.site.register(Categoria)
admin.site.register(Producto)
admin.site.register(CarritoItem)
admin.site.register(Carrito)