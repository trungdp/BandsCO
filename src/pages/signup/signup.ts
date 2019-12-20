import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  createSuccess = false;
  registerCredentials = { username: '', email: '', password: '', passcfm: '' };

  constructor(public navCtrl: NavController, public auth: AuthServiceProvider,
    public alertCtrl: AlertController) {
  }

  onLoginClick(params) {
    this.navCtrl.pop();
  }

  public onRegisterClick() {
    if (this.registerCredentials.username == '' || this.registerCredentials.password == ''
    ||this.registerCredentials.email == '' || this.registerCredentials.passcfm == '') {
      this.showPopup("Lỗi!", "Thông tin nhập còn trống, vui lòng kiểm tra lại.")
    } else {
      if (this.registerCredentials.password != this.registerCredentials.passcfm) {
        this.showPopup("Lỗi!", 'Xác nhận mật khẩu không khớp.');
      } else {
        this.auth.register(this.registerCredentials).subscribe(success => {
          if (success) {
            this.createSuccess = true;
            this.showPopup("Thông báo!", "Tạo tài khoản thành công");
          } else {
            this.showPopup("Lỗi", "Tạo tài khoản không thành công.");
          }
        },
          error => {
            this.showPopup("Lỗi", error);
          });
      }
    }
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}

