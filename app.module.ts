import { NgModule }      from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee.component';
import { ProductListComponent } from "./products/product-list.component";
import { HttpModule } from '@angular/http';
import { MovieComponent } from "./omdb-api/movie.component";
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProductDetailComponent } from "./products/product-detail.component";
import { ProductDetailGuardService } from "./products/product-detail-guard.service";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./products/in-memory-data.service";
import { ProductCreateComponent } from "./products/product-create.component";
import { ProductEditComponent } from "./products/product-edit.component";
import { CustomerListComponent } from "./customers/customer-list.component";
import { TestComponent } from './test/test.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { ProductCreateValidationsComponent } from './products/product-create-validations/product-create-validations.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { OrderComponent } from './order/order.component';
import { ProductListJsonfileComponent } from './product-list-jsonfile/product-list-jsonfile.component';
import { HomeComponent } from './home/home.component';
import { FormsModule }      from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,ReactiveFormsModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService),
  RouterModule.forRoot([
    {path:'welcome',component:WelcomeComponent},
    {path:'customers',component:CustomerListComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'editproduct/:id',component:ProductEditComponent},
    {path:'newproduct',component:ProductCreateComponent},
    {path:'newproductvalidations',component:ProductCreateValidationsComponent},
    {path:'products',component:ProductListComponent},
    {path:'product/:id',canActivate:[ProductDetailGuardService],//apply guard
    component:ProductDetailComponent}, 
    {path:'productsfromjsonfile',component:ProductListJsonfileComponent},
    {path:'templateform',component:TemplateFormComponent},
    {path:'reactiveform',component:ReactiveFormComponent},
    {path:'countries',component:CountriesListComponent}, 
    {path:'omdbapi',component:MovieComponent},
    {path:'',component:WelcomeComponent,pathMatch:'full'},
    {path:'**',component:EmployeeComponent,pathMatch:'full'}
  ]) ],
  declarations: [ AppComponent,
  EmployeeComponent,
  ProductListComponent,
  MovieComponent,
  ProductFilterPipe,
  WelcomeComponent,
  ProductDetailComponent,
  ProductCreateComponent,
  ProductCreateValidationsComponent,
  ProductEditComponent,
  CustomerListComponent,
  TestComponent,
  CountriesListComponent,
  ProductCreateValidationsComponent,
  TemplateFormComponent,
  ReactiveFormComponent,
  OrderComponent,
  ProductListJsonfileComponent,
  HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:[ProductDetailGuardService]//register
})
export class AppModule { }
