import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Rental } from '../models/rental'
import { UserDto } from '../models/userDto'
import { RentalService } from '../services/rental.service'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})

export class RentalsComponent implements OnInit {

  rentals:Rental[];
  dto: UserDto;

  constructor(
    private userService: UserService,
    private rentalService:RentalService,
    private route: ActivatedRoute
    private router: Router) {
    route.params.subscribe(val => {
      this.getRentals();
    }); }

  ngOnInit() {
  //const cuil = this.userService.getCurrentUserDto();
  this.dto = this.userService.getCurrentUserDto();
  console.log(`en init rental dto=${this.dto}`);
  //console.log(`en rental cuil=${cuil}`);
  this.rentalService.getRentals("2032023168").subscribe(rentals =>{
      this.rentals = rentals
    })
  }


  getRentals(): void {

    this.userService.getRentals("20320231680")
      .subscribe(rents => {
        this.rentals = rents;
        this.dtTrigger.next();
      });
  }


}
