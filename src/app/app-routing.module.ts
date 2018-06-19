import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent} from './user-form/user-form.component';

import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

import { CurrentAccountComponent } from './current-account/current-account.component';
import { CreateRentalComponent } from './create-rental/create-rental.component'
import { RentalsComponent } from './rentals/rentals.component'
import { RentCarComponent } from './rent-car/rent-car.component'



const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'userdetail/:id',
    component: UserDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'vehicledetail/:id',
    component: VehicleDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'addUser',
    component: UserFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'credits/:id',
    component:CurrentAccountComponent
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
