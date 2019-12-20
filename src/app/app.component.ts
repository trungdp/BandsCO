import { EditProfilePage } from './../pages/edit-profile/edit-profile';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { LoginPage } from '../pages/login/login';
import {BandsCOPage} from '../pages/bands-co/bands-co';
import {Data} from '../providers/data';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
    rootPage:any = EditProfilePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dataService: Data) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      dataService.deleteFromStorage();
      dataService.start();
    });
  }
  
}
