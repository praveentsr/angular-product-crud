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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var OmdbApiService = (function () {
    function OmdbApiService(_http) {
        this._http = _http;
        this.omdbApiUrl = "http://www.omdbapi.com/?t=star wars";
    }
    OmdbApiService.prototype.getMovie = function (searchMovie) {
        console.log('called');
        return this._http.get("http://www.omdbapi.com/?t=star+wars")
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    OmdbApiService.prototype.handleError = function (response) {
    };
    return OmdbApiService;
}());
OmdbApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OmdbApiService);
exports.OmdbApiService = OmdbApiService;
//# sourceMappingURL=omdb-api.service.js.map