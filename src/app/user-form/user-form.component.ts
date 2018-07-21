import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  model: User;
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.model = this.newUser();
  }

  newUser(): User {
    return {
      name: '',
      cuil: null,
      currentAccount: null,
      email: '',
      surname: '',
      address: '',
      vehicles: []
    };
  }

  add(): void {
    this.userService.addUser(this.model)
    .subscribe( res => {
      if ( res.cuil ) {
        alert('The user has been registered succesfully');
        window.location.reload();
      }}
    );
  }

}
