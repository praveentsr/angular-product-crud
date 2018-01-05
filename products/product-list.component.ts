import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
@Component({
selector:'product-list',
templateUrl:'./product-list.component.html'
})
export class ProductListComponent implements OnInit{
listFilter:string='pen';
showImage:boolean=false;
toggleImages():void{
  this.showImage=!this.showImage; 
}
errorMessage:any;
products:Product[]; 
constructor(private productServie:ProductService,
private router:Router){
}
getProducts(){
this.productServie
.getProducts()
.subscribe(products => 
this.products = products,
error =>  this.errorMessage = <any>error);
}
ngOnInit(){
this.getProducts();
}
createProduct():void{
this.
router.
navigate(['/newproduct']);
}

}


