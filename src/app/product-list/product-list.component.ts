import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductsService} from '../services/products.service';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList: Product[] = [];
  numbers: number[] = [];

  //quantity: number = 0;

  constructor(private productsService: ProductsService, private cartService: CartService) {
  }

  ngOnInit(): void {
    for (let i = 1; i <= 100; i++) {
      this.numbers.push(i)
    }
    this.productsService.getproducts().subscribe(data => {
      this.productsList = data;
    })
  }


  productAdded(product: Product) {
    //product.quantity=this.quantity
    alert("added to cart")
    this.cartService.addProducts(product)
    console.log("added from product list page"+product.name + product.quantity.toString())
  }

}
