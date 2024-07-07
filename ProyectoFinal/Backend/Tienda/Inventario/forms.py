from django import forms
from .models import Producto
from .models import Categoria

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = ['name', 'descripcion', 'precio', 'categoria', 'imagen']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'descripcion': forms.Textarea(attrs={'class': 'form-control'}),
            'precio': forms.NumberInput(attrs={'class': 'form-control'}),
            'categoria': forms.Select(attrs={'class': 'form-control'}),
            'imagen': forms.ClearableFileInput(attrs={'class': 'form-control'}),
        }
class CategoriaForm(forms.ModelForm):
    class Meta:
        model = Categoria
        fields = ['nombre', 'descripcion']
