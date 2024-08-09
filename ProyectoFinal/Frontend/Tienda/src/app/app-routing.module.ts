import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoFormComponent } from './Components/producto-form/producto-form.component';
import { ProductoListComponent } from './Components/producto-list/producto-list.component';

const routes: Routes = [
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/nuevo', component: ProductoFormComponent },
  { path: 'productos/:id/editar', component: ProductoFormComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
