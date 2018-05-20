import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})

export class VehicleDetailComponent implements OnInit {
  @Input() vehicle: Vehicle;

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

  getVehicle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vehicleService.getVehicle(id)
      .subscribe(fetchedVehicle => this.vehicle = fetchedVehicle);
  }
  ngOnInit() {
    this.getVehicle();
  }

}
