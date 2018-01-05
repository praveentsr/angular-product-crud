"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee.component");
var product_list_component_1 = require("./products/product-list.component");
var http_1 = require("@angular/http");
var movie_component_1 = require("./omdb-api/movie.component");
var product_filter_pipe_1 = require("./products/product-filter.pipe");
var router_1 = require("@angular/router");
var welcome_component_1 = require("./welcome/welcome.component");
var product_detail_component_1 = require("./products/product-detail.component");
var product_detail_guard_service_1 = require("./products/product-detail-guard.service");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./products/in-memory-data.service");
var product_create_component_1 = require("./products/product-create.component");
var product_edit_component_1 = require("./products/product-edit.component");
var customer_list_component_1 = require("./customers/customer-list.component");
var test_component_1 = require("./test/test.component");
var countries_list_component_1 = require("./countries-list/countries-list.component");
var product_create_validations_component_1 = require("./products/product-create-validations/product-create-validations.component");
var template_form_component_1 = require("./template-form/template-form.component");
var reactive_form_component_1 = require("./reactive-form/reactive-form.component");
var order_component_1 = require("./order/order.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, forms_2.ReactiveFormsModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'customers', component: customer_list_component_1.CustomerListComponent },
                { path: 'employee', component: employee_component_1.EmployeeComponent },
                { path: 'editproduct/:id', component: product_edit_component_1.ProductEditComponent },
                { path: 'newproduct', component: product_create_component_1.ProductCreateComponent },
                { path: 'newproductvalidations', component: product_create_validations_component_1.ProductCreateValidationsComponent },
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'product/:id', canActivate: [product_detail_guard_service_1.ProductDetailGuardService],
                    component: product_detail_component_1.ProductDetailComponent },
                { path: 'templateform', component: template_form_component_1.TemplateFormComponent },
                { path: 'reactiveform', component: reactive_form_component_1.ReactiveFormComponent },
                { path: 'countries', component: countries_list_component_1.CountriesListComponent },
                { path: 'omdbapi', component: movie_component_1.MovieComponent },
                { path: '', component: welcome_component_1.WelcomeComponent, pathMatch: 'full' },
                { path: '**', component: welcome_component_1.WelcomeComponent, pathMatch: 'full' }
            ])],
        declarations: [app_component_1.AppComponent,
            employee_component_1.EmployeeComponent,
            product_list_component_1.ProductListComponent,
            movie_component_1.MovieComponent,
            product_filter_pipe_1.ProductFilterPipe,
            welcome_component_1.WelcomeComponent,
            product_detail_component_1.ProductDetailComponent,
            product_create_component_1.ProductCreateComponent,
            product_create_validations_component_1.ProductCreateValidationsComponent,
            product_edit_component_1.ProductEditComponent,
            customer_list_component_1.CustomerListComponent,
            test_component_1.TestComponent,
            countries_list_component_1.CountriesListComponent,
            product_create_validations_component_1.ProductCreateValidationsComponent,
            template_form_component_1.TemplateFormComponent,
            reactive_form_component_1.ReactiveFormComponent,
            order_component_1.OrderComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [product_detail_guard_service_1.ProductDetailGuardService] //register
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map