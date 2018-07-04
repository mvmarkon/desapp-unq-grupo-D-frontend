import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { Rental } from '../models/rental'
import { UserDto } from '../models/userDto'
import { RentalService } from '../services/rental.service'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-rental-client',
  templateUrl: './rental-client.component.html',
  styleUrls: ['./rental-client.component.css']
})


export class RentalClientComponent implements OnInit {

  @Input() dto: UserDto;

  email: string;

  rentals:Rental[];
  clientRentals:Rental[];
  dtOptions: DataTables.Settings ;
  dtTrigger: Subject<any> = new Subject();
  rentalView:Rental;
  rentalAccept:boolean=false;

  constructor(
    private userService: UserService,
    private rentalService:RentalService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router) {
    route.params.subscribe(val => {
      this.getRentals();
    }); }


  ngOnInit() {
    //const cuil = this.userService.getCurrentUserDto();
    //this.dto = this.userService.getCurrentUserDto();
    this.getUserDTO();
    //this.email = "mverdecanna@gmail.com";
    console.log(`en init rental 2 dto=${this.dto}`);

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        console.log("cambio el click")
        const self = this;
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.routeRentalPage(data);
        });
        return row;
      }
    }


}

  routeRentalPage(data):void{
    console.log(data)
    this.rentalView = data[0]
  }


  getUserDTO(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.dto = this.userService.getCurrentUserDto();
    console.log(`en init rental 1 dto=${this.dto.name}`);
    //this.userService.findUserDto("mverdecanna@gmail.com")
      //.subscribe(user => console.log(user));
      //.subscribe(user => this.dto = user);
  }


  getRentals(): void {
    var self=this
    let cuil = this.userService.getCurrentUserDto().cuil;
    console.log(`en init rental cuil=${cuil}`);
    this.rentalService.getClientRentals(cuil)
    .subscribe(rents => {
      this.rentals = rents;
      this.rentals.map(function(ren){
        ren.startDate= new Date(ren.startDate)
        ren.endDate= new Date(ren.endDate)
      })
      this.dtTrigger.next();
    });
}


details(rental){
  this.rentalAccept=false
  this.rentalView=rental
  this.rentalAccept=true
}

  goBack(): void {
    this.location.back();
  }


}
