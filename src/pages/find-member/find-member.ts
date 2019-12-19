import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BandsCOPage} from '../bands-co/bands-co';
import {MenuPage} from '../menu/menu';
import {FindMemberPostPage} from '../find-member-post/find-member-post';

@Component({
  selector: 'page-find-member',
  templateUrl: 'find-member.html'
})
export class FindMemberPage {

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
  goToFindMemberPost(params){
    if (!params) params = {};
    this.navCtrl.push(FindMemberPostPage);
  }
}
