import { Component } from '@angular/core';
import { NavController, Loading, LoadingController, AlertController } from 'ionic-angular';
import { BandsCOPage } from '../bands-co/bands-co';
import { ProfilePage } from '../profile/profile';
import { FindMemberPostPage } from '../find-member-post/find-member-post';
import { SignupPage } from '../signup/signup';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthServiceProvider } from '../../providers/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: any;
  loading: Loading;
  registerCredentials = { username: '', password: '' };



  constructor(public navCtrl: NavController, public fromBuilder: FormBuilder,
    public loadCtrl: LoadingController, public auth: AuthServiceProvider,
    public alertCtrl: AlertController) {
    this.loginForm = fromBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  goToBandsCO(params) {
    if (!params) params = {};
    this.navCtrl.push(BandsCOPage);
  }
  goToProfile(params) {
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }
  goToFindMemberPost(params) {
    if (!params) params = {};
    this.navCtrl.push(FindMemberPostPage);
  }

  // checkLogin() {
  //   console.log(this.loginForm.value);
  //   let userName = this.loginForm.value.userName;
  //   let password = this.loginForm.value.password;
  //   console.log('user name: ' + userName);
  //   console.log('password: ' + password);

  // }

  onLoginClick() {
    this.showLoading();
    if (this.registerCredentials.username == '' || this.registerCredentials.password == '') {
      this.showError("Thông tin nhập còn trống, vui lòng kiểm tra lại.")
    } else {
      this.auth.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          this.navCtrl.setRoot(BandsCOPage);
        } else {
          this.showError("Thông tin đăng nhập không chính xác.");
        }
      },
        error => {
          this.showError(error);
        });
    }



  }
  showLoading() {
    this.loading = this.loadCtrl.create({
      content: 'Vui lòng đợi ...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Thông báo!',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  onRegisterClick() {
    this.navCtrl.push(SignupPage);
  }
}
