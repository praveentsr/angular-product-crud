import { Product } from "../products/product";
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions,Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class ProductJsonFileService {
private productsUrl:string='assets/productsfile.json';
constructor(private _http:Http){
}
getProducts(): Observable<Product[]> {  
return this._http.get(this.productsUrl)
.map((response: Response)=> <Product[]>response.json())
.do(data => console.log('All: ' + JSON.stringify(data)))
.catch(this.handleError);
}
private handleError(error:Response):any {
}

}

