
import { Component } from "@angular/core";
import { OmdbApiService } from "./omdb-api.service";
@Component({
selector:'movie-info',
templateUrl:"./movie.component.html"
})
export class MovieComponent {
    searchMovie:string='star wars';
    errorMessage: any;
    movie:any;
constructor(private omdbApiService:OmdbApiService){
this.searchMovieFun();
}

searchMovieFun(){
this.omdbApiService.getMovie(this.searchMovie)
.subscribe((movie:any)=>this.movie=movie,
(error:any)=>this.errorMessage=error);
}

}