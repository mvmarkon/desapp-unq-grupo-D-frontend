import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgmCoreModule, MapsAPILoader } from '@agm/core/';
import { } from '@types/googlemaps';
import { VehicleService } from '../services/vehicle.service'
import { UserService } from '../services/user.service'

@Component({
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
})
export class MapComponent implements OnInit {

  public title: string;
  public latitude: number;
  public longitude: number;
  public map : google.maps.Map;;
  public addressTarget;
  public markers: Array<Marker>;
  public searchControl: FormControl;
  public distanceBetweenPoints: Distance;
  public estimatedTravelTime: TravelTime;
  public geocoder;
  public redMarker = '#ff00';
  public blueMarker = '#00ff';
  public searchBox;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  @ViewChild('gmap') gmapElement: any;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router,
    private vehicleService:VehicleService,
    private userService:UserService
  ) {}

  /**
   * Ng Initialization method
   */

   ngOnInit(){
    var self=this;
    var mapProp = {
       center: new google.maps.LatLng(-34.706556, -58.2807111),
       zoom: 13,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }
     this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
     this.geocoder= new google.maps.Geocoder()
     this.addVehicleInMap();
 }

addVehicleInMap():void {
            var self= this;
            this.vehicleService.getRentalVehicles(this.userService.getCurrentUserCuil()).subscribe((vehicles)=>{
                console.log(vehicles)
                vehicles.map(function setMaker(vehicle) {
                    self.geocodeAddress(vehicle.retirementAddress,vehicle.id,self.redMarker,self.map);
                    self.geocodeAddress(vehicle.returnAddress,vehicle.id,self.blueMarker,self.map)
                })
              })
            }
geocodeAddress(address,id,markColor,mapVehicles) {
              var self=this;
              this.geocoder.geocode({ 'address': address }, function(results, status) {
                if (status === 'OK') {

                  var marker = new google.maps.Marker({
                    map: mapVehicles,
                    position: results[0].geometry.location,
                    label:id,
                    icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 10, //tamaño
                            fillColor: markColor, //color de relleno
                            fillOpacity:1// opacidad del relleno
                          }
                  });
                  google.maps.event.addListener(marker, 'click', function() {
                    self.router.navigateByUrl('/vehicledetail/' + marker.getLabel().toString());
                    });
                } else {
                  alert('Geocode was not successful for the following reason: ' + status);
                }
              });
            }
}



interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

interface Distance {
  value: number;
  measure: string;
}

interface TravelTime {
  value: number;
  measure: string;
}
