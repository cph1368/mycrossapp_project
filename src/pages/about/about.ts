import { Component, ViewChild  } from '@angular/core';
import { NavController,App, AlertController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ContactPage } from '../contact/contact';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {



  
   // constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
     //this.email = fire.auth.currentUser.email;
    //}
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad AboutPage');
    }
  

  public photos: any;
  public base64Image: string;
  
  constructor(private fire: AngularFireAuth,public navCtrl: NavController,private camera: Camera,private alertCtrl: AlertController,public navParams: NavParams,public app: App) {
   
  }


  logout(): void {

    const root = this.app.getRootNav();
    root.popToRoot();
    //Api Token Logout 
  // this.fire.auth.signOut(); 
  // this.navCtrl.push( ContactPage );

}

   // Remove API token 
 
    ngOnIntit(){
      this.photos= [];

    }

    takePhoto(){
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.PNG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
       const selfieRef = firebase.storage().ref('Pictures/user1/Picture.png');
       selfieRef
         .putString(imageData, 'base64', {contentType: 'image/png'})
         .then(savedPicture => {
           firebase
             .database()
             .ref(`users/user1/Picture`)
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
    }

}
