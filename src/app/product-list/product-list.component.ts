import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent  {
  products = products;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  addToCart(Product: Product) {
    this.cartService.addToCart(Product);
    window.alert('Woohoo! Your new phone has been added to the cart!');
  }

    constructor(
      private route: ActivatedRoute,
      private cartService: CartService
    ) { }

  notifyUser() {
    window.alert('You will be informed when the product is on Sale!')
  }
  }