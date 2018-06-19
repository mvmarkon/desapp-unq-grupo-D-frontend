import { Component, OnInit,Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import { IMyDpOptions } from 'mydatepicker'

import { RentalService } from '../services/rental.service'

import { User } from '../models/user'
import { Vehicle } from '../models/vehicle'
import { Rental } from '../models/rental'


@Component({
  selector: 'app-create-rental',
  templateUrl: './create-rental.component.html',
  styleUrls: ['./create-rental.component.css']
})
export class CreateRentalComponent implements OnInit {
  @Input() vehicleRent:Vehicle
  rentUser:User
  ownerUser:User
  model:Rental

  public myDatePickerOptions: IMyDpOptions = {
            height: '34px',
            width: '210px',
            inline: false,
            dateFormat: 'dd.mm.yyyy'
     };

  private myForm: FormGroup;

  constructor(private rentalService:RentalService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.model = this.newRental()
    }

  newRental():Rental {
  return {
    id :"",
    startDate : new Date(),
    endDate : new Date(),
    ownerCuil : this.ownerUser.cuil,
    rentalCuil: this.rentUser.cuil,
    vehicleID : this.vehicleRent.id
  }
}
  createRental(){
        this.rentalService.addRental(this.model)
    }
}
