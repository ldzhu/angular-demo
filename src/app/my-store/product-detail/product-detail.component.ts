import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, products} from '../product-list/products';
import {CartService} from '../cart/cart-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute, private $cart: CartService) { }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));
    this.product = products.find(p => p.productId === productId);
  }

  addToCart(product: Product) {
    this.$cart.addToCart(product);
  }
}
