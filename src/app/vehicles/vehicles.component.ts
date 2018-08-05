import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Vehicle } from '../models/vehicle';
import { Subject } from 'rxjs/Subject';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';
import { VehicleService } from '../services/vehicle.service';
import { UserService } from '../services/user.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']

})
export class VehiclesComponent implements OnInit {
  public retirementAddress;
  vehicles: Vehicle[];
  dtOptions: DataTables.Settings;
  dtTrigger: Subject<any> = new Subject();
  vehicleView: Vehicle;
  newVehicle: Vehicle;

  modalRef: BsModalRef;
  selectedVehicle: Vehicle;
  public returnAddress;
  types = ['MOTORCYCLE', 'CAR', 'VAN', 'TRUCK'];
  constructor(
    private router: Router,
    private location: Location,
    private vehicleService: VehicleService,
    private userService: UserService,
    private route: ActivatedRoute,
    private modalService: BsModalService) {
    route.params.subscribe(val => {
      const id = this.userService.getCurrentUserDto().cuil;
      console.log(id);
      this.getVehicles(id);
    });
  }

  ngOnInit() {
    // this.getVehicles(this.userService.getCurrentUserDto().cuil);

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
      // rowCallback: (row: Node, data: any[] | Object, index: number) => {
      //   console.log("cambio el click")
      //   const self = this;
      //   $('td', row).unbind('click');
      //   $('td', row).bind('click', () => {
      //     self.routeVehiclePage(data);
      //   });
      //   return row;
      // }
    };
    const inputReturnAddress = <HTMLInputElement> document.getElementById('returnAddress');
    this.returnAddress = new google.maps.places.SearchBox(inputReturnAddress);

    const inputRetirementAddress = <HTMLInputElement> document.getElementById('retirementAddress');
    this.retirementAddress = new google.maps.places.SearchBox(inputRetirementAddress);


    this.newVehicle = {
      id: '',
      type: null,
      typeName: null,
      capacity: 0,
      location: null,
      retirementAddress: null,
      returnAddress: null,
      description: null,
      phone: null,
      cost: null,
      ownerCuil: null,
      photo: null
    };
    console.log(this.vehicles);
  }

  routeVehiclePage(data): void {
    console.log(data);
    // this.vehicleView = data[0]
  }

  getVehicles(id): void {
    this.vehicleService.getUserVehicles(id)
      .subscribe(
        fetchedVs => {
        this.vehicles = fetchedVs;
          console.log(this.vehicles);
          this.dtTrigger.next();
        });
  }

  openModal(template: TemplateRef<any>, vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.delete(this.selectedVehicle);
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  add(): void {
    this.newVehicle.returnAddress = this.returnAddress.getPlaces()[0].formatted_address;
    this.newVehicle.retirementAddress = this.retirementAddress.getPlaces()[0].formatted_address;
    delete this.newVehicle.typeName;
    this.newVehicle.ownerCuil = this.userService.getCurrentUserDto().cuil;
    console.log(this.newVehicle.ownerCuil);
    this.vehicleService.addVehicle(this.newVehicle)
      .subscribe(vehicle => {
        if (vehicle && vehicle.id ) {this.vehicles.push(vehicle); }
      } );
  }
  //
  delete(vehicle): void {
    this.vehicleService.deleteVehicle(vehicle.id)
      .subscribe(_ => this.vehicles = this.eliminarVehiculo(vehicle.id));
  }

  eliminarVehiculo(id): Vehicle[] {
    return this.vehicles.filter(function(v) {
      return id !== v.id;
    });
  }

  goVehicleDetail(vehicle) {
    this.router.navigateByUrl('/vehicledetail/' + vehicle.id);
  }

  goBack(): void {
    this.location.back();
  }
}
