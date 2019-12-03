import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HSPage } from '../h-s/h-s';

@Component({
  selector: 'page-gia-nh-pnh-m',
  templateUrl: 'gia-nh-pnh-m.html'
})
export class GiaNhPNhMPage {

  constructor(public navCtrl: NavController) {
  }
  goToHS(params){
    if (!params) params = {};
    this.navCtrl.push(HSPage);
  }
}
