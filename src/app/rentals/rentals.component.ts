import { Component, OnInit,Input } from '@angular/core';
import { Rental } from '../models/rental'
import { RentalService } from '../services/rental.service'
@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {
  rentals:Rental[]

  constructor(private rentalService:RentalService) { }

  ngOnInit() {
  this.rentalService.getRentals().subscribe(rentals =>{
      this.rentals = rentals
    })
  }


}
