import { Component, OnInit } from '@angular/core';
import { CarPart } from './car-part';
import { RacingDataService } from './racing-data.service';

@Component({
  selector: 'app-car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {

  carParts: CarPart[];

  constructor(private racingDataService: RacingDataService) { }

  ngOnInit() {
    this.racingDataService.getCarParts()
      .subscribe(carParts => this.carParts = carParts);
  }

  totalCarParts() {
    let sum = 0;
    if (Array.isArray(this.carParts)) {
    for (let carPart of this.carParts){
      sum += carPart.inStock;
    }
    }
    return sum;
  }
  totCarParts(){
    // Another way of writing the function above...
    return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
  }
  carPartNames() {
    let retString = "";
    if (Array.isArray(this.carParts)) {
      for (let carPart of this.carParts){
        retString += carPart.name;
      }
    }
    return retString;
  }

}
