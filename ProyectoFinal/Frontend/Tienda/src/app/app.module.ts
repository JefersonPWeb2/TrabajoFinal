import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoFormComponent } from './Components/producto-form/producto-form.component';
import { ProductoListComponent } from './Components/producto-list/producto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoFormComponent,
    ProductoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
