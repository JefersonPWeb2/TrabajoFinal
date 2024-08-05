from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import ProductoViewSet, CategoriaViewSet, crear_producto, actualizar_producto

router = DefaultRouter()
router.register(r'productos', ProductoViewSet, basename='producto')
router.register(r'categorias', CategoriaViewSet, basename='categoria')
urlpatterns = [
    path('productos/', views.producto_lista, name='producto_lista'),
    path('productos/<int:pk>/', views.producto_detalle, name='producto_detalle'),
    path('productos/nuevo/', views.producto_create, name='producto_create'),
    path('productos/<int:pk>/edit/', views.producto_update, name='producto_update'),
    path('productos/<int:pk>/delete/', views.producto_delete, name='producto_delete'),
    path('api/', include(router.urls)),
    path('api/producto/', crear_producto, name='crear_producto'),
    path('api/productos/<int:pk>/', actualizar_producto, name='actualizar_producto'),
    path('categoria/', views.categoria_lista, name='categoria_lista'),
    path('categoria/nuevo/', views.categoria_nueva, name='categoria_nueva'),
    path('categoria/<int:pk>/delete/', views.categoria_delete, name='categoria_delete'),
    path('categoria/<int:pk>/', views.categoria_detalle, name='categoria_detalle'),
    path('carrito/agregar/<int:producto_id>/', views.agregar_al_carrito, name='agregar_al_carrito'),
    path('carrito/', views.ver_carrito, name='ver_carrito'),
    path('carrito/eliminar/<int:item_id>/', views.eliminar_del_carrito, name='eliminar_del_carrito'),
]
