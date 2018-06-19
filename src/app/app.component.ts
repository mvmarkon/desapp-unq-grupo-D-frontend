import { Component, OnChanges } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthService } from 'angular4-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  private user = null;
  isLogued = false;
  title = 'Carpnd';

  constructor (
    private usrService: UserService,
    private authService: AuthService) {}

  signOut(): void {
    this.authService.signOut();
  }
  ngOnChanges() {
    this.user = this.usrService.getCurrentUser();
    this.isLogued = this.usrService.isLoguedIn();
  }
}
