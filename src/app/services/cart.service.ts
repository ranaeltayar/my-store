import {Injectable} from '@angular/core';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList: Product[] = []
  productExists: boolean = false
  newQuantity: number[] = []
  sum:number =0;

  constructor() {
  }

  addProducts(product: Product) {
    console.log("added from service page" + product.name + product.quantity.toString())
    if (!this.productExists) {
      this.productList.push(product)
      console.log("added from service page if flag false" + product.name + product.quantity.toString())
    }
  }

  getFinalProducts(): Product[] {
    return this.productList
  }
}
