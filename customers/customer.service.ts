import { Customer } from "./customer";
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions,Headers } 
from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class CustomerService {
    private customersUrl:string='api/customers';
    constructor(private http:Http){
    }
  getCustomers(): Observable<Customer[]> {
    return this.http.get(this.customersUrl)
    .map(this.extractData)
    .do(data=>console.log(data))
    .catch(this.handleError);  
  }
    private extractData(res: Response) {
    let body = res.json();
    return body.data || { };  
  }
private handleError (error: Response | any) { 
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
}