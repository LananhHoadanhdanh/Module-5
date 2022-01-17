import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl('')
  });

  listProduct: Product[] = [
    {
      id: "1",
      name: "IP12",
      price: "2000"
    },
    {
      id: "2",
      name: "GALAXY",
      price: "1800"
    },
    {
      id: "3",
      name: "NOKIA",
      price: "1500"
    },
  ];

  addProduct(){
    console.log(this.product.value);
    this.listProduct.push(this.product.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
