import { Component, OnInit } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks'

@Component({
  selector: 'app-car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {

  carParts: CarPart[];

  constructor() { }

  ngOnInit() {
    this.carParts = CARPARTS;
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
