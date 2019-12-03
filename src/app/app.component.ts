import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { NgNhPPage } from '../pages/ng-nh-p/ng-nh-p';
import { BITuyNThNhViNPage } from '../pages/b-ituy-nth-nh-vi-n/b-ituy-nth-nh-vi-n';
import { ChNhSAHSPage } from '../pages/ch-nh-sahs/ch-nh-sahs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
    // rootPage:any = NgNhPPage;
    rootPage:any = ChNhSAHSPage;
   

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}
