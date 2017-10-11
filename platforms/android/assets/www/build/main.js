webpackJsonp([2],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(150);
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
    function ContactPage(alertCtrl, fire, navCtrl, googleplus, angularfire2, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.googleplus = googleplus;
        this.angularfire2 = angularfire2;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    ContactPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    ContactPage.prototype.signInUser = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
            .then(function (auth) {
            console.log('got some data', _this.fire.auth.currentUser);
            _this.alert('Success! You\'re logged in');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            // user is logged in
        })
            .catch(function (error) {
            console.log('got an error', error);
            _this.alert(error.message);
        });
        console.log('Would sign in with ', this.user.value, this.password.value);
    };
    ContactPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    return ContactPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], ContactPage.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], ContactPage.prototype, "password", void 0);
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/contact/contact.html"*/'<ion-content class=background>\n <h1>STUDENT CIRCLE</h1>\n  <ion-card>    \n    <ion-card-header>\n        LOGIN\n          <ion-card-content>\n            <ion-list no-lines>\n\n              <ion-item>\n                <ion-label floating>Username </ion-label>\n                <ion-input type="text" #username></ion-input>\n              </ion-item>\n              \n\n              <ion-item>\n                  <ion-label floating>Password</ion-label>\n                  <ion-input type="Password"  #password></ion-input>\n                </ion-item>\n\n\n              <!--ion-item>\n                  <p>Forgot Password?<a> &nbsp;&nbsp;&nbsp;&nbsp;Click here</a></p>\n                  </ion-item-->\n             \n                  <button ion-button (click)="signInUser()"color="danger"block outline>Login</button>\n\n            </ion-list>\n\n            <b>OR</b>  &nbsp;&nbsp;&nbsp;&nbsp; \n            \n           \n\n                <button ion-button color="primary"ion-left block> \n                <ion-icon name="logo-facebook"></ion-icon>\n                <div>&nbsp;&nbsp;&nbsp;&nbsp;  Login with Facebook</div></button>\n        \n                &nbsp;&nbsp;&nbsp;&nbsp; \n      \n                <button ion-button color="danger"ion-left block (click)="register()">\n                <ion-icon name="cube"></ion-icon>\n                <div>&nbsp;&nbsp;&nbsp;&nbsp; Register</div></button>\n         \n              <!--button ion-button color="danger"ion-left block (click)="register()">\n                 /// <ion-icon name="logo-googleplus"></ion-icon>\n                  //<div>&nbsp;&nbsp;&nbsp;&nbsp; Login with Google</div></button!-->\n           \n          </ion-card-content>\n\n    </ion-card-header>\n\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ContactPage);

// login(){
//  this.googleplus.login({
//    'webClientid':'306156894109-kk0k4oueqahu847aaqmghg776dkmucjq.apps.googleusercontent.com'
//    , 'offline':true})
//   .then(res=>{firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(suc=>{
//    alert("login success") 
//    }) .catch(ns=>{ alert("Not success") 
//  })
// })
// }
//}
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
            .then(function (auth) {
            console.log('got data ', auth);
            _this.alert('Registered!');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
        })
            .catch(function (error) {
            console.log('got an error ', error);
            _this.alert(error.message);
        });
        console.log('Would register user with ', this.user.value, this.password.value);
    };
    return RegisterPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "password", void 0);
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Create Account\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-list>\n\n  <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input type="text" #username></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" #password></ion-input>\n  </ion-item>\n  \n</ion-list>\n\n<div padding>\n  <button block ion-button (click)="registerUser()" item-left>Register</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-modal/event-modal.module": [
		574,
		0
	],
	"../pages/register/register.module": [
		573,
		1
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
webpackAsyncContext.id = 246;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ContactPage } from '../contact/contact';


var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        ///tab3Root = ContactPage;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__calendar_calendar__["a" /* CalendarPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/tabs/tabs.html"*/'<ion-tabs  color="primary">\n\n  <ion-tab [root]="tab2Root" tabTitle="Snap your notes here !" tabIcon="camera"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Assignment due dates" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab1Root" tabTitle="Notify Me" tabIcon="cube"></ion-tab>\n  \n\n</ion-tabs>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
    function AboutPage(fire, navCtrl, camera, alertCtrl, navParams, app) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    // constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    //this.email = fire.auth.currentUser.email;
    //}
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.logout = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
        //Api Token Logout 
        // this.fire.auth.signOut(); 
        // this.navCtrl.push( ContactPage );
    };
    // Remove API token 
    AboutPage.prototype.ngOnIntit = function () {
        this.photos = [];
    };
    AboutPage.prototype.takePhoto = function () {
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var selfieRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref('Pictures/user1/Picture.png');
            selfieRef
                .putString(imageData, 'base64', { contentType: 'image/png' })
                .then(function (savedPicture) {
                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a
                    .database()
                    .ref("users/user1/Picture")
                    .set(savedPicture.downloadURL);
            });
        });
        this.base64Image = 'data:image/jpeg;base64,' + 'imageData';
        this.photos.push(this.base64Image);
        this.photos.reverse();
        //deletePhoto(index){
        //  let confirm = this.alertCtrl.create({
        // title: 'Use this lightsaber?',
        // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
        // buttons: [
        //    {
        //   text: 'No',
        //  handler: () => {
        //    console.log('Disagree clicked');
        //  }
        //   },
        //   {
        //   text: 'Yes',
        //   handler: () => {
        //     console.log('Agree clicked');
        //    }
        //  }
        // ]
        // });
        //confirm.present();
        //this.photos.splice(index,1);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/about/about.html"*/'\n<ion-content class=background>\n  \n  \n  <ion-list >\n  <button ion-button color="primary" (click)="logout()">Logout</button>\n</ion-list>\n    <h1><ion-icon name="camera" item-left> </ion-icon>\n      Snap your notes here \n   </h1>\n   \n    <ion-card>    \n        <ion-card-header>\n    \n          {{email}}\n          \n        <ion-list style="padding-bottom:30px">\n            <ion-label> Feeling lazy to write down your notes? </ion-label>\n\n           <!-- <ion-item>\n              <ion-icon name="camera" item-left> </ion-icon>\n            Just take a picture of your notes!\n            </ion-item>-->\n\n          </ion-list>\n\n\n          <ion-list style="padding-bottom:30px">\n          <button ion-button full (click)="takePhoto()"  >  \n              <ion-icon name="camera"></ion-icon> &nbsp;&nbsp;  Simply capture your notes here!\n            </button>\n            <img [src]="base64Image" *ngIf="base64Image"/>\n          </ion-list>\n \n\n\n  <!--<ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor = "let photo of photos; let id = index">\n            <ion-card class="block">\n              <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n                <img [src]="base64Image" *ngIf="base64Image"/>\n            </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>-->\n\n\n</ion-card-header>\n\n\n  </ion-card>\n        </ion-content>\n\n        '/*ion-inline-end:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
        selector: 'page-calendar',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/calendar/calendar.html"*/'\n<ion-header>\n    <ion-navbar color="danger">\n        <ion-title > <ion-icon name=  "clipboard" item-left></ion-icon>\n          When is your assignment due ?\n        </ion-title>\n      </ion-navbar>\n\n    <ion-list> \n        <ion-item color="dark">\n          <ion-icon name="calendar" item-left></ion-icon>\n         Start planning and get your assignments done before the due date !\n         <ion-icon name="done-all" item-right></ion-icon> </ion-item>\n      </ion-list>\n\n    <ion-navbar color="primary">\n      <ion-title>\n        {{ viewTitle }}\n     \n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="addEvent()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content>\n  <calendar [eventSource]="eventSource"\n          [calendarMode]="calendar.mode"\n          [currentDate]="calendar.currentDate"\n          (onEventSelected)="onEventSelected($event)"\n          (onTitleChanged)="onViewTitleChanged($event)"\n    \n          (onTimeSelected)="onTimeSelected($event)"\n          step="30"\n          class="calendar">\n        </calendar>\n  </ion-content>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/calendar/calendar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(366);
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
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], HomePage.prototype, "uname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], HomePage.prototype, "password", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Set Notification</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--on-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content-->\n\n\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n        Notifications\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n   \n\n\n  <ion-content>\n   \n      <ion-list no-lines>\n   \n   <ion-item>\n            <ion-label>Notify me at: </ion-label>\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="notifyTime" (ionChange)="timeChange($event)"></ion-datetime>\n          </ion-item>\n   \n          <ion-item>\n              <ion-label>on the following days:</ion-label>\n          </ion-item>\n   \n          <ion-item *ngFor="let day of days">\n              <ion-label>{{day.title}}</ion-label>\n              <ion-checkbox [(ngModel)]="day.checked" color="primary"></ion-checkbox>\n          </ion-item>\n   \n      </ion-list>\n   \n  </ion-content>\n   \n  <ion-footer>\n   \n      <button (click)="addNotifications()" ion-button color="primary" full>Schedule</button>\n      <button (click)="cancelAll()" ion-button color="danger" full>Leave me alone!</button>\n   \n  </ion-footer>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(426);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_local_notifications__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic2_calendar__ = __webpack_require__(562);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var firebaseAuth = {
    apiKey: "AIzaSyDDDtpHEsRxhMyY7-sWh7JOgYuMftTTVfQ",
    authDomain: "studentassistant-38d8f.firebaseapp.com",
    databaseURL: "https://studentassistant-38d8f.firebaseio.com",
    projectId: "studentassistant-38d8f",
    storageBucket: "studentassistant-38d8f.appspot.com",
    messagingSenderId: "306156894109"
};
__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp(firebaseAuth);










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_local_notifications__["a" /* LocalNotifications */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 250,
	"./af.js": 250,
	"./ar": 251,
	"./ar-dz": 252,
	"./ar-dz.js": 252,
	"./ar-kw": 253,
	"./ar-kw.js": 253,
	"./ar-ly": 254,
	"./ar-ly.js": 254,
	"./ar-ma": 255,
	"./ar-ma.js": 255,
	"./ar-sa": 256,
	"./ar-sa.js": 256,
	"./ar-tn": 257,
	"./ar-tn.js": 257,
	"./ar.js": 251,
	"./az": 258,
	"./az.js": 258,
	"./be": 259,
	"./be.js": 259,
	"./bg": 260,
	"./bg.js": 260,
	"./bn": 261,
	"./bn.js": 261,
	"./bo": 262,
	"./bo.js": 262,
	"./br": 263,
	"./br.js": 263,
	"./bs": 264,
	"./bs.js": 264,
	"./ca": 265,
	"./ca.js": 265,
	"./cs": 266,
	"./cs.js": 266,
	"./cv": 267,
	"./cv.js": 267,
	"./cy": 268,
	"./cy.js": 268,
	"./da": 269,
	"./da.js": 269,
	"./de": 270,
	"./de-at": 271,
	"./de-at.js": 271,
	"./de-ch": 272,
	"./de-ch.js": 272,
	"./de.js": 270,
	"./dv": 273,
	"./dv.js": 273,
	"./el": 274,
	"./el.js": 274,
	"./en-au": 275,
	"./en-au.js": 275,
	"./en-ca": 276,
	"./en-ca.js": 276,
	"./en-gb": 277,
	"./en-gb.js": 277,
	"./en-ie": 278,
	"./en-ie.js": 278,
	"./en-nz": 279,
	"./en-nz.js": 279,
	"./eo": 280,
	"./eo.js": 280,
	"./es": 281,
	"./es-do": 282,
	"./es-do.js": 282,
	"./es.js": 281,
	"./et": 283,
	"./et.js": 283,
	"./eu": 284,
	"./eu.js": 284,
	"./fa": 285,
	"./fa.js": 285,
	"./fi": 286,
	"./fi.js": 286,
	"./fo": 287,
	"./fo.js": 287,
	"./fr": 288,
	"./fr-ca": 289,
	"./fr-ca.js": 289,
	"./fr-ch": 290,
	"./fr-ch.js": 290,
	"./fr.js": 288,
	"./fy": 291,
	"./fy.js": 291,
	"./gd": 292,
	"./gd.js": 292,
	"./gl": 293,
	"./gl.js": 293,
	"./gom-latn": 294,
	"./gom-latn.js": 294,
	"./he": 295,
	"./he.js": 295,
	"./hi": 296,
	"./hi.js": 296,
	"./hr": 297,
	"./hr.js": 297,
	"./hu": 298,
	"./hu.js": 298,
	"./hy-am": 299,
	"./hy-am.js": 299,
	"./id": 300,
	"./id.js": 300,
	"./is": 301,
	"./is.js": 301,
	"./it": 302,
	"./it.js": 302,
	"./ja": 303,
	"./ja.js": 303,
	"./jv": 304,
	"./jv.js": 304,
	"./ka": 305,
	"./ka.js": 305,
	"./kk": 306,
	"./kk.js": 306,
	"./km": 307,
	"./km.js": 307,
	"./kn": 308,
	"./kn.js": 308,
	"./ko": 309,
	"./ko.js": 309,
	"./ky": 310,
	"./ky.js": 310,
	"./lb": 311,
	"./lb.js": 311,
	"./lo": 312,
	"./lo.js": 312,
	"./lt": 313,
	"./lt.js": 313,
	"./lv": 314,
	"./lv.js": 314,
	"./me": 315,
	"./me.js": 315,
	"./mi": 316,
	"./mi.js": 316,
	"./mk": 317,
	"./mk.js": 317,
	"./ml": 318,
	"./ml.js": 318,
	"./mr": 319,
	"./mr.js": 319,
	"./ms": 320,
	"./ms-my": 321,
	"./ms-my.js": 321,
	"./ms.js": 320,
	"./my": 322,
	"./my.js": 322,
	"./nb": 323,
	"./nb.js": 323,
	"./ne": 324,
	"./ne.js": 324,
	"./nl": 325,
	"./nl-be": 326,
	"./nl-be.js": 326,
	"./nl.js": 325,
	"./nn": 327,
	"./nn.js": 327,
	"./pa-in": 328,
	"./pa-in.js": 328,
	"./pl": 329,
	"./pl.js": 329,
	"./pt": 330,
	"./pt-br": 331,
	"./pt-br.js": 331,
	"./pt.js": 330,
	"./ro": 332,
	"./ro.js": 332,
	"./ru": 333,
	"./ru.js": 333,
	"./sd": 334,
	"./sd.js": 334,
	"./se": 335,
	"./se.js": 335,
	"./si": 336,
	"./si.js": 336,
	"./sk": 337,
	"./sk.js": 337,
	"./sl": 338,
	"./sl.js": 338,
	"./sq": 339,
	"./sq.js": 339,
	"./sr": 340,
	"./sr-cyrl": 341,
	"./sr-cyrl.js": 341,
	"./sr.js": 340,
	"./ss": 342,
	"./ss.js": 342,
	"./sv": 343,
	"./sv.js": 343,
	"./sw": 344,
	"./sw.js": 344,
	"./ta": 345,
	"./ta.js": 345,
	"./te": 346,
	"./te.js": 346,
	"./tet": 347,
	"./tet.js": 347,
	"./th": 348,
	"./th.js": 348,
	"./tl-ph": 349,
	"./tl-ph.js": 349,
	"./tlh": 350,
	"./tlh.js": 350,
	"./tr": 351,
	"./tr.js": 351,
	"./tzl": 352,
	"./tzl.js": 352,
	"./tzm": 353,
	"./tzm-latn": 354,
	"./tzm-latn.js": 354,
	"./tzm.js": 353,
	"./uk": 355,
	"./uk.js": 355,
	"./ur": 356,
	"./ur.js": 356,
	"./uz": 357,
	"./uz-latn": 358,
	"./uz-latn.js": 358,
	"./uz.js": 357,
	"./vi": 359,
	"./vi.js": 359,
	"./x-pseudo": 360,
	"./x-pseudo.js": 360,
	"./yo": 361,
	"./yo.js": 361,
	"./zh-cn": 362,
	"./zh-cn.js": 362,
	"./zh-hk": 363,
	"./zh-hk.js": 363,
	"./zh-tw": 364,
	"./zh-tw.js": 364
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
webpackContext.id = 543;

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__ = __webpack_require__(128);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */];
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/corryhandayani/Desktop/studentreminder copy 2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[408]);
//# sourceMappingURL=main.js.map