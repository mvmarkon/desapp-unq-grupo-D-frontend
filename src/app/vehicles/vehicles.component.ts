import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../vehicle';
import { Location } from '@angular/common';

import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[];

  newVehicle: Vehicle = {
    id: '',
    type: '',
    typeName: '',
    capacity: null,
    location: '',
    retirementAddress: '',
    returnAddress: '',
    description: '',
    phone: '',
    cost: null,
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getVehicles()
      .subscribe(fetchedVs => this.vehicles = fetchedVs);
  }

  add(): void {
    delete this.newVehicle.typeName;
    this.vehicleService.addVehicle(this.newVehicle)
      .subscribe(vehicle => {
        this.vehicles.push(vehicle);
      } );
  }

  delete(vehicle): void {
    this.vehicleService.deleteVehicle(vehicle.id)
      .subscribe(_ => this.vehicles = this.eliminarVehiculo(vehicle.id));
  }

  eliminarVehiculo(id): Vehicle[] {
    return this.vehicles.filter(function(v) {
      return id !== v.id;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
