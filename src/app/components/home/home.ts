import { Component } from '@angular/core';
import { Products } from '../products/products';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faShippingFast, faTags, faShieldAlt, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [Products, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  faShoppingCart = faShoppingCart;
  faShippingFast = faShippingFast;
  faTags = faTags;
  faShieldAlt = faShieldAlt;
  faStar = faStar;
}
