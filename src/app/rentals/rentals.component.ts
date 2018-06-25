import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

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

  @Input() dto: UserDto;

  email: string;

  rentals:Rental[];
  dtOptions: DataTables.Settings ;
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private userService: UserService,
    private rentalService:RentalService,
    private route: ActivatedRoute,
    private router: Router) {
    route.params.subscribe(val => {
      this.getRentals();
    }); }


  ngOnInit() {
    //const cuil = this.userService.getCurrentUserDto();
    //this.dto = this.userService.getCurrentUserDto();
    this.getUserDTO();
    this.email = "mverdecanna@gmail.com";
    console.log(`en init rental dto=${this.dto}`);
    //console.log(`en rental cuil=${cuil}`);

    // this.rentalService.getRentals("20320231680").subscribe(rentals =>{
    //     this.rentals = rentals
    //   });
    // console.log(`en init rentals=${this.rentals}`);
  }


  getUserDTO(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.userService.findUserDto("mverdecanna@gmail.com")
      .subscribe(user => console.log(user));
  }


  getRentals(): void {
    this.rentalService.getRentals("20320231680")
      .subscribe(rents => {
        this.rentals = rents;
        this.dtTrigger.next();
      });
  }


}
