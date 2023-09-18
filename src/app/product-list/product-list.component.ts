import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
// import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products = products;

  constructor(
    private route: ActivatedRoute,
    public cartService: CartService,
    // public notificationService: NotificationService
    ) { }

  ngOnInit(): void {
  }

  addToCart(products: Product) {
    this.cartService.addToCart(products);
    // window.alert(`Added ${products.name} to the cart.`);
    // this.notificationService.addNotification({message: `${products.name} is in the shopping cart`,    //Window-alert using Notification Service.
    // });
  }

  // notifyUser() {
  //   window.alert('You will be informed when the product is on Sale!')
  // }

}