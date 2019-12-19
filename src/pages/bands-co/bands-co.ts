import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { FindMemberPostPage } from '../find-member-post/find-member-post';
import { FindMemberPage } from '../find-member/find-member';
import { FindBandPostPage } from '../find-band-post/find-band-post';
import {EditProfilePage} from '../edit-profile/edit-profile';
import{JoinBandPage} from '../join-band/join-band';
import { MenuPage } from '../menu/menu';
import {FindBandPage} from '../find-band/find-band';

@Component({
  selector: 'page-bands-co',
  templateUrl: 'bands-co.html'
})
export class BandsCOPage {

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
  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }
  goToFindMemberPost(params){
    if (!params) params = {};
    this.navCtrl.push(FindMemberPostPage);
  }
  goToFindMember(params){
    if (!params) params = {};
    this.navCtrl.push(FindMemberPage);
  }
  goToFindBandPost(params){
    if (!params) params = {};
    this.navCtrl.push(FindBandPostPage);
  }

  goToEditProfile(params){
    if (!params) params = {};
    this.navCtrl.push(EditProfilePage);
  }
  goToJoinBand(params){
    if (!params) params = {};
    this.navCtrl.push(JoinBandPage);
  }
  goToFindBand(params){
    if (!params) params = {};
    this.navCtrl.push(FindBandPage);
  }
}
