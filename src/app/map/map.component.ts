import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
//   var input = <HTMLInputElement> document.getElementById('pac-input')
//   this.searchBox = new google.maps.places.SearchBox(input);
//   this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('pac-input'));
//   google.maps.event.addListener(this.searchBox, 'places_changed', function() {
//     console.log(self.searchBox)
//     var places = self.searchBox.getPlaces();
//     console.log(places)
//     var bounds = new google.maps.LatLngBounds();
//     var i, place;
//     for (i = 0; place = places[i]; i++) {
//       (function(place) {
//         var marker = new google.maps.Marker({
//
//           position: place.geometry.location
//         });
//         marker.bindTo('map', self.searchBox, 'map');
//         google.maps.event.addListener(marker, 'map_changed', function() {
//           if (!this.getMap()) {
//             this.unbindAll();
//           }
//         });
//         bounds.extend(place.geometry.location);
//
//
//       }(place));
//
//     }
//     self.map.fitBounds(bounds);
//     self.searchBox.set('map', self.map);
//     self.map.setZoom(Math.min(self.map.getZoom(),12));
//
//   });
// }



addVehicleInMap():void {
            var id= 0;
            var self= this;
            this.vehicleService.getVehicles().subscribe((vehicles)=>{
                console.log(vehicles)
                vehicles.map(function setMaker(vehicle) {
                    self.geocodeAddress(vehicle.retirementAddress,id,self.redMarker);
                    self.geocodeAddress(vehicle.returnAddress,id,self.blueMarker)
                    ++id
                })
              })
            }
geocodeAddress(address,id,markColor) {
              this.geocoder.geocode({ 'address': address }, function(results, status) {
                if (status === 'OK') {
                  var marker = new google.maps.Marker({
                    map: this.map,
                    position: results[0].geometry.location,
                    label:id,
                    icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 10, //tamaño
                            fillColor: markColor, //color de relleno
                            fillOpacity:1// opacidad del relleno
                          }
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
