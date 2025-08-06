import { Component } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-products',
  imports: [FontAwesomeModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products: Product[] = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    description: `This is a great product that you will love!`,
    price: parseFloat((Math.random() * 100 + 10).toFixed(2)),
    imageUrl: `https://picsum.photos/id/${i + 1}/5000/3333`
  }));
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
