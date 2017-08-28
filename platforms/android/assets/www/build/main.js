webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentassistant2/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Take a Note" tabIcon="camera"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentassistant2/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, camera, alertCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
    }
    AboutPage.prototype.ngOnIntit = function () {
        this.photos = [];
    };
    AboutPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
        }, function (err) {
            // Handle error
        });
    };
    AboutPage.prototype.deletePhoto = function (index) {
        var confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
        //this.photos.splice(index,1);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentassistant2/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Take a Note\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n<ion-header>\n  <ion-navbar>\n    <ion-title>Taking Notes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full (click)="takePhoto()">  \n    <ion-icon name="camera"></ion-icon> &nbsp;&nbsp; Take A Note\n  </button>\n  <img [src]="base64Image" *ngIf="base64Image"/>\n\n  <!--<ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor = "let photo of photos; let id = index">\n            <ion-card class="block">\n              <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n                <img [src]="base64Image" *ngIf="base64Image"/>\n            </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>-->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentassistant2/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentassistant2/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentassistant2/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, platform, alertCtrl, localNotifications) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.localNotifications = localNotifications;
        this.notifications = [];
        this.notifyTime = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date()).format();
        this.chosenHours = new Date().getHours();
        this.chosenMinutes = new Date().getMinutes();
        this.days = [
            { title: 'Monday', dayCode: 1, checked: false },
            { title: 'Tuesday', dayCode: 2, checked: false },
            { title: 'Wednesday', dayCode: 3, checked: false },
            { title: 'Thursday', dayCode: 4, checked: false },
            { title: 'Friday', dayCode: 5, checked: false },
            { title: 'Saturday', dayCode: 6, checked: false },
            { title: 'Sunday', dayCode: 0, checked: false }
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.timeChange = function (time) {
        this.chosenHours = time.hour.value;
        this.chosenMinutes = time.minute.value;
    };
    HomePage.prototype.addNotifications = function () {
        var _this = this;
        var currentDate = new Date();
        var currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.
        for (var _i = 0, _a = this.days; _i < _a.length; _i++) {
            var day = _a[_i];
            if (day.checked) {
                var firstNotificationTime = new Date();
                var dayDifference = day.dayCode - currentDay;
                if (dayDifference < 0) {
                    dayDifference = dayDifference + 7; // for cases where the day is in the following week
                }
                firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
                firstNotificationTime.setHours(this.chosenHours);
                firstNotificationTime.setMinutes(this.chosenMinutes);
                var notification = {
                    id: day.dayCode,
                    title: 'Hey!',
                    text: 'You just got notified :)',
                    at: firstNotificationTime,
                    every: 'week'
                };
                this.localNotifications.schedule(notification);
            }
        }
        if (this.platform.is('cordova')) {
            // Cancel any existing notifications
            this.localNotifications.cancelAll().then(function () {
                // Schedule the new notifications
                _this.localNotifications.schedule(_this.notifications);
                _this.notifications = [];
                var alert = _this.alertCtrl.create({
                    title: 'Notifications set',
                    buttons: ['Ok']
                });
                alert.present();
            });
        }
    };
    HomePage.prototype.cancelAll = function () {
        this.localNotifications.cancelAll();
        var alert = this.alertCtrl.create({
            title: 'Notifications cancelled',
            buttons: ['Ok']
        });
        alert.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentassistant2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Set Notification</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--on-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content-->\n\n\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n        Notifications\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content>\n   \n      <ion-list no-lines>\n   \n          <ion-item>\n            <ion-label>Notify me at: </ion-label>\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="notifyTime" (ionChange)="timeChange($event)"></ion-datetime>\n          </ion-item>\n   \n          <ion-item>\n              <ion-label>on the following days:</ion-label>\n          </ion-item>\n   \n          <ion-item *ngFor="let day of days">\n              <ion-label>{{day.title}}</ion-label>\n              <ion-checkbox [(ngModel)]="day.checked" color="primary"></ion-checkbox>\n          </ion-item>\n   \n      </ion-list>\n   \n  </ion-content>\n   \n  <ion-footer>\n   \n      <button (click)="addNotifications()" ion-button color="primary" full>Schedule</button>\n      <button (click)="cancelAll()" ion-button color="danger" full>Leave me alone!</button>\n   \n  </ion-footer>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentassistant2/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(332);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__["a" /* LocalNotifications */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentassistant2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentassistant2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 197,
	"./af.js": 197,
	"./ar": 198,
	"./ar-dz": 199,
	"./ar-dz.js": 199,
	"./ar-kw": 200,
	"./ar-kw.js": 200,
	"./ar-ly": 201,
	"./ar-ly.js": 201,
	"./ar-ma": 202,
	"./ar-ma.js": 202,
	"./ar-sa": 203,
	"./ar-sa.js": 203,
	"./ar-tn": 204,
	"./ar-tn.js": 204,
	"./ar.js": 198,
	"./az": 205,
	"./az.js": 205,
	"./be": 206,
	"./be.js": 206,
	"./bg": 207,
	"./bg.js": 207,
	"./bn": 208,
	"./bn.js": 208,
	"./bo": 209,
	"./bo.js": 209,
	"./br": 210,
	"./br.js": 210,
	"./bs": 211,
	"./bs.js": 211,
	"./ca": 212,
	"./ca.js": 212,
	"./cs": 213,
	"./cs.js": 213,
	"./cv": 214,
	"./cv.js": 214,
	"./cy": 215,
	"./cy.js": 215,
	"./da": 216,
	"./da.js": 216,
	"./de": 217,
	"./de-at": 218,
	"./de-at.js": 218,
	"./de-ch": 219,
	"./de-ch.js": 219,
	"./de.js": 217,
	"./dv": 220,
	"./dv.js": 220,
	"./el": 221,
	"./el.js": 221,
	"./en-au": 222,
	"./en-au.js": 222,
	"./en-ca": 223,
	"./en-ca.js": 223,
	"./en-gb": 224,
	"./en-gb.js": 224,
	"./en-ie": 225,
	"./en-ie.js": 225,
	"./en-nz": 226,
	"./en-nz.js": 226,
	"./eo": 227,
	"./eo.js": 227,
	"./es": 228,
	"./es-do": 229,
	"./es-do.js": 229,
	"./es.js": 228,
	"./et": 230,
	"./et.js": 230,
	"./eu": 231,
	"./eu.js": 231,
	"./fa": 232,
	"./fa.js": 232,
	"./fi": 233,
	"./fi.js": 233,
	"./fo": 234,
	"./fo.js": 234,
	"./fr": 235,
	"./fr-ca": 236,
	"./fr-ca.js": 236,
	"./fr-ch": 237,
	"./fr-ch.js": 237,
	"./fr.js": 235,
	"./fy": 238,
	"./fy.js": 238,
	"./gd": 239,
	"./gd.js": 239,
	"./gl": 240,
	"./gl.js": 240,
	"./gom-latn": 241,
	"./gom-latn.js": 241,
	"./he": 242,
	"./he.js": 242,
	"./hi": 243,
	"./hi.js": 243,
	"./hr": 244,
	"./hr.js": 244,
	"./hu": 245,
	"./hu.js": 245,
	"./hy-am": 246,
	"./hy-am.js": 246,
	"./id": 247,
	"./id.js": 247,
	"./is": 248,
	"./is.js": 248,
	"./it": 249,
	"./it.js": 249,
	"./ja": 250,
	"./ja.js": 250,
	"./jv": 251,
	"./jv.js": 251,
	"./ka": 252,
	"./ka.js": 252,
	"./kk": 253,
	"./kk.js": 253,
	"./km": 254,
	"./km.js": 254,
	"./kn": 255,
	"./kn.js": 255,
	"./ko": 256,
	"./ko.js": 256,
	"./ky": 257,
	"./ky.js": 257,
	"./lb": 258,
	"./lb.js": 258,
	"./lo": 259,
	"./lo.js": 259,
	"./lt": 260,
	"./lt.js": 260,
	"./lv": 261,
	"./lv.js": 261,
	"./me": 262,
	"./me.js": 262,
	"./mi": 263,
	"./mi.js": 263,
	"./mk": 264,
	"./mk.js": 264,
	"./ml": 265,
	"./ml.js": 265,
	"./mr": 266,
	"./mr.js": 266,
	"./ms": 267,
	"./ms-my": 268,
	"./ms-my.js": 268,
	"./ms.js": 267,
	"./my": 269,
	"./my.js": 269,
	"./nb": 270,
	"./nb.js": 270,
	"./ne": 271,
	"./ne.js": 271,
	"./nl": 272,
	"./nl-be": 273,
	"./nl-be.js": 273,
	"./nl.js": 272,
	"./nn": 274,
	"./nn.js": 274,
	"./pa-in": 275,
	"./pa-in.js": 275,
	"./pl": 276,
	"./pl.js": 276,
	"./pt": 277,
	"./pt-br": 278,
	"./pt-br.js": 278,
	"./pt.js": 277,
	"./ro": 279,
	"./ro.js": 279,
	"./ru": 280,
	"./ru.js": 280,
	"./sd": 281,
	"./sd.js": 281,
	"./se": 282,
	"./se.js": 282,
	"./si": 283,
	"./si.js": 283,
	"./sk": 284,
	"./sk.js": 284,
	"./sl": 285,
	"./sl.js": 285,
	"./sq": 286,
	"./sq.js": 286,
	"./sr": 287,
	"./sr-cyrl": 288,
	"./sr-cyrl.js": 288,
	"./sr.js": 287,
	"./ss": 289,
	"./ss.js": 289,
	"./sv": 290,
	"./sv.js": 290,
	"./sw": 291,
	"./sw.js": 291,
	"./ta": 292,
	"./ta.js": 292,
	"./te": 293,
	"./te.js": 293,
	"./tet": 294,
	"./tet.js": 294,
	"./th": 295,
	"./th.js": 295,
	"./tl-ph": 296,
	"./tl-ph.js": 296,
	"./tlh": 297,
	"./tlh.js": 297,
	"./tr": 298,
	"./tr.js": 298,
	"./tzl": 299,
	"./tzl.js": 299,
	"./tzm": 300,
	"./tzm-latn": 301,
	"./tzm-latn.js": 301,
	"./tzm.js": 300,
	"./uk": 302,
	"./uk.js": 302,
	"./ur": 303,
	"./ur.js": 303,
	"./uz": 304,
	"./uz-latn": 305,
	"./uz-latn.js": 305,
	"./uz.js": 304,
	"./vi": 306,
	"./vi.js": 306,
	"./x-pseudo": 307,
	"./x-pseudo.js": 307,
	"./yo": 308,
	"./yo.js": 308,
	"./zh-cn": 309,
	"./zh-cn.js": 309,
	"./zh-hk": 310,
	"./zh-hk.js": 310,
	"./zh-tw": 311,
	"./zh-tw.js": 311
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 383;

/***/ })

},[313]);
//# sourceMappingURL=main.js.map