import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { Vehicle } from '../models/vehicle';
import { Subject } from 'rxjs';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']

})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[];
  dtOptions: DataTables.Settings;
  //dtTrigger: Subject<any> = new Subject();
  vehicleView:Vehicle

  constructor(
    private router: Router,
    private location: Location,
    private vehicleService: VehicleService,
    private route:ActivatedRoute) {
    route.params.subscribe(val => {
      this.getVehicles();
    }); }

  ngOnInit() {
    // this.getVehicles();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        console.log("cambio el click")
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
  this.vehicleView = data[0]
  }

  getVehicles(): void {
    this.vehicleService.getVehicles()
      .subscribe(fetchedVs => this.vehicles = fetchedVs);
  }

  // add(): void {
  //   delete this.newVehicle.typeName;
  //   this.vehicleService.addVehicle(this.newVehicle)
  //     .subscribe(vehicle => {
  //       this.vehicles.push(vehicle);
  //     } );
  // }
  //
  // delete(vehicle): void {
  //   this.vehicleService.deleteVehicle(vehicle.id)
  //     .subscribe(_ => this.vehicles = this.eliminarVehiculo(vehicle.id));
  // }
  //
  // eliminarVehiculo(id): Vehicle[] {
  //   return this.vehicles.filter(function(v) {
  //     return id !== v.id;
  //   });
  // }

  goBack(): void {
    this.location.back();
  }
}
