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
var product_1 = require("../product");
var product_service_1 = require("../product.service");
var router_1 = require("@angular/router");
var ProductCreateValidationsComponent = (function () {
    function ProductCreateValidationsComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.selectedCountry = { id: 1, name: "Ind" };
        this.countries = [
            { id: 1, name: "Ind" },
            { id: 2, name: "US" },
            { id: 3, name: "UK" }
        ];
    }
    ProductCreateValidationsComponent.prototype.createProduct = function (name, price, mfg, rating, imageUrl, imageHeight, imageWidth, country) {
        var _this = this;
        this.product = new product_1.Product();
        this.product.id = 100;
        this.product.name = name;
        this.product.price = price;
        this.product.mfg = mfg;
        this.product.rating = rating;
        this.product.imageUrl = imageUrl;
        this.product.imageHeight = imageHeight;
        this.product.imageWidth = imageWidth;
        this.product.country = country;
        this.productService.create(this.product)
            .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
    };
    ProductCreateValidationsComponent.prototype.onSaveComplete = function () {
        this.router.navigate(['/products']);
    };
    ProductCreateValidationsComponent.prototype.ngOnInit = function () {
    };
    return ProductCreateValidationsComponent;
}());
ProductCreateValidationsComponent = __decorate([
    core_1.Component({
        selector: 'hex-product-create-validations',
        templateUrl: './product-create-validations.component.html',
        styleUrls: ['./product-create-validations.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.Router])
], ProductCreateValidationsComponent);
exports.ProductCreateValidationsComponent = ProductCreateValidationsComponent;
//# sourceMappingURL=product-create-validations.component.js.map