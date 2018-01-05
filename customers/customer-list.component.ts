import { CustomerService } from "./customer.service";
import { Component } from "@angular/core";
import { Customer } from "./customer";
@Component({
    selector:'customer-list',
    templateUrl:'./customer-list.component.html'
})
export class CustomerListComponent{
    errorMessage: any;
    customers: Customer[];
    constructor(private customerService:CustomerService){
        this.customerService.getCustomers()
        .subscribe(customers=>this.customers=customers,
        error=>this.errorMessage=error
        );
    }
    
}