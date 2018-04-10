webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'map',
        component: __WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* MapComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{ title }}\n</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Carpnd';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vehicles_vehicles_component__ = __webpack_require__("./src/app/vehicles/vehicles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transactions_transactions_component__ = __webpack_require__("./src/app/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orchestrator_orchestrator_component__ = __webpack_require__("./src/app/orchestrator/orchestrator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rentals_rentals_component__ = __webpack_require__("./src/app/rentals/rentals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__score_score_component__ = __webpack_require__("./src/app/score/score.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_4__vehicles_vehicles_component__["a" /* VehiclesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__transactions_transactions_component__["a" /* TransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__orchestrator_orchestrator_component__["a" /* OrchestratorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__rentals_rentals_component__["a" /* RentalsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__score_score_component__["a" /* ScoreComponent */],
                __WEBPACK_IMPORTED_MODULE_10__map_map_component__["a" /* MapComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyCMOl4awvlwM_nCyrYOnQZGPr-vAkO3hIY",
                    libraries: ["places"]
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 600px;\n  width: 90%;\n}\n"

/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n\n   <div class=\"row\">\n\n     <div class=\"col-md-4 card\">\n      <div class=\"card-block\">\n        <h5 class=\"card-title\">Distancia en metros</h5>\n        <p class=\"card-text\">{{ distanceBetweenPoints.value }} {{ distanceBetweenPoints.measure }}</p>\n        <h5 class=\"card-title\">Tiempo de Viaje</h5>\n        <p class=\"card-text\">{{ estimatedTravelTime.value }} {{ estimatedTravelTime.measure }}</p>\n        <button >Calcular!</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n      <agm-map\n        [latitude]=\"latitude\"\n        [longitude]=\"longitude\"\n        [zoom]=\"map.zoom\"\n        [disableDefaultUI]=\"true\"\n        [zoomControl]=\"false\"\n        (mapClick)=\"onMapClicked($event)\">\n\n        <agm-marker\n            *ngFor=\"let m of markers; let i = index\"\n            (markerClick)=\"clickedMarker(m.label, i)\"\n            [latitude]=\"m.lat\"\n            [longitude]=\"m.lng\"\n            [label]=\"m.label\"\n            [markerDraggable]=\"m.draggable\"\n            (dragEnd)=\"markerDragEnd(m, $event)\">\n\n          <agm-info-window>\n            <strong>{{m.label}}</strong>\n          </agm-info-window>\n\n        </agm-marker>\n\n\n\n        <agm-marker\n            [latitude]=\"addressTarget.latitude\"\n            [longitude]=\"addressTarget.longitude\"\n            [label]=\"addressTarget.label\"\n            [markerDraggable]=\"addressTarget.draggable\">\n\n          <agm-info-window>\n            <strong>{{addressTarget.label}}</strong>\n          </agm-info-window>\n        </agm-marker>\n\n      </agm-map>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core___ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core_services_google_maps_types__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-types.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
    }
    /**
     * Ng Initialization method
     */
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = "Mapa";
        // Default UNQ coordinates
        this.latitude = -34.706556;
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
        };
        // Markers
        this.markers = [];
        // Default Distance between points
        this.distanceBetweenPoints = {
            value: 0,
            measure: "meters"
        };
        // Default Estimated Travel Time
        this.estimatedTravelTime = {
            value: 0,
            measure: "minutes"
        };
        this.setCurrentPosition();
        //Loads the google maps API to retrieve the current position
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new __WEBPACK_IMPORTED_MODULE_2__agm_core_services_google_maps_types__["a" /* google */].maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    console.log(_this.ngZone);
                    // Gets the place result
                    var place = autocomplete.getPlace();
                    // Verifies result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // Sets current position on the map
                    var latitude = place.geometry.location.lat();
                    var longitude = place.geometry.location.lng();
                    _this.setSelectedPosition(latitude, longitude);
                    _this.getDistanceTo(latitude, longitude);
                    _this.setTravelTimeTo(latitude, longitude);
                });
            });
        });
    };
    MapComponent.prototype.setMarkerAt = function (latitude, longitude) {
        this.markers = [];
        this.markers.push({
            lat: latitude,
            lng: longitude,
            label: "Direccion de entrega "
        });
        this.getDistanceTo(latitude, longitude);
        this.setTravelTimeTo(latitude, longitude);
    };
    MapComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    MapComponent.prototype.onMapClicked = function ($event) {
        var coordinates = $event.coords;
        var latitude = coordinates.lat;
        var longitude = coordinates.lng;
        this.setMarkerAt(latitude, longitude);
    };
    MapComponent.prototype.markerDragEnd = function (m, $event) {
        console.log("dragEnd", m, $event);
    };
    MapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.setMarkerAt(position.coords.latitude, position.coords.longitude);
            });
        }
    };
    /**
     * Focus the map center to the given position
     */
    MapComponent.prototype.setSelectedPosition = function (latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.setMarkerAt(latitude, longitude);
    };
    /**
     * Class Functions
     */
    /**
     * @param {number} latitude
     * @param {number} longitude
     */
    MapComponent.prototype.getDistanceTo = function (latitude, longitude) {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            console.log(_this.mapsAPILoader);
            var pointA = new __WEBPACK_IMPORTED_MODULE_2__agm_core_services_google_maps_types__["a" /* google */].maps.LatLng(_this.addressTarget.latitude, _this.addressTarget.longitude);
            var pointB = new __WEBPACK_IMPORTED_MODULE_2__agm_core_services_google_maps_types__["a" /* google */].maps.LatLng(latitude, longitude);
            console.log(pointB);
            var distance = __WEBPACK_IMPORTED_MODULE_2__agm_core_services_google_maps_types__["a" /* google */].maps.geometry.spherical.computeDistanceBetween(pointA, pointB);
            _this.distanceBetweenPoints = _this.parseDistanceTo("meters", distance);
        });
    };
    /**
     * Given a valid measure and a distance returns a Distance object
     * @param {string} measure
     * @param {number} distance
     */
    MapComponent.prototype.parseDistanceTo = function (measure, distance) {
        var distanceMeasures = {
            meters: function (distance) {
                var distanceBetweenPoints = {
                    value: Math.round(distance),
                    measure: "meters"
                };
                return distanceBetweenPoints;
            }
        };
        return distanceMeasures[measure](distance);
    };
    /**
     * @param {number} latitude
     * @param {number} longitude
     */
    MapComponent.prototype.setTravelTimeTo = function (latitude, longitude) {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var directionsService = new __WEBPACK_IMPORTED_MODULE_2__agm_core_services_google_maps_types__["a" /* google */].maps.DirectionsService();
            var request = {
                origin: new __WEBPACK_IMPORTED_MODULE_2__agm_core_services_google_maps_types__["a" /* google */].maps.LatLng(_this.addressTarget.latitude, _this.addressTarget.longitude),
                destination: new __WEBPACK_IMPORTED_MODULE_2__agm_core_services_google_maps_types__["a" /* google */].maps.LatLng(latitude, longitude),
                travelMode: new __WEBPACK_IMPORTED_MODULE_2__agm_core_services_google_maps_types__["a" /* google */].maps.DirectionsTravelMode.DRIVING
            };
            directionsService.route(request, function (response, status) {
                if (status === "OK") {
                    var result = response.routes[0].legs[0];
                    _this.estimatedTravelTime = _this.parseTravelTime("minutes", result);
                }
            });
        });
    };
    MapComponent.prototype.parseTravelTime = function (measure, travelTime) {
        var result = {
            value: travelTime.duration.text,
            measure: ""
        };
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapComponent.prototype, "searchElementRef", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "map",
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__agm_core___["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/mock-users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERS; });
var USERS = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


/***/ }),

/***/ "./src/app/mock-vehicles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VEHICLES; });
var VEHICLES = [
    { id: 11, type: 'Mr. Nice', brand: 'uno' },
    { id: 12, type: 'Narco', brand: 'sdfk' },
    { id: 13, type: 'Bombasto', brand: 'fsdfa' },
    { id: 14, type: 'Celeritas', brand: 'fd' },
    { id: 15, type: 'Magneta', brand: 'drhgf' },
    { id: 16, type: 'RubberMan', brand: 'sgsdz' },
    { id: 17, type: 'Dynama', brand: 'dfhtd' },
    { id: 18, type: 'Dr IQ', brand: 'dghdb' },
    { id: 19, type: 'Magma', brand: 'hdfg' },
    { id: 20, type: 'Tornado', brand: 'sdh' }
];


/***/ }),

/***/ "./src/app/orchestrator/orchestrator.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orchestrator/orchestrator.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  orchestrator works!\n</p>\n"

/***/ }),

/***/ "./src/app/orchestrator/orchestrator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrchestratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrchestratorComponent = /** @class */ (function () {
    function OrchestratorComponent() {
    }
    OrchestratorComponent.prototype.ngOnInit = function () {
    };
    OrchestratorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-orchestrator',
            template: __webpack_require__("./src/app/orchestrator/orchestrator.component.html"),
            styles: [__webpack_require__("./src/app/orchestrator/orchestrator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrchestratorComponent);
    return OrchestratorComponent;
}());



/***/ }),

/***/ "./src/app/rentals/rentals.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rentals/rentals.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  rentals works!\n</p>\n"

/***/ }),

/***/ "./src/app/rentals/rentals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RentalsComponent = /** @class */ (function () {
    function RentalsComponent() {
    }
    RentalsComponent.prototype.ngOnInit = function () {
    };
    RentalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rentals',
            template: __webpack_require__("./src/app/rentals/rentals.component.html"),
            styles: [__webpack_require__("./src/app/rentals/rentals.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RentalsComponent);
    return RentalsComponent;
}());



/***/ }),

/***/ "./src/app/score/score.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/score/score.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  score works!\n</p>\n"

/***/ }),

/***/ "./src/app/score/score.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScoreComponent = /** @class */ (function () {
    function ScoreComponent() {
    }
    ScoreComponent.prototype.ngOnInit = function () {
    };
    ScoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-score',
            template: __webpack_require__("./src/app/score/score.component.html"),
            styles: [__webpack_require__("./src/app/score/score.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScoreComponent);
    return ScoreComponent;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  transactions works!\n</p>\n"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent() {
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transactions',
            template: __webpack_require__("./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__("./src/app/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.users {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.users li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.users li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.users li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.users .text {\n  position: relative;\n  top: -3px;\n}\n.users .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}"

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My Users</h2>\n<ul class=\"users\">\n  <li *ngFor=\"let user of users\"  [class.selected]=\"user === selectedUser\" (click)=\"onSelect(user)\">\n    <span class=\"badge\">{{user.id}}</span> {{user.name}}\n  </li>\n</ul>\n<div *ngIf=\"selectedUser\">\n  \n  <h2>{{ selectedUser.name | uppercase }} Details</h2>\n  <div><span>id: </span>{{selectedUser.id}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"selectedUser.name\" placeholder=\"name\">\n    </label>\n    <app-vehicles></app-vehicles>\n  </div>\n  \n</div>\n\n\n<!-- <h2>{{ user.name | uppercase }} Details</h2>\n<div><span>id: </span>{{user.id}}</div>\n<div><span>name: </span>{{user.name}}</div>\n<div>\n  <label>name:\n    <input [(ngModel)]=\"user.name\" placeholder=\"name\">\n  </label>\n</div> -->"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_users__ = __webpack_require__("./src/app/mock-users.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
        this.users = __WEBPACK_IMPORTED_MODULE_1__mock_users__["a" /* USERS */];
    }
    UsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html"),
            styles: [__webpack_require__("./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles.component.css":
/***/ (function(module, exports) {

module.exports = ".selected {\n  background-color: rgb(144, 228, 76) !important;\n  color: rgb(230, 113, 46);\n}\n.vehicles {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.vehicles li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: rgb(85, 154, 218);\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.vehicles li.selected:hover {\n  background-color: rgb(188, 81, 230) !important;\n  color: white;\n}\n.vehicles li:hover {\n  color: rgb(161, 83, 187);\n  background-color: rgb(213, 91, 91);\n  left: .1em;\n}\n.vehicles .text {\n  position: relative;\n  top: -3px;\n}\n.vehicles .badge {\n  display: inline-block;\n  font-size: small;\n  color: rgb(99, 174, 187);\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}"

/***/ }),

/***/ "./src/app/vehicles/vehicles.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Vehicles</h2>\n<ul class=\"vehicles\">\n  <li *ngFor=\"let vehicle of vehicles\" [class.selected]=\"vehicle === selectedVehicle\" (click)=\"onSelect(vehicle)\">\n    <span class=\"badge\">{{vehicle.id}}</span> {{vehicle.type}} {{vehicle.brand}}\n  </li>\n</ul>\n<!-- <div><span>id: </span>{{vehicle.id}}</div>\n<div><span>type: </span>{{vehicle.type}}</div>\n<div><span>brand: </span>{{vehicle.brand}}</div> -->"

/***/ }),

/***/ "./src/app/vehicles/vehicles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_vehicles__ = __webpack_require__("./src/app/mock-vehicles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehiclesComponent = /** @class */ (function () {
    function VehiclesComponent() {
        this.vehicles = __WEBPACK_IMPORTED_MODULE_1__mock_vehicles__["a" /* VEHICLES */];
        this.vehicle = {
            id: 1,
            type: 'moto',
            brand: 'kawa'
        };
    }
    VehiclesComponent.prototype.ngOnInit = function () {
    };
    VehiclesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vehicles',
            template: __webpack_require__("./src/app/vehicles/vehicles.component.html"),
            styles: [__webpack_require__("./src/app/vehicles/vehicles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VehiclesComponent);
    return VehiclesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map