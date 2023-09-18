import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { faMobile, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  items: Product[] = [];
  total: number = 0;
  products = this.cartService.getItems();
  faMobile = faMobile;
  faTrash = faTrash;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService) { 
      this.items = this.cartService.getItems();
      this.total = this.cartService.getTotal();
      }

  clearCart() {
    this.items = [];
    return this.items;
  }

  goBack() {this.router.navigate(['/']);}

  removeFromCart(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) 
    {
      this.items.splice(index, 1);    // Remove the item from the cartItems array
      this.total -= item.price;     // Deduct the item's price from the total
    }
  }

  // getShippingPrices() {
  //   return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  // }


}
