import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService }
from '../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products:any[] = [];

  constructor(
    private service: ProductService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(){

    this.service.getProducts()
      .subscribe(data => {

        this.products = data as any[];
        this.cdr.detectChanges();
        console.log(this.products);

      });

  }
}