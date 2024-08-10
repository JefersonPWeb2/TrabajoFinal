import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoFormComponent } from './Components/producto-form/producto-form.component';
import { ProductoListComponent } from './Components/producto-list/producto-list.component';
import { ProductoService } from './Services/producto.service';
import { CategoriaService } from './Services/categoria.service';
import { SidebarCategoriasComponent } from './Components/sidebar-categorias/sidebar-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoFormComponent,
    ProductoListComponent,
    SidebarCategoriasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ProductoService,
    CategoriaService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
