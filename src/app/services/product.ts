import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api =
    'http://localhost:8081/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.api);
  }
}