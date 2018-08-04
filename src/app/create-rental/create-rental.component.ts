import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import { IMyDpOptions } from 'mydatepicker';

import { RentalService } from '../services/rental.service';
import { UserService } from '../services/user.service';
import { VehicleService } from '../services/vehicle.service';


import { User } from '../models/user';
import { UserDto} from '../models/userDto';

import { Vehicle } from '../models/vehicle';
import { Rental } from '../models/rental';


@Component({
  selector: 'app-create-rental',
  templateUrl: './create-rental.component.html',
  styleUrls: ['./create-rental.component.css']
})
export class CreateRentalComponent implements OnInit {
  @Input() vehicleRent: Vehicle;
  rentUser: UserDto;
  ownerUser: User;


  constructor(private rentalService: RentalService,
              private userService: UserService,
              private vehicleService: VehicleService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.vehicleRent);
    this.rentUser = this.userService.getCurrentUserDto();
    console.log(this.vehicleRent.ownerCuil);
    const cuil = parseInt(this.vehicleRent.ownerCuil, 2);
    console.log(cuil);
    this.userService.getUser(cuil).subscribe(
      user => {
            console.log(user);
            this.ownerUser = user;
      }
    );
  }

  createRental() {
    const starTime = (<HTMLInputElement>document.getElementById('begin-time')).value;
    const endTime = (<HTMLInputElement>document.getElementById('finish-time')).value;
    console.log(starTime);
    console.log(endTime);
    const res = {
      'ownerCuil' : this.ownerUser.cuil,
      'vehicleID' : this.vehicleRent.id,
      'clientCuil': this.rentUser.cuil,
      'startDate' : new Date(Date.parse(starTime)),
      'endDate'  : new Date(Date.parse(endTime))
    };
    console.log(res);
      // this.model.startDate=new Date (log.value);
      // this.model.endDate=new Date(log2.value)
    this.rentalService.addRental(res).subscribe(
      rental => {
        console.log(rental);
      });
    }
}
