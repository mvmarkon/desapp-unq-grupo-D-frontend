import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import { USERS } from './mock-users';
import { User } from '../models/user';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class UserService {

  private user = null;
  private usersUrl = 'http://localhost:8080/desapp-groupD-backend/cxf/user';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  setCurrentUser(any) {
    this.user = any;
  }

  getCurrentUser() {
    return this.user;
  }

  isLoguedIn() {
    return this.user !== null;
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
