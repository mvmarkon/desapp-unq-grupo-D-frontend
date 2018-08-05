import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { Vehicle } from '../models/vehicle';
// import { VEHICLES } from './mock-vehicles';

import { MessageService } from '../services/message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class VehicleService {

  private vehiclesUrl = 'http://localhost:8080/desapp-groupD-backend/cxf/vehicle';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehiclesUrl + '/all')
    .pipe(
      // tap(vehicles => this.log('Success', `fetched vehicles`)),
      catchError(this.handleError('getVehicles', []))
    );
  }

  getVehicle(id: string) {
    const url = `${this.vehiclesUrl}/${id}`;
    return this.http.get<Vehicle>(url).pipe(
      // tap(_ => this.log('Success', `fetched vehicle id=${id}`)),
      catchError(this.handleError<Vehicle>(`getVehicle id=${id}`))
    );
  }

  updateVehicle(vehicle: Vehicle): Observable<any> {
    const url = `${this.vehiclesUrl}/update`;
    return this.http.put(url, vehicle, httpOptions).pipe(
      tap(_ => this.log('Success', `updated Vehicle id=${vehicle.id}`)),
      catchError(this.handleError<any>(''))
    );
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    const url = `${this.vehiclesUrl}/save`;
    return this.http.post<Vehicle>(url, vehicle, httpOptions).pipe(
      tap((vle: Vehicle) => this.log('Success', `added vehicle w/ id=${vle.id}`)),
      catchError(this.handleError<any>(''))
    );
  }

  deleteVehicle (id: number) {
    const url = `${this.vehiclesUrl}/delete/${id}`;
    return this.http.delete(url).pipe(
      tap((_ => this.log('Success', `vehicle id=${id} deleted succesfully`)),
      catchError(this.handleError<number>('deleteVehicle')))
    );
  }

  getUserVehicles (id: number): Observable<Vehicle[]> {
    const url = `${this.vehiclesUrl}/user/${id}`;
    return this.http.get<Vehicle[]>(url)
    .pipe(
      // tap(vehicles => this.log('Success', `fetched vehicles for user id=${id}`)),
      catchError(this.handleError('getUserVehicles', []))
    );
  }

  getRentalVehicles(id: number): Observable<Vehicle[]> {
    const url = `${this.vehiclesUrl}/notUser/${id}`;
    return this.http.get<Vehicle[]>(url)
    .pipe(
      // tap(vehicles => this.log('Success', `fetched rentalVehicles for user id=${id}`)),
      catchError(this.handleError('getRentalVehicles', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure

      // TODO: better job of transforming error for user consumption
      this.log('Error', `${operation} failed: ${error.error}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(type: string, message: string) {
    this.messageService.add(type, message);
  }
}
