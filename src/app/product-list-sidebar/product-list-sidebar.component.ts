import { Component, OnInit } from '@angular/core';
import { ProductService} from '../service/product.service';

@Component({
  selector: 'app-product-list-sidebar',
  templateUrl: './product-list-sidebar.component.html',
  styleUrls: ['./product-list-sidebar.component.css']
})

export class ProductListSidebarComponent implements OnInit {

  products = null; 
  constructor(private productService: ProductService) { } 

  ngOnInit() { 
    this.productService.getProducts()
    .subscribe( result => this.products = result);
   }
}
