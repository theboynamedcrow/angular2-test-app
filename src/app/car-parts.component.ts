import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {

  carParts = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5,
    "price": 4.99
  },
  {
    "id": 2,
    "name": "Reinforced Shocks",
    "description": "Shocks made from kryptonite",
    "inStock": 4,
    "price": 9.99
  },
  {
    "id": 3,
    "name": "Padded Seats",
    "description": "Super soft seats for a smooth ride",
    "inStock": 0,
    "price": 11.99
  }];

  constructor() { }

  ngOnInit() {
  }

  totalCarParts() {
    let sum = 0;
    for (let carPart of this.carParts){
      sum += carPart.inStock;
    }
    return sum;
  }
  totCarParts(){
    // Another way of writing the function above...
    return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
  }

}
