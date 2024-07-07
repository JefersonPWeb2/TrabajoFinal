from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from .models import Producto
from .forms import ProductoForm
from django.http import JsonResponse
from .serializers import ProductoSerializer
from rest_framework.decorators import api_view

def producto_lista(request):
    productos = Producto.objects.all()
    return render(request, 'producto_lista.html', {'productos': productos})

def producto_detalle(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    return render(request, 'producto_detalle.html', {'producto': producto})

def producto_create(request):
    if request.method == "POST":
        form = ProductoForm(request.POST, request.FILES)
        if form.is_valid():
            producto = form.save()
            return redirect(reverse('producto_detalle', args=[producto.pk]))
    else:
        form = ProductoForm()
    return render(request, 'producto_form.html', {'form': form})

def producto_update(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == "POST":
        form = ProductoForm(request.POST, request.FILES, instance=producto)
        if form.is_valid():
            producto = form.save()
            return redirect(reverse('producto_detalle', args=[producto.pk]))
    else:
        form = ProductoForm(instance=producto)
    return render(request, 'producto_form.html', {'form': form})

def producto_delete(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == "POST":
        producto.delete()
        return redirect(reverse('producto_lista'))
    return render(request, 'producto_delete.html', {'producto': producto})

@api_view(['GET'])
def producto_list_json(request):
    productos = Producto.objects.all()
    serializer = ProductoSerializer(productos, many=True)
    return JsonResponse(serializer.data, safe=False)
