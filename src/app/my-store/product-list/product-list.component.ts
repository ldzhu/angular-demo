import {Component, OnInit} from '@angular/core';
import {Product, products} from "./products";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.products = products;
  }

  onShare() {
    alert('The product has been shared!');
  }

  onNotify() {
    alert('You will be notified when the product goes on sale');
  }
}
