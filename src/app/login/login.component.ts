import { Component, AfterViewInit, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
declare var gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  AfterViewInit, OnInit {
  user: any;
  title: String = 'CARPND LOGIN';
  public auth2: any;
  firstTime = false;
  editing = false;
  registerEnabled = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  signOut(): void {
    const self = this;
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      this.userService.removeCurrentUser();
      window.location.reload();
    });
  }

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '554541568676-lbhid6hqkvse7dsk70vu705lq9aspsog.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      this.attachSignin(document.getElementById('signInWithGoogle'));
    });
  }
  public attachSignin(element) {
    console.log(element.id);
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const profile = googleUser.getBasicProfile();
        const authRes = googleUser.getAuthResponse();
        const usr = {};
        usr['idtoken'] = authRes.id_token;
        usr['image'] =  profile.Paa;
        usr['mail'] = profile.U3;
        usr['name'] = profile.ig;
        this.user = usr;
        this.userService.verifyUser(usr);
        console.log(`loginnnnnnnnnnnnnn`);
    }, function(error) {
      alert(JSON.stringify(error, undefined, 2));
    });
  }
  edit() {
    this.editing = true;
  }
  ngOnInit() {
    this.firstTime = this.userService.firstTime;
    this.userService.cast.subscribe(usr => {
      this.user = usr;
    });
    this.userService.dto.subscribe(udto => {
      if (udto && udto['register'] && this.userService.firstTime) {
        this.user = this.userService.getCurrentUser();
        this.router.navigate(['dashboard']);
      } else if (udto && !udto['register']) {
        this.registerEnabled = true;
        alert(`The user isn't registered, please complete the user data to register`);
      }
    });
  }
  ngAfterViewInit() {
    this.googleInit();
  }
}
