import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [

  {
    path: '', component: LayoutComponent, 
    children: 
    [
      { path: '', component: ProductListComponent } //Only Homepage is showing the Top-bar and the main Footer, because its the only child of LayoutComponent
    ],
  },

  { path: '', component: ProductListComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  //{ path: 'shipping', component: ShippingComponent }
]

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
