"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var omdb_api_service_1 = require("./omdb-api.service");
var MovieComponent = (function () {
    function MovieComponent(omdbApiService) {
        this.omdbApiService = omdbApiService;
        this.searchMovie = 'star wars';
        this.searchMovieFun();
    }
    MovieComponent.prototype.searchMovieFun = function () {
        var _this = this;
        this.omdbApiService.getMovie(this.searchMovie)
            .subscribe(function (movie) { return _this.movie = movie; }, function (error) { return _this.errorMessage = error; });
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    core_1.Component({
        selector: 'movie-info',
        templateUrl: "app/omdb-api/movie.component.html"
    }),
    __metadata("design:paramtypes", [omdb_api_service_1.OmdbApiService])
], MovieComponent);
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map