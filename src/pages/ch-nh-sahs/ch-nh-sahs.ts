import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HSPage } from '../h-s/h-s';

@Component({
  selector: 'page-ch-nh-sahs',
  templateUrl: 'ch-nh-sahs.html'
})
export class ChNhSAHSPage {

  constructor(public navCtrl: NavController) {
  }
  goToHS(params){
    if (!params) params = {};
    this.navCtrl.push(HSPage);
  }
}
