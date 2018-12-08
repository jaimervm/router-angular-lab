import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: Product[]=[
    new Product(0,'Product 000'),
    new Product(1,'Product 001'),
    new Product(2,'Product 002'),
    new Product(3,'Product 003'),
    new Product(4,'Product 004'),
    new Product(5,'Product 005'),
    new Product(6,'Product 006'),
    new Product(7,'Product 007'),
    new Product(8,'Product 008')
    
  ];

  product: Product = this.products[0];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
      this.product = this.products[(params.get('id'))];
    });
  }

}
