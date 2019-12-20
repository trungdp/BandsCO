webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindBandPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_band_find_band__ = __webpack_require__(56);
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
            selector: 'page-find-band-post',template:/*ion-inline-start:"D:\BandsCO\src\pages\find-band-post\find-band-post.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      FindBandPost\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="goToFindBand()">\n\n        <ion-icon name="options"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page10">\n\n  <h4 id="FindBandPost-heading10" style="color:#A091DE;text-align:center;">\n\n    Phòng trà Đồng Dao\n\n  </h4>\n\n  <img src="assets/img/slL67JqET1WZl2kugDGW_business.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <div class="spacer" style="width:300px;height:13px;" id="FindBandPost-spacer25"></div>\n\n  <div class="spacer" style="width:300px;height:0px;" id="FindBandPost-spacer27"></div>\n\n  <ion-list id="FindBandPost-list26">\n\n    <ion-item color="royal" id="FindBandPost-list-item19">\n\n      <ion-icon name="map" item-left></ion-icon>\n\n      Phường 8, Đà Lạt\n\n    </ion-item>\n\n    <ion-item color="royal" id="FindBandPost-list-item28">\n\n      <ion-icon name="musical-notes" item-left></ion-icon>\n\n      Dàn trống có sẵn , guitar điện\n\n    </ion-item>\n\n    <ion-item color="royal" id="FindBandPost-list-item23">\n\n      <ion-icon name="microphone" item-left></ion-icon>\n\n      Loa, micro có sẵn\n\n    </ion-item>\n\n    <ion-item color="royal" id="FindBandPost-list-item30">\n\n      <ion-icon name="bitcoin" item-left></ion-icon>\n\n      1000000đ, có thể thỏa thuận\n\n    </ion-item>\n\n  </ion-list>\n\n  <div id="FindBandPost-markdown11" class="show-list-numbers-and-dots">\n\n    <h4>\n\n      Yêu cầu:\n\n    </h4>\n\n    <p style="color:#000000;">\n\n      Dòng nhạc accoustic - nhạc nhẹ.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Hòa đồng thân thiện.\n\n    </p>\n\n    <p style="color:#000000;">\n\n      Lương khởi điểm 10.000.000đ, có thê thỏa thuận\n\n    </p>\n\n  </div>\n\n  <div class="spacer" style="width:300px;height:5px;" id="FindBandPost-spacer22"></div>\n\n  <button id="FindBandPost-button8" ion-button color="royal" block>\n\n    Ứng tuyển\n\n  </button>\n\n  <button id="FindBandPost-button9" ion-button color="royal" block>\n\n    Liên hệ\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\BandsCO\src\pages\find-band-post\find-band-post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FindBandPostPage);
    return FindBandPostPage;
}());

//# sourceMappingURL=find-band-post.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinBandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__join_band_post_join_band_post__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bands_co_bands_co__ = __webpack_require__(15);
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
            selector: 'page-join-band',template:/*ion-inline-start:"D:\BandsCO\src\pages\join-band\join-band.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      JoinBand\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page13">\n\n  <ion-list id="joinBand-list10">\n\n    <ion-item color="royal" on-click="goToProfile()" id="joinBand-list-item11">\n\n      <ion-thumbnail item-left>\n\n        <img src="assets/img/OVlezG5oS6WN0ld83Bz6_avatar.jpg" />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Vũ Phạm\n\n      </h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="spacer" style="width:300px;height:15px;" id="joinBand-spacer29"></div>\n\n  <form id="joinBand-form20">\n\n    <div id="joinBand-container6">\n\n      <h4 id="joinBand-heading12" style="color:#974FA5;font-weight:400;">\n\n        Kinh nghiệm\n\n      </h4>\n\n      <ion-list id="joinBand-list21">\n\n        <ion-item color="none" id="joinBand-list-item31">\n\n          Các band đã từng chơi\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <ion-item id="joinBand-input40">\n\n      <ion-label>\n\n        Nguyện vọng\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Mong muốn của bản thân"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="joinBand-input41">\n\n      <ion-label>\n\n        Thời gian thuận tiện\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="Ngày trong tuần"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="joinBand-button20" ion-button color="royal" block (click)="goToHome()">\n\n    Đăng bài\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\BandsCO\src\pages\join-band\join-band.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], JoinBandPage);
    return JoinBandPage;
}());

//# sourceMappingURL=join-band.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bands_co_bands_co__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_musical__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data__ = __webpack_require__(43);
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
    function EditProfilePage(navCtrl, formBuilder, dataService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.OrderMusical = "";
        this.Achievements = "";
        this.userInfo = this.dataService.getProfile();
        this.items = [
            new __WEBPACK_IMPORTED_MODULE_6__models_musical__["a" /* Musical */]('Cajon', false),
            new __WEBPACK_IMPORTED_MODULE_6__models_musical__["a" /* Musical */]('Beatbox', false),
            new __WEBPACK_IMPORTED_MODULE_6__models_musical__["a" /* Musical */]('Piano', false),
            new __WEBPACK_IMPORTED_MODULE_6__models_musical__["a" /* Musical */]('Guitar', false),
            new __WEBPACK_IMPORTED_MODULE_6__models_musical__["a" /* Musical */]('Vocal', false)
        ];
        this.formEdit = formBuilder.group({
            name: [this.userInfo.username, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            email: [this.userInfo.email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            phone: [this.userInfo.phone, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            freetime: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
    }
    EditProfilePage.prototype.goToProfile = function (params) {
        var Profile = this.formEdit.value;
        console.log(JSON.stringify(this.userInfo));
        this.dataService.updateProfile(this.userInfo);
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
    EditProfilePage.prototype.check = function (name) {
        console.log(name);
    };
    EditProfilePage.prototype.getMusical = function () {
        var skill = "";
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].isChecked == true) {
                skill = skill.concat(this.items[i].name, ", ");
            }
        }
        if (this.OrderMusical != "") {
            skill + this.OrderMusical;
        }
        return skill;
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"D:\BandsCO\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button on-click="goToProfile()">\n\n        Lưu\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      EditProfile\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="page8">\n\n  <img [src]="user.avatar" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <div id="editProfile-markdown20" class="show-list-numbers-and-dots">\n\n    <h4>\n\n      Cơ bản\n\n    </h4>\n\n  </div>\n\n  <form id="editProfile-form8" [formGroup]="formEdit">\n\n    <ion-item id="editProfile-input18">\n\n      <ion-label></ion-label>\n\n      <ion-input formControlName="name" type="text" placeholder="Họ và tên"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editProfile-input17">\n\n      <ion-label></ion-label>\n\n      <ion-input formControlName="email" type="text" placeholder="Email"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editProfile-input19">\n\n      <ion-label></ion-label>\n\n      <ion-input formControlName="phone" type="text" placeholder="Số điện thoại"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="editProfile-input26">\n\n      <ion-label></ion-label>\n\n      <ion-input formControlName="freetime" type="text" placeholder="Thời gian rảnh"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <div id="editProfile-markdown21" class="show-list-numbers-and-dots">\n\n    <h4>\n\n      Kỹ năng\n\n    </h4>\n\n  </div>\n\n  <ion-list id="editProfile-list13">\n\n    <ion-item id="editProfile-select2">\n\n      <ion-label>\n\n        Nhạc cụ\n\n      </ion-label>\n\n      <ion-select name=""></ion-select>\n\n    </ion-item>\n\n    <ion-item id="editProfile-checkbox1" *ngFor ="let item of items">\n\n      <ion-label>\n\n        {{item.name}}\n\n      </ion-label>\n\n      <ion-checkbox  [(ngModel)]="item.isChecked" (ionChange)="check(item.isChecked)"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item id="editProfile-input16">\n\n      <ion-label></ion-label>\n\n      <ion-input type="text" [(ngModel)]="OrderMusical" name="OrderMusical" placeholder="Nhạc cụ khác"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="spacer" style="height:10px;" id="editProfile-spacer18"></div>\n\n  <form id="editProfile-form9">\n\n    <ion-item id="editProfile-input23">\n\n      <ion-label></ion-label>\n\n      <ion-input [(ngModel)]="Achievements" name="Achievements"  type="text" placeholder="Thành tích"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="editProfile-button5" ion-button color="royal" block on-click="goToProfile()">\n\n    Lưu\n\n  </button>\n\n</ion-content>\n\n<!--footer-->\n\n<ion-footer>\n\n    <ion-navbar>\n\n      <ion-row>\n\n        <ion-buttons col text-center>\n\n          <button mx-auto ion-button icon-only on-click="goToHome()">\n\n            <ion-icon name="home"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n        <ion-buttons col text-center>\n\n          <button mx-auto ion-button icon-only (click)="goToMenu()">\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-row>\n\n    </ion-navbar>\n\n  </ion-footer>'/*ion-inline-end:"D:\BandsCO\src\pages\edit-profile\edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7__providers_data__["a" /* Data */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
    }
    AuthServiceProvider_1 = AuthServiceProvider;
    // Login
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.username == null || credentials.password == null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Thông tin nhập còn trống, vui lòng kiểm tra lại!");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.http.post(AuthServiceProvider_1.LOGIN_URL, credentials)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    if (data.access_token) {
                        _this.token = 'Bearer ' + data.access_token;
                        _this.access = true;
                    }
                    else {
                        _this.access = false;
                    }
                });
                setTimeout(function () {
                    observer.next(_this.access);
                }, 500);
                setTimeout(function () {
                    observer.complete();
                }, 1000);
            }, function (err) { return console.error(err); });
        }
    };
    // Register
    AuthServiceProvider.prototype.register = function (credentials) {
        var _this = this;
        if (credentials.username == null || credentials.email == null || credentials.password == null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Thông tin nhập còn trống, vui lòng kiểm tra lại!");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.http.post(AuthServiceProvider_1.REGISTER_URL, credentials)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                });
                observer.next(true);
                observer.complete();
            });
        }
    };
    // Get Token
    AuthServiceProvider.prototype.getToken = function () {
        return this.token;
    };
    // Logout
    AuthServiceProvider.prototype.logout = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(true);
            observer.complete();
        });
    };
    AuthServiceProvider.LOGIN_URL = 'https://bandscoserver.herokuapp.com/login';
    AuthServiceProvider.REGISTER_URL = 'https://bandscoserver.herokuapp.com/signup';
    AuthServiceProvider = AuthServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
    var AuthServiceProvider_1;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandsCOPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_member_post_find_member_post__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_member_find_member__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__find_band_post_find_band_post__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_profile_edit_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__join_band_join_band__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__find_band_find_band__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_rest__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data__ = __webpack_require__(43);
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
    function BandsCOPage(navCtrl, resProvider, dataService) {
        this.navCtrl = navCtrl;
        this.resProvider = resProvider;
        this.dataService = dataService;
        this.getPosts();
        dataService.updateProfile({
            id: 2,
            accountid: 2,
            username: "admin",
            avatar: "assets/img/E7jYmtBBQYyPBkmHj8hg_avt-dam-cuoi-circle.png",
            phone: "23450000009",
            email: "trungtrs1@gmail.com",
            skill: "Rap",
            musical: "Trống",
            achievements: "Giải nhất the voice"
        });
        console.log("bandsco/bandsco: data: " + dataService.getProfile().username);
    }
    BandsCOPage_1 = BandsCOPage;
    BandsCOPage.prototype.getPosts = function () {
        var _this = this;
        this.resProvider.getPosts().then(function (data) {
            _this.posts = data;
            console.log(_this.posts);
        });
    };
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
            selector: 'page-bands-co',template:/*ion-inline-start:"D:\BandsCO\src\pages\bands-co\bands-co.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only on-click="goToMenu()">\n\n        <ion-icon name="add-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      BandsCO\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="goToProfile()">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <!-- <ion-card id="bandsCO-card21">\n\n    <ion-list>\n\n      <ion-item color="royal" id="bandsCO-list-item9">\n\n        <ion-avatar item-left>\n\n          <img src="assets/img/HNSOusbR9GvcTPzFATNQ_avatar.jpg" />\n\n        </ion-avatar>\n\n        <h2>\n\n          Vũ Phạm\n\n        </h2>\n\n      </ion-item>\n\n      <img src="assets/img/yTpOLdi8ReWvJfDrgxxR_avatar.jpg" />\n\n      <ion-item color="royal" id="bandsCO-list-item10">\n\n        <ion-icon name="musical-notes" item-left></ion-icon>\n\n        Trống, Rap, Sáng tác\n\n      </ion-item>\n\n      <button id="bandsCO-button" ion-button color="royal" block on-click="goToProfile()">\n\n        Xem hồ sơ\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card id="bandsCO-card24">\n\n    <ion-list>\n\n      <ion-item color="royal" id="bandsCO-list-item15">\n\n        <ion-avatar item-left>\n\n          <img src="assets/img/0GKR8nTBTCG1e3xWTWNM_bands.jpg" />\n\n        </ion-avatar>\n\n        <h2>\n\n          Foreigner band\n\n        </h2>\n\n      </ion-item>\n\n      <img src="assets/img/a6fX9VIaRlq1Hco5ys8K_bands.jpg" />\n\n      <ion-item color="royal" id="bandsCO-list-item16">\n\n        <ion-icon name="person-add" item-left></ion-icon>\n\n        vị trí 1, vị trí 2\n\n      </ion-item>\n\n      <button id="bandsCO-button" ion-button color="royal" block on-click="goToFindMemberPost()">\n\n        Xem chi tiết\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card id="bandsCO-card25">\n\n    <ion-list>\n\n      <ion-item color="royal" id="bandsCO-list-item17">\n\n        <ion-avatar item-left>\n\n          <img src="assets/img/5rchU2TZikIPBdviTzeA_business.jpg" />\n\n        </ion-avatar>\n\n        <h2>\n\n          Phòng trà Đồng Dao\n\n        </h2>\n\n      </ion-item>\n\n      <img src="assets/img/nUipxvZ5QdiqVUEKUYMA_business.jpg" />\n\n      <ion-item color="royal" id="bandsCO-list-item18">\n\n        <ion-icon name="cash" item-left></ion-icon>\n\n        1.000.000 VNĐ\n\n      </ion-item>\n\n      <button id="bandsCO-button" ion-button color="royal" block on-click="goToFindBandPost()">\n\n        Xem chi tiết\n\n      </button>\n\n    </ion-list>\n\n  </ion-card> -->\n\n\n\n\n\n  <ion-card *ngFor="let post of posts" [ngSwitch]="post.type">\n\n    <ion-list *ngSwitchCase = "FIND BAND">\n\n      join band\n\n      <ion-item color="royal">\n\n        <ion-avatar item-left >\n\n          <img [src]= "post.postcontent.user.img" />\n\n        </ion-avatar>\n\n        <h2>\n\n          {{post.postcontent.user.username}}\n\n        </h2>\n\n      </ion-item>\n\n      <img [src]= "post.postcontent.user.img" />\n\n      <ion-item color="royal">\n\n        <ion-icon name="musical-notes" item-left></ion-icon>\n\n        {{post.postcontent.user.skill}}\n\n      </ion-item>\n\n      <button id="bandsCO-button" ion-button color="royal" block on-click="goToProfile()">\n\n        Xem hồ sơ\n\n      </button>\n\n    </ion-list>\n\n    <ion-list *ngSwitchDefault>\n\n      <ion-item>\n\n      <p>default</p>\n\n    </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\BandsCO\src\pages\bands-co\bands-co.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__providers_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_data__["a" /* Data */]])
    ], BandsCOPage);
    return BandsCOPage;
    var BandsCOPage_1;
}());

//# sourceMappingURL=bands-co.js.map

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_member_find_member__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__find_band_find_band__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__join_band_join_band__ = __webpack_require__(108);
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
    MenuPage.prototype.goToJoinBand = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__join_band_join_band__["a" /* JoinBandPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\BandsCO\src\pages\menu\menu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Menu\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button color="stable" block on-click="goToJoinBand()">Đăng bài tìm band</button>\n\n  <button ion-button color="stable" block on-click="goToFindMember()">Đăng tuyển thành viên</button>\n\n  <button ion-button color="stable" block on-click="goToFindBand()">Đăng tuyển band</button>\n\n</ion-content>'/*ion-inline-end:"D:\BandsCO\src\pages\menu\menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinBandPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bands_co_bands_co__ = __webpack_require__(15);
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
            selector: 'page-join-band-post',template:/*ion-inline-start:"D:\BandsCO\src\pages\join-band-post\join-band-post.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      JoinBandPost\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page14">\n\n  <ion-list id="joinBandPost-list9">\n\n    <ion-item color="royal" on-click="goToProfile()" id="joinBandPost-list-item14">\n\n      <ion-thumbnail item-left>\n\n        <img src="assets/img/OVlezG5oS6WN0ld83Bz6_avatar.jpg" />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Vũ Phạm\n\n      </h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="spacer" style="width:300px;height:15px;" id="joinBandPost-spacer34"></div>\n\n  <form id="joinBandPost-form14">\n\n    <div id="joinBandPost-container7">\n\n      <h4 id="joinBandPost-heading14" style="color:#974FA5;font-weight:400;">\n\n        Kỹ năng\n\n      </h4>\n\n      <ion-list id="joinBandPost-list23">\n\n        <ion-item color="royal" id="joinBandPost-list-item20">\n\n          <ion-icon name="musical-notes" item-left></ion-icon>\n\n          Trống, Guitar\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list id="joinBandPost-list25">\n\n        <ion-item color="royal" id="joinBandPost-list-item21">\n\n          <ion-icon name="star" item-left></ion-icon>\n\n          Licks, Bass, Hammer\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list id="joinBandPost-list27">\n\n        <ion-item color="royal" id="joinBandPost-list-item22">\n\n          <ion-icon name="bookmark" item-left></ion-icon>\n\n          Giải nhất The Voice\n\n        </ion-item>\n\n      </ion-list>\n\n      <h4 id="joinBandPost-heading13" style="color:#974FA5;font-weight:400;">\n\n        Kinh nghiệm\n\n      </h4>\n\n      <ion-list id="joinBandPost-list19">\n\n        <ion-item color="none" id="joinBandPost-list-item24">\n\n          <ion-icon name="people" item-left></ion-icon>\n\n          7269 Bands, Cá hồi hoang\n\n        </ion-item>\n\n        <ion-item color="none" id="joinBandPost-list-item25">\n\n          <ion-icon name="paper-plane" item-left></ion-icon>\n\n          Mong muốn học hỏi và tiến bộ\n\n        </ion-item>\n\n        <ion-item color="none" id="joinBandPost-list-item26">\n\n          <ion-icon name="timer" item-left></ion-icon>\n\n          Thứ 7, chủ nhật\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </form>\n\n  <button id="joinBandPost-button15" ion-button color="royal" block on-click="goToProfile()">\n\n    Xem hồ sơ\n\n  </button>\n\n  <button id="joinBandPost-button19" ion-button color="royal" block>\n\n    Liên hệ\n\n  </button>\n\n</ion-content>\n\n<!--footer-->\n\n<ion-footer>\n\n    <ion-navbar>\n\n      <ion-row>\n\n        <ion-buttons col text-center>\n\n          <button mx-auto ion-button icon-only on-click="goToHome()">\n\n            <ion-icon name="home"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n        <ion-buttons col text-center>\n\n          <button mx-auto ion-button icon-only (click)="goToMenu()">\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-row>\n\n    </ion-navbar>\n\n  </ion-footer>'/*ion-inline-end:"D:\BandsCO\src\pages\join-band-post\join-band-post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], JoinBandPostPage);
    return JoinBandPostPage;
}());

//# sourceMappingURL=join-band-post.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://bandscoserver.herokuapp.com';
var getPostsUrl = apiUrl + '/home/posts';
var getMucialInstrumentsUrl = apiUrl + '/musicalInstrument ';
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getPosts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(getPostsUrl).subscribe(function (data) {
                resolve(data.json());
            }, function (err) { console.log(err); });
        });
    };
    RestProvider.prototype.getMucialInstruments = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(getMucialInstrumentsUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) { console.log(err); });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(111);
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
    function SignupPage(navCtrl, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { username: '', email: '', password: '', passcfm: '' };
    }
    SignupPage.prototype.onLoginClick = function (params) {
        this.navCtrl.pop();
    };
    SignupPage.prototype.onRegisterClick = function () {
        var _this = this;
        if (this.registerCredentials.username == '' || this.registerCredentials.password == ''
            || this.registerCredentials.email == '' || this.registerCredentials.passcfm == '') {
            this.showPopup("Lỗi!", "Thông tin nhập còn trống, vui lòng kiểm tra lại.");
        }
        else {
            if (this.registerCredentials.password != this.registerCredentials.passcfm) {
                this.showPopup("Lỗi!", 'Xác nhận mật khẩu không khớp.');
            }
            else {
                this.auth.register(this.registerCredentials).subscribe(function (success) {
                    if (success) {
                        _this.createSuccess = true;
                        _this.showPopup("Thông báo!", "Tạo tài khoản thành công");
                    }
                    else {
                        _this.showPopup("Lỗi", "Tạo tài khoản không thành công.");
                    }
                }, function (error) {
                    _this.showPopup("Lỗi", error);
                });
            }
        }
    };
    SignupPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\BandsCO\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Signup\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <img src="assets/img/5otX3UIPRZuCqlTJ3mcb_logo1.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <div id="signup-container3">\n\n    <form id="signup-form5">\n\n      <div class="spacer" style="width:300px;height:19px;" id="signup-spacer33"></div>\n\n      <ion-item id="signup-input8">\n\n        <ion-label></ion-label>\n\n        <ion-input  type="text" placeholder="Tên đăng nhập" name="username" [(ngModel)]="registerCredentials.username" required></ion-input>\n\n      </ion-item>\n\n      <ion-item id="signup-input11">\n\n        <ion-label></ion-label>\n\n        <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n\n      </ion-item>\n\n      <ion-item id="signup-input9">\n\n        <ion-label></ion-label>\n\n        <ion-input type="password" placeholder="Mật khẩu" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n      </ion-item>\n\n      <ion-item id="signup-input10">\n\n        <ion-label></ion-label>\n\n        <ion-input type="password" placeholder="Xác nhận mật khẩu" name="passcfm" [(ngModel)]="registerCredentials.passcfm" required></ion-input>\n\n      </ion-item>\n\n    </form>\n\n  </div>\n\n  <button id="signup-button3" (click)="onRegisterClick()" ion-button color="royal" block style="border-radius:5px 5px 5px 5px;">\n\n    Đăng ký\n\n  </button>\n\n  <div id="signup-markdown14" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;font-size:14px;">\n\n      -------- HOẶC --------\n\n    </p>\n\n  </div>\n\n  <div id="signup-markdown8" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;font-size:14px;">\n\n      Bạn đã là thành viên?\n\n      <strong (click)="onLoginClick()">\n\n        Đăng nhập ngay\n\n      </strong>\n\n    </p>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\BandsCO\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bands_co_bands_co__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_profile_edit_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_find_band_find_band__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_find_band_post_find_band_post__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_find_member_find_member__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_find_member_post_find_member_post__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_join_band_join_band__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_join_band_post_join_band_post__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_rest__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_data__ = __webpack_require__(43);
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
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_data__["a" /* Data */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_bands_co_bands_co__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data__ = __webpack_require__(43);
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
    function MyApp(platform, statusBar, splashScreen, dataService) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_bands_co_bands_co__["a" /* BandsCOPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            dataService.deleteFromStorage();
            dataService.start();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\BandsCO\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\BandsCO\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_data__["a" /* Data */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Musical; });
var Musical = /** @class */ (function () {
    function Musical(name, isChecked) {
        this.name = name;
        this.isChecked = isChecked;
    }
    return Musical;
}());

//# sourceMappingURL=musical.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_member_post_find_member_post__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__ = __webpack_require__(111);
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
    function LoginPage(navCtrl, fromBuilder, loadCtrl, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.fromBuilder = fromBuilder;
        this.loadCtrl = loadCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.registerCredentials = { username: '', password: '' };
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
    // checkLogin() {
    //   console.log(this.loginForm.value);
    //   let userName = this.loginForm.value.userName;
    //   let password = this.loginForm.value.password;
    //   console.log('user name: ' + userName);
    //   console.log('password: ' + password);
    // }
    LoginPage.prototype.onLoginClick = function () {
        var _this = this;
        this.showLoading();
        if (this.registerCredentials.username == '' || this.registerCredentials.password == '') {
            this.showError("Thông tin nhập còn trống, vui lòng kiểm tra lại.");
        }
        else {
            this.auth.login(this.registerCredentials).subscribe(function (allowed) {
                if (allowed) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__["a" /* BandsCOPage */]);
                }
                else {
                    _this.showError("Thông tin đăng nhập không chính xác.");
                }
            }, function (error) {
                _this.showError(error);
            });
        }
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadCtrl.create({
            content: 'Vui lòng đợi ...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Thông báo!',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.onRegisterClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\BandsCO\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page1">\n\n  <div text-center>\n\n    <img src="assets/img/nHBkB8CHSCqJLzPGIgz3_logo1.png"\n\n      style="display:block;width:100%;height:;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n  <div id="login-container1">\n\n    <form id="login-form3" [formGroup]="loginForm" (submit)="checkLogin()">\n\n      <div class="spacer" style="width:300px;height:20px;" id="login-spacer31"></div>\n\n      <ion-item id="login-input4">\n\n        <ion-label></ion-label>\n\n        <ion-input type="text" name="username" [(ngModel)]="registerCredentials.username" placeholder="Tên đăng nhập" formControlName="userName"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="login-input5">\n\n        <ion-label></ion-label>\n\n        <ion-input type="password" name="password" [(ngModel)]="registerCredentials.password" placeholder="Mật khẩu" formControlName="password" required></ion-input>\n\n      </ion-item>\n\n    </form>\n\n  </div>\n\n  <button id="login-button1" ion-button color="royal" block style="color:#FFFFFF;border-radius:5px 5px 5px 5px;"\n\n    type="submit" (click)="onLoginClick()">\n\n    Đăng nhập\n\n  </button>\n\n  <div class="spacer" style="height:10px;" id="login-spacer3"></div>\n\n  <div id="login-markdown4" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#010002;font-size:14px;">\n\n      <strong>\n\n        Quên mật khẩu?\n\n      </strong>\n\n    </p>\n\n  </div>\n\n  <div id="login-markdown3" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;font-size:14px;">\n\n      -------- HOẶC --------\n\n    </p>\n\n  </div>\n\n  <div id="login-markdown2" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;font-size:14px;">\n\n      Bạn chưa có tài khoản?\n\n      <strong (click)="onRegisterClick()">\n\n        Hãy Đăng ký\n\n      </strong>\n\n    </p>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\BandsCO\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data__ = __webpack_require__(43);
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
    function ProfilePage(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        console.log("profile/profile: data from storage: " + this.dataService.getProfile().username);
        this.user = this.dataService.getProfile();
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
            selector: 'page-profile',template:/*ion-inline-start:"D:\BandsCO\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button></button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Profile\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="goToEditProfile()">\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n  <div class="spacer" style="height:20px;" id="profile-spacer12"></div>\n\n  <img [src]="user.avatar" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <div class="spacer" style="height:10px;" id="profile-spacer10"></div>\n\n  <h3 id="profile-heading11" style="color:#8A2CE2;text-align:center;">\n\n    {{user.username}}\n\n  </h3>\n\n  <div id="profile-markdown15" class="show-list-numbers-and-dots">\n\n    <h4>\n\n      Cơ bản\n\n    </h4>\n\n  </div>\n\n  <ion-list id="profile-list8">\n\n    <ion-item color="royal" id="profile-list-item36">\n\n      <ion-icon name="person" item-left></ion-icon>\n\n      {{user.username}}\n\n    </ion-item>\n\n    <ion-item color="royal" id="profile-list-item29">\n\n      <ion-icon name="phone-portrait" item-left></ion-icon>\n\n      {{user.phone}}\n\n    </ion-item>\n\n    <ion-item color="royal" id="profile-list-item46">\n\n      <ion-icon name="mail" item-left></ion-icon>\n\n      {{user.email}}\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="spacer" style="height:10px;" id="profile-spacer15"></div>\n\n  <div id="profile-markdown18" class="show-list-numbers-and-dots">\n\n    <h4>\n\n      Kỹ năng\n\n    </h4>\n\n  </div>\n\n  <ion-list id="profile-list11">\n\n    <ion-item color="royal" id="profile-list-item12">\n\n      <ion-icon name="musical-notes" item-left></ion-icon>\n\n      {{user.musical}}\n\n    </ion-item>\n\n    <ion-item color="royal" id="profile-list-item13">\n\n      <ion-icon name="star" item-left></ion-icon>\n\n      {{user.skill}}\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list id="profile-list16">\n\n    <ion-item color="royal" id="profile-list-item43">\n\n      <ion-icon name="bookmark" item-left></ion-icon>\n\n      {{user.achievements}}\n\n    </ion-item>\n\n  </ion-list>\n\n  <div id="profile-markdown17" class="show-list-numbers-and-dots">\n\n    <h4>\n\n      Tài khoản\n\n    </h4>\n\n  </div>\n\n  <button id="profile-button14" ion-button color="royal" block>\n\n    Đăng xuất\n\n  </button>\n\n  <div class="spacer" style="height:10px;" id="profile-spacer11"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\BandsCO\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_data__["a" /* Data */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Data = /** @class */ (function () {
    function Data(storage) {
        this.storage = storage;
    }
    Data.prototype.start = function () {
        var _this = this;
        this.readFromStorage().then(function (user) {
            if (user) {
                _this.user = user;
            }
        });
    };
    Data.prototype.readFromStorage = function () {
        return this.storage.get('user');
    };
    Data.prototype.deleteFromStorage = function () {
        return this.storage.remove('user');
    };
    Data.prototype.saveToStorage = function () {
        console.log("provider/data: save: " + this.user.username);
        this.storage.set('user', this.user);
    };
    Data.prototype.getProfile = function () {
        return this.user;
    };
    Data.prototype.updateProfile = function (user) {
        this.user = user;
        this.saveToStorage();
    };
    Data.prototype.deleteProfile = function () {
        if (!this.user) {
            return false;
        }
        this.user = null;
        this.saveToStorage();
    };
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], Data);
    return Data;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_member_post_find_member_post__ = __webpack_require__(55);
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
            selector: 'page-find-member',template:/*ion-inline-start:"D:\BandsCO\src\pages\find-member\find-member.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      FindMember\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page11">\n\n  <form id="findMember-form11">\n\n    <ion-item id="findMember-input20">\n\n      <ion-label></ion-label>\n\n      <ion-input type="text" placeholder="Tên nhóm nhạc"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <img src="assets/img/pz9hn6fBSCqWYG6sNOdC_maxresdefault.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <h4 id="findMember-heading2" style="color:#000000;">\n\n    Thông tin nhóm\n\n  </h4>\n\n  <ion-list id="findMember-list12" class="Thêm đâu giờ">\n\n    <ion-item id="findMember-select3">\n\n      <ion-label>\n\n        Dòng nhạc\n\n      </ion-label>\n\n      <ion-select name="">\n\n        <ion-option>\n\n          Rock\n\n        </ion-option>\n\n        <ion-option>\n\n          Acoustic\n\n        </ion-option>\n\n        <ion-option>\n\n          Pop\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item id="findMember-input21">\n\n      <ion-label></ion-label>\n\n      <ion-input type="text" placeholder="Thành tích"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="findMember-input25">\n\n      <ion-label></ion-label>\n\n      <ion-input type="text" placeholder="Điện thoại liên hệ"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <h4 id="findMember-heading3" style="color:#000000;">\n\n    Thành viên\n\n  </h4>\n\n  <ion-list id="findMember-list14">\n\n    <ion-item color="royal" id="findMember-list-item32">\n\n      <ion-avatar item-left>\n\n        <img src="assets/img/WU5k9QnATfutHv5g0YCN_71400558_2382733591945478_2803053334208970752_n.jpg" />\n\n      </ion-avatar>\n\n      <h2>\n\n        Phương Thi :))\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="royal" id="findMember-list-item34">\n\n      <ion-avatar item-left>\n\n        <img src="assets/img/atW3oppTam2bIbsE3lPl_3a616451af70492e1061.jpg" />\n\n      </ion-avatar>\n\n      <h2>\n\n        Quân Trinh\n\n      </h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button id="findMember-button12" ion-button outline color="royal" block style="border-radius:0px 0px 0px 0px;">\n\n    Thêm thành viên\n\n  </button>\n\n  <h4 id="findMember-heading4" style="color:#000000;">\n\n    Vị trí cần tuyển\n\n  </h4>\n\n  <form id="findMember-form13">\n\n    <ion-item id="findMember-select4">\n\n      <ion-label>\n\n        Sở trường\n\n      </ion-label>\n\n      <ion-select name="">\n\n        <ion-option>\n\n          Hát chính\n\n        </ion-option>\n\n        <ion-option>\n\n          Trống\n\n        </ion-option>\n\n        <ion-option>\n\n          Guitar\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item id="findMember-input24">\n\n      <ion-label></ion-label>\n\n      <ion-input type="text" placeholder="Khả năng khác"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <div class="spacer" style="width:300px;height:24px;" id="findMember-spacer23"></div>\n\n  <button id="findMember-button10" ion-button color="royal" block (click)="goToHome()">\n\n    Đăng bài\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\BandsCO\src\pages\find-member\find-member.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FindMemberPage);
    return FindMemberPage;
}());

//# sourceMappingURL=find-member.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindMemberPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_member_find_member__ = __webpack_require__(54);
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
            selector: 'page-find-member-post',template:/*ion-inline-start:"D:\BandsCO\src\pages\find-member-post\find-member-post.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      FindMemberPost\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="goToFindMember()">\n\n        <ion-icon name="options"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page12">\n\n  <h4 id="findMemberPost-heading5" style="color:#B08EE6;text-align:center;">\n\n    Team 7269\n\n  </h4>\n\n  <img src="assets/img/pz9hn6fBSCqWYG6sNOdC_maxresdefault.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <h4 id="findMemberPost-heading7" style="color:#000000;">\n\n    Thông tin nhóm\n\n  </h4>\n\n  <ion-list id="findMemberPost-list15">\n\n    <ion-item color="royal" id="findMemberPost-list-item35">\n\n      Dòng nhạc\n\n      <ion-note item-right></ion-note>\n\n    </ion-item>\n\n    <ion-item color="royal" id="findMemberPost-list-item37">\n\n      Thành tích\n\n      <ion-note item-right></ion-note>\n\n    </ion-item>\n\n    <ion-item color="royal" id="findMemberPost-list-item38">\n\n      Điện thoại liên hệ\n\n      <ion-note item-right></ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n  <h4 id="findMemberPost-heading8" style="color:#000000;">\n\n    Thành viên\n\n  </h4>\n\n  <ion-list id="findMemberPost-list17">\n\n    <ion-item color="royal" id="findMemberPost-list-item40">\n\n      <ion-avatar item-left>\n\n        <img src="assets/img/Ax37UZzVQHy60U3bDeeX_71400558_2382733591945478_2803053334208970752_n.jpg" />\n\n      </ion-avatar>\n\n      <h2>\n\n        Phương Thi\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="royal" id="findMemberPost-list-item41">\n\n      <ion-avatar item-left>\n\n        <img src="assets/img/AFHQR8d0QnlGXVry5YwC_3a616451af70492e1061.jpg" />\n\n      </ion-avatar>\n\n      <h2>\n\n        Quân Trinh\n\n      </h2>\n\n    </ion-item>\n\n  </ion-list>\n\n  <h4 id="findMemberPost-heading9" style="color:#000000;">\n\n    Vị trí ứng tuyển\n\n  </h4>\n\n  <ion-list id="findMemberPost-list18">\n\n    <ion-item color="royal" id="findMemberPost-list-item42">\n\n      <ion-icon name="musical-notes" item-left></ion-icon>\n\n      Hát chính\n\n    </ion-item>\n\n    <ion-item color="royal" id="findMemberPost-list-item44">\n\n      <ion-icon name="musical-note" item-left></ion-icon>\n\n      Trống, Guitar\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="spacer" style="width:300px;height:40px;" id="findMemberPost-spacer24"></div>\n\n  <button id="findMemberPost-button13" ion-button color="royal" block>\n\n    Ứng tuyển\n\n  </button>\n\n  <button id="findMemberPost-button11" ion-button color="royal" block>\n\n    Liên hệ\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\BandsCO\src\pages\find-member-post\find-member-post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FindMemberPostPage);
    return FindMemberPostPage;
}());

//# sourceMappingURL=find-member-post.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindBandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bands_co_bands_co__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_band_post_find_band_post__ = __webpack_require__(107);
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
            selector: 'page-find-band',template:/*ion-inline-start:"D:\BandsCO\src\pages\find-band\find-band.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      FindBand\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9">\n\n  <img src="assets/img/1937J4eHTpKro6hVbQIe_thiet-ke-quan-cafe-hat-cho-nhau-nghe_101.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <form id="FindBand-form12">\n\n    <ion-item id="FindBand-input22">\n\n      <ion-label>\n\n        Tên\n\n      </ion-label>\n\n      <ion-input type="text" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <ion-item id="FindBand-input27">\n\n      <ion-label>\n\n        Địa điểm\n\n      </ion-label>\n\n      <ion-input type="text" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <ion-item id="FindBand-input28">\n\n      <ion-label>\n\n        Số điện thoại\n\n      </ion-label>\n\n      <ion-input type="text" placeholder=""></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <div class="spacer" style="height:10px;" id="FindBand-spacer13"></div>\n\n  <form id="FindBand-form10">\n\n    <ion-item id="FindBand-input12">\n\n      <ion-label></ion-label>\n\n      <ion-input type="text" placeholder="Nhạc cụ"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="FindBand-input13">\n\n      <ion-label></ion-label>\n\n      <ion-input type="text" placeholder="Thiết bị âm thanh"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="FindBand-input14">\n\n      <ion-label></ion-label>\n\n      <ion-input type="text" placeholder="Tiền hợp đồng"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="FindBand-input15">\n\n      <ion-label></ion-label>\n\n      <ion-input type="text" placeholder="Yêu cầu"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <div class="spacer" style="height:10px;" id="FindBand-spacer14"></div>\n\n  <button id="FindBand-button7" ion-button color="royal" block (click)="goToHome()">\n\n    Đăng bài\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\BandsCO\src\pages\find-band\find-band.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FindBandPage);
    return FindBandPage;
}());

//# sourceMappingURL=find-band.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map