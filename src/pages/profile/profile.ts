import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BandsCOPage} from '../bands-co/bands-co';
import {MenuPage} from '../menu/menu';
import {EditProfilePage} from '../edit-profile/edit-profile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {
  }
  //for footer 
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(BandsCOPage);
  }
  goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
  //-----------
  goToEditProfile(params){
    if(!params)params = {};
    this.navCtrl.push(EditProfilePage);
  }
}
