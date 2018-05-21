import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { User } from '../models/user';
import { Vehicle } from '../models/vehicle';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  newUsr: User = {
    name: '',
    cuil: null,
    currentAccount: null,
    email: '',
    surname: '',
    address: '',
    vehicles: []
  };

  constructor(private userService: UserService,private route:ActivatedRoute) {
//Cambia la estrategia de ruteo para que cuando venga desde otro componente  refresque la pagina
    route.params.subscribe(val => {
      this.getUsers();
    }); }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  add(): void {
    // if (this.newUsr.name == ''
    // || this.newUsr.cuil == ''
    // || this.newUsr.email == ''
    // || this.newUsr.surname == ''
    // || this.newUsr.address == '' ) { return; }
    this.userService.addUser(this.newUsr)
      .subscribe(user => {
        this.users.push(user);
      });
  }
}
