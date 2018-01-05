import { Component, OnInit } from '@angular/core';
import { Customer } from "../customers/customer";

@Component({
  selector: 'hex-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  customer:Customer;
  constructor(){
    this.customer = { id: 1, 
      firstName: "prakash", 
      lastName: "V", 
      address: "chennai" };
  }
  submitted = false;
  save() {
    this.submitted=true;
  }

  ngOnInit() {
  }

}
