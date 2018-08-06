import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../models/vehicle';


import { UserService } from '../services/user.service'
import { VehicleService } from '../services/vehicle.service';
import { RentalService } from '../services/rental.service'



@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})

export class VehicleDetailComponent implements OnInit {

  @Input() vehicleId: string;
  @Input() vehicle: Vehicle;

  userCuil:String;
  isOwner:boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private vehicleService: VehicleService,
    private rentalService: RentalService,
    private location: Location
  ) {}


  ngOnInit() {
    this.userCuil = this.userService.getCurrentUserCuil()
    this.getVehicle();
  }

  update(): void {
    delete this.vehicle.typeName;
    this.vehicleService.updateVehicle(this.vehicle)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getVehicle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vehicleService.getVehicle(id)
      .subscribe(fetchedVehicle => {
        this.vehicle = fetchedVehicle;
        this.isOwner = (this.userCuil === this.vehicle.ownerCuil)
      })
  }


}
