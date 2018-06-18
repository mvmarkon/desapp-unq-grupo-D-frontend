import { User } from './models/user'
import { Vehicle } from './models/vehicle'
import { Rental } from './models/rental'

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatDatePickerModule } from '@angular/material';
import { IMyDpOptions } from 'mydatepicker'

@Component({
  selector: 'app-create-rental',
  templateUrl: './create-rental.component.html',
  styleUrls: ['./create-rental.component.css']
})
export class CreateRentalComponent implements OnInit {
  @Input vehicleRent:Vehicle
  rentUser:User
  ownerUser:User

  public myDatePickerOptions: IMyDpOptions = {
            height: '34px',
            width: '210px',
            inline: false,
            dateFormat: 'dd.mm.yyyy'
     };

  // Initialized to specific date (09.10.2018).
  //public model: any = { date: { year: 2018, month: 10, day: 9 } };
  public model:string
  private myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
            myDate: [{jsdate: new Date()}, Validators.required] // initialize today with jsdate property}
        });

    }
}
