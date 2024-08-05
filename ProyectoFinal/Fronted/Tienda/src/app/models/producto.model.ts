import { Categoria } from "./categoria.model";

export interface Producto{
  id: number;
  nombre: string;
  descripcion: string;
  categoria: Categoria;
  precio: number;
  imagen: File | null;
}
