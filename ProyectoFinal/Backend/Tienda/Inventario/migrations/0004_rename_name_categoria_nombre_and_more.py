# Generated by Django 5.0.6 on 2024-07-15 04:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Inventario', '0003_categoria_descripcion'),
    ]

    operations = [
        migrations.RenameField(
            model_name='categoria',
            old_name='name',
            new_name='nombre',
        ),
        migrations.RenameField(
            model_name='producto',
            old_name='name',
            new_name='nombre',
        ),
    ]
