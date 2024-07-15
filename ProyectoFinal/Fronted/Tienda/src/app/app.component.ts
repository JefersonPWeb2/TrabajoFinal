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
    { name: 'Cardigan Rayas', image: 'https://home.ripley.com.pe/Attachment/WOP_5/2058333337216/2058333337216_2.jpg', new: true, price: 150.00 },
    { name: 'Chaleco', image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/124018906_01/w=1500,h=1500,fit=pad', new: true, price: 120.00 },
    { name: 'Chompa Offshoulder', image: 'https://hmperu.vtexassets.com/arquivos/ids/3816508-483-725?v=638274381009230000&width=483&height=725&aspect=true', new: true, price: 100.00 },
    { name: 'Chompa Corazon', image: 'https://http2.mlstatic.com/D_NQ_NP_643414-MPE70200834395_062023-O.webp', new: true, price: 90.00 },
    { name: 'Falda Tableada Vane', image: 'https://http2.mlstatic.com/D_NQ_NP_733118-MPE71242138189_082023-O.webp', new: true, price: 80.00 }
  ];
}