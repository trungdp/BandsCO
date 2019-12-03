import { Component } from '@angular/core';
import { NavController, NavPush } from 'ionic-angular';
import { HSPage } from '../h-s/h-s';

@Component({
  selector: 'page-ng-gia-nh-pnh-m',
  templateUrl: 'ng-gia-nh-pnh-m.html'
})
export class NgGiaNhPNhMPage {

  constructor(public navCtrl: NavController) {
  }
  goToHS(params){
    if (!params) params = {};
    this.navCtrl.push(HSPage);
  }
}
