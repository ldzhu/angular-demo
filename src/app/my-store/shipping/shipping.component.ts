import { Component, OnInit } from '@angular/core';
import {CartService, ShippingPrice} from "../cart/cart-service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingItems: Observable<ShippingPrice[]> | undefined;

  constructor(private $cart: CartService) { }

  ngOnInit(): void {
    this.shippingItems = this.$cart.getShippingPrices();
  }

}
