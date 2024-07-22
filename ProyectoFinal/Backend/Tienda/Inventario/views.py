from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from .decorators import usuario_es_administrador, usuario_es_cliente
from .models import Producto, Categoria, CarritoItem, Carrito
from .forms import ProductoForm, CategoriaForm, CartForm
from django.http import JsonResponse
from .serializers import ProductoSerializer, CategoriaSerializer
from rest_framework.decorators import api_view

def producto_lista(request):
    productos = Producto.objects.all()
    return render(request, 'Inventario/producto_lista.html', {'productos': productos})

def producto_detalle(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    return render(request, 'Inventario/producto_detalle.html', {'producto': producto})

@login_required
@usuario_es_administrador
def producto_create(request):
    if request.method == "POST":
        form = ProductoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('producto_lista')
    else:
        form = ProductoForm()
    return render(request, 'Inventario/producto_form.html', {'form': form})

@login_required
@usuario_es_administrador
def producto_update(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == "POST":
        form = ProductoForm(request.POST, request.FILES, instance=producto)
        if form.is_valid():
            form.save()
            return redirect('producto_lista')
    else:
        form = ProductoForm(instance=producto)
    return render(request, 'Inventario/producto_form.html', {'form': form})

@login_required
@usuario_es_administrador
def producto_delete(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == "POST":
        producto.delete()
        return redirect(reverse('producto_lista'))
    return render(request, 'Inventario/producto_delete.html', {'producto': producto})

@api_view(['GET'])
def producto_list_json(request):
    productos = Producto.objects.all()
    serializer = ProductoSerializer(productos, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def categoria_list_json(request):
    categorias = Categoria.objects.all()
    serializer = CategoriaSerializer(categorias, many=True)
    return JsonResponse(serializer.data, safe=False)

def categoria_lista(request):
    categorias = Categoria.objects.all()
    return render(request, 'Inventario/categoria_lista.html', {'categorias': categorias})

@login_required
@usuario_es_administrador
def categoria_nueva(request):
    if request.method == "POST":
        form = CategoriaForm(request.POST)
        if form.is_valid():
            categoria = form.save()
            return redirect('categoria_lista')
    else:
        form = CategoriaForm()
    return render(request, 'Inventario/categoria_editar.html', {'form': form})

@login_required
@usuario_es_administrador
def categoria_delete(request, pk):
    categoria = get_object_or_404(Categoria, pk=pk)
    if request.method == "POST":
        categoria.delete()
        return redirect(reverse('categoria_lista'))
    return render(request, 'Inventario/categoria_delete.html', {'categoria': categoria})

def categoria_detalle(request, pk):
    categoria = get_object_or_404(Categoria, pk=pk)
    return render(request, 'Inventario/categoria_detalle.html', {'categoria': categoria})

@login_required
def agregar_al_carrito(request, producto_id):
    producto = get_object_or_404(Producto, id=producto_id)
    carrito, created = Carrito.objects.get_or_create(usuario=request.user)
    carrito_item, item_created = CarritoItem.objects.get_or_create(carrito=carrito, producto=producto)
    if not item_created:
        carrito_item.cantidad += 1
        carrito_item.save()
    return redirect('ver_carrito')

@login_required
def ver_carrito(request):
    carrito, created = Carrito.objects.get_or_create(usuario=request.user)
    items = CarritoItem.objects.filter(carrito=carrito)
    return render(request, 'Inventario/ver_carrito.html', {'carrito': carrito, 'items': items})

@login_required
def eliminar_del_carrito(request, item_id):
    item = get_object_or_404(CarritoItem, id=item_id)
    item.delete()
    return redirect('ver_carrito')
