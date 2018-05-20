import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
// import { VEHICLES } from './mock-vehicles';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

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
      tap(vehicles => this.log(`fetched vehicles`)),
      catchError(this.handleError('getVehicles', []))
    );
  }

  getVehicle(id: number) {
    const url = `${this.vehiclesUrl}/${id}`;
    return this.http.get<Vehicle>(url).pipe(
      tap(_ => this.log(`fetched vehicle id=${id}`)),
      catchError(this.handleError<Vehicle>(`getVehicle id=${id}`))
    );
  }

  updateVehicle(vehicle: Vehicle): Observable<any> {
    const url = `${this.vehiclesUrl}/update`;
    return this.http.put(url, vehicle, httpOptions).pipe(
      tap(_ => this.log(`updated Vehicle id=${vehicle.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    const url = `${this.vehiclesUrl}/save`;
    return this.http.post<Vehicle>(url, vehicle, httpOptions).pipe(
      tap((vle: Vehicle) => this.log(`added vehicle w/ id=${vle.id}`)),
      catchError(this.handleError<Vehicle>('addVehicle'))
    );
  }

  deleteVehicle (id: number) {
    const url = `${this.vehiclesUrl}/delete/${id}`;
    return this.http.delete(url).pipe(
      tap((_ => this.log(`vehicle id=${id} deleted succesfully`)),
      catchError(this.handleError<number>('deleteVehicle')))
    );
  }

  getUserVehicles (id: number): Observable<Vehicle[]> {
    const url = `${this.vehiclesUrl}/user/${id}`;
    return this.http.get<Vehicle[]>(url)
    .pipe(
      tap(vehicles => this.log(`fetched vehicles for user id=${id}`)),
      catchError(this.handleError('getUserVehicles', []))
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
