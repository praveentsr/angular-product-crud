import { Product } from "./product";
import { Component } from "@angular/core";
import { ProductService } from "./product.service";
import { Router } from "@angular/router";
import { Country } from "../country";
@Component({
selector:'product-create',
templateUrl:'./product-create.component.html'
})
export class ProductCreateComponent {
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
createProduct(id:number,name: string,price:number,mfg:Date,rating:number,
imageUrl:string,imageHeight:number,imageWidth:number,country:number):void {
this.product=new Product();
this.product.id=id;
this.product.name=name;
this.product.price=price;
this.product.mfg=mfg;
this.product.rating=rating;
this.product.imageUrl=imageUrl;
this.product.imageHeight=imageHeight;
this.product.imageWidth=imageWidth;
this.product.country=country;
this.productService.create
(this.product)
.subscribe(
() => this.onSaveComplete(),
(error: any) => this.errorMessage = <any>error
);
}
onSaveComplete(): void {       
this.router.navigate(['/products']);
}
}


