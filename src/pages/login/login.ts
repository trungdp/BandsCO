import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BandsCOPage } from '../bands-co/bands-co';
import { ProfilePage } from '../profile/profile';
import { FindMemberPostPage } from '../find-member-post/find-member-post';
import {SignupPage} from '../signup/signup';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm:any;

  constructor(public navCtrl: NavController, public fromBuilder: FormBuilder) {
    this.loginForm=fromBuilder.group({
      userName: ['', Validators.required],
      password:['', Validators.required]
    })
  }


  goToBandsCO(params){
    if (!params) params = {};
    this.navCtrl.push(BandsCOPage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }goToFindMemberPost(params){
    if (!params) params = {};
    this.navCtrl.push(FindMemberPostPage);
  }
  goToSignup(){
    this.navCtrl.push(SignupPage);
  }
  checkLogin(){
    console.log(this.loginForm.value);
    let userName = this.loginForm.value.userName;
    let password = this.loginForm.value.password;
    console.log('user name: '+userName);
    console.log('password: '+password);

  }
}
