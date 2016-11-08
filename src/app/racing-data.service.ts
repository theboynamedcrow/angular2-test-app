import { Injectable } from '@angular/core';
import { CarPart } from './car-part';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService {
  getCarParts() {
    return this.http.get('example_data/car-parts.json')
      .map(response => <CarPart[]>response.json().data);
  }

  constructor(private http: Http) { }

}
