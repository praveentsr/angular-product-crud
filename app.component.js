"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product.service");
var omdb_api_service_1 = require("./omdb-api/omdb-api.service");
var customer_service_1 = require("./customers/customer.service");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Prakash';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class='container'>  \n  <ul class='nav navbar-nav'>\n  <li><a [routerLink]=\"['/welcome']\">Welcome</a></li>\n  <li><a [routerLink]=\"['/employee']\">Employee</a></li>\n  <li><a [routerLink]=\"['/products']\">ProductList</a></li>\n  <li><a [routerLink]=\"['/omdbapi']\">Omdb Api</a></li>\n  <li><a [routerLink]=\"['/customers']\">Customers</a></li>\n  <li><a [routerLink]=\"['/templateform']\">Template Form</a></li>\n  <li><a [routerLink]=\"['/reactiveform']\">Reactive Form</a></li>\n  </ul>\n  </div>\n  <div class=\"container\">\n  <router-outlet></router-outlet>\n  </div>\n\n  ",
        providers: [product_service_1.ProductService, omdb_api_service_1.OmdbApiService, customer_service_1.CustomerService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map