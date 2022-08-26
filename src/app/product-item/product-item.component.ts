import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product={
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    quantity: 0
  };
  numbers: number[] = [];
  @Output() added = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 1; i <= 100; i++) {
      this.numbers.push(i)
    }
  }

}
