import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  productId!: number | undefined;
  product: Product | undefined; // Use the Product interface to define the type

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    // Retrieve the product ID from the route parameter
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.productId = +idParam; // Convert the ID to a number
        // Find the product with the matching ID
        this.product = products.find((p) => p.id === this.productId);
      }
    });
  }

  goBack() {this.router.navigate(['/']);}

  addToCart(products: Product) {
    this.cartService.addToCart(products);
    window.alert('Woohoo! Your new phone has been added to the cart!');
  }
  
}