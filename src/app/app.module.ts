import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { AgmCoreModule } from '@agm/core';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

import { registerLocaleData } from '@angular/common';
import localeAR from '@angular/common/locales/es-AR';




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

import { UserService } from './services/user.service';
import { VehicleService } from './services/vehicle.service';
import { MessageService } from './services/message.service';
import { UserFormComponent } from './user-form/user-form.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

registerLocaleData(localeAR);
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('498468987520-vfvaeevqsj1lmvktk3ihe93vtniejhbr.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id')
  }
]);

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMOl4awvlwM_nCyrYOnQZGPr-vAkO3hIY',
      libraries: ['places']
    }),
    NgbModule.forRoot(),
    HttpClientModule,
    DataTablesModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [
    MessageService,
    UserService,
    VehicleService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
