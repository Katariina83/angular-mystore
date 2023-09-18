import { Injectable } from "@angular/core";
import { Product, products } from "./products";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];
  total: number = 0;      //Keep track of the total price of the items in the cart.

constructor(
  private http: HttpClient ) {}

  addToCart(product: Product) {
    this.items.push(product);
    this.total += product.price;    //Price is the property that holds the product's price.
    window.alert(`Added ${product.name} to the cart.`);
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