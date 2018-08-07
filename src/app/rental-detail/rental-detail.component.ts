import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Rental } from '../models/rental';
import { Transaction } from '../models/transaction';
import { RentalService } from '../services/rental.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  isScored: boolean;
  isReturned: boolean;
  isIn_USE: boolean;
  isDone: boolean;

  @Input() rental: Rental;
  rentalView;
  transaction: Transaction;
  isOwner;
  isConfirm;
  isWaitConfirm;
  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService,
    private userService: UserService,
    private location: Location
  ) {}


  goBack(): void {
    this.location.back();
  }

  confirm(rental, cost) {
    this.transaction = {
      id: rental.id,
      cost: cost,
      create: null,
      lastUpdate: null,
      state: null   ,
      rental: rental
    };
    this.rentalService.createTransaction(this.transaction)
    .subscribe(transaction => {
    console.log(transaction);
    });

    }
    cancel(rental, cost) {
      this.transaction = {
        id: rental.id,
        cost: cost,
        create: null,
        lastUpdate: null,
        state: null,
        rental: rental
      };
      this.rentalService.rejectTransaction(this.transaction)
      .subscribe(transaction => {
      console.log(transaction);
    });
  }

  in_use(rental) {
      this.rentalService.getTransaction(rental.id)
      .subscribe(transaction => {
        console.log(transaction);
         this.rentalService.collectVehicleRental(transaction)
        .subscribe(transactionEnd => {
           console.log(transactionEnd);
         })
      ;
  });
 }

 pay_rental(rental) {
   this.rentalService.getTransaction(rental.id)
   .subscribe(transaction => {
     console.log(transaction);
      this.rentalService.payRental(transaction)
     .subscribe(transactionEnd => {
        console.log(transactionEnd);
      })
   ;
})
 }

  returnVehicle(rental) {
    this.rentalService.getTransaction(rental.id)
    .subscribe(transaction => {
      console.log(transaction);
       this.rentalService.returnedVehicleRental(transaction)
      .subscribe(transactionEnd => {
         console.log(transactionEnd);
       });
    });
  }

  scoredUser(rental) {
    this.rentalService.getTransaction(rental.id)
    .subscribe(transaction => {
      console.log(transaction);
       this.rentalService.payRental(transaction)
      .subscribe(transactionEnd => {
         console.log(transactionEnd);
       })
    ;
 })
  }



  ngOnInit() {
    this.rentalView = this.rental;
    this.setButtonShowDependsState();
  }


  setButtonShowDependsState() {

    this.isOwner = this.rental.ownerCuil === this.userService.getCurrentUserCuil();
    this.isWaitConfirm = this.rentalView.state === 'WAIT_CONFIRM';
    this.isConfirm = this.rentalView.state === 'CONFIRM';
    this.isDone = this.rentalView.state === 'DONE';
    this.isIn_USE = this.rentalView.state === 'IN_USE';
    this.isReturned = this.rentalView.state === 'RETURNED';
    this.isScored = this.rentalView.state === 'SCORED';
  }
}
