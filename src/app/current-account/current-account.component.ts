import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../services/user.service';

import { CurrentAccount } from '../models/currentAccount';

@Component({
  selector: 'app-current-account',
  templateUrl: './current-account.component.html',
  styleUrls: ['./current-account.component.css']
})
export class CurrentAccountComponent implements OnInit {

  @Input() currentAccount: CurrentAccount;

  charge: number;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCurrentAccount();
    this.charge = 0;
  }


  getCurrentAccount(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getCurrentAccount(id)
      .subscribe(currentAccount => this.currentAccount = currentAccount);
  }


  chargeCredit(): void {
    this.userService.chargeCredit(this.currentAccount, this.charge)
    .subscribe(() => this.goBack());
  }


  goBack(): void {
    this.location.back();
  }

  add(): void {
    //this.userService.addUser(this.model).subscribe();
    this.router.navigateByUrl('/users');
  }


}
