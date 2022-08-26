import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from "../services/confirmation.service";
import {Router} from "@angular/router";
import {Product} from "../models/product";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  creditCardNumber: number = 0;
  productList: Product[] = []
  totalAmount: number = 0;
  numbers: number[] = [];

  constructor(private confirmationService: ConfirmationService, private router: Router, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productList = this.cartService.getFinalProducts()
    console.log(this.productList[0])
    console.log(this.productList[1])
    this.calculateTotalAmount()
    for (let i = 1; i <= 100; i++) {
      this.numbers.push(i)
    }
  }

  onSubmit(fullName: string) {
    this.confirmationService.setFullName(fullName);
    console.log(this.confirmationService.getFullName())
    this.router.navigate(['/confirmation']);

  }

  calculateTotalAmount() {
    for (let i = 0; i < this.productList.length; i++) {
      this.totalAmount += (this.productList[i].price * this.productList[i].quantity)
    }
    this.confirmationService.setTotalAmount(this.totalAmount)
  }

  updateTotalAmount() {
    this.totalAmount = 0
    for (let i = 0; i < this.productList.length; i++) {
      /*  if (this.productList[i].quantity == 0)
          this.removeProduct(this.productList[i]);*/
      this.totalAmount += (this.productList[i].price * this.productList[i].quantity)
    }
    this.confirmationService.setTotalAmount(this.totalAmount)

  }

  removeProduct(product: Product) {
    this.productList = this.productList.filter(obj => obj !== product);
    this.updateTotalAmount()
    alert("product will be removed from cart ")
  }
}
