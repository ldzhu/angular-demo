import {Injectable} from "@angular/core";
import {Product} from "../product-list/products";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface ShippingPrice {
  type: string,
  price: number
}


@Injectable()
export class CartService {
  private items: Product[] = [];

  constructor(private $http: HttpClient) {
  }

  public getItems(): Product[] {
    return this.items;
  }

  public addToCart(item: Product): void {
    this.items.push(item);
  }

  public clear(): Product[] {
    this.items = [];
    return this.items;
  }

  public getShippingPrices(): Observable<ShippingPrice[]> {
    return this.$http.get<ShippingPrice[]>('/assets/shipping.json');
  }

}
