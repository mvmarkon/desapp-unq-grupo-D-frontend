import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { IMyDpOptions } from 'mydatepicker';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { RentalService } from '../services/rental.service';
import { UserService } from '../services/user.service';
import { VehicleService } from '../services/vehicle.service';
import { MessageService } from '../services/message.service';

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
  rentalCost;

  constructor(private rentalService: RentalService,
              private userService: UserService,
              private vehicleService: VehicleService,
              private messageService: MessageService,
              private spinnerService: Ng4LoadingSpinnerService,
              private router:Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.vehicleRent);
    this.rentUser = this.userService.getCurrentUserDto();
    console.log(this.vehicleRent.ownerCuil);
    const cuil = parseInt(this.vehicleRent.ownerCuil);
    console.log(cuil);
    this.userService.getUser(cuil).subscribe(
      user => {
            console.log(user);
            this.ownerUser = user;
      }
    );
  }


  createRental() {
    this.spinnerService.show();
    const starTime = (<HTMLInputElement>document.getElementById('begin-time')).value;
    const endTime = (<HTMLInputElement>document.getElementById('finish-time')).value;
    this.calculateRentalCost();
    const res = {
      'ownerCuil' : this.ownerUser.cuil,
      'vehicleID' : this.vehicleRent.id,
      'clientCuil': this.rentUser.cuil,
      'startDate' : new Date(Date.parse(starTime)),
      'endDate'  : new Date(Date.parse(endTime))
    };
    console.log(res);

    this.rentalService.addRental(res).subscribe(
      rental => {
        console.log(rental);
        this.spinnerService.hide();
        this.router.navigate(['/rental-client'])
      });
    }

    calculateDiffDays(dateEnd, dateBegin) {
      const timeDiff = dateEnd - dateBegin;
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      return daysDiff;
    }
    calculateRentalCost() {
      const starTime = (<HTMLInputElement>document.getElementById('begin-time')).value;
      const endTime = (<HTMLInputElement>document.getElementById('finish-time')).value;
      const dateEnd =  new Date(endTime);
      const dateStart =  new Date(starTime);

      if ( (starTime === '' || endTime === '' ) || dateEnd < dateStart ) {
        this.messageService.add('Warning', 'No esta cargada alguna fecho o la fecha de fin es anterior a la de comienzo' );
      } else {
        this.rentalCost = this.vehicleRent.cost * this.calculateDiffDays(dateEnd, dateStart);
      }
    }

}
