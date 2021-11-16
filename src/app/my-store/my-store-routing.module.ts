import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyStoreComponent} from './my-store.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CartComponent} from './cart/cart-component';
import {ShippingComponent} from './shipping/shipping.component';


const routes: Routes = [
  {
    path: '',
    component: MyStoreComponent,
    children: [
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: 'products', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailComponent},
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStoreRoutingModule {
}
