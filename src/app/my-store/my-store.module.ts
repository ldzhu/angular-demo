import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MyStoreRoutingModule} from './my-store-routing.module';
import {MyStoreComponent} from './my-store.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CartComponent} from './cart/cart-component';
import {ShippingComponent} from './shipping/shipping.component';
import {CartService} from './cart/cart-service';


@NgModule({
  declarations: [
    MyStoreComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyStoreRoutingModule
  ],
  providers: [
    CartService
  ]
})
export class MyStoreModule {
}
