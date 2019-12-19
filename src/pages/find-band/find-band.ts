import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BandsCOPage} from '../bands-co/bands-co';
import {MenuPage} from '../menu/menu';
import {FindBandPostPage} from '../find-band-post/find-band-post';

@Component({
  selector: 'page-find-band',
  templateUrl: 'find-band.html'
})
export class FindBandPage {

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
  goToFindBandPost(params){
    if (!params) params = {};
    this.navCtrl.push(FindBandPostPage);
  }
  
}
