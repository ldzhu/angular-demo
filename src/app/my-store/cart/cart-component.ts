import {Component, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {CartService} from "./cart-service";
import {Product} from "../product-list/products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart-component.html',
  styleUrls: ['./cart-component.scss'],
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  checkoutForm = this.formBuilder.group({name: '', address: ''});

  constructor(private $cart: CartService, private formBuilder: FormBuilder)  {

  }

  ngOnInit() {
    this.items = this.$cart.getItems();
  }

  onSubmit(): void {
    this.$cart.clear();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
