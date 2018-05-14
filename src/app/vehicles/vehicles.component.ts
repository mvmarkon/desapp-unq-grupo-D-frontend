import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';

import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle;

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }

  constructor( private vehicleService: VehicleService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe(vehicles => this.vehicles = vehicles);
  }
}
