import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abylu-store';
  products = [
    { name: 'Cardigan Rayas', image: 'cardigan-rayas.png', new: true },
    { name: 'Chaleco', image: 'chaleco.png', new: true },
    { name: 'Chompa Offshoulder', image: 'chompa-offshoulder.png', new: true },
    { name: 'Chompa Corazon', image: 'chompa-corazon.png', new: true },
    { name: 'Falda Tableada Vane', image: 'falda-tableada-vane.png', new: true }
  ];
}