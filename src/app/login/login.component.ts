import { Component, AfterViewInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
declare var gapi: any;

// const hintPromise = googleyolo.hint({
//   supportedAuthMethods: ['https://accounts.google.com'],
//   supportedIdTokenProviders: [
//     {
//       uri: 'https://accounts.google.com',
//       clientId: '554541568676-lbhid6hqkvse7dsk70vu705lq9aspsog.apps.googleusercontent.com'
//     }]
//   });
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  AfterViewInit {
  user: any;
  title: String = 'CARPND LOGIN';
  public auth2: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  signOut(): void {
    gapi.auth2.signOut();
    this.user = null;
    this.userService.setCurrentUser(null);
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
        this.userService.setCurrentUser(usr);
        this.router.navigate(['dashboard']);
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  ngAfterViewInit() {
    this.user = this.userService.getCurrentUser();
    if (!this.userService.isLoguedIn()) {
      this.googleInit();
    }
  }
}
