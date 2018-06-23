import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { Rental } from '../models/rental';


import { MessageService } from '../services/message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class RentalService {

  private rentalUrl = 'http://localhost:8080/desapp-groupD-backend/cxf/rental';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getRentals(id: string): Observable<Rental[]> {
    const url = `${this.rentalUrl}/all/${id}`;
    return this.http.get<Rental[]>(url).pipe(
      tap(Rentals => this.log(`fetched rentals`)),
      catchError(this.handleError('getRental', []))
    );
  }

  getRental(id: number) {
    const url = `${this.rentalUrl}/${id}`;
    return this.http.get<Rental>(url).pipe(
      tap(_ => this.log(`fetched rental id=${id}`)),
      catchError(this.handleError<Rental>(`getRental id=${id}`))
    );
  }

  addRental(rental: Rental): Observable<Rental> {
    const url = `${this.rentalUrl}/save`;
    return this.http.post<Rental>(url, rental, httpOptions).pipe(
      tap((vle: Rental) => this.log(`added rental w/ id=${vle.id}`)),
      catchError(this.handleError<Rental>('addRental'))
    );
  }

  collectVehicleRental(rental: Rental): Observable<any> {
    const url = `${this.rentalUrl}/rental/collect`;
    return this.http.put(url, rental, httpOptions).pipe(
      tap(_ => this.log(`updated Rental id=${rental.id}`)),
      catchError(this.handleError<any>('collectVehicleRental'))
    );
  }


  payRental (rental:Rental):Observable<any> {
    const url = `${this.rentalUrl}/rental/pay`;
    return this.http.put(url, rental, httpOptions).pipe(
      tap(_ => this.log(`updated Rental id=${rental.id}`)),
      catchError(this.handleError<any>('payRental'))
    );
  }

  returnedVehicleRental (rental:Rental): Observable<any> {
    const url = `${this.rentalUrl}/rental/returned`;
    return this.http.put(url, rental, httpOptions).pipe(
      tap(_ => this.log(`updated Rental id=${rental.id}`)),
      catchError(this.handleError<any>('returnedVehicleRental'))
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
