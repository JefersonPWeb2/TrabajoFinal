import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../Services/producto.service';
import { Producto } from '../../Models/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  editarProducto(id: number): void {
    this.router.navigate(['/productos', id, 'editar']);
  }

  eliminarProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter(producto => producto.id !== id);
    });
  }
  hoverEffect(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    element.style.transform = 'scale(1.05)';
  }

  removeHoverEffect(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    element.style.transform = 'scale(1)';
  }
}
