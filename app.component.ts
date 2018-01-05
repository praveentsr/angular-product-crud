import { Component } from '@angular/core';
import { ProductService } from "./products/product.service";
import { OmdbApiService } from "./omdb-api/omdb-api.service";
import { CustomerService } from "./customers/customer.service";
import { ProductJsonFileService } from "./product-list-jsonfile/productjsonfile.service";

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>  
  <ul class='nav navbar-nav'>
  <li><a [routerLink]="['/welcome']">Welcome</a></li>
  <li><a [routerLink]="['/employee']">Employee</a></li>
  <li><a [routerLink]="['/products']">ProductList</a></li>
  <li><a [routerLink]="['/customers']">Customers</a></li>
  </ul>
  </div>
  <div class="container">
  <router-outlet></router-outlet>
  </div>

  `,
  providers:[ProductService,OmdbApiService,CustomerService,ProductJsonFileService]
})
export class AppComponent 
{ 
  name = 'Prakash'; 
}
