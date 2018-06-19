import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from 'ngx-bootstrap';
import { DemoComponent } from './demo/demo.component'
import { registerLocaleData } from '@angular/common';
import localeAR from '@angular/common/locales/es-AR';
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
import { ModelContentComponent} from './model-content-component/model-content-component.component'
import { RentCarComponent } from './rent-car/rent-car.component';


import { UserService } from './services/user.service';
import { VehicleService } from './services/vehicle.service';
import { MessageService } from './services/message.service';
import { RentalService } from './services/rental.service';

import { UserFormComponent } from './user-form/user-form.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { CurrentAccountComponent } from './current-account/current-account.component';
import { HeaderComponent } from './header/header.component';
import { CreateRentalComponent } from './create-rental/create-rental.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

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
    LoginComponent,
    DemoComponent,
    ModelContentComponent,
    HeaderComponent,
    CreateRentalComponent,
    RentCarComponent,
    CurrentAccountComponent
    ],
  entryComponents: [
    ModelContentComponent
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
    NgbModule.forRoot(),
    HttpClientModule,
    DataTablesModule,
    SocialLoginModule.initialize(config),
    ModalModule.forRoot(),
    MyDatePickerModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [
    MessageService,
    RentalService,
    UserService,
    VehicleService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
