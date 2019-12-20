import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import {BandsCOPage} from '../bands-co/bands-co';
import {MenuPage} from '../menu/menu';
import { FormBuilder, Validators } from '@angular/forms';
import { UserInfo } from '../../models/userInfo';
import { Musical } from '../../models/musical';
import {Data} from '../../providers/data';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {
  items : Musical[];
  formEdit: any;
  UserProfile : UserInfo;
  OrderMusical : any ="";
  Achievements : any ="";

  userInfo :any;

  constructor(public navCtrl: NavController,public formBuilder : FormBuilder, public dataService: Data) {

    this.userInfo = this.dataService.getProfile();
    this.items = [
      new Musical('Cajon',false),
      new Musical('Beatbox',false),
      new Musical('Piano',false),
      new Musical('Guitar',false),
      new Musical('Vocal',false)
  ];
  this.formEdit = formBuilder.group({
    name: [this.userInfo.username, Validators.required],
    email: [this.userInfo.email, Validators.required],
    phone: [this.userInfo.phone, Validators.required],
    freetime: ['', Validators.required]
});
  }
  goToProfile(params){
    let Profile = this.formEdit.value;
    console.log(JSON.stringify(this.userInfo));
    this.dataService.updateProfile(this.userInfo);
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
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
  check(name : any){
    console.log(name);
  }
  getMusical():string{
    var skill : string = "";
    for(let i = 0;i< this.items.length;i++){
        if(this.items[i].isChecked == true){
         skill = skill.concat(this.items[i].name,", ");
        }
    }
    if(this.OrderMusical != ""){
      skill+ this.OrderMusical;
    }
    return skill;
  }
}
