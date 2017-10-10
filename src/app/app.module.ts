import { NgModule, ErrorHandler } from '@angular/core';
import {Camera} from '@ionic-native/camera';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import firebase from 'firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

 const firebaseAuth={
  apiKey: "AIzaSyDDDtpHEsRxhMyY7-sWh7JOgYuMftTTVfQ",
  authDomain: "studentassistant-38d8f.firebaseapp.com",
  databaseURL: "https://studentassistant-38d8f.firebaseio.com",
  projectId: "studentassistant-38d8f",
  storageBucket: "studentassistant-38d8f.appspot.com",
  messagingSenderId: "306156894109"
}
firebase.initializeApp(firebaseAuth)

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EventModalPage } from '../pages/event-modal/event-modal';
import { CalendarPage } from '../pages/calendar/calendar';
import { RegisterPage } from '../pages/register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    RegisterPage,
    CalendarPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseAuth)
   
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    RegisterPage,
    CalendarPage,
   
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}
