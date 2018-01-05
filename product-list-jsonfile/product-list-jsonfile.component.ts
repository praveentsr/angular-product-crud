import { Component, OnInit } from '@angular/core';
import { ProductJsonFileService } from "./productjsonfile.service";
import { Product } from "../products/product";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'hex-product-list-jsonfile',
  templateUrl: './product-list-jsonfile.component.html',
  styleUrls: ['./product-list-jsonfile.component.css']
})
export class ProductListJsonfileComponent implements OnInit {
  errorMessage: any;
  products:Product[];
constructor(private productJsonFileService:ProductJsonFileService) { 
this.productJsonFileService.getProducts()
.subscribe((products)=>this.products=products,
(error)=>this.errorMessage=error)
  }
  ngOnInit() {
  }

}
