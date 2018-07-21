import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/user';
import { UserDto } from '../models/userDto';
import { CurrentAccount } from '../models/currentAccount';

import { MessageService } from './message.service';
import { BehaviorSubject, Subject } from 'rxjs/';
import { Profile } from '../models/profile';
// import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8080/desapp-groupD-backend/cxf/user';
  private user = new BehaviorSubject<Profile>(null);
  private currentCuil = null;
  private currentUserDto = new BehaviorSubject<any>(null);
  private currentMail =  new BehaviorSubject<any>(null);
  public firstTime = new BehaviorSubject<any>(true);
  cast = this.user.asObservable();
  dto = this.currentUserDto.asObservable();
  mail = this.currentMail.asObservable();
  tempusr = null;
  reg = this.firstTime.asObservable();

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
      this.init();
    }

  init() {
    console.log('user service started');
    this.mail.subscribe(cmail => {
      if (cmail) {
        this.setCurrentUserDto();
      }
    });
    this.dto.subscribe(uDto => {
      if (uDto && uDto['register']) {
        this.user.next(this.tempusr);
        this.currentCuil = uDto.cuil;
        // this.firstTime.next(false);
      } else {
        this.user.next(null);
      }
    });
  }

  failReg() {
    this.removeCurrentUser();
    this.firstTime.next(false);
  }

  verifyUser(any) {
    this.tempusr = any;
    // this.user.next(any);
    if (any !== null) {
      this.currentMail.next(any.mail);
    }
  }

  toogleFirst() {
    this.firstTime.next(!this.firstTime.value);
  }

  setCurrentUser(any) {
    // if (any !== null) {
    //   this.currentMail.next(any.mail);
    // }
    this.user.next(any);
  }
  removeCurrentUser() {
    this.setCurrentUser(null);
    this.currentMail.next(null);
    this.currentUserDto.next(null);
    this.firstTime.next(true);
    this.tempusr = null;
  }

  getCurrentUser() {
    return this.user.value;
  }

  isLoguedIn() {
    return this.getCurrentUser() !== null;
  }

  // setCurrentCuil() {
  //   this.currentCuil = this.getCurrentUserCuil();
  // }

  // getCurrentCuil() {
  //   return this.currentCuil;
  // }

  setCurrentUserDto() {
    this.findUserDto(this.currentMail.value);
    // .subscribe(
    // currentUser => {
    //   if (currentUser) {
    //     console.log(currentUser);
    //     this.currentUserDto.next(currentUser);
    //   }
    // });
    // console.log(`init  this.currentUserDto=${this.currentUserDto}`);
    // this.currentCuil = this.currentUserDto.cuil;
    // console.log(`init  this.currentCuil=${this.currentCuil}`);
  }


  getCurrentUserDto() {
    return this.currentUserDto.value;
  }


  getCurrentUserCuil() {
    // const mail = this.getCurrentUser().mail;
    // console.log(`getCurrentUserCuil email=${mail}`);
    // const usr = this.findUserDto(mail);
    // console.log(`getCurrentUserCuil user=${usr}`);
    // return usr;
    return this.currentCuil;
  }


  findUserDto(email: string) {
    const url = `${this.usersUrl}/mail/${email}`;
    return this.http.get<UserDto>(url)
      .subscribe(data  => {
        console.log(data);
        this.currentUserDto.next(data);
      });
    // .pipe(
    //   tap(userDto => this.log(`fetched userDto`)),
    //   catchError(this.handleError<UserDto>('findUserDto'))
    // );
  }



  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + '/all')
    .pipe(
      tap(users => this.log(`fetched users`)),
      catchError(this.handleError('getUsers', []))
    );
  }

  getUser(id: number) {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  updateUser(user: User): Observable<any> {
    const url = `${this.usersUrl}/update`;
    return this.http.put(url, user, httpOptions).pipe(
      tap(_ => this.log(`updated User id=${user.cuil}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  addUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/save`;
    return this.http.post<User>(url, user, httpOptions).pipe(
      tap((usr: User) => this.log(`added user w/ id=${usr.cuil}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }


  chargeCredit(currentAccount: CurrentAccount, credit: number): Observable<any> {
    const url = `${this.usersUrl}/currentAccount/charge/${credit}`;
    return this.http.put(url, currentAccount, httpOptions).pipe(
      tap(_ => this.log(`updated CurrentAccount id=${credit}`)),
      catchError(this.handleError<any>('chargeCredit'))
    );
  }


  getCurrentAccount(cuil: number) {
    const url = `${this.usersUrl}/currentAccount/${cuil}`;
    return this.http.get<CurrentAccount>(url).pipe(
      tap(_ => this.log(`fetched currentAccount cuil=${cuil}`)),
      catchError(this.handleError<CurrentAccount>(`getCurrentAccount cuil=${cuil}`))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }
}
