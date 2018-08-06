import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Rental } from '../models/rental';
import { Transaction } from '../models/transaction';
import { RentalService } from '../services/rental.service';


@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  @Input() rental: Rental;
  rentalView: Rental;
  transaction: Transaction;
  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService,
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

  ngOnInit() {
    this.rentalView = this.rental;
    console.log(this.rental);
  }
}
