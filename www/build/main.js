webpackJsonp([1],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-modal/event-modal.module": [
		397,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(313);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__["a" /* CalendarPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentassistant3 /src/pages/tabs/tabs.html"*/'<ion-tabs  color="primary">\n\n  <ion-tab [root]="tab2Root" tabTitle="Snap your notes here !" tabIcon="camera"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Assignment due dates" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact Us" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentassistant3 /src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(110);
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
        selector: 'page-about',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentassistant3 /src/pages/about/about.html"*/'\n\n  <ion-header>\n        <ion-navbar color="dark">\n            <ion-title > <ion-icon name="camera" item-left> </ion-icon>\n               Snap your notes here \n            </ion-title>\n          </ion-navbar>\n    \n        <ion-list>\n            <ion-list-header> Feeling lazy to take notes? </ion-list-header>\n            <ion-item>\n              <ion-icon name="camera" item-left> </ion-icon>\n            Just take a picture of your notes!\n            </ion-item>\n          </ion-list>\n\n\n      </ion-header>\n\n\n\n<ion-content padding>\n  <button ion-button full (click)="takePhoto()">  \n    <ion-icon name="camera"></ion-icon> &nbsp;&nbsp; Take A Note\n  </button>\n  <img [src]="base64Image" *ngIf="base64Image"/>\n\n  <!--<ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor = "let photo of photos; let id = index">\n            <ion-card class="block">\n              <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n                <img [src]="base64Image" *ngIf="base64Image"/>\n            </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>-->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentassistant3 /src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        selector: 'page-contact',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentassistant3 /src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentassistant3 /src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarPage = (function () {
    function CalendarPage(navCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
    }
    CalendarPage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'You need to start working on this assignment from: ' + start + '<br> <br> <br> Assignment will be due in: ' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    CalendarPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    return CalendarPage;
}());
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calendar',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentassistant3 /src/pages/calendar/calendar.html"*/'\n<ion-header>\n    <ion-navbar color="danger">\n        <ion-title > <ion-icon name=  "clipboard" item-left></ion-icon>\n          When is your assignment due ?\n        </ion-title>\n      </ion-navbar>\n\n    <ion-list> \n        <ion-item color="dark">\n          <ion-icon name="calendar" item-left></ion-icon>\n         Start planning and get your assignments done before the due date !\n         <ion-icon name="done-all" item-right></ion-icon> </ion-item>\n      </ion-list>\n\n    <ion-navbar color="primary">\n      <ion-title>\n        {{ viewTitle }}\n     \n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="addEvent()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content>\n  <calendar [eventSource]="eventSource"\n          [calendarMode]="calendar.mode"\n          [currentDate]="calendar.currentDate"\n          (onEventSelected)="onEventSelected($event)"\n          (onTitleChanged)="onViewTitleChanged($event)"\n    \n          (onTimeSelected)="onTimeSelected($event)"\n          step="30"\n          class="calendar">\n        </calendar>\n  </ion-content>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentassistant3 /src/pages/calendar/calendar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(314);
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
        console.log('ionViewDidLoad HomePage');
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentassistant3 /src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Set Notification</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--on-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content-->\n\n\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n        Notifications\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content>\n   \n      <ion-list no-lines>\n   \n          <ion-item>\n            <ion-label>Notify me at: </ion-label>\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="notifyTime" (ionChange)="timeChange($event)"></ion-datetime>\n          </ion-item>\n   \n          <ion-item>\n              <ion-label>on the following days:</ion-label>\n          </ion-item>\n   \n          <ion-item *ngFor="let day of days">\n              <ion-label>{{day.title}}</ion-label>\n              <ion-checkbox [(ngModel)]="day.checked" color="primary"></ion-checkbox>\n          </ion-item>\n   \n      </ion-list>\n   \n  </ion-content>\n   \n  <ion-footer>\n   \n      <button (click)="addNotifications()" ion-button color="primary" full>Schedule</button>\n      <button (click)="cancelAll()" ion-button color="danger" full>Leave me alone!</button>\n   \n  </ion-footer>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentassistant3 /src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(334);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_local_notifications__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic2_calendar__ = __webpack_require__(386);
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
            __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_local_notifications__["a" /* LocalNotifications */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 153,
	"./af.js": 153,
	"./ar": 154,
	"./ar-dz": 155,
	"./ar-dz.js": 155,
	"./ar-kw": 156,
	"./ar-kw.js": 156,
	"./ar-ly": 157,
	"./ar-ly.js": 157,
	"./ar-ma": 158,
	"./ar-ma.js": 158,
	"./ar-sa": 159,
	"./ar-sa.js": 159,
	"./ar-tn": 160,
	"./ar-tn.js": 160,
	"./ar.js": 154,
	"./az": 161,
	"./az.js": 161,
	"./be": 162,
	"./be.js": 162,
	"./bg": 163,
	"./bg.js": 163,
	"./bn": 164,
	"./bn.js": 164,
	"./bo": 165,
	"./bo.js": 165,
	"./br": 166,
	"./br.js": 166,
	"./bs": 167,
	"./bs.js": 167,
	"./ca": 168,
	"./ca.js": 168,
	"./cs": 169,
	"./cs.js": 169,
	"./cv": 170,
	"./cv.js": 170,
	"./cy": 171,
	"./cy.js": 171,
	"./da": 172,
	"./da.js": 172,
	"./de": 173,
	"./de-at": 174,
	"./de-at.js": 174,
	"./de-ch": 175,
	"./de-ch.js": 175,
	"./de.js": 173,
	"./dv": 176,
	"./dv.js": 176,
	"./el": 177,
	"./el.js": 177,
	"./en-au": 178,
	"./en-au.js": 178,
	"./en-ca": 179,
	"./en-ca.js": 179,
	"./en-gb": 180,
	"./en-gb.js": 180,
	"./en-ie": 181,
	"./en-ie.js": 181,
	"./en-nz": 182,
	"./en-nz.js": 182,
	"./eo": 183,
	"./eo.js": 183,
	"./es": 184,
	"./es-do": 185,
	"./es-do.js": 185,
	"./es.js": 184,
	"./et": 186,
	"./et.js": 186,
	"./eu": 187,
	"./eu.js": 187,
	"./fa": 188,
	"./fa.js": 188,
	"./fi": 189,
	"./fi.js": 189,
	"./fo": 190,
	"./fo.js": 190,
	"./fr": 191,
	"./fr-ca": 192,
	"./fr-ca.js": 192,
	"./fr-ch": 193,
	"./fr-ch.js": 193,
	"./fr.js": 191,
	"./fy": 194,
	"./fy.js": 194,
	"./gd": 195,
	"./gd.js": 195,
	"./gl": 196,
	"./gl.js": 196,
	"./gom-latn": 197,
	"./gom-latn.js": 197,
	"./he": 198,
	"./he.js": 198,
	"./hi": 199,
	"./hi.js": 199,
	"./hr": 200,
	"./hr.js": 200,
	"./hu": 201,
	"./hu.js": 201,
	"./hy-am": 202,
	"./hy-am.js": 202,
	"./id": 203,
	"./id.js": 203,
	"./is": 204,
	"./is.js": 204,
	"./it": 205,
	"./it.js": 205,
	"./ja": 206,
	"./ja.js": 206,
	"./jv": 207,
	"./jv.js": 207,
	"./ka": 208,
	"./ka.js": 208,
	"./kk": 209,
	"./kk.js": 209,
	"./km": 210,
	"./km.js": 210,
	"./kn": 211,
	"./kn.js": 211,
	"./ko": 212,
	"./ko.js": 212,
	"./ky": 213,
	"./ky.js": 213,
	"./lb": 214,
	"./lb.js": 214,
	"./lo": 215,
	"./lo.js": 215,
	"./lt": 216,
	"./lt.js": 216,
	"./lv": 217,
	"./lv.js": 217,
	"./me": 218,
	"./me.js": 218,
	"./mi": 219,
	"./mi.js": 219,
	"./mk": 220,
	"./mk.js": 220,
	"./ml": 221,
	"./ml.js": 221,
	"./mr": 222,
	"./mr.js": 222,
	"./ms": 223,
	"./ms-my": 224,
	"./ms-my.js": 224,
	"./ms.js": 223,
	"./my": 225,
	"./my.js": 225,
	"./nb": 226,
	"./nb.js": 226,
	"./ne": 227,
	"./ne.js": 227,
	"./nl": 228,
	"./nl-be": 229,
	"./nl-be.js": 229,
	"./nl.js": 228,
	"./nn": 230,
	"./nn.js": 230,
	"./pa-in": 231,
	"./pa-in.js": 231,
	"./pl": 232,
	"./pl.js": 232,
	"./pt": 233,
	"./pt-br": 234,
	"./pt-br.js": 234,
	"./pt.js": 233,
	"./ro": 235,
	"./ro.js": 235,
	"./ru": 236,
	"./ru.js": 236,
	"./sd": 237,
	"./sd.js": 237,
	"./se": 238,
	"./se.js": 238,
	"./si": 239,
	"./si.js": 239,
	"./sk": 240,
	"./sk.js": 240,
	"./sl": 241,
	"./sl.js": 241,
	"./sq": 242,
	"./sq.js": 242,
	"./sr": 243,
	"./sr-cyrl": 244,
	"./sr-cyrl.js": 244,
	"./sr.js": 243,
	"./ss": 245,
	"./ss.js": 245,
	"./sv": 246,
	"./sv.js": 246,
	"./sw": 247,
	"./sw.js": 247,
	"./ta": 248,
	"./ta.js": 248,
	"./te": 249,
	"./te.js": 249,
	"./tet": 250,
	"./tet.js": 250,
	"./th": 251,
	"./th.js": 251,
	"./tl-ph": 252,
	"./tl-ph.js": 252,
	"./tlh": 253,
	"./tlh.js": 253,
	"./tr": 254,
	"./tr.js": 254,
	"./tzl": 255,
	"./tzl.js": 255,
	"./tzm": 256,
	"./tzm-latn": 257,
	"./tzm-latn.js": 257,
	"./tzm.js": 256,
	"./uk": 258,
	"./uk.js": 258,
	"./ur": 259,
	"./ur.js": 259,
	"./uz": 260,
	"./uz-latn": 261,
	"./uz-latn.js": 261,
	"./uz.js": 260,
	"./vi": 262,
	"./vi.js": 262,
	"./x-pseudo": 263,
	"./x-pseudo.js": 263,
	"./yo": 264,
	"./yo.js": 264,
	"./zh-cn": 265,
	"./zh-cn.js": 265,
	"./zh-hk": 266,
	"./zh-hk.js": 266,
	"./zh-tw": 267,
	"./zh-tw.js": 267
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
webpackContext.id = 367;

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(309);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentassistant3 /src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentassistant3 /src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[315]);
//# sourceMappingURL=main.js.map