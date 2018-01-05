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
var product_1 = require("./product");
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var router_1 = require("@angular/router");
var ProductCreateComponent = (function () {
    function ProductCreateComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.selectedCountry = { id: 1, name: "Ind" };
        this.countries = [
            { id: 1, name: "Ind" },
            { id: 2, name: "US" },
            { id: 3, name: "UK" }
        ];
    }
    ProductCreateComponent.prototype.createProduct = function (id, name, price, mfg, rating, imageUrl, imageHeight, imageWidth, country) {
        var _this = this;
        this.product = new product_1.Product();
        this.product.id = id;
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
    ProductCreateComponent.prototype.onSaveComplete = function () {
        this.router.navigate(['/products']);
    };
    return ProductCreateComponent;
}());
ProductCreateComponent = __decorate([
    core_1.Component({
        selector: 'product-create',
        templateUrl: 'app/products/product-create.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.Router])
], ProductCreateComponent);
exports.ProductCreateComponent = ProductCreateComponent;
//# sourceMappingURL=product-create.component.js.map