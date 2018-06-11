import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { UserService } from '../services/user.service';


declare const gapi: any;

@Component({
  selector: 'app-login',
  template: '<button id="googleBtn">Ingresar con Google</button>'
})
export class LoginComponent implements AfterViewInit {
  return = '';
  private clientId = '554541568676-lbhid6hqkvse7dsk70vu705lq9aspsog.apps.googleusercontent.com';

  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

  public auth2: any;

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: this.scope
      });
      this.attachSignin(this.element.nativeElement.firstChild);
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const profile = googleUser.getAuthResponse();
        profile.mail = googleUser.getBasicProfile().U3;
        this.userService.setCurrentUser(profile);
      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  constructor(
    private element: ElementRef,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {
    console.log('ElementRef: ', this.element);
  }

  ngAfterViewInit() {
    this.googleInit();
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/dashboard');
  }
}
