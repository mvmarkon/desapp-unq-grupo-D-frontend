import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../services/user.service';
import { VehicleService } from '../services/vehicle.service';

import { Vehicle } from '../models/vehicle';
import { User } from '../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {
  @Input() user: User;

  vehicles: Vehicle[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private vehicleService: VehicleService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    let id = null;
    if (this.userService.isLoguedIn()) {
      id = this.userService.getCurrentUserCuil();
    }
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  update(): void {
    this.user.vehicles = [];
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }

  // save(): void {
  //   this.vehicleService.updateVehicle(this.selectedVehicle)
  //     .subscribe(() => this.goBack());
  // }


  goBack(): void {
    this.location.back();
  }

  // charge(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.router.navigateByUrl('/credits/' + id);
  //   }


}
