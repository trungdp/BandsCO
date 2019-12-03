import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HSPage } from '../h-s/h-s';
import { BITuyNThNhViNPage } from '../b-ituy-nth-nh-vi-n/b-ituy-nth-nh-vi-n';
import { NgTuyNBandPage } from '../ng-tuy-nband/ng-tuy-nband';

@Component({
  selector: 'page-bands-co',
  templateUrl: 'bands-co.html'
})
export class BandsCOPage {

  constructor(public navCtrl: NavController) {
  }
  goToHS(params){
    if (!params) params = {};
    this.navCtrl.push(HSPage);
  }goToBITuyNThNhViN(params){
    if (!params) params = {};
    this.navCtrl.push(BITuyNThNhViNPage);
  }goToNgTuyNBand(params){
    if (!params) params = {};
    this.navCtrl.push(NgTuyNBandPage);
  }
}
