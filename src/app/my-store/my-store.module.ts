import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyStoreRoutingModule} from "./my-store-routing.module";
import {MyStoreComponent} from "./my-store.component";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductAlertsComponent} from "./product-alerts/product-alerts.component";
import {ProductDetailComponent} from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    MyStoreComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MyStoreRoutingModule
  ]
})
export class MyStoreModule { }
