import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import {BandsCOPage} from '../bands-co/bands-co';
import {MenuPage} from '../menu/menu';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {

  constructor(public navCtrl: NavController) {
  }
  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
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
}
