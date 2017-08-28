import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public photos: any;
  public base64Image: string;
  constructor(public navCtrl: NavController,private camera: Camera,private alertCtrl: AlertController) {

  }
    ngOnIntit(){
      this.photos= [];

    }

    takePhoto(){
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
       this.photos.push(this.base64Image);
       this.photos.reverse();


      }, (err) => {
       // Handle error
      });

    }

    deletePhoto(index){

       let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
      //this.photos.splice(index,1);
    }

}
