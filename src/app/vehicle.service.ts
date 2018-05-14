import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class VehicleService {

  constructor() { }

  getVehicles(): Observable<Vehicle[]> {
    return of(VEHICLES);
  }

}
