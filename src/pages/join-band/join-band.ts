import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import{JoinBandPostPage} from '../join-band-post/join-band-post';
import {BandsCOPage} from '../bands-co/bands-co';
import{MenuPage} from '../menu/menu';

@Component({
  selector: 'page-join-band',
  templateUrl: 'join-band.html'
})
export class JoinBandPage {

  constructor(public navCtrl: NavController) {
  }
  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }
  goToJoinBandPost(){
    this.navCtrl.push(JoinBandPostPage);
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
