import { Component, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'Carpnd';
  loggedIn = false;
  constructor (private usrService: UserService) {}

  ngDoCheck() {
    this.loggedIn = this.usrService.isValid();
  }
}
