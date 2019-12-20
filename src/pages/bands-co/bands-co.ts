import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { FindMemberPostPage } from '../find-member-post/find-member-post';
import { FindMemberPage } from '../find-member/find-member';
import { FindBandPostPage } from '../find-band-post/find-band-post';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { JoinBandPage } from '../join-band/join-band';
import { MenuPage } from '../menu/menu';
import { FindBandPage } from '../find-band/find-band';
import { RestProvider } from '../../providers/rest';


@Component({
  selector: 'page-bands-co',
  templateUrl: 'bands-co.html'
})
export class BandsCOPage {

  posts: any;

  constructor(public navCtrl: NavController, public resProvider: RestProvider) {
     this.getPosts();
    // this.posts = [
    //   {
    //     type: "FIND MEMBER",
    //     postcontent: {
    //       id: 1,
    //       bandname: "Team 7296",
    //       musictype: "R&B",
    //       achivements: "Giải nhất",
    //       phone: "123456789",
    //       members: [
    //         {
    //           id: 1,
    //           accountid: 1,
    //           username: "trung",
    //           img: "",
    //           phone: "12345678890",
    //           email: "trungtrs1998@gmail.com",
    //           skill: "Hát chính",
    //           musical: "",
    //           achievements: ""
    //         },
    //         {
    //           id: 2,
    //           accountid: 2,
    //           username: "admin",
    //           img: "",
    //           phone: "23450000009",
    //           email: "trungtrs1@gmail.com",
    //           skill: "Rap",
    //           musical: "Trống",
    //           achievements: "Giải nhất the voice"
    //         }
    //       ],
    //       musical: "Trống, Guitar"
    //     }
    //   },
    //   {
    //     type: "FIND BAND",
    //     postcontent: {
    //       id: 1,
    //       name: "Phòng trà Đồng Dao",
    //       address: "Phường 8, Đà Lạt",
    //       img: "",
    //       salary: "Giải nhất",
    //       phone: "123456789",
    //       musical: "Trống, Guitar",
    //       device: "Loa, micro, đèn",
    //       require: ""
    //     }
    //   },
    //   {
    //     type: "JOIN BAND",
    //     postcontent: {
    //       id: 1,
    //       user: {
    //         id: 1,
    //         accountid: 1,
    //         username: "trung",
    //         img: "",
    //         phone: "12345678890",
    //         email: "trungtrs1998@gmail.com",
    //         skill: "Hát chính",
    //         musical: "",
    //         achievements: ""
    //       },
    //       exbands: "Team A, Team B",
    //       freetime: "Thứ 7, chủ nhật",
    //       aspiration: "Được trau dồi kỹ năng"
    //     }
    //   }
    // ]
  }


  getPosts() {
    this.resProvider.getPosts().then(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }

  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(BandsCOPage);
  }
  goToMenu(params) {
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
  //-----------
  goToProfile(params) {
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }
  goToFindMemberPost(params) {
    if (!params) params = {};
    this.navCtrl.push(FindMemberPostPage);
  }
  goToFindMember(params) {
    if (!params) params = {};
    this.navCtrl.push(FindMemberPage);
  }
  goToFindBandPost(params) {
    if (!params) params = {};
    this.navCtrl.push(FindBandPostPage);
  }

  goToEditProfile(params) {
    if (!params) params = {};
    this.navCtrl.push(EditProfilePage);
  }
  goToJoinBand(params) {
    if (!params) params = {};
    this.navCtrl.push(JoinBandPage);
  }
  goToFindBand(params) {
    if (!params) params = {};
    this.navCtrl.push(FindBandPage);
  }
}
