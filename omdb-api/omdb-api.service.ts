import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class OmdbApiService {
private errorMessage:any;
private omdbApiUrl:string="http://www.omdbapi.com/?t=star wars"
constructor(private _http:Http){
}
getMovie(searchMovie:string):Observable<any>{
    console.log('called');
    return this._http.get("http://www.omdbapi.com/?t=star+wars")
    .map((response:Response)=>response.json())
    .do(data=>console.log(data))
    .catch(this.handleError);
}
private handleError(response:Response):any{
}
}