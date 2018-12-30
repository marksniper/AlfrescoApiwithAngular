(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'index', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
    },
    {
        path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    { path: '', redirectTo: '/index', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <nav class=\"nav justify-content-center\">\n    <a class=\"nav-link active\" routerLink=\"/index\" routerLinkActive=\"active\">Index</a>\n   <a class=\"nav-link active\" routerLink=\"/user\" routerLinkActive=\"active\">User</a>\n   <a  class=\"nav-link active\" placement=\"bottom\" [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\" triggers=\"mouseenter:mouseleave\">{{fullName}}</a>\n   <a href=\"../ng/logout\" class=\"nav-link active\">Logout</a>\n  </nav>\n <ng-template #popTitle>Hello, <b>{{fullName}}</b>!</ng-template>\n <ng-template #popContent>You are logged in Alfresco, using id <b>{{idAlfresco}}</b>. Email registered is <b>{{email}}</b></ng-template>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/rest.service */ "./src/app/service/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, rest) {
        var _this = this;
        this.rest = rest;
        this.router = router;
        var response = this.rest.getAlfrescoUserInfo();
        response.subscribe(function (data) {
            console.log(JSON.stringify(data));
            console.log('User Info object' + data);
            console.log('User name: ' + data['entry']['firstName']);
            _this.fullName = data['entry']['firstName'] + ' ' + data['entry']['lastName'];
            _this.email = data['entry']['email'];
            _this.idAlfresco = data['entry']['id'];
        }, function (error) { console.log(error); });
    }
    AppComponent.prototype.logout = function () {
        this.router.navigateByUrl('/logout');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            providers: [_service_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\"class=\"container\">\n  <h1>\n    Welcome {{title}}!\n  </h1>\n  <div class=\"container\">\n    <p>Id: <span>{{id}}</span></p>\n    <p>Message: <span>{{data}}!</span></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.title = 'Demo Rest';
        http.get('resource').subscribe(function (data) {
            console.log(data);
            _this.data = data['data'];
            _this.id = data['id'];
            console.log('data: ' + _this.data);
            console.log('id: ' + _this.id);
        }, function (err) {
            console.log('Error occured.');
        });
    }
    HomeComponent.prototype.userInfo = function () {
        this.router.navigateByUrl('/user');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/service/rest.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/rest.service.ts ***!
  \*****************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.testService = function () {
        console.log('rest service ...');
    };
    /*getAlfrescoTicket(credentials: string): Observable<string> {
      console.log('Url: ' + this.baseUrl);
      console.log('getAlfrescoTicket');
      return this.sendRequest('POST', this.baseUrl + 'alfresco/service/api/login', credentials);
    }*/
    RestService.prototype.getAlfrescoUserInfo = function () {
        console.log('getAlfrescoUserInfo');
        return this.sendRequest('GET', 'alfresco/user/info');
    };
    RestService.prototype.sendRequest = function (type, url, body) {
        console.log('url in send request: ' + url);
        console.log('sendRequest body ' + body);
        var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        myHeaders = myHeaders.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
        myHeaders = myHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        myHeaders = myHeaders.set('Access-Control-Allow-Origin', '*');
        return this.http.request(type, url, {
            body: body,
            headers: myHeaders
        });
    };
    RestService.prototype.testJson = function (username, password) {
        console.log('');
    };
    RestService.prototype.updateAlfrescoUserInformation = function (data) {
        console.log('data: ' + data);
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  input.ng-dirty.ng-invalid { border: 2px solid #ff0000 }\n  input.ng-dirty.ng-valid { border: 2px solid #6bc502 }\n</style>\n<p [ngClass]=\"{\n    'text-success': values === '',\n    'text-danger': values !== ''\n  }\">{{valuesID}} </p>\n\n<p [ngClass]=\"{\n    'text-success': values === '',\n    'text-danger': values !== ''\n  }\">{{valuesFirstName}} </p>\n\n<p [ngClass]=\"{\n    'text-success': values === '',\n    'text-danger': values !== ''\n  }\">{{valuesLastName}} </p>\n\n\n<p [ngClass]=\"{\n    'text-success': values === '',\n    'text-danger': values !== ''\n  }\">{{valuesEmail}} </p>\n\n<form novalidate #form=\"ngForm\" (ngSubmit)=\"saveChanges(form)\">\n  <div class=\"bg-danger text-white p-2 mb-2\"\n       *ngIf=\"form.invalid\">\n    There are problems with the form\n    <ul>\n      <li *ngFor=\"let error of getFormValidationMessages(form)\">\n        {{error}}\n      </li>\n    </ul>\n  </div>\n<input class=\"form-control\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"newUserAlfresco.id\" (keyup)=\"onKey($event)\" required readonly/>\n<br>\n<br>\n<input class=\"form-control ng-invalid ng-touched ng-pristine\" #name1=\"ngModel\" name=\"Primo nome\" [(ngModel)]=\"newUserAlfresco.firstName\" (keyup)=\"onKey($event)\" required />\n  <ul class=\"text-danger list-unstyled\"\n      *ngIf=\"(name1.dirty) && name1.invalid\">\n    <li *ngFor=\"let error of getValidationMessages(name1)\">\n      {{error}}\n    </li>\n  </ul>\n<br>\n<input class=\"form-control\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"newUserAlfresco.lastname\" (keyup)=\"onKey($event)\" required/>\n<br>\n<input type=\"email\" class=\"form-control\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"newUserAlfresco.email\" (keyup)=\"onKey($event)\" required email/>\n<br>\n<br>\n<button type=\"button\" class=\"btn btn-primary\" type=\"submit\"  [disabled]=\"form.invalid\"\n        [class.btn-secondary]=\"form.invalid\">SAVE</button>\n<button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelChanges()\">CANCEL CHANGES</button>\n</form>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _userAlfresco_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userAlfresco.model */ "./src/app/user/userAlfresco.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(rest) {
        var _this = this;
        this.rest = rest;
        this.valuesFirstName = '';
        this.valuesLastName = '';
        this.valuesID = '';
        this.valuesEmail = '';
        this.userAlfresco = new _userAlfresco_model__WEBPACK_IMPORTED_MODULE_2__["UserAlfresco"]();
        this.newUserAlfresco = new _userAlfresco_model__WEBPACK_IMPORTED_MODULE_2__["UserAlfresco"]();
        console.log('UserComonent');
        this.rest.testService();
        var response = this.rest.getAlfrescoUserInfo();
        response.subscribe(function (data) {
            console.log(JSON.stringify(data));
            console.log('User Info object' + data);
            console.log('User name: ' + data['entry']['firstName']);
            _this.data = data;
            _this.userAlfresco.id = data['entry']['id'];
            _this.newUserAlfresco.id = data['entry']['id'];
            _this.userAlfresco.firstName = data['entry']['firstName'];
            _this.newUserAlfresco.firstName = data['entry']['firstName'];
            _this.userAlfresco.lastname = data['entry']['lastName'];
            _this.newUserAlfresco.lastname = data['entry']['lastName'];
            _this.userAlfresco.email = data['entry']['email'];
            _this.newUserAlfresco.email = data['entry']['email'];
        }, function (error) { console.log(error); });
    }
    UserComponent.prototype.getData = function () {
        return this.data;
    };
    UserComponent.prototype.onKey = function (event) {
        /* if ( this.userAlfresco.firstName === this.newUserAlfresco.firstName) {
           this.values = '';
         }  else {
           this.values = 'Old name: ' + this.userAlfresco.firstName + ' New Name: ' + this.newUserAlfresco.firstName;
         }*/
        if (this.userAlfresco === this.newUserAlfresco) {
            console.log('Object is equal');
            this.valuesFirstName = '';
        }
        else {
            console.log('New User has new attributes');
        }
        if (this.userAlfresco.firstName !== this.newUserAlfresco.firstName) {
            this.valuesFirstName = 'Old name: ' + this.userAlfresco.firstName + ' New Name: ' + this.newUserAlfresco.firstName;
        }
        else {
            this.valuesFirstName = '';
        }
        if (this.userAlfresco.email !== this.newUserAlfresco.email) {
            this.valuesEmail = 'Old email: ' + this.userAlfresco.email + ' New email: ' + this.newUserAlfresco.email;
        }
        else {
            this.valuesEmail = '';
        }
        if (this.userAlfresco.id !== this.newUserAlfresco.id) {
            this.valuesID = 'Old ID: ' + this.userAlfresco.id + ' New ID: ' + this.newUserAlfresco.id + '\nPAY ATTENTION!!! ' +
                'IF YOU CHANGE ID, YOU ARE USED NEW ID TO LOG IN!!! ';
        }
        else {
            this.valuesID = '';
        }
        if (this.userAlfresco.lastname !== this.newUserAlfresco.lastname) {
            this.valuesLastName = 'Old LastName: ' + this.userAlfresco.lastname + ' New LastName: ' + this.newUserAlfresco.lastname;
        }
        else {
            this.valuesLastName = '';
        }
    };
    UserComponent.prototype.cancelChanges = function () {
        this.newUserAlfresco.id = this.userAlfresco.id;
        this.newUserAlfresco.firstName = this.userAlfresco.firstName;
        this.newUserAlfresco.lastname = this.userAlfresco.lastname;
        this.newUserAlfresco.email = this.userAlfresco.email;
        this.valuesLastName = '';
        this.valuesID = '';
        this.valuesEmail = '';
        this.valuesFirstName = '';
    };
    UserComponent.prototype.saveChanges = function (form) {
        if (form.valid) {
            console.log('Prepare rest to save user information');
            console.log('JSON: ' + JSON.stringify(this.newUserAlfresco));
            if (this.newUserAlfresco.lastname !== this.userAlfresco.lastname
                || this.newUserAlfresco.firstName !== this.userAlfresco.firstName
                || this.newUserAlfresco.email !== this.userAlfresco.email) {
                this.rest.updateAlfrescoUserInformation(JSON.stringify(this.newUserAlfresco));
            }
        }
    };
    UserComponent.prototype.getValidationMessages = function (state, thingName) {
        var thing = state.path || thingName;
        var messages = [];
        if (state.errors) {
            for (var errorName in state.errors) {
                switch (errorName) {
                    case 'required':
                        messages.push("You must enter a " + thing);
                        break;
                    case 'minlength':
                        messages.push("A " + thing + " must be at least\n                            " + state.errors['minlength'].requiredLength + "\n                            characters");
                        break;
                    case 'pattern':
                        messages.push("The " + thing + " contains\n                             illegal characters");
                        break;
                    case 'email':
                        messages.push("The " + thing + " is NOT an email");
                        break;
                }
            }
        }
        return messages;
    };
    UserComponent.prototype.getFormValidationMessages = function (form) {
        var _this = this;
        var messages = [];
        Object.keys(form.controls).forEach(function (k) {
            _this.getValidationMessages(form.controls[k], k)
                .forEach(function (m) { return messages.push(m); });
        });
        return messages;
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_service_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/userAlfresco.model.ts":
/*!********************************************!*\
  !*** ./src/app/user/userAlfresco.model.ts ***!
  \********************************************/
/*! exports provided: UserAlfresco */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAlfresco", function() { return UserAlfresco; });
var UserAlfresco = /** @class */ (function () {
    function UserAlfresco(id, firstName, lastname, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastname = lastname;
        this.email = email;
    }
    return UserAlfresco;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/Marco/IdeaProjects/old/springAndAngular/Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map