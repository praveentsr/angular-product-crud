import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
@Injectable()
export class ProductDetailGuardService implements CanActivate{
constructor(private router: Router) {
}
canActivate(routerSnapShot:ActivatedRouteSnapshot):boolean{
let id:number;
id=+routerSnapShot.url[1].path;
if(isNaN(id) || id<1 ||id>3)
{
alert('invalid product id');
this.router.navigate(['/products']);
return false;
}
else
{
return true;
}
}
}