import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getproducts()
  }

  getproducts() {
    return this.httpClient.get<Product[]>("assets/data.json")
  }

  getproductsById(id: number): any {
    this.httpClient.get<Product[]>("assets/data.json").subscribe(data => {
      this.products = data;
    })
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        console.log("after fetching"+this.products[i].id)
        return this.products[i]
      }
    }
    console.log("trueee")
  }
}
