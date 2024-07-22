import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { InformationComponent } from './information/information.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductCardComponent, CommonModule, InformationComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abylu-store';
  isSidebarOpen = false;
  selectedCategory: string | null = null;

  products = [
    { category: 'Caedigans', name: 'Cardigan Rayas', image: '../../../../assets/images/cardigan-rayas.jpeg', new: true, price: 150.00,},
    { category: 'Chalecos',name: 'Chaleco', image: '../../../../assets/images/chaleco.jpeg', new: true, price: 120.00,},
    { category: 'Chompas', name: 'Chompa Offshoulder', image: '../../../../assets/images/chompa-offshoulder.jpeg', new: true, price: 100.00,},
    { category: 'Chompas', name: 'Chompa Corazon', image:'../../../../assets/images/chompa-corazon.jpeg', new: true, price: 90.00,},
    { category: 'Abrigos', name: 'Abrigo Oversize Acubi', image: '../../../../assets/images/abrigos_1A.jpg', new: true, price: 120.00,},
    { category: 'Accesorios',name: 'Anillo Estrella', image: '../../../../assets/images/anillos_1A.jpg', new: true, price: 30.00,},
    { category: 'Accesorios',name: 'Arete Pride', image: '../../../../assets/images/aretes_1A.jpg', new: true, price: 20.00,},
    { category: 'Accesorios',name: 'Cartera Vintage', image: '../../../../assets/images/cartera_1A.jpg', new: true, price: 100.00,},
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebarIfOpen() {
    if (this.isSidebarOpen) {
      this.isSidebarOpen = false;
    }
  }

  setCategory(category: string) {
    this.selectedCategory = category;
    this.closeSidebarIfOpen();
  }

  get filteredProducts() {
    return this.selectedCategory
      ? this.products.filter(product => product.category === this.selectedCategory)
      : this.products;
  }
}

