import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeAR from '@angular/common/locales/es-AR';

import { DataTablesModule } from 'angular-datatables';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RentalsComponent } from './rentals/rentals.component';
import { ScoreComponent } from './score/score.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { RentCarComponent } from './rent-car/rent-car.component';


import { UserService } from './services/user.service';
import { VehicleService } from './services/vehicle.service';
import { MessageService } from './services/message.service';
import { RentalService } from './services/rental.service';

import { UserFormComponent } from './user-form/user-form.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { HeaderComponent } from './header/header.component';
import { CreateRentalComponent } from './create-rental/create-rental.component';

registerLocaleData(localeAR);

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    VehiclesComponent,
    TransactionsComponent,
    RentalsComponent,
    ScoreComponent,
    MapComponent,
    UserDetailComponent,
    VehicleDetailComponent,
    MessagesComponent,
    DashboardComponent,
    UserFormComponent,
    VehicleFormComponent,
    HeaderComponent,
    CreateRentalComponent,
    RentCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMOl4awvlwM_nCyrYOnQZGPr-vAkO3hIY',
      libraries: ['places']
    }),
    HttpClientModule,
    DataTablesModule,
    MyDatePickerModule
  ],
  providers: [
    MessageService,
    UserService,
    VehicleService,
    RentalService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
