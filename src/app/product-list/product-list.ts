import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService }
from '../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html'
})
export class ProductList {

  products:any[] = [];

  constructor(
    private service: ProductService
  ){}

  ngOnInit(){

    this.service.getProducts()
      .subscribe(data => {

        this.products = data as any[];
        console.log(this.products);

      });

  }
}