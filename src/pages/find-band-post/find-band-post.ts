import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BandsCOPage} from '../bands-co/bands-co';
import {MenuPage} from '../menu/menu';
import {FindBandPage} from '../find-band/find-band';
@Component({
  selector: 'page-find-band-post',
  templateUrl: 'find-band-post.html'
})
export class FindBandPostPage {

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
  goToFindBand(params){
    if (!params) params = {};
    this.navCtrl.push(FindBandPage);
  }
}
