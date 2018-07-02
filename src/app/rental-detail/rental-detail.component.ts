import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Rental } from '../models/rental';

import { RentalService } from '../services/rental.service';


@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  @Input() rentalId: string;
  rental:Rental

  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService,
    private location: Location
  ) {}


  goBack(): void {
    this.location.back();
  }


  getRental(id): void {
    this.rentalService.getRental(id)
      .subscribe(fetchedRental => this.rental = fetchedRental);
  }


  ngOnInit() {
    this.getRental(this.rental);
  }


}
