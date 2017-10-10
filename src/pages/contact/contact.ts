import { Component, ViewChild } from '@angular/core';
import {  NavParams,NavController, AlertController  } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AboutPage } from '../about/about';
import { CalendarPage } from '../calendar/calendar';
import { TabsPage} from '../tabs/tabs';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	email: string;
  
  @ViewChild('username') user;
	@ViewChild('password') password;

  constructor(private  alertCtrl: AlertController,private fire:AngularFireAuth, public navCtrl: NavController,public googleplus:GooglePlus,public angularfire2:AngularFireModule,public navParams: NavParams) {
  }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }


    alert(message: string) {
      this.alertCtrl.create({
        title: 'Info!',
        subTitle: message,
        buttons: ['OK']
      }).present();
    }
  

    signInUser() {
      this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
      .then( auth => {
        console.log('got some data', this.fire.auth.currentUser);
        this.alert('Success! You\'re logged in');
    this.navCtrl.push( TabsPage );
       
       // user is logged in
      })
      .catch( error => {
        console.log('got an error', error);
        this.alert(error.message);
      })
      console.log('Would sign in with ', this.user.value, this.password.value);
    }


    register() {
      this.navCtrl.push(RegisterPage);
    }
  
  }

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
