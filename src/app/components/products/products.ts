import { Component } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faTag } from '@fortawesome/free-solid-svg-icons';

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
  products: Product[] = [
    // make the img path fixed and this path is imgs\SaturoGojo.jpeg and make 20 products with different names and prices and descriptions
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 29.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 39.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 49.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 4, name: 'Product 4', description: 'Description for Product 4', price: 59.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 5, name: 'Product 5', description: 'Description for Product 5', price: 69.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 6, name: 'Product 6', description: 'Description for Product 6', price: 79.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 7, name: 'Product 7', description: 'Description for Product 7', price: 89.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 8, name: 'Product 8', description: 'Description for Product 8', price: 99.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 9, name: 'Product 9', description: 'Description for Product 9', price: 109.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 10, name: 'Product 10', description: 'Description for Product 10', price: 119.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 11, name: 'Product 11', description: 'Description for Product 11', price: 129.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 12, name: 'Product 12', description: 'Description for Product 12', price: 139.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 13, name: 'Product 13', description: 'Description for Product 13', price: 149.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 14, name: 'Product 14', description: 'Description for Product 14', price: 159.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 15, name: 'Product 15', description: 'Description for Product 15', price: 169.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 16, name: 'Product 16', description: 'Description for Product 16', price: 179.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 17, name: 'Product 17', description: 'Description for Product 17', price: 189.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 18, name: 'Product 18', description: 'Description for Product 18', price: 199.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 19, name: 'Product 19', description: 'Description for Product 19', price: 209.99, imageUrl: 'imgs/SaturoGojo.jpeg' },
    { id: 20, name: 'Product 20', description: 'Description for Product 20', price: 219.99, imageUrl: 'imgs/SaturoGojo.jpeg' }
  ];
  faShoppingCart = faShoppingCart;
  faTag = faTag;
}
