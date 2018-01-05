import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from "./product";
@Component({
    templateUrl:'./product-detail.component.html'
})
export class ProductDetailComponent{
id:number;
name:string;
price:number;
mfg:Date;
imageUrl:string;
constructor(private activatedRoute:ActivatedRoute,private router:Router){
this.id=activatedRoute.snapshot.params['id'];
this.name=activatedRoute.snapshot.queryParams['name'];
this.price=activatedRoute.snapshot.queryParams['price'];
this.mfg=activatedRoute.snapshot.queryParams['mfg'];
this.imageUrl=activatedRoute.snapshot.queryParams['imageUrl'];
}
onBack():void{
this.router.navigate(['/products']);
}
}