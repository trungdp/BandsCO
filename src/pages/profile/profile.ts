import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BandsCOPage } from '../bands-co/bands-co';
import { MenuPage } from '../menu/menu';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user: any;

  constructor(public navCtrl: NavController, public dataService: Data) {
    console.log("profile/profile: data from storage: " + this.dataService.getProfile().username);
    this.user = this.dataService.getProfile();
  }

  //for footer 
  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(BandsCOPage);
  }
  goToMenu(params) {
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
  //-----------
  goToEditProfile(params) {
    if (!params) params = {};
    this.navCtrl.push(EditProfilePage);
  }
}
