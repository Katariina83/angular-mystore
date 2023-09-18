import { Component } from '@angular/core';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  faMobile = faMobile;
  faShoppingCart = faShoppingCart;

  constructor(
    private cartService: CartService) {}
}
