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
var CountriesListComponent = (function () {
    function CountriesListComponent() {
        this.selectedCountry = { id: 1, name: "Ind" };
        this.countries = [
            { id: 1, name: "Ind" },
            { id: 2, name: "US" },
            { id: 3, name: "UK" }
        ];
    }
    CountriesListComponent.prototype.ngOnInit = function () {
    };
    return CountriesListComponent;
}());
CountriesListComponent = __decorate([
    core_1.Component({
        selector: 'hex-countries-list',
        templateUrl: './countries-list.component.html',
        styleUrls: ['./countries-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], CountriesListComponent);
exports.CountriesListComponent = CountriesListComponent;
//# sourceMappingURL=countries-list.component.js.map