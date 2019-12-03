import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NgNhPPage } from '../pages/ng-nh-p/ng-nh-p';
import { NgKPage } from '../pages/ng-k/ng-k';
import { BandsCOPage } from '../pages/bands-co/bands-co';
import { HSPage } from '../pages/h-s/h-s';
import { ChNhSAHSPage } from '../pages/ch-nh-sahs/ch-nh-sahs';
import { NgBITuyNBandPage } from '../pages/ng-bituy-nband/ng-bituy-nband';
import { NgTuyNBandPage } from '../pages/ng-tuy-nband/ng-tuy-nband';
import { NgTuyNThNhViNPage } from '../pages/ng-tuy-nth-nh-vi-n/ng-tuy-nth-nh-vi-n';
import { BITuyNThNhViNPage } from '../pages/b-ituy-nth-nh-vi-n/b-ituy-nth-nh-vi-n';
import { NgGiaNhPNhMPage } from '../pages/ng-gia-nh-pnh-m/ng-gia-nh-pnh-m';
import { GiaNhPNhMPage } from '../pages/gia-nh-pnh-m/gia-nh-pnh-m';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    NgNhPPage,
    NgKPage,
    BandsCOPage,
    HSPage,
    ChNhSAHSPage,
    NgBITuyNBandPage,
    NgTuyNBandPage,
    NgTuyNThNhViNPage,
    BITuyNThNhViNPage,
    NgGiaNhPNhMPage,
    GiaNhPNhMPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NgNhPPage,
    NgKPage,
    BandsCOPage,
    HSPage,
    ChNhSAHSPage,
    NgBITuyNBandPage,
    NgTuyNBandPage,
    NgTuyNThNhViNPage,
    BITuyNThNhViNPage,
    NgGiaNhPNhMPage,
    GiaNhPNhMPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}