import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

import { SocialUser } from 'angular4-social-login';
import { AuthService } from 'angular4-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  title: String = 'CARPND LOGIN';

  constructor(private userService: UserService, private authService: AuthService) { }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

}
