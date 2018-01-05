import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
      {
        "id":1,
        "name":"pen",
        "price":35,
        "imageUrl":"assets/pen.jpg",
        "imageHeight":20,
        "imageWidth":20,
        "mfg":"27-april-2016",
        "rating":3.2522,
        "country":1
    },
    {
        "id":2,
        "name":"pencil",
        "price":5,
        "imageUrl":"assets/pencil.jpg",
        "imageHeight":20,
        "imageWidth":20,
        "mfg":"27-april-2015",
        "rating":4.2533,
        "country":1
    },
    {
        "id":3,
        "name":"eraser",
        "price":5,
        "imageUrl":"assets/eraser.jpg",
        "imageHeight":20,
        "imageWidth":20,
        "mfg":"27-april-2017",
        "rating":4.257,
        "country":1
    }
    ];

    let customers = [
      {
        "id":1,
        "name":"prakash",
        "address":"chennai"
    },
    {
        "id":2,
        "name":"anand",
        "address":"bangalore"
    },
    {
        "id":3,
        "name":"santosh",
        "address":"hyderabad"
    }
    ];
    let countries=[
{id:1,name:"Ind"},
{id:2,name:"US"},
{id:3,name:"UK"}
    ];
    let categories=[
        {"id":1,"category":"stationery"},
        {"id":2,"category":"electronics"},
        {"id":3,"category":"pharmacy"}
    ];
    return {products,customers,countries,categories};
  
  
  }
}
