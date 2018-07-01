import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserDto } from '../models/userDto'
import { UserService } from '../services/user.service';
import { DemoComponent } from '../demo/demo.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: UserDto;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
    console.log(this.user)
  }

  getUser(): void {
    this.user= this.userService.getCurrentUserDto()

  }
}
