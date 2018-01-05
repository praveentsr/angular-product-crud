import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
welcomeMessage:string="Welcome to Site";
  constructor() { }

  ngOnInit() {
  }

}
