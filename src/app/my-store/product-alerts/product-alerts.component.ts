import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product-list/products";

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onNofity() {
    this.notify.emit();
  }
}
