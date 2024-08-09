import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../Services/producto.service';
import { CategoriaService } from '../../Services/categoria.service';
import { Categoria } from '../../Models/categoria.model';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  productoForm: FormGroup;
  categorias: Categoria[] = [];
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: [null]
    });
  }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('nombre', this.productoForm.get('nombre')?.value);
    formData.append('descripcion', this.productoForm.get('descripcion')?.value);
    formData.append('categoria', this.productoForm.get('categoria')?.value);
    formData.append('precio', this.productoForm.get('precio')?.value);
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile);
    }

    this.productoService.createProducto(formData).subscribe(
      () => {
        this.router.navigate(['/productos']);
      },
      error => {
        console.error('Error al crear el producto:', error);
      }
    );
  }
}
