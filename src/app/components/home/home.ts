import { Component } from '@angular/core';
import { Products } from '../products/products';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [Products, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

}
