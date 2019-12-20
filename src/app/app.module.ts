import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { BandsCOPage } from '../pages/bands-co/bands-co';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { FindBandPage } from '../pages/find-band/find-band';
import { FindBandPostPage } from '../pages/find-band-post/find-band-post';
import { FindMemberPage } from '../pages/find-member/find-member';
import { FindMemberPostPage } from '../pages/find-member-post/find-member-post';
import { JoinBandPage } from '../pages/join-band/join-band';
import { JoinBandPostPage } from '../pages/join-band-post/join-band-post';
import {MenuPage} from '../pages/menu/menu';
import { HttpModule } from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service';
import {RestProvider} from '../providers/rest';
import {Data} from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    BandsCOPage,
    ProfilePage,
    EditProfilePage,
    FindBandPage,
    FindBandPostPage,
    FindMemberPage,
    FindMemberPostPage,
    JoinBandPage,
    JoinBandPostPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    BandsCOPage,
    ProfilePage,
    EditProfilePage,
    FindBandPage,
    FindBandPostPage,
    FindMemberPage,
    FindMemberPostPage,
    JoinBandPage,
    JoinBandPostPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceProvider,
    RestProvider,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}