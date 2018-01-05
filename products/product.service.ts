import { Product } from "./product";
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions,Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class ProductService {
private productsUrl:string='api/products';
constructor(private _http:Http){
}
getProducts(): Observable<Product[]> {
return this._http.get(this.productsUrl)
.map(this.extractData)
.do((data)=>console.log('data:'+JSON.stringify(data)))
.catch(this.handleError);  
}
private extractData(res: Response) {
let body = res.json();
return body.data || { };  
}
private handleError (error: Response | any):any { 
let errMsg: string;
if (error instanceof Response) {
const body = error.json() || '';
const err = body.error || JSON.stringify(body);
errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
} else {
errMsg = error.message ? error.message : error.toString();
}
console.error(errMsg);
return Observable.throw(errMsg);
}
create(product:Product): Observable<Product> {
let headers=new Headers({ 'Content-Type': 'application/json' });
let options=new RequestOptions({ headers:headers });
return this._http.post(this.productsUrl,product,options)
.map(this.extractData)
.catch(this.handleError);
}
getProduct(id: number): Observable<Product> 
{ const url = `${this.productsUrl}/${id}`;  
return this._http.get(url) .map(this.extractData); 
}
updateProduct(product: Product): Observable<Product> { 
let headers = new Headers({ 'Content-Type': 'application/json' });  
let options = new RequestOptions({ headers: headers });
const url = `${this.productsUrl}/${product.id}`;  
return this._http.put(url, product, options) 
.map(() => product);
}
deleteProduct(id: number): Observable<Response> 
{ 
let headers = new Headers({ 'Content-Type': 'application/json' });  
let options = new RequestOptions({ headers: headers });
const url = `${this.productsUrl}/${id}`;  
return this._http.delete(url, options);
}

}
