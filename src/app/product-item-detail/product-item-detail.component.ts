import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductsService} from "../services/products.service";
import {Product} from "../models/product";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  constructor(private activeRouter: ActivatedRoute, private productService: ProductsService, private cartService: CartService) {
  }

  id: number = 0;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    quantity: 0
  };
  numbers: number[] = [];
  productsList: Product[] = [];

  //quantity: number = 0;

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params: Params) => {
      this.id += params["id"];
      console.log("params" + params["id"])
      console.log("hmmmm" + this.id)
    });
    this.getProductDetails(this.id)
    for (let i = 1; i <= 100; i++) {
      this.numbers.push(i)
    }


  }

  private getProductDetails(id: number) {

    this.productService.getproducts().subscribe(data => {
      this.productsList = data;
      console.log("length" + this.productsList.length)
      for (let i = 0; i < this.productsList.length; i++) {
        if (this.productsList[i].id == id) {
          console.log("after fetching" + this.productsList[i].id)
          this.product = this.productsList[i];
        }
      }
    })
  }

  productAdded(product: Product) {
    //product.quantity=this.quantity
    alert("added to cart")
    this.cartService.addProducts(product)
    console.log("added from detail page"+product.name + product.quantity.toString())
  }

}
