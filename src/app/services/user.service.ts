import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import { USERS } from './mock-users';
import { User } from '../models/user';
import { UserDto } from '../models/userDto';
import { CurrentAccount } from '../models/currentAccount';

import { MessageService } from './message.service';
//import 'rxjs/add/operator/map';
import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8080/desapp-groupD-backend/cxf/user';
  private user = null;
  private currentCuil = null;
  private currentUserDto = null;
  private currentMail = null;
  userDTO: UserDto;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}


  ngOnInit() {
    const mail = this.getCurrentUser().mail;
    console.log(`init  email=${mail}`);
    //this.userDTO = this.findUserDto(mail);
  }

  setCurrentUser(any) {
    this.user = any;
  }

  getCurrentUser() {
    return this.user;
  }

  isLoguedIn() {
    return this.user !== null;
  }

  setCurrentCuil(){
    this.currentCuil = this.getCurrentUserCuil();
  }

  getCurrentCuil(){
    return this.currentCuil;
  }

  setCurrentUserDto(){
    const mail = this.getCurrentUser().mail;
    this.currentMail = mail;
    console.log(`setCurrentUserDto email=${this.currentMail}`);
    //this.currentUserDto = this.findUserDto(mail);
    this.userDTO = <UserDto>this.findUserDto(mail);
    //let dto = this.findUserDto(mail);
    console.log(`init  this.currentUserDto=${this.userDTO.name}`);
  }

  getCurrentUserDto(){
    return this.currentUserDto;
  }


  getCurrentUserCuil() {
    const mail = this.getCurrentUser().mail;
    console.log(`getCurrentUserCuil email=${mail}`);
    let user = this.findUserDto(mail);
    console.log(`getCurrentUserCuil user=${user}`);
    return user;
  }


  findUserDto(email: string) {
    const url = `${this.usersUrl}/mail/${email}`;
    return this.http.get<UserDto>(url)
    .map((res: UserDto) => {
      let newDto: UserDto = {
        name: res.name,
        cuil: res.cuil,
        email: res.email,
        surname: res.surname,
        address: res.address
      };
       console.log("body: " + newDto.cuil);
       return newDto || null
     })
     .catch((error) => {
       return Observable.throw(error)
     })
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
