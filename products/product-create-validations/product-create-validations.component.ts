import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { Country } from "../../country";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";

@Component({
  selector: 'hex-product-create-validations',
  templateUrl: './product-create-validations.component.html',
  styleUrls: ['./product-create-validations.component.css']
})
export class ProductCreateValidationsComponent implements OnInit {
errorMessage: any;
    product:Product;
    selectedCountry:Country={id:1,name:"Ind"};
    countries:Country[]=[
        {id:1,name:"Ind"},
        {id:2,name:"US"},
        {id:3,name:"UK"}
    ];
    constructor(private productService:ProductService,
    private router:Router){
    }
    
createProduct(name: string,price:number,mfg:Date,rating:number,
imageUrl:string,imageHeight:number,imageWidth:number,country:number):void {
    this.product=new Product();
    this.product.id=100;
    this.product.name=name;
    this.product.price=price;
    this.product.mfg=mfg;
    this.product.rating=rating;
    this.product.imageUrl=imageUrl;
    this.product.imageHeight=imageHeight;
    this.product.imageWidth=imageWidth;
    this.product.country=country;
    this.productService.create(this.product)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
                       
  }
  onSaveComplete(): void {       
        this.router.navigate(['/products']);
    }
  ngOnInit() {
  }

}
