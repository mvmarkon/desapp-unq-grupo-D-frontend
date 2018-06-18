import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent} from './user-form/user-form.component'

import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

import { CreateRentalComponent } from './create-rental/create-rental.component'
import { RentalsComponent } from './rentals/rentals.component'
import { RentCarComponent } from './rent-car/rent-car.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'vehicles',
    component: VehiclesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'userdetail/:id',
    component: UserDetailComponent
  },
  {
    path: 'vehicledetail/:id',
    component: VehicleDetailComponent
  },
  {
    path:'addUser',
    component:UserFormComponent
  },
  {
    path:'addRental',
    component:CreateRentalComponent
  },
  {
    path:'rentals',
    component:RentalsComponent
  },
  {
    path:'rent-a-car',
    component:RentCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
