import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { Rental } from '../models/rental';

import { environment } from '../../environments/environment';
import { MessageService } from '../services/message.service';
import { Transaction } from '../models/transaction';
import { Score } from '../models/score';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class RentalService {

  private rentalUrl = environment.API_URL + '/rental';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getRentals(cuil: string): Observable<Rental[]> {
    // const url = `${this.rentalUrl}/all/${cuil}`;
    return this.http.get<Rental[]>(this.rentalUrl + `/all/${cuil}`)
    .pipe(
      // tap(rentals => this.log('Success', `fetched rentals`)),
      catchError(this.handleError('getRental', []))
    );
  }
  getClientRentals(cuil: string): Observable<Rental[]> {
    // const url = `${this.rentalUrl}/all/${cuil}`;
    return this.http.get<Rental[]>(this.rentalUrl + `/allclient/${cuil}`)
    .pipe(
      // tap(rentals => this.log('Success', `fetched rentals`)),
      catchError(this.handleError('getRental', []))
    );
  }


  getRental(id: number) {
    const url = `${this.rentalUrl}/${id}`;
    return this.http.get<Rental>(url).pipe(
      // tap(_ => this.log('Success', `fetched rental id=${id}`)),
      catchError(this.handleError<Rental>(`getRental id=${id}`))
    );
  }

  addRental(rental) {
    const url = `${this.rentalUrl}/create`;
    return this.http.post<Rental>(url, rental, httpOptions).pipe(
      tap((vle: Rental) => this.log('Success', `added rental w/ id=${vle.id}`)),
      catchError(this.handleError<Rental>('addRental'))
    );
  }

  getTransaction(id): Observable<any> {
    const url = `${this.rentalUrl}/transaction/${id}`
    return this.http.get<Transaction>(url).pipe(
      catchError(this.handleError<Transaction>(`getTransaction id=${id}`))
    )
  }

  createTransaction(transaction) {
    const url = `${this.rentalUrl}/transaction/create`;
    return this.http.post<Transaction>(url, transaction, httpOptions).pipe(
      tap((vle: Transaction) => this.log('Success', `added rental w/ id=${vle.id}`)),
      catchError(this.handleError<Transaction>('createTransaction'))
    );
  }
  rejectTransaction(transaction) {
    const url = `${this.rentalUrl}/transaction/reject`;
    return this.http.post<Transaction>(url, transaction, httpOptions).pipe(
      tap((vle: Transaction) => this.log('Success', `added rental w/ id=${vle.id}`)),
      catchError(this.handleError<Transaction>('createTransaction'))
    );
  }

  collectVehicleRental(transaction: Transaction): Observable<any> {
    const url = `${this.rentalUrl}/rental/collect`;
    return this.http.put(url, transaction, httpOptions).pipe(
      tap(_ => this.log('Success', `updated Rental id=${transaction.id}`)),
      catchError(this.handleError<any>('collectVehicleRental'))
    );
  }


  payRental (rental: Rental): Observable<any> {
    const url = `${this.rentalUrl}/rental/pay`;
    return this.http.put(url, rental, httpOptions).pipe(
      tap(_ => this.log('Success', `updated Rental id=${rental.id}`)),
      catchError(this.handleError<any>('payRental'))
    );
  }

  returnedVehicleRental (rental: Rental): Observable<any> {
    const url = `${this.rentalUrl}/rental/returned`;
    return this.http.put(url, rental, httpOptions).pipe(
      tap(_ => this.log('Success', `updated Rental id=${rental.id}`)),
      catchError(this.handleError<any>('returnedVehicleRental'))
    );
  }

  createScore (score: Score): Observable<any> {
     const url = `${this.rentalUrl}/score`;
     return this.http.post(url, score, httpOptions).pipe(
       tap(_ => this.log('Success', `updated Rental id=${score.id}`)),
       catchError(this.handleError<any>('returnedVehicleRental'))
     );
   }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure

      // TODO: better job of transforming error for user consumption
      console.log(error.message);
      this.log('Error', `${operation} failed: ${error.error}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(type: string, message: string) {
    this.messageService.add(type, message);
  }
}
