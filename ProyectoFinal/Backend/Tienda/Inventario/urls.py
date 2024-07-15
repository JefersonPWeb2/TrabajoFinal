from django.urls import path
from . import views

urlpatterns = [
    path('productos/', views.producto_lista, name='producto_lista'),
    path('productos/<int:pk>/', views.producto_detalle, name='producto_detalle'),
    path('productos/nuevo/', views.producto_create, name='producto_create'),
    path('productos/<int:pk>/edit/', views.producto_update, name='producto_update'),
    path('productos/<int:pk>/delete/', views.producto_delete, name='producto_delete'),
    path('productos/json/', views.producto_list_json, name='producto_list_json'),
    path('categoria/', views.categoria_lista, name='categoria_lista'),
    path('categoria/nuevo/', views.categoria_nueva, name='categoria_nueva'),
]
