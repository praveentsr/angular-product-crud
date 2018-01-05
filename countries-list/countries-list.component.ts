import { Component, OnInit } from '@angular/core';
import { Country } from "../country";

@Component({
  selector: 'hex-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
selectedCountry:Country={id:1,name:"Ind"};
countries:Country[]=[
  {id:1,name:"Ind"},
  {id:2,name:"US"},
  {id:3,name:"UK"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
