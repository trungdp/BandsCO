webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_member_post_find_member_post__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, fromBuilder) {
        this.navCtrl = navCtrl;
        this.fromBuilder = fromBuilder;
        this.loginForm = fromBuilder.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.goToBandsCO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__["a" /* BandsCOPage */]);
    };
    LoginPage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    LoginPage.prototype.goToFindMemberPost = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__find_member_post_find_member_post__["a" /* FindMemberPostPage */]);
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.checkLogin = function () {
        console.log(this.loginForm.value);
        var userName = this.loginForm.value.userName;
        var password = this.loginForm.value.password;
        console.log('user name: ' + userName);
        console.log('password: ' + password);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <div text-center>\n    <img src="assets/img/nHBkB8CHSCqJLzPGIgz3_logo1.png"\n      style="display:block;width:100%;height:;margin-left:auto;margin-right:auto;" />\n  </div>\n  <div id="login-container1">\n    <form id="login-form3" [formGroup]="loginForm" (submit)="checkLogin()">\n      <div class="spacer" style="width:300px;height:20px;" id="login-spacer31"></div>\n      <ion-item id="login-input4">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Tên đăng nhập" formControlName="userName"></ion-input>\n      </ion-item>\n      <ion-item id="login-input5">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Mật khẩu" formControlName="password"></ion-input>\n      </ion-item>\n    </form>\n  </div>\n  <button id="login-button1" ion-button color="royal" block style="color:#FFFFFF;border-radius:5px 5px 5px 5px;"\n    type="submit">\n    Đăng nhập\n  </button>\n  <div class="spacer" style="height:10px;" id="login-spacer3"></div>\n  <div id="login-markdown4" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#010002;font-size:14px;">\n      <strong>\n        Quên mật khẩu?\n      </strong>\n    </p>\n  </div>\n  <div id="login-markdown3" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;font-size:14px;">\n      -------- HOẶC --------\n    </p>\n  </div>\n  <div id="login-markdown2" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;font-size:14px;">\n      Bạn chưa có tài khoản?\n      <strong (click)="goToSignup()">\n        Hãy Đăng ký\n      </strong>\n    </p>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindBandPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_band_find_band__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FindBandPostPage = /** @class */ (function () {
    function FindBandPostPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //for footer 
    FindBandPostPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__["a" /* BandsCOPage */]);
    };
    FindBandPostPage.prototype.goToMenu = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    //-----------
    FindBandPostPage.prototype.goToFindBand = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__find_band_find_band__["a" /* FindBandPage */]);
    };
    FindBandPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find-band-post',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\find-band-post\find-band-post.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      FindBandPost\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToFindBand()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <h4 id="FindBandPost-heading10" style="color:#A091DE;text-align:center;">\n    Phòng trà Đồng Dao\n  </h4>\n  <img src="assets/img/slL67JqET1WZl2kugDGW_business.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:13px;" id="FindBandPost-spacer25"></div>\n  <div class="spacer" style="width:300px;height:0px;" id="FindBandPost-spacer27"></div>\n  <ion-list id="FindBandPost-list26">\n    <ion-item color="royal" id="FindBandPost-list-item19">\n      <ion-icon name="map" item-left></ion-icon>\n      Phường 8, Đà Lạt\n    </ion-item>\n    <ion-item color="royal" id="FindBandPost-list-item28">\n      <ion-icon name="musical-notes" item-left></ion-icon>\n      Dàn trống có sẵn , guitar điện\n    </ion-item>\n    <ion-item color="royal" id="FindBandPost-list-item23">\n      <ion-icon name="microphone" item-left></ion-icon>\n      Loa, micro có sẵn\n    </ion-item>\n    <ion-item color="royal" id="FindBandPost-list-item30">\n      <ion-icon name="bitcoin" item-left></ion-icon>\n      1000000đ, có thể thỏa thuận\n    </ion-item>\n  </ion-list>\n  <div id="FindBandPost-markdown11" class="show-list-numbers-and-dots">\n    <h4>\n      Yêu cầu:\n    </h4>\n    <p style="color:#000000;">\n      Dòng nhạc accoustic - nhạc nhẹ.\n    </p>\n    <p style="color:#000000;">\n      Hòa đồng thân thiện.\n    </p>\n    <p style="color:#000000;">\n      Lương khởi điểm 10.000.000đ, có thê thỏa thuận\n    </p>\n  </div>\n  <div class="spacer" style="width:300px;height:5px;" id="FindBandPost-spacer22"></div>\n  <button id="FindBandPost-button8" ion-button color="royal" block>\n    Ứng tuyển\n  </button>\n  <button id="FindBandPost-button9" ion-button color="royal" block>\n    Liên hệ\n  </button>\n</ion-content>\n<!--footer-->\n<ion-footer>\n    <ion-navbar>\n      <ion-row>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only on-click="goToHome()">\n            <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only (click)="goToMenu()">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-row>\n    </ion-navbar>\n  </ion-footer>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\find-band-post\find-band-post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], FindBandPostPage);
    return FindBandPostPage;
}());

//# sourceMappingURL=find-band-post.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bands_co_bands_co__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EditProfilePage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    //for footer 
    EditProfilePage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bands_co_bands_co__["a" /* BandsCOPage */]);
    };
    EditProfilePage.prototype.goToMenu = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button on-click="goToProfile()">\n        Lưu\n      </button>\n    </ion-buttons>\n    <ion-title>\n      EditProfile\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <img src="assets/img/E7jYmtBBQYyPBkmHj8hg_avt-dam-cuoi-circle.png" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div id="editProfile-markdown20" class="show-list-numbers-and-dots">\n    <h4>\n      Cơ bản\n    </h4>\n  </div>\n  <form id="editProfile-form8">\n    <ion-item id="editProfile-input18">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Họ và tên"></ion-input>\n    </ion-item>\n    <ion-item id="editProfile-input17">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Email"></ion-input>\n    </ion-item>\n    <ion-item id="editProfile-input19">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Số điện thoại"></ion-input>\n    </ion-item>\n    <ion-item id="editProfile-input26">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Thời gian rảnh"></ion-input>\n    </ion-item>\n  </form>\n  <div id="editProfile-markdown21" class="show-list-numbers-and-dots">\n    <h4>\n      Kỹ năng\n    </h4>\n  </div>\n  <ion-list id="editProfile-list13">\n    <ion-item id="editProfile-select2">\n      <ion-label>\n        Nhạc cụ\n      </ion-label>\n      <ion-select name=""></ion-select>\n    </ion-item>\n    <ion-item id="editProfile-checkbox1">\n      <ion-label>\n        Guitar\n      </ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item id="editProfile-checkbox2">\n      <ion-label>\n        Cajon - Hithat\n      </ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item id="editProfile-checkbox3">\n      <ion-label>\n        Piano\n      </ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item id="editProfile-checkbox4">\n      <ion-label>\n        Beatbox\n      </ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item id="editProfile-checkbox5">\n      <ion-label>\n        Vocal\n      </ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item id="editProfile-input16">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Nhạc cụ khác"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="height:10px;" id="editProfile-spacer18"></div>\n  <form id="editProfile-form9">\n    <ion-item id="editProfile-input23">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Thành tích"></ion-input>\n    </ion-item>\n  </form>\n  <button id="editProfile-button5" ion-button color="royal" block on-click="goToProfile()">\n    Lưu\n  </button>\n</ion-content>\n<!--footer-->\n<ion-footer>\n    <ion-navbar>\n      <ion-row>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only on-click="goToHome()">\n            <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only (click)="goToMenu()">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-row>\n    </ion-navbar>\n  </ion-footer>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\edit-profile\edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandsCOPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_member_post_find_member_post__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_member_find_member__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__find_band_post_find_band_post__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_profile_edit_profile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__join_band_join_band__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__find_band_find_band__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BandsCOPage = /** @class */ (function () {
    function BandsCOPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BandsCOPage_1 = BandsCOPage;
    //for footer 
    BandsCOPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(BandsCOPage_1);
    };
    BandsCOPage.prototype.goToMenu = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */]);
    };
    //-----------
    BandsCOPage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    BandsCOPage.prototype.goToFindMemberPost = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__find_member_post_find_member_post__["a" /* FindMemberPostPage */]);
    };
    BandsCOPage.prototype.goToFindMember = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__find_member_find_member__["a" /* FindMemberPage */]);
    };
    BandsCOPage.prototype.goToFindBandPost = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__find_band_post_find_band_post__["a" /* FindBandPostPage */]);
    };
    BandsCOPage.prototype.goToEditProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    BandsCOPage.prototype.goToJoinBand = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__join_band_join_band__["a" /* JoinBandPage */]);
    };
    BandsCOPage.prototype.goToFindBand = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__find_band_find_band__["a" /* FindBandPage */]);
    };
    BandsCOPage = BandsCOPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bands-co',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\bands-co\bands-co.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only on-click="goToJoinBand()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      BandsCO\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToProfile()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <ion-card id="bandsCO-card21">\n    <ion-list>\n      <ion-item color="royal" id="bandsCO-list-item9">\n        <ion-avatar item-left>\n          <img src="assets/img/HNSOusbR9GvcTPzFATNQ_avatar.jpg" />\n        </ion-avatar>\n        <h2>\n          Vũ Phạm\n        </h2>\n      </ion-item>\n      <img src="assets/img/yTpOLdi8ReWvJfDrgxxR_avatar.jpg" />\n      <ion-item color="royal" id="bandsCO-list-item10">\n        <ion-icon name="musical-notes" item-left></ion-icon>\n        Trống, Rap, Sáng tác\n      </ion-item>\n      <button id="bandsCO-button" ion-button color="royal" block on-click="goToProfile()">\n        Xem hồ sơ\n      </button>\n    </ion-list>\n  </ion-card>\n  <ion-card id="bandsCO-card24">\n    <ion-list>\n      <ion-item color="royal" id="bandsCO-list-item15">\n        <ion-avatar item-left>\n          <img src="assets/img/0GKR8nTBTCG1e3xWTWNM_bands.jpg" />\n        </ion-avatar>\n        <h2>\n          Foreigner band\n        </h2>\n      </ion-item>\n      <img src="assets/img/a6fX9VIaRlq1Hco5ys8K_bands.jpg" />\n      <ion-item color="royal" id="bandsCO-list-item16">\n        <ion-icon name="person-add" item-left></ion-icon>\n        vị trí 1, vị trí 2\n      </ion-item>\n      <button id="bandsCO-button" ion-button color="royal" block on-click="goToFindMemberPost()">\n        Xem chi tiết\n      </button>\n    </ion-list>\n  </ion-card>\n  <ion-card id="bandsCO-card25">\n    <ion-list>\n      <ion-item color="royal" id="bandsCO-list-item17">\n        <ion-avatar item-left>\n          <img src="assets/img/5rchU2TZikIPBdviTzeA_business.jpg" />\n        </ion-avatar>\n        <h2>\n          Phòng trà Đồng Dao\n        </h2>\n      </ion-item>\n      <img src="assets/img/nUipxvZ5QdiqVUEKUYMA_business.jpg" />\n      <ion-item color="royal" id="bandsCO-list-item18">\n        <ion-icon name="cash" item-left></ion-icon>\n        1.000.000 VNĐ\n      </ion-item>\n      <button id="bandsCO-button" ion-button color="royal" block on-click="goToFindBandPost()">\n        Xem chi tiết\n      </button>\n    </ion-list>\n  </ion-card>\n</ion-content>\n<!--footer-->\n<ion-footer>\n  <ion-navbar>\n    <ion-row>\n      <ion-buttons col text-center>\n        <button mx-auto ion-button icon-only on-click="goToHome()">\n          <ion-icon name="home"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons col text-center>\n        <button mx-auto ion-button icon-only (click)="goToMenu()">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-row>\n  </ion-navbar>\n</ion-footer>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\bands-co\bands-co.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], BandsCOPage);
    return BandsCOPage;
    var BandsCOPage_1;
}());

//# sourceMappingURL=bands-co.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_member_find_member__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__find_band_find_band__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MenuPage.prototype.goToBandsCO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__["a" /* BandsCOPage */]);
    };
    MenuPage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    MenuPage.prototype.goToFindBand = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__find_band_find_band__["a" /* FindBandPage */]);
    };
    MenuPage.prototype.goToFindMember = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__find_member_find_member__["a" /* FindMemberPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\menu\menu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Menu\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button color="stable" block on-click="goToProfile()">Xem hồ sơ</button>\n  <button ion-button color="stable" block on-click="goToFindMember()">Đăng tuyển thành viên</button>\n  <button ion-button color="stable" block on-click="goToFindBand()">Đăng tuyển band</button>\n</ion-content>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\menu\menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinBandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__join_band_post_join_band_post__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bands_co_bands_co__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JoinBandPage = /** @class */ (function () {
    function JoinBandPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    JoinBandPage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    JoinBandPage.prototype.goToJoinBandPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__join_band_post_join_band_post__["a" /* JoinBandPostPage */]);
    };
    //for footer 
    JoinBandPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bands_co_bands_co__["a" /* BandsCOPage */]);
    };
    JoinBandPage.prototype.goToMenu = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
    };
    JoinBandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-join-band',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\join-band\join-band.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      JoinBand\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <ion-list id="joinBand-list10">\n    <ion-item color="royal" on-click="goToProfile()" id="joinBand-list-item11">\n      <ion-thumbnail item-left>\n        <img src="assets/img/OVlezG5oS6WN0ld83Bz6_avatar.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Vũ Phạm\n      </h2>\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="joinBand-spacer29"></div>\n  <form id="joinBand-form20">\n    <div id="joinBand-container6">\n      <h4 id="joinBand-heading12" style="color:#974FA5;font-weight:400;">\n        Kinh nghiệm\n      </h4>\n      <ion-list id="joinBand-list21">\n        <ion-item color="none" id="joinBand-list-item31">\n          Các band đã từng chơi\n        </ion-item>\n      </ion-list>\n    </div>\n    <ion-item id="joinBand-input40">\n      <ion-label>\n        Nguyện vọng\n      </ion-label>\n      <ion-input type="text" placeholder="Mong muốn của bản thân"></ion-input>\n    </ion-item>\n    <ion-item id="joinBand-input41">\n      <ion-label>\n        Thời gian thuận tiện\n      </ion-label>\n      <ion-input type="text" placeholder="Ngày trong tuần"></ion-input>\n    </ion-item>\n  </form>\n  <button id="joinBand-button20" ion-button color="royal" block (click)="goToJoinBandPost()">\n    Đăng bài\n  </button>\n</ion-content>\n<!--footer-->\n<ion-footer>\n    <ion-navbar>\n      <ion-row>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only on-click="goToHome()">\n            <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only (click)="goToMenu()">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-row>\n    </ion-navbar>\n  </ion-footer>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\join-band\join-band.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], JoinBandPage);
    return JoinBandPage;
}());

//# sourceMappingURL=join-band.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinBandPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bands_co_bands_co__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JoinBandPostPage = /** @class */ (function () {
    function JoinBandPostPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    JoinBandPostPage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    //for footer 
    JoinBandPostPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bands_co_bands_co__["a" /* BandsCOPage */]);
    };
    JoinBandPostPage.prototype.goToMenu = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
    };
    JoinBandPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-join-band-post',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\join-band-post\join-band-post.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      JoinBandPost\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page14">\n  <ion-list id="joinBandPost-list9">\n    <ion-item color="royal" on-click="goToProfile()" id="joinBandPost-list-item14">\n      <ion-thumbnail item-left>\n        <img src="assets/img/OVlezG5oS6WN0ld83Bz6_avatar.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Vũ Phạm\n      </h2>\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="joinBandPost-spacer34"></div>\n  <form id="joinBandPost-form14">\n    <div id="joinBandPost-container7">\n      <h4 id="joinBandPost-heading14" style="color:#974FA5;font-weight:400;">\n        Kỹ năng\n      </h4>\n      <ion-list id="joinBandPost-list23">\n        <ion-item color="royal" id="joinBandPost-list-item20">\n          <ion-icon name="musical-notes" item-left></ion-icon>\n          Trống, Guitar\n        </ion-item>\n      </ion-list>\n      <ion-list id="joinBandPost-list25">\n        <ion-item color="royal" id="joinBandPost-list-item21">\n          <ion-icon name="star" item-left></ion-icon>\n          Licks, Bass, Hammer\n        </ion-item>\n      </ion-list>\n      <ion-list id="joinBandPost-list27">\n        <ion-item color="royal" id="joinBandPost-list-item22">\n          <ion-icon name="bookmark" item-left></ion-icon>\n          Giải nhất The Voice\n        </ion-item>\n      </ion-list>\n      <h4 id="joinBandPost-heading13" style="color:#974FA5;font-weight:400;">\n        Kinh nghiệm\n      </h4>\n      <ion-list id="joinBandPost-list19">\n        <ion-item color="none" id="joinBandPost-list-item24">\n          <ion-icon name="people" item-left></ion-icon>\n          7269 Bands, Cá hồi hoang\n        </ion-item>\n        <ion-item color="none" id="joinBandPost-list-item25">\n          <ion-icon name="paper-plane" item-left></ion-icon>\n          Mong muốn học hỏi và tiến bộ\n        </ion-item>\n        <ion-item color="none" id="joinBandPost-list-item26">\n          <ion-icon name="timer" item-left></ion-icon>\n          Thứ 7, chủ nhật\n        </ion-item>\n      </ion-list>\n    </div>\n  </form>\n  <button id="joinBandPost-button15" ion-button color="royal" block on-click="goToProfile()">\n    Xem hồ sơ\n  </button>\n  <button id="joinBandPost-button19" ion-button color="royal" block>\n    Liên hệ\n  </button>\n</ion-content>\n<!--footer-->\n<ion-footer>\n    <ion-navbar>\n      <ion-row>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only on-click="goToHome()">\n            <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only (click)="goToMenu()">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-row>\n    </ion-navbar>\n  </ion-footer>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\join-band-post\join-band-post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], JoinBandPostPage);
    return JoinBandPostPage;
}());

//# sourceMappingURL=join-band-post.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <img src="assets/img/5otX3UIPRZuCqlTJ3mcb_logo1.png" style="display:block;width:50%;height:;margin-left:auto;margin-right:auto;" />\n  <div id="signup-container3">\n    <form id="signup-form5">\n      <div class="spacer" style="width:300px;height:19px;" id="signup-spacer33"></div>\n      <ion-item id="signup-input8">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Tên đăng nhập"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input11">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input9">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Mật khẩu"></ion-input>\n      </ion-item>\n      <ion-item id="signup-input10">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Nhập lại mật khẩu"></ion-input>\n      </ion-item>\n    </form>\n  </div>\n  <button id="signup-button3" ion-button color="royal" block style="border-radius:5px 5px 5px 5px;">\n    Đăng ký\n  </button>\n  <div id="signup-markdown14" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;font-size:14px;">\n      -------- HOẶC --------\n    </p>\n  </div>\n  <div id="signup-markdown8" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;font-size:14px;">\n      Bạn đã là thành viên?\n      <strong (click)="goToLogin()">\n        Đăng nhập ngay\n      </strong>\n    </p>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bands_co_bands_co__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_profile_edit_profile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_find_band_find_band__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_find_band_post_find_band_post__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_find_member_find_member__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_find_member_post_find_member_post__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_join_band_join_band__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_join_band_post_join_band_post__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bands_co_bands_co__["a" /* BandsCOPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_find_band_find_band__["a" /* FindBandPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_find_band_post_find_band_post__["a" /* FindBandPostPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_find_member_find_member__["a" /* FindMemberPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_find_member_post_find_member_post__["a" /* FindMemberPostPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_join_band_join_band__["a" /* JoinBandPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_join_band_post_join_band_post__["a" /* JoinBandPostPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu__["a" /* MenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bands_co_bands_co__["a" /* BandsCOPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_find_band_find_band__["a" /* FindBandPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_find_band_post_find_band_post__["a" /* FindBandPostPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_find_member_find_member__["a" /* FindMemberPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_find_member_post_find_member_post__["a" /* FindMemberPostPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_join_band_join_band__["a" /* JoinBandPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_join_band_post_join_band_post__["a" /* JoinBandPostPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu__["a" /* MenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //for footer 
    ProfilePage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__["a" /* BandsCOPage */]);
    };
    ProfilePage.prototype.goToMenu = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    //-----------
    ProfilePage.prototype.goToEditProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Profile\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToEditProfile()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <div class="spacer" style="height:20px;" id="profile-spacer12"></div>\n  <img src="assets/img/E7jYmtBBQYyPBkmHj8hg_avt-dam-cuoi-circle.png" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:10px;" id="profile-spacer10"></div>\n  <h3 id="profile-heading11" style="color:#8A2CE2;text-align:center;">\n    Vũ Phạm\n  </h3>\n  <div id="profile-markdown15" class="show-list-numbers-and-dots">\n    <h4>\n      Cơ bản\n    </h4>\n  </div>\n  <ion-list id="profile-list8">\n    <ion-item color="royal" id="profile-list-item36">\n      <ion-icon name="person" item-left></ion-icon>\n      Phạm Trung Anh Vũ\n    </ion-item>\n    <ion-item color="royal" id="profile-list-item29">\n      <ion-icon name="phone-portrait" item-left></ion-icon>\n      0234567890\n    </ion-item>\n    <ion-item color="royal" id="profile-list-item46">\n      <ion-icon name="mail" item-left></ion-icon>\n      anhvupt@gmail.com\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="height:10px;" id="profile-spacer15"></div>\n  <div id="profile-markdown18" class="show-list-numbers-and-dots">\n    <h4>\n      Kỹ năng\n    </h4>\n  </div>\n  <ion-list id="profile-list11">\n    <ion-item color="royal" id="profile-list-item12">\n      <ion-icon name="musical-notes" item-left></ion-icon>\n      Trống, Guitar\n    </ion-item>\n    <ion-item color="royal" id="profile-list-item13">\n      <ion-icon name="star" item-left></ion-icon>\n      Licks, Bass, Hammer\n    </ion-item>\n  </ion-list>\n  <ion-list id="profile-list16">\n    <ion-item color="royal" id="profile-list-item43">\n      <ion-icon name="bookmark" item-left></ion-icon>\n      Giải nhất The Voice\n    </ion-item>\n  </ion-list>\n  <div id="profile-markdown17" class="show-list-numbers-and-dots">\n    <h4>\n      Tài khoản\n    </h4>\n  </div>\n  <button id="profile-button14" ion-button color="royal" block>\n    Đăng xuất\n  </button>\n  <div class="spacer" style="height:10px;" id="profile-spacer11"></div>\n</ion-content>\n<!--footer-->\n<ion-footer>\n    <ion-navbar>\n      <ion-row>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only on-click="goToHome()">\n            <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only (click)="goToMenu()">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-row>\n    </ion-navbar>\n  </ion-footer>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_member_post_find_member_post__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FindMemberPage = /** @class */ (function () {
    function FindMemberPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //for footer 
    FindMemberPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__["a" /* BandsCOPage */]);
    };
    FindMemberPage.prototype.goToMenu = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    //-----------
    FindMemberPage.prototype.goToFindMemberPost = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__find_member_post_find_member_post__["a" /* FindMemberPostPage */]);
    };
    FindMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find-member',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\find-member\find-member.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      FindMember\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <form id="findMember-form11">\n    <ion-item id="findMember-input20">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Tên nhóm nhạc"></ion-input>\n    </ion-item>\n  </form>\n  <img src="assets/img/pz9hn6fBSCqWYG6sNOdC_maxresdefault.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h4 id="findMember-heading2" style="color:#000000;">\n    Thông tin nhóm\n  </h4>\n  <ion-list id="findMember-list12" class="Thêm đâu giờ">\n    <ion-item id="findMember-select3">\n      <ion-label>\n        Dòng nhạc\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Rock\n        </ion-option>\n        <ion-option>\n          Acoustic\n        </ion-option>\n        <ion-option>\n          Pop\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="findMember-input21">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Thành tích"></ion-input>\n    </ion-item>\n    <ion-item id="findMember-input25">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Điện thoại liên hệ"></ion-input>\n    </ion-item>\n  </ion-list>\n  <h4 id="findMember-heading3" style="color:#000000;">\n    Thành viên\n  </h4>\n  <ion-list id="findMember-list14">\n    <ion-item color="royal" id="findMember-list-item32">\n      <ion-avatar item-left>\n        <img src="assets/img/WU5k9QnATfutHv5g0YCN_71400558_2382733591945478_2803053334208970752_n.jpg" />\n      </ion-avatar>\n      <h2>\n        Phương Thi :))\n      </h2>\n    </ion-item>\n    <ion-item color="royal" id="findMember-list-item34">\n      <ion-avatar item-left>\n        <img src="assets/img/atW3oppTam2bIbsE3lPl_3a616451af70492e1061.jpg" />\n      </ion-avatar>\n      <h2>\n        Quân Trinh\n      </h2>\n    </ion-item>\n  </ion-list>\n  <button id="findMember-button12" ion-button outline color="royal" block style="border-radius:0px 0px 0px 0px;">\n    Thêm thành viên\n  </button>\n  <h4 id="findMember-heading4" style="color:#000000;">\n    Vị trí cần tuyển\n  </h4>\n  <form id="findMember-form13">\n    <ion-item id="findMember-select4">\n      <ion-label>\n        Sở trường\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Hát chính\n        </ion-option>\n        <ion-option>\n          Trống\n        </ion-option>\n        <ion-option>\n          Guitar\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="findMember-input24">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Khả năng khác"></ion-input>\n    </ion-item>\n  </form>\n  <div class="spacer" style="width:300px;height:24px;" id="findMember-spacer23"></div>\n  <button id="findMember-button10" ion-button color="royal" block (click)="goToFindMemberPost()">\n    Đăng bài\n  </button>\n</ion-content>\n<!--footer-->\n<ion-footer>\n    <ion-navbar>\n      <ion-row>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only on-click="goToHome()">\n            <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only (click)="goToMenu()">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-row>\n    </ion-navbar>\n  </ion-footer>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\find-member\find-member.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], FindMemberPage);
    return FindMemberPage;
}());

//# sourceMappingURL=find-member.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindMemberPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_member_find_member__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FindMemberPostPage = /** @class */ (function () {
    function FindMemberPostPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //for footer 
    FindMemberPostPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__["a" /* BandsCOPage */]);
    };
    FindMemberPostPage.prototype.goToMenu = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    //-----------
    FindMemberPostPage.prototype.goToFindMember = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__find_member_find_member__["a" /* FindMemberPage */]);
    };
    FindMemberPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find-member-post',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\find-member-post\find-member-post.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      FindMemberPost\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToFindMember()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <h4 id="findMemberPost-heading5" style="color:#B08EE6;text-align:center;">\n    Team 7269\n  </h4>\n  <img src="assets/img/pz9hn6fBSCqWYG6sNOdC_maxresdefault.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h4 id="findMemberPost-heading7" style="color:#000000;">\n    Thông tin nhóm\n  </h4>\n  <ion-list id="findMemberPost-list15">\n    <ion-item color="royal" id="findMemberPost-list-item35">\n      Dòng nhạc\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="royal" id="findMemberPost-list-item37">\n      Thành tích\n      <ion-note item-right></ion-note>\n    </ion-item>\n    <ion-item color="royal" id="findMemberPost-list-item38">\n      Điện thoại liên hệ\n      <ion-note item-right></ion-note>\n    </ion-item>\n  </ion-list>\n  <h4 id="findMemberPost-heading8" style="color:#000000;">\n    Thành viên\n  </h4>\n  <ion-list id="findMemberPost-list17">\n    <ion-item color="royal" id="findMemberPost-list-item40">\n      <ion-avatar item-left>\n        <img src="assets/img/Ax37UZzVQHy60U3bDeeX_71400558_2382733591945478_2803053334208970752_n.jpg" />\n      </ion-avatar>\n      <h2>\n        Phương Thi\n      </h2>\n    </ion-item>\n    <ion-item color="royal" id="findMemberPost-list-item41">\n      <ion-avatar item-left>\n        <img src="assets/img/AFHQR8d0QnlGXVry5YwC_3a616451af70492e1061.jpg" />\n      </ion-avatar>\n      <h2>\n        Quân Trinh\n      </h2>\n    </ion-item>\n  </ion-list>\n  <h4 id="findMemberPost-heading9" style="color:#000000;">\n    Vị trí ứng tuyển\n  </h4>\n  <ion-list id="findMemberPost-list18">\n    <ion-item color="royal" id="findMemberPost-list-item42">\n      <ion-icon name="musical-notes" item-left></ion-icon>\n      Hát chính\n    </ion-item>\n    <ion-item color="royal" id="findMemberPost-list-item44">\n      <ion-icon name="musical-note" item-left></ion-icon>\n      Trống, Guitar\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:40px;" id="findMemberPost-spacer24"></div>\n  <button id="findMemberPost-button13" ion-button color="royal" block>\n    Ứng tuyển\n  </button>\n  <button id="findMemberPost-button11" ion-button color="royal" block>\n    Liên hệ\n  </button>\n</ion-content>\n<!--footer-->\n<ion-footer>\n    <ion-navbar>\n      <ion-row>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only on-click="goToHome()">\n            <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only (click)="goToMenu()">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-row>\n    </ion-navbar>\n  </ion-footer>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\find-member-post\find-member-post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], FindMemberPostPage);
    return FindMemberPostPage;
}());

//# sourceMappingURL=find-member-post.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindBandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_band_post_find_band_post__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FindBandPage = /** @class */ (function () {
    function FindBandPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //for footer 
    FindBandPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__["a" /* BandsCOPage */]);
    };
    FindBandPage.prototype.goToMenu = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    //-----------
    FindBandPage.prototype.goToFindBandPost = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__find_band_post_find_band_post__["a" /* FindBandPostPage */]);
    };
    FindBandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find-band',template:/*ion-inline-start:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\find-band\find-band.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      FindBand\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <img src="assets/img/1937J4eHTpKro6hVbQIe_thiet-ke-quan-cafe-hat-cho-nhau-nghe_101.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <form id="FindBand-form12">\n    <ion-item id="FindBand-input22">\n      <ion-label>\n        Tên\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="FindBand-input27">\n      <ion-label>\n        Địa điểm\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="FindBand-input28">\n      <ion-label>\n        Số điện thoại\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <div class="spacer" style="height:10px;" id="FindBand-spacer13"></div>\n  <form id="FindBand-form10">\n    <ion-item id="FindBand-input12">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Nhạc cụ"></ion-input>\n    </ion-item>\n    <ion-item id="FindBand-input13">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Thiết bị âm thanh"></ion-input>\n    </ion-item>\n    <ion-item id="FindBand-input14">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Tiền hợp đồng"></ion-input>\n    </ion-item>\n    <ion-item id="FindBand-input15">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Yêu cầu"></ion-input>\n    </ion-item>\n  </form>\n  <div class="spacer" style="height:10px;" id="FindBand-spacer14"></div>\n  <button id="FindBand-button7" ion-button color="royal" block (click)="goToFindBandPost()">\n    Đăng bài\n  </button>\n</ion-content>\n<!--footer-->\n<ion-footer>\n    <ion-navbar>\n      <ion-row>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only on-click="goToHome()">\n            <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons col text-center>\n          <button mx-auto ion-button icon-only (click)="goToMenu()">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-row>\n    </ion-navbar>\n  </ion-footer>'/*ion-inline-end:"E:\Study\LapTrinhUngDungDiDong\BandsCO\src\pages\find-band\find-band.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], FindBandPage);
    return FindBandPage;
}());

//# sourceMappingURL=find-band.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map