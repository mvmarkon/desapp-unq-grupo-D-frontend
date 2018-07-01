import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { Vehicle } from '../models/vehicle';

import { VehicleService } from '../services/vehicle.service';
@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
    rentalAccept: boolean = false;
    vehicles: Vehicle[];
    dtOptions: DataTables.Settings ;
    // dtTrigger: Subject<any> = new Subject();
    vehicleView:Vehicle

    constructor(
      private router: Router,
      private location: Location,
      private vehicleService: VehicleService
    ) { }

    ngOnInit() {
      this.getEnableVehicles();
      this.dtOptions = {
        rowCallback: (row: Node, data: any[] | Object, index: number) => {
          const self = this;
          $('td', row).unbind('click');
          $('td', row).bind('click', () => {
            self.routeVehiclePage(data);
          });
          return row;
        }
      }
  }

    routeVehiclePage(data):void{
    console.log(data)
    this.vehicleView = data
    this.router.navigateByUrl('/vehicledetail'+ data[0])
    }
    getEnableVehicles(): void {
      this.vehicleService.getVehicles()
        .subscribe(fetchedVs => this.vehicles = fetchedVs);
    }
    rent(vehicle){
          console.log(vehicle)
          this.vehicleView = vehicle
          this.rentalAccept = true

    }
}
