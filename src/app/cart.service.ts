import { Injectable } from "@angular/core";
import { NotificationService } from './notification.service';
import { Product, products } from "./products";
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];
  total: number = 0;      //Keep track of the total price of the items in the cart.

constructor(
  private http: HttpClient,
  public notificationService: NotificationService,
  private snackBar: MatSnackBar
  ) {}

  addToCart(product: Product) {
    this.items.push(product);
    this.total += product.price;    //Price is the property that holds the product's price.
    this.snackBar.open(`Added ${product.name} to the cart.`, 'Close', {
      duration: 2000, // Duration in milliseconds (adjust as needed)
    });
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.total;
  }

  // getShippingPrices() {
  //   return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  // }

}