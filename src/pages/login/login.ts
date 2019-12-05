import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BandsCOPage } from '../bands-co/bands-co';
import { ProfilePage } from '../profile/profile';
import { FindMemberPostPage } from '../find-member-post/find-member-post';
import {SignupPage} from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToBandsCO(params){
    if (!params) params = {};
    this.navCtrl.push(BandsCOPage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }goToFindMemberPost(params){
    if (!params) params = {};
    this.navCtrl.push(FindMemberPostPage);
  }
  goToSignup(){
    this.navCtrl.push(SignupPage);
  }
}
