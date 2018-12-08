import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  products: ProductService[];
  URL_API = "http://localhost:3000/apilab/product";

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.URL_API);
  }
}
