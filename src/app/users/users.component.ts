import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { User } from '../models/user';
import { Vehicle } from '../models/vehicle';
import { CurrentAccount } from '../models/currentAccount';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  dtOptions: DataTables.Settings ;
  dtTrigger: Subject<any> = new Subject();

  newUsr: User = {
    name: '',
    cuil: null,
    currentAccount: null,
    email: '',
    surname: '',
    address: '',
    vehicles: [],
    puntuations: []
  };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
    // Cambia la estrategia de ruteo para que cuando venga desde otro componente  refresque la pagina
    route.params.subscribe(val => {
      this.getUsers();
    }); }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.routeUserPage(data);
        });
        return row;
      }
    };
    //this.userService.setCurrentCuil();
  }


  routeUserPage(data): void {
    this.router.navigateByUrl('/userdetail/' + data[0]);
  }


  getUsers(): void {
    this.userService.getUsers()
      .subscribe(usrs => {
        this.users = usrs;
        this.dtTrigger.next();
      });
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
