import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { Vehicle } from '../models/vehicle';

import { UserService } from '../services/user.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  vehicles: Vehicle[];
  dtOptions: DataTables.Settings ;
  dtTrigger: Subject<any> = new Subject();
  vehicleView:Vehicle
  rentalAccept:boolean = false;
  // newUsr: User = {
  //   name: '',
  //   cuil: null,
  //   currentAccount: null,
  //   email: '',
  //   surname: '',
  //   address: '',
  //   vehicles: []
  // };

  constructor(
    private vehicleService: VehicleService,
    private userService:UserService,
    private route: ActivatedRoute,
    private router: Router) {
    // Cambia la estrategia de ruteo para que cuando venga desde otro componente  refresque la pagina
    route.params.subscribe(val => {
      var id = this.userService.getCurrentUserDto().cuil;
      console.log(id)
      this.getRentalVehicles(id);
    }); }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
      // rowCallback: (row: Node, data: any[] | Object, index: number) => {
      //   const self = this;
      //   $('td', row).unbind('click');
      //   $('td', row).bind('click', () => {
      //     self.routeUserPage(data);
      //   });
      //   return row;
      // }
    };
    //this.userService.setCurrentCuil();
  }


  routeUserPage(data): void {
    this.router.navigateByUrl('/userdetail/' + data[0]);
  }


  getRentalVehicles(id): void {
    this.vehicleService.getRentalVehicles(id)
      .subscribe(vehiclesRental => {
        this.vehicles = vehiclesRental;
        this.dtTrigger.next();
      });
  }
  rent(vehicle){
        console.log(vehicle)
        this.vehicleView = vehicle
        this.rentalAccept = true

  }
  // add(): void {
  //   // if (this.newUsr.name == ''
  //   // || this.newUsr.cuil == ''
  //   // || this.newUsr.email == ''
  //   // || this.newUsr.surname == ''
  //   // || this.newUsr.address == '' ) { return; }
  //   this.userService.addUser(this.newUsr)
  //     .subscribe(user => {
  //       this.users.push(user);
  //     });
  // }
}
