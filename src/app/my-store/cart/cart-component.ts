import {Component, OnInit} from "@angular/core";
import {CartService} from "./cart-service";
import {Product} from "../product-list/products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart-component.html',
  styleUrls: ['./cart-component.scss'],
})
export class CartComponent implements OnInit {
  items: Product[] = [];

  constructor(private $cart: CartService)  {

  }

  ngOnInit() {
    this.items = this.$cart.getItems();
  }
}
