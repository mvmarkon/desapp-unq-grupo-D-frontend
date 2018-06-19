import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Vehicle } from '../models/vehicle';

import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})

export class VehicleDetailComponent implements OnInit {
  @Input() vehicleId: string;
  vehicle:Vehicle

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private location: Location
  ) {}

  update(): void {
    delete this.vehicle.typeName;
    this.vehicleService.updateVehicle(this.vehicle)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getVehicle(id): void {
    this.vehicleService.getVehicle(id)
      .subscribe(fetchedVehicle => this.vehicle = fetchedVehicle);
  }
  ngOnInit() {
    this.getVehicle(this.vehicleId);
  }

}
