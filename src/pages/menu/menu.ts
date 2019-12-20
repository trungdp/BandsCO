import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BandsCOPage } from '../bands-co/bands-co';
import { ProfilePage } from '../profile/profile';
import { FindMemberPage } from '../find-member/find-member';
import {FindBandPage} from '../find-band/find-band';
import {JoinBandPage} from '../join-band/join-band';
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {
  }
  goToBandsCO(params){
    if (!params) params = {};
    this.navCtrl.push(BandsCOPage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }goToFindBand(params){
    if (!params) params = {};
    this.navCtrl.push(FindBandPage);
  }
  goToFindMember(){
    this.navCtrl.push(FindMemberPage);
  }
  goToJoinBand(params){
    if (!params) params = {};
    this.navCtrl.push(JoinBandPage);
  }

}
