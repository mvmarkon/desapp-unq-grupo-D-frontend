import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule, MapsAPILoader } from "@agm/core/";
//import { google } from "@agm/core/services/google-maps-types";
@Component({
  selector: "map",
  templateUrl: "map.component.html",
  styleUrls: ["map.component.css"],
})
export class MapComponent implements OnInit {

  public title: string;
  public latitude: number;
  public longitude: number;
  public map;
  public addressTarget;
  public markers: Array<marker>;
  public searchControl: FormControl;
  public distanceBetweenPoints: Distance;
  public estimatedTravelTime: TravelTime;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  /**
   * Ng Initialization method
   */
  ngOnInit() {

    this.title = "Mapa";

    // Default UNQ coordinates
    this.latitude  = -34.706556;
    this.longitude = -58.2807111;

    // Main Map
    this.map = {
      zoom: 13
    };

    //
    this.addressTarget = {
      latitude: -34.706556,
      longitude: -58.2807111,
      label: "Direccion de retiro"
    }

    // Markers
    this.markers = [];

    // Default Distance between points
    this.distanceBetweenPoints = {
      value: 0,
      measure: "meters"
    }

    // Default Estimated Travel Time
    this.estimatedTravelTime = {
      value: 0,
      measure: "minutes"
    }

    this.searchControl = new FormControl();

    this.setCurrentPosition();

    //Loads the google maps API to retrieve the current position
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          console.log(this.ngZone)
          // Gets the place result
          let place = autocomplete.getPlace();

          // Verifies result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // Sets current position on the map
          let latitude = place.geometry.location.lat();
          let longitude = place.geometry.location.lng();
          this.setSelectedPosition(latitude, longitude);
          this.getDistanceTo(latitude, longitude);
          this.setTravelTimeTo(latitude, longitude);
         });
      })
    });
  }



  setMarkerAt(latitude: number, longitude: number) {
    this.markers = [];
    this.markers.push({
      lat: latitude,
      lng: longitude,
      label: "Direccion de entrega "
    });
    this.getDistanceTo(latitude, longitude);
    this.setTravelTimeTo(latitude, longitude);
  }


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  onMapClicked($event) {
    let coordinates = $event.coords;
    let latitude = coordinates.lat;
    let longitude = coordinates.lng;
    this.setMarkerAt(latitude, longitude);
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.setMarkerAt(position.coords.latitude, position.coords.longitude);
      });
    }
  }

  /**
   * Focus the map center to the given position
   */
  private setSelectedPosition(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.setMarkerAt(latitude, longitude);
  }

/**
 * Class Functions
 */

 /**
  * @param {number} latitude
  * @param {number} longitude
  */
  getDistanceTo(latitude, longitude){
    this.mapsAPILoader.load().then(() => {
      console.log(this.mapsAPILoader)
      let pointA = new google.maps.LatLng(this.addressTarget.latitude, this.addressTarget.longitude);
      let pointB = new google.maps.LatLng(latitude, longitude);
      console.log(pointB)
      let distance = google.maps.geometry.spherical.computeDistanceBetween(pointA, pointB);
      this.distanceBetweenPoints = this.parseDistanceTo("meters", distance);
    })
  }

  /**
   * Given a valid measure and a distance returns a Distance object
   * @param {string} measure
   * @param {number} distance
   */
  parseDistanceTo(measure, distance) {

    let distanceMeasures = {
      meters: function(distance) {
        let distanceBetweenPoints = {
          value: Math.round(distance),
          measure: "meters"
        };
        return distanceBetweenPoints;
      }
    }

    return distanceMeasures[measure](distance);
  }

  /**
   * @param {number} latitude
   * @param {number} longitude
   */
  setTravelTimeTo(latitude, longitude) {
    this.mapsAPILoader.load().then( () => {
      var directionsService = new google.maps.DirectionsService();
      var request = {
        origin: new google.maps.LatLng(this.addressTarget.latitude, this.addressTarget.longitude),
        destination: new google.maps.LatLng(latitude, longitude),

        travelMode: new google.maps.DirectionsTravelMode.DRIVING
      };

      directionsService.route(request, (response, status) => {
        if(status === "OK") {
          var result = response.routes[0].legs[0];
          this.estimatedTravelTime = this.parseTravelTime("minutes", result);
        }
      });
    });
  }


  parseTravelTime(measure, travelTime) {
    let result = {
      value: travelTime.duration.text,
      measure: ""
    }
    return result;
  }

}
// function getDistanceAndTimeToEndPoint(){
// var service = new google.maps.DistanceMatrixService;
//         service.getDistanceMatrix({
//           origins: [origin1],
//           destinations: [],
//           travelMode: 'DRIVING',
//           unitSystem: google.maps.UnitSystem.METRIC,
//           avoidHighways: false,
//           avoidTolls: false
//         }, function(response, status) {
//           if (status !== 'OK') {
//             alert('Error was: ' + status);
//           } else {
//             var originList = response.originAddresses;
//             var destinationList = response.destinationAddresses;
//             var outputDiv = document.getElementById('output');
//             outputDiv.innerHTML = '';
//             deleteMarkers(markersArray);
//
//   }

interface marker {
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
