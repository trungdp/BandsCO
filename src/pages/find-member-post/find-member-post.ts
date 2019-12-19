import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BandsCOPage} from '../bands-co/bands-co';
import{MenuPage} from '../menu/menu';
import { FindMemberPage } from '../find-member/find-member';


@Component({
  selector: 'page-find-member-post',
  templateUrl: 'find-member-post.html'
})
export class FindMemberPostPage {

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
  goToFindMember(params){
    if (!params) params = {};
    this.navCtrl.push(FindMemberPage);
  }
}
