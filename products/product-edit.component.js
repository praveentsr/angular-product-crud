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
var product_service_1 = require("./product.service");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var ProductEditComponent = (function () {
    function ProductEditComponent(productService, activatedRouter, router) {
        this.productService = productService;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.id = this.activatedRouter.snapshot.params['id'];
        this.getProduct(this.id);
    }
    ProductEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        this.productService.updateProduct(this.product)
            .subscribe(function () { return _this.router.navigate(['/products']); }, function (error) { return _this.errorMessage = error; });
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        this.productService.deleteProduct(this.id)
            .subscribe(function (message) { return _this.router.navigate(['/products']); }, function (error) { return _this.errorMessage = error; });
    };
    ProductEditComponent.prototype.cancel = function () {
        this.router.navigate(['/products']);
    };
    return ProductEditComponent;
}());
ProductEditComponent = __decorate([
    core_1.Component({
        selector: 'edit-product',
        templateUrl: 'app/products/product-edit.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.ActivatedRoute,
        router_1.Router])
], ProductEditComponent);
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map