import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/user';

import { MessageService } from './message.service';

const httpOptions = {
  headers: null// new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   // headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   // headers.append('Accept', 'application/json');
  // })
};

@Injectable()
export class UserService {

  private currentUser = {
    id_token: '',
    mail: ''
  };

  private usersUrl = 'http://localhost:8080/desapp-groupD-backend/cxf/user';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  newhttpHeaders(): object {
    let hds = new HttpHeaders();
    hds = hds.set( 'Content-Type', 'application/json');
    if (this.currentUser.id_token) {
      hds = hds.set('Authorization', 'Bearer ' + this.currentUser.id_token);
    }
    return {headers: hds};
  }

  setCurrentUser(usr: any): void {
    if (usr) {
      this.currentUser.id_token = usr.id_token;
      this.currentUser.mail = usr.mail;
    }
  }

  isValid(): boolean {
    return this.currentUser.id_token !== '' && this.currentUser.mail !== '';
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + '/all', this.newhttpHeaders() )
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

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }
}
