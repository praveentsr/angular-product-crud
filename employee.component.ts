
import {Component} from '@angular/core';
@Component({
    selector:'employee-info',
    template:`<h2>Employee Info</h2>
    <p>Id:{{id}}</p>
    <p>Name:{{name}}</p>
    <p>Emai:{{email}}</p>
    `
})
export class EmployeeComponent{
id:number=36937;
name:string="Prakash Venigandla";
salary:number=5000;
email:string="PrakashV@hexaware.com";
}