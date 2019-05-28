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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chat></app-chat>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  padding: 0;\n  background: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXGNoYXRib3RzXFxQbGF0aWxsYXMgd2lzeVxcY2hhdEJvdC1mcm9udEVuZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_providers_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/Api */ "./src/providers/Api.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _chat_bubble_bubble_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat/bubble/bubble.component */ "./src/app/chat/bubble/bubble.component.ts");
/* harmony import */ var _chat_bubble_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/bubble/button/button.component */ "./src/app/chat/bubble/button/button.component.ts");
/* harmony import */ var _chat_bubble_image_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat/bubble/image/image.component */ "./src/app/chat/bubble/image/image.component.ts");
/* harmony import */ var _chat_bubble_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat/bubble/carrousel/carrousel.component */ "./src/app/chat/bubble/carrousel/carrousel.component.ts");
/* harmony import */ var _chat_bubble_card_link_card_img_top_card_img_top_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chat/bubble/card/link/card-img-top/card-img-top.component */ "./src/app/chat/bubble/card/link/card-img-top/card-img-top.component.ts");
/* harmony import */ var _chat_bubble_video_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat/bubble/video/video.component */ "./src/app/chat/bubble/video/video.component.ts");
/* harmony import */ var _chat_bubble_card_link_card_simple_link_card_simple_link_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat/bubble/card/link/card-simple-link/card-simple-link.component */ "./src/app/chat/bubble/card/link/card-simple-link/card-simple-link.component.ts");
/* harmony import */ var _chat_bubble_card_link_card_img_left_link_card_img_left_link_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chat/bubble/card/link/card-img-left-link/card-img-left-link.component */ "./src/app/chat/bubble/card/link/card-img-left-link/card-img-left-link.component.ts");
/* harmony import */ var _chat_bubble_card_link_card_img_right_link_card_img_right_link_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chat/bubble/card/link/card-img-right-link/card-img-right-link.component */ "./src/app/chat/bubble/card/link/card-img-right-link/card-img-right-link.component.ts");
/* harmony import */ var _chat_bubble_card_button_card_simple_button_card_simple_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chat/bubble/card/button/card-simple-button/card-simple-button.component */ "./src/app/chat/bubble/card/button/card-simple-button/card-simple-button.component.ts");
/* harmony import */ var _chat_bubble_card_button_card_img_top_button_card_img_top_button_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chat/bubble/card/button/card-img-top-button/card-img-top-button.component */ "./src/app/chat/bubble/card/button/card-img-top-button/card-img-top-button.component.ts");
/* harmony import */ var _chat_bubble_card_button_card_img_right_button_card_img_right_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chat/bubble/card/button/card-img-right-button/card-img-right-button.component */ "./src/app/chat/bubble/card/button/card-img-right-button/card-img-right-button.component.ts");
/* harmony import */ var _chat_bubble_card_button_card_img_left_button_card_img_left_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chat/bubble/card/button/card-img-left-button/card-img-left-button.component */ "./src/app/chat/bubble/card/button/card-img-left-button/card-img-left-button.component.ts");
/* harmony import */ var _chat_bubble_card_link_card_video_link_card_video_link_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chat/bubble/card/link/card-video-link/card-video-link.component */ "./src/app/chat/bubble/card/link/card-video-link/card-video-link.component.ts");
/* harmony import */ var _chat_bubble_card_button_card_video_button_card_video_button_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./chat/bubble/card/button/card-video-button/card-video-button.component */ "./src/app/chat/bubble/card/button/card-video-button/card-video-button.component.ts");
























// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
                _chat_bubble_bubble_component__WEBPACK_IMPORTED_MODULE_9__["BubbleComponent"],
                _chat_bubble_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"],
                _chat_bubble_image_image_component__WEBPACK_IMPORTED_MODULE_11__["ImageComponent"],
                _chat_bubble_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_12__["CarrouselComponent"],
                _chat_bubble_card_link_card_img_top_card_img_top_component__WEBPACK_IMPORTED_MODULE_13__["CardImgTopComponent"],
                _chat_bubble_video_video_component__WEBPACK_IMPORTED_MODULE_14__["VideoComponent"],
                _chat_bubble_card_link_card_simple_link_card_simple_link_component__WEBPACK_IMPORTED_MODULE_15__["CardSimpleLinkComponent"],
                _chat_bubble_card_link_card_img_left_link_card_img_left_link_component__WEBPACK_IMPORTED_MODULE_16__["CardImgLeftLinkComponent"],
                _chat_bubble_card_link_card_img_right_link_card_img_right_link_component__WEBPACK_IMPORTED_MODULE_17__["CardImgRightLinkComponent"],
                _chat_bubble_card_button_card_simple_button_card_simple_button_component__WEBPACK_IMPORTED_MODULE_18__["CardSimpleButtonComponent"],
                _chat_bubble_card_button_card_img_top_button_card_img_top_button_component__WEBPACK_IMPORTED_MODULE_19__["CardImgTopButtonComponent"],
                _chat_bubble_card_button_card_img_right_button_card_img_right_button_component__WEBPACK_IMPORTED_MODULE_20__["CardImgRightButtonComponent"],
                _chat_bubble_card_button_card_img_left_button_card_img_left_button_component__WEBPACK_IMPORTED_MODULE_21__["CardImgLeftButtonComponent"],
                _chat_bubble_card_link_card_video_link_card_video_link_component__WEBPACK_IMPORTED_MODULE_22__["CardVideoLinkComponent"],
                _chat_bubble_card_button_card_video_button_card_video_button_component__WEBPACK_IMPORTED_MODULE_23__["CardVideoButtonComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ],
            providers: [
                src_providers_Api__WEBPACK_IMPORTED_MODULE_7__["Api"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/bubble/bubble.component.html":
/*!***************************************************!*\
  !*** ./src/app/chat/bubble/bubble.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{mensajes.type}}\">\r\n\r\n  <div class=\"avatar\">\r\n\r\n  </div>\r\n  <div id=\"cm-msg\" class=\"burbble\">\r\n    <div class=\"text\">\r\n      {{mensajes.text}}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"boton\">\r\n  <app-button (click)=\"clicked(this.mensajes.textbutton)\" [mensajes]='mensajes.textbutton'></app-button>\r\n</div>\r\n\r\n<div *ngIf=\"botones\">\r\n  <div class=\"row\" role=\"group\" aria-label=\"Basic example\">\r\n    <div *ngFor=\"let array of array\">\r\n      <app-button (click)=\"clicked(array)\" class=\"col\" [mensajes]='array'></app-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"img\">\r\n  <app-image [mensajes]='this.mensajes.textbutton'></app-image>\r\n</div>\r\n\r\n<div *ngIf=\"linstCard\">\r\n  <div *ngFor=\"let arrays of cardList\">\r\n    <app-card-img-top-link [mensajes]='arrays'></app-card-img-top-link>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"carrousel\">\r\n\r\n  <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <div class=\"carousel-inner\" *ngFor=\"let item of cardList\">\r\n      <app-carrousel [mensajes]='item'></app-carrousel>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"video\">\r\n  <app-video [mensajes]='this.videoDate'></app-video>\r\n</div>\r\n\r\n\r\n<!--============================ cards =========================================-->\r\n\r\n\r\n<div *ngIf=\"cardTopLink\">\r\n  <app-card-img-top-link [mensajes]='cardDateTopLink'></app-card-img-top-link>\r\n</div>\r\n\r\n<div *ngIf=\"cardSimpleLink\">\r\n  <app-card-simple-link [mensajes]='cardDateSimpleLink'></app-card-simple-link>\r\n</div>\r\n\r\n<div *ngIf=\"cardLeftLink\">\r\n  <app-card-img-left-link [mensajes]='cardDateLeftleLink'></app-card-img-left-link>\r\n</div>\r\n\r\n<div *ngIf=\"cardRightLink\">\r\n  <app-card-img-right-link [mensajes]='cardDateRightleLink'></app-card-img-right-link>\r\n</div>\r\n\r\n<div *ngIf=\"cardVideoLink\">\r\n  <app-card-video-link [mensajes]='cardDateVideoLink'></app-card-video-link>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"cardTopButton\">\r\n  <app-card-img-top-button [mensajes]='cardDateTopButton'></app-card-img-top-button>\r\n</div>\r\n\r\n<div *ngIf=\"cardSimpleButton\">\r\n  <app-card-simple-button [mensajes]='cardDateSimpleButton'></app-card-simple-button>\r\n</div>\r\n\r\n<div *ngIf=\"cardLeftButton\">\r\n  <app-card-img-left-button [mensajes]='cardDateLeftleButton'></app-card-img-left-button>\r\n</div>\r\n\r\n<div *ngIf=\"cardRightButton\">\r\n  <app-card-img-right-button [mensajes]='cardDateRightleButton'></app-card-img-right-button>\r\n</div>\r\n\r\n<div *ngIf=\"cardVideoButton\">\r\n  <app-card-video-button [mensajes]='cardDateVideoButton'></app-card-video-button>\r\n</div>\r\n\r\n\r\n\r\n<!-- =================================== cardsList ====================================== -->\r\n\r\n\r\n\r\n<div *ngIf=\"cardTopLinkList\">\r\n  <div *ngFor=\"let item of cardDateTopLinkList\">\r\n    <app-card-img-top-link [mensajes]='item'></app-card-img-top-link>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"cardSimpleLinkList\">\r\n  <div *ngFor=\"let item of cardDateSimpleLinkList\">\r\n    <app-card-simple-link [mensajes]='item'></app-card-simple-link>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"cardLeftLinkList\">\r\n  <div *ngFor=\"let item of cardDateLeftLinkList\">\r\n    <app-card-img-left-link [mensajes]='item'></app-card-img-left-link>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"cardRightLinkList\">\r\n  <div *ngFor=\"let item of cardDateRightLinkList\">\r\n    <app-card-img-right-link [mensajes]='item'></app-card-img-right-link>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div *ngIf=\"cardTopButtonList\">\r\n  <div *ngFor=\"let item of cardDateTopButtonList\">\r\n    <app-card-img-top-button [mensajes]='item'></app-card-img-top-button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"cardSimpleButtonList\">\r\n  <div *ngFor=\"let item of cardDateSimpleButtonList\">\r\n    <app-card-simple-button [mensajes]='item'></app-card-simple-button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"cardLeftButtonList\">\r\n  <div *ngFor=\"let item of cardDateLeftButtonList\">\r\n    <app-card-img-left-button [mensajes]='item'></app-card-img-left-button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"cardRightButtonList\">\r\n  <div *ngFor=\"let item of cardDateRightButtonList\">\r\n    <app-card-img-right-button [mensajes]='item'></app-card-img-right-button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/bubble.component.scss":
/*!***************************************************!*\
  !*** ./src/app/chat/bubble/bubble.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user {\n  padding: 0;\n  margin: 0;\n  min-height: 50px;\n  margin-bottom: 20px; }\n  .user .burbble {\n    min-height: 50px;\n    height: 100%;\n    width: 85%;\n    border-radius: 10px;\n    background: #1C74BC; }\n  .user .burbble .text {\n      padding: 10px;\n      position: relative;\n      text-align: end;\n      font-size: 19px;\n      color: whitesmoke; }\n  .user .avatar {\n    margin-bottom: -47px;\n    margin-left: 88%;\n    left: 85%;\n    height: 45px !important;\n    width: 45px !important;\n    padding: 5px;\n    border-radius: 50%;\n    background: url(\"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80\");\n    background-size: cover; }\n  .bot {\n  margin-bottom: 20px;\n  margin: 0;\n  min-height: 50px;\n  padding: 0; }\n  .bot .burbble {\n    padding: 0;\n    min-height: 50px;\n    height: 100%;\n    width: 80%;\n    margin-left: 20%;\n    border-radius: 10px;\n    background: #21A77C; }\n  .bot .burbble .text {\n      padding: 10px;\n      position: relative;\n      margin-top: -50px;\n      font-size: 19px;\n      color: whitesmoke;\n      text-align: start; }\n  .bot .avatar {\n    position: relative;\n    margin: 0;\n    height: 45px !important;\n    width: 45px !important;\n    padding: 5px;\n    border-radius: 50%;\n    background: url(\"https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=566&q=80\");\n    background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXGNoYXRib3RzXFxQbGF0aWxsYXMgd2lzeVxcY2hhdEJvdC1mcm9udEVuZC9zcmNcXGFwcFxcY2hhdFxcYnViYmxlXFxidWJibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtFQUp2QjtJQU9RLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtFQVgzQjtNQWNZLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQWxCN0I7SUF3QlEsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsdUJBQXNCO0lBQ3RCLHNCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdKQUF3SjtJQUN4SixzQkFBc0IsRUFBQTtFQU05QjtFQUNJLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTtFQUpkO0lBT1EsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7RUFiM0I7TUFpQlksYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixpQkFBaUIsRUFBQTtFQXRCN0I7SUE0Qlksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCx1QkFBc0I7SUFDdEIsc0JBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0pBQXdKO0lBQ3hKLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9idWJibGUvYnViYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgLmJ1cmJibGV7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxQzc0QkM7XHJcblxyXG4gICAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdmF0YXJ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTQ3cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDg4JTtcclxuICAgICAgICBsZWZ0OiA4NSU7XHJcbiAgICAgICAgaGVpZ2h0OjQ1cHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDo0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTI3OTgwOTY1MjU1LWQzYjQxNjMwM2QxMj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9ODAnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5ib3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLmJ1cmJibGV7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjFBNzdDO1xyXG5cclxuXHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC5hdmF0YXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDo0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM1Mzc4NjIwMTY2LTI3MzcwOGQ0NGU0Yz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTY2JnE9ODAnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/chat/bubble/bubble.component.ts":
/*!*************************************************!*\
  !*** ./src/app/chat/bubble/bubble.component.ts ***!
  \*************************************************/
/*! exports provided: BubbleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleComponent", function() { return BubbleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat.component */ "./src/app/chat/chat.component.ts");




var BubbleComponent = /** @class */ (function () {
    function BubbleComponent(chatService, click) {
        this.chatService = chatService;
        this.click = click;
    }
    BubbleComponent.prototype.ngOnInit = function () {
        // tratamiento de datos
        var comp = JSON.stringify(this.mensajes.text);
        // boton
        var btn = comp.indexOf('_btn');
        // botones
        var btns = comp.indexOf('_botones');
        // imagen
        var img = comp.indexOf('_img');
        // carrousel
        var carrousel = comp.indexOf('_carrusel');
        // list card
        var listCard = comp.indexOf('_lista');
        // video
        var video = comp.indexOf('_video');
        // card-simple-link
        var cardSimpleLink = comp.indexOf('_card-link-simple');
        // card-img-top-link
        var cardTopLink = comp.indexOf('_card-img-link-top');
        // card-img-rleft-link
        var cardLeftLink = comp.indexOf('_card-img-link-left');
        // card-img-rigth-link
        var cardRightLink = comp.indexOf('_card-img-link-right');
        // card video link
        var cardVideoLink = comp.indexOf('_card-link-video');
        // card-simple-Button
        var cardSimpleButton = comp.indexOf('_card-simple-button');
        // card-img-top-button
        var cardTopButton = comp.indexOf('_card-img-top-button');
        // card-img-rleft-button
        var cardLeftButton = comp.indexOf('_card-img-left-button');
        // card-img-rigth-button
        var cardRightButton = comp.indexOf('_card-img-right-button');
        // card video button
        var cardVideoButton = comp.indexOf('_card-video-button');
        // ================ List =============================================== //
        // card-simple-link
        var cardSimpleLinkList = comp.indexOf('_card-list-simple-link');
        // card-img-top-link
        var cardTopLinkList = comp.indexOf('_card-list-img-top-link');
        // card-img-rleft-link
        var cardLeftLinkList = comp.indexOf('_card-list-img-left-link');
        // card-img-rigth-link
        var cardRightLinkList = comp.indexOf('_card-list-img-right-link');
        // card-simple-Button
        var cardSimpleButtonList = comp.indexOf('_card-list-simple-button');
        // card-img-top-button
        var cardTopButtonList = comp.indexOf('_card-list-img-top-button');
        // card-img-rleft-button
        var cardLeftButtonList = comp.indexOf('_card-list-img-left-button');
        // card-img-rigth-button
        var cardRightButtonList = comp.indexOf('_card-list-img-top-button');
        // boton
        if (btn !== -1) {
            this.boton = true;
            var datos = comp.split('_btn');
            var mensaje = datos[0].replace('["', '');
            var mensajeBoton = datos[1].replace('"]', '');
            // mensaje boton
            this.mensajes.textbutton = mensajeBoton;
            // mensaje
            this.mensajes.text = mensaje;
        }
        // botones con tratamiento de datos
        if (btns !== -1) {
            this.botones = true;
            var datos = comp.split('_botones');
            var mensaje = datos[0].replace('"', '');
            var botones = datos[1].replace('"]', '').split(',');
            this.array = botones;
            // mensaje
            this.mensajes.text = mensaje;
        }
        // imagen
        if (img !== -1) {
            this.img = true;
            var datos = comp.split('_img');
            var mensaje = datos[0].replace('["', '');
            var mensajeImg = datos[1].replace(' ', '');
            // mensaje img
            this.mensajes.textbutton = mensajeImg;
            // mensaje
            this.mensajes.text = mensaje;
        }
        // carrusel
        if (carrousel !== -1) {
            this.carrousel = true;
            var datos = comp.split('_carrusel ');
            var mensaje = datos[0].replace('["', '');
            var car = datos[1].replace(']"', '').split('**');
            var listas = [];
            for (var index = 0; index < car.length; index++) {
                var element = car[index];
                var item = element.split(',');
                var json = {};
                if (index === 0) {
                    json = {
                        url: item[0],
                        title: item[1],
                        text: item[2],
                        textButton: item[3],
                        link: '',
                        class: 'active'
                    };
                    listas.push(json);
                }
                else {
                    json = {
                        url: item[0],
                        title: item[1],
                        text: item[2],
                        textButton: item[3],
                        link: '',
                        class: ''
                    };
                    listas.push(json);
                }
            }
            console.log(listas);
            this.cardList = listas;
            // mensaje
            this.mensajes.text = mensaje;
        }
        // lista de tarjetas
        if (listCard !== -1) {
            this.linstCard = true;
            var datos = comp.split('_lista');
            var mensaje = datos[0].replace('["', '');
            var lista = datos[1].replace('"]', '').replace(' ', '').split('**');
            var listas = [];
            for (var index = 0; index < lista.length; index++) {
                var element = lista[index];
                var item = element.split(',');
                var json = {
                    url: item[0],
                    title: item[1],
                    text: item[2],
                    textButton: item[3],
                    link: '',
                };
                listas.push(json);
            }
            this.cardList = listas;
            this.mensajes.text = mensaje;
        }
        // video
        if (video !== -1) {
            this.video = true;
            var datos = comp.split('_video');
            var mensaje = datos[0].replace('["', '');
            var videos = datos[1].replace('"]', '').replace(' ', '');
            console.log('video', videos);
            this.mensajes.text = mensaje;
            this.videoDate = {
                link: videos
            };
        }
        // card-simple-link
        if (cardSimpleLink !== -1) {
            this.cardSimpleLink = true;
            var data = comp.split('_card-link-simple');
            var mensaje = data[0].replace('["', '');
            var cardDate = data[1].split(',');
            this.cardDateSimpleLink = {
                title: cardDate[0],
                text: cardDate[1],
                textButton: cardDate[2],
                link: cardDate[3].replace('"]', '')
            };
            this.mensajes.text = mensaje;
        }
        // card-top-link
        if (cardTopLink !== -1) {
            this.cardTopLink = true;
            var datos = comp.split('_card-img-link-top');
            var mensaje = datos[0].replace('["', '');
            var datosCard = datos[1].split(',');
            this.mensajes.text = mensaje;
            this.cardDateTopLink = {
                url: datosCard[0],
                title: datosCard[1],
                text: datosCard[2],
                textButton: datosCard[3],
                link: datosCard[4].replace('"]', '')
            };
            console.log(this.cardDateTopLink);
        }
        // card-left-link
        if (cardLeftLink !== -1) {
            this.cardLeftLink = true;
            var data = comp.split('_card-img-link-left');
            var mensaje = data[0].replace('["', '');
            var cardDate = data[1].split(',');
            this.cardDateLeftleLink = {
                url: cardDate[0],
                title: cardDate[1],
                text: cardDate[2],
                textButton: cardDate[3],
                link: cardDate[4].replace('"]', '')
            };
            this.mensajes.text = mensaje;
        }
        // card-Right-link
        if (cardRightLink !== -1) {
            this.cardRightLink = true;
            var data = comp.split('_card-img-link-right');
            var mensaje = data[0].replace('["', '');
            var cardDate = data[1].split(',');
            this.cardDateRightleLink = {
                url: cardDate[0],
                title: cardDate[1],
                text: cardDate[2],
                textButton: cardDate[3],
                link: cardDate[4].replace('"]', '')
            };
            this.mensajes.text = mensaje;
        }
        // card-simple-Button
        if (cardSimpleButton !== -1) {
            this.cardSimpleButton = true;
            var data = comp.split('_card-simple-button');
            var mensaje = data[0].replace('["', '');
            var cardDate = data[1].split(',');
            this.cardDateSimpleButton = {
                title: cardDate[0],
                text: cardDate[1],
                textButton: cardDate[2].replace('"]', '')
                // link: cardDate[3].replace('"]', '')
            };
            this.mensajes.text = mensaje;
        }
        // card-top-button
        if (cardTopButton !== -1) {
            this.cardTopButton = true;
            var datos = comp.split('_card-img-top-button');
            var mensaje = datos[0].replace('["', '');
            var datosCard = datos[1].split(',');
            this.mensajes.text = mensaje;
            this.cardDateTopButton = {
                url: datosCard[0],
                title: datosCard[1],
                text: datosCard[2],
                textButton: datosCard[3].replace('"]', '')
                // link: datosCard[4].replace('"]', '')
            };
        }
        // card-left-button
        if (cardLeftButton !== -1) {
            this.cardLeftButton = true;
            var data = comp.split('_card-img-left-button');
            var mensaje = data[0].replace('["', '');
            var cardDate = data[1].split(',');
            this.cardDateLeftleButton = {
                url: cardDate[0],
                title: cardDate[1],
                text: cardDate[2],
                textButton: cardDate[3].replace('"]', '')
                // link: cardDate[4].replace('"]', '')
            };
            this.mensajes.text = mensaje;
        }
        // card-Right-button
        if (cardRightButton !== -1) {
            this.cardRightButton = true;
            var data = comp.split('_card-img-right-button');
            var mensaje = data[0].replace('"[', '');
            var cardDate = data[1].split(',');
            this.cardDateRightleButton = {
                url: cardDate[0],
                title: cardDate[1],
                text: cardDate[2],
                textButton: cardDate[3].replace('"]', '')
                // link: cardDate[4].replace('"]', '')
            };
            this.mensajes.text = mensaje;
        }
        // card video link
        if (cardVideoLink !== -1) {
            this.cardVideoLink = true;
            var data = comp.split('_card-video-link');
            var mensaje = data[0].replace('["', '');
            var cardDate = data[1].split(',');
            this.cardDateVideoLink = {
                url: cardDate[0],
                title: cardDate[1],
                text: cardDate[2],
                textButton: cardDate[3],
                link: cardDate[4].replace('"]', '')
            };
            this.mensajes.text = mensaje;
        }
        // card video button
        if (cardVideoButton !== -1) {
            this.cardVideoButton = true;
            var data = comp.split('_card-video-button');
            var mensaje = data[0].replace('["', '');
            var cardDate = data[1].split(',');
            this.cardDateVideoButton = {
                url: cardDate[0],
                title: cardDate[1],
                text: cardDate[2],
                textButton: cardDate[3].replace('"]', '')
            };
            this.mensajes.text = mensaje;
        }
        // ===============list cards ============================= //
        // card-simple-link
        if (cardSimpleLinkList !== -1) {
            this.cardSimpleLinkList = true;
            var datos = comp.split('_card-list-simple-link');
            var mensaje = datos[0].replace('["', '');
            var lista = datos[1].replace('"]', '').replace(' ', '').split('**');
            var listas = [];
            for (var index = 0; index < lista.length; index++) {
                var element = lista[index];
                var item = element.split(',');
                var json = {
                    title: item[0],
                    text: item[1],
                    textButton: item[2],
                    link: item[3]
                };
                listas.push(json);
            }
            this.cardDateSimpleLinkList = listas;
            this.mensajes.text = mensaje;
        }
        // card-top-link
        if (cardTopLinkList !== -1) {
            this.cardTopLinkList = true;
            var datos = comp.split('_card-list-img-top-link');
            var mensaje = datos[0].replace('["', '');
            var lista = datos[1].replace('"]', '').replace(' ', '').split('**');
            var listas = [];
            for (var index = 0; index < lista.length; index++) {
                var element = lista[index];
                var item = element.split(',');
                var json = {
                    url: item[0],
                    title: item[1],
                    text: item[2],
                    textButton: item[3],
                    link: item[4]
                };
                listas.push(json);
            }
            this.cardDateTopLinkList = listas;
            this.mensajes.text = mensaje;
        }
        // card-left-link
        if (cardLeftLinkList !== -1) {
            this.cardLeftLinkList = true;
            var datos = comp.split('_card-list-img-left-link');
            var mensaje = datos[0].replace('["', '');
            var lista = datos[1].replace('"]', '').replace(' ', '').split('**');
            var listas = [];
            for (var index = 0; index < lista.length; index++) {
                var element = lista[index];
                var item = element.split(',');
                var json = {
                    url: item[0],
                    title: item[1],
                    text: item[2],
                    textButton: item[3],
                    link: item[4]
                };
                listas.push(json);
            }
            this.cardDateLeftLinkList = listas;
            this.mensajes.text = mensaje;
        }
        // card-Right-link
        if (cardRightLinkList !== -1) {
            this.cardRightLinkList = true;
            var datos = comp.split('_card-list-img-right-link');
            var mensaje = datos[0].replace('["', '');
            var lista = datos[1].replace('"]', '').replace(' ', '').split('**');
            var listas = [];
            for (var index = 0; index < lista.length; index++) {
                var element = lista[index];
                var item = element.split(',');
                var json = {
                    url: item[0],
                    title: item[1],
                    text: item[2],
                    textButton: item[3],
                    link: item[4]
                };
                listas.push(json);
            }
            this.cardDateRightLinkList = listas;
            this.mensajes.text = mensaje;
        }
        // card-simple-Button
        if (cardSimpleButtonList !== -1) {
            this.cardSimpleButtonList = true;
            var datos = comp.split('_card-list-simple-button');
            console.log(datos);
            var mensaje = datos[0].replace('["', '');
            var lista = datos[1].replace('"]', '').replace(' ', '').split('**');
            var listas = [];
            for (var index = 0; index < lista.length; index++) {
                var element = lista[index];
                var item = element.split(',');
                var json = {
                    title: item[0],
                    text: item[1],
                    textButton: item[2]
                };
                listas.push(json);
            }
            console.log(listas);
            this.cardDateSimpleButtonList = listas;
            this.mensajes.text = mensaje;
        }
        // card-top-button
        if (cardTopButtonList !== -1) {
            this.cardTopButtonList = true;
            var datos = comp.split('_card-list-img-top-button');
            var mensaje = datos[0].replace('["', '');
            var lista = datos[1].replace('"]', '').replace(' ', '').split('**');
            var listas = [];
            for (var index = 0; index < lista.length; index++) {
                var element = lista[index];
                var item = element.split(',');
                var json = {
                    url: item[0],
                    title: item[1],
                    text: item[2],
                    textButton: item[3]
                };
                listas.push(json);
            }
            this.cardDateTopButtonList = listas;
            this.mensajes.text = mensaje;
        }
        // card-left-button
        if (cardLeftButtonList !== -1) {
            this.cardLeftButtonList = true;
            var datos = comp.split('_card-list-img-left-button');
            var mensaje = datos[0].replace('["', '');
            var lista = datos[1].replace('"]', '').replace(' ', '').split('**');
            var listas = [];
            for (var index = 0; index < lista.length; index++) {
                var element = lista[index];
                var item = element.split(',');
                var json = {
                    url: item[0],
                    title: item[1],
                    text: item[2],
                    textButton: item[3]
                };
                listas.push(json);
            }
            this.cardDateLeftButtonList = listas;
            this.mensajes.text = mensaje;
        }
        // card-Right-button
        if (cardRightButtonList !== -1) {
            this.cardRightButtonList = true;
            var datos = comp.split('_card-list-img-top-button');
            var mensaje = datos[0].replace('["', '');
            var lista = datos[1].replace('"]', '').replace(' ', '').split('**');
            var listas = [];
            for (var index = 0; index < lista.length; index++) {
                var element = lista[index];
                var item = element.split(',');
                var json = {
                    url: item[0],
                    title: item[1],
                    text: item[2],
                    textButton: item[3]
                };
                listas.push(json);
            }
            this.cardDateRightButtonList = listas;
            this.mensajes.text = mensaje;
        }
    };
    // clickbotones
    BubbleComponent.prototype.clicked = function (mensaje) {
        this.click.clicked(mensaje);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BubbleComponent.prototype, "cardDateSimpleLink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BubbleComponent.prototype, "cardDateSimpleButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BubbleComponent.prototype, "cardDateSimpleLinkList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BubbleComponent.prototype, "cardDateSimpleButtonList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BubbleComponent.prototype, "mensajes", void 0);
    BubbleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bubble',
            template: __webpack_require__(/*! ./bubble.component.html */ "./src/app/chat/bubble/bubble.component.html"),
            styles: [__webpack_require__(/*! ./bubble.component.scss */ "./src/app/chat/bubble/bubble.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], _chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]])
    ], BubbleComponent);
    return BubbleComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/button/button.component.html":
/*!**********************************************************!*\
  !*** ./src/app/chat/bubble/button/button.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"btn btn-success\" >{{mensaje}}</div> -->\r\n<button class=\"btn btn-secondary\">{{mensajes}}</button>"

/***/ }),

/***/ "./src/app/chat/bubble/button/button.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/chat/bubble/button/button.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvYnV0dG9uL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxjaGF0Ym90c1xcUGxhdGlsbGFzIHdpc3lcXGNoYXRCb3QtZnJvbnRFbmQvc3JjXFxhcHBcXGNoYXRcXGJ1YmJsZVxcYnV0dG9uXFxidXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2J1YmJsZS9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcclxuICAgICAgICBtYXJnaW46IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/bubble/button/button.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chat/bubble/button/button.component.ts ***!
  \********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "mensajes", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/chat/bubble/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/chat/bubble/button/button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-img-left-button/card-img-left-button.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-img-left-button/card-img-left-button.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\" style=\"max-width: 540px;\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-4\">\r\n      <img [src]=\"this.sanitize(mensajes.url)\" class=\"card-img\" alt=\"...\">\r\n    </div>\r\n    <div class=\"col-8\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{mensajes.title}}</h5>\r\n        <p class=\"card-text\">{{mensajes.text}}</p>\r\n        <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"clicked(mensajes.textButton)\">{{mensajes.textButton}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-img-left-button/card-img-left-button.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-img-left-button/card-img-left-button.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 15px auto;\n  border-radius: 0;\n  box-shadow: 10px 10px 36px -11px rgba(0, 0, 0, 0.75); }\n  .card .card-img-top {\n    border-radius: 0; }\n  .card .card-title {\n    font-size: 20px; }\n  .card .card-text {\n    font-size: 14px; }\n  .card .btn-primary {\n    box-shadow: 7px 8px 17px -2px rgba(0, 0, 0, 0.75);\n    border-radius: 3px;\n    font-size: 15px;\n    background: #010181;\n    border-width: 0;\n    border-color: transparent;\n    transition-duration: .3s;\n    margin: 5px auto; }\n  .card .btn-primary:hover {\n      box-shadow: 3px 4px 17px -2px rgba(0, 0, 0, 0.75);\n      background: #05059e;\n      transition-duration: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvY2FyZC9idXR0b24vY2FyZC1pbWctbGVmdC1idXR0b24vQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXGNoYXRib3RzXFxQbGF0aWxsYXMgd2lzeVxcY2hhdEJvdC1mcm9udEVuZC9zcmNcXGFwcFxcY2hhdFxcYnViYmxlXFxjYXJkXFxidXR0b25cXGNhcmQtaW1nLWxlZnQtYnV0dG9uXFxjYXJkLWltZy1sZWZ0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBR2hCLG9EQUFpRCxFQUFBO0VBTnJEO0lBU1EsZ0JBQWdCLEVBQUE7RUFUeEI7SUFhUSxlQUFlLEVBQUE7RUFidkI7SUFpQlEsZUFBZSxFQUFBO0VBakJ2QjtJQXdCUSxpREFBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsZ0JBQWdCLEVBQUE7RUEvQnhCO01BcUNZLGlEQUE4QztNQUM5QyxtQkFBMEI7TUFDMUIsd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2J1YmJsZS9jYXJkL2J1dHRvbi9jYXJkLWltZy1sZWZ0LWJ1dHRvbi9jYXJkLWltZy1sZWZ0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDM2cHggLTExcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDM2cHggLTExcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IC0xMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcblxyXG4gICAgLmNhcmQtaW1nLXRvcHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogN3B4IDhweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDdweCA4cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogN3B4IDhweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxLCAxLCAxMjkpO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xyXG5cclxuXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggNHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDNweCA0cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCA0cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig1LCA1LCAxNTgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-img-left-button/card-img-left-button.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-img-left-button/card-img-left-button.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CardImgLeftButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImgLeftButtonComponent", function() { return CardImgLeftButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _bubble_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bubble.component */ "./src/app/chat/bubble/bubble.component.ts");




var CardImgLeftButtonComponent = /** @class */ (function () {
    function CardImgLeftButtonComponent(sixe, click) {
        this.sixe = sixe;
        this.click = click;
    }
    CardImgLeftButtonComponent.prototype.ngOnInit = function () {
    };
    CardImgLeftButtonComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustUrl(url);
    };
    CardImgLeftButtonComponent.prototype.clicked = function (click) {
        this.click.clicked(click);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardImgLeftButtonComponent.prototype, "mensajes", void 0);
    CardImgLeftButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-img-left-button',
            template: __webpack_require__(/*! ./card-img-left-button.component.html */ "./src/app/chat/bubble/card/button/card-img-left-button/card-img-left-button.component.html"),
            styles: [__webpack_require__(/*! ./card-img-left-button.component.scss */ "./src/app/chat/bubble/card/button/card-img-left-button/card-img-left-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _bubble_component__WEBPACK_IMPORTED_MODULE_3__["BubbleComponent"]])
    ], CardImgLeftButtonComponent);
    return CardImgLeftButtonComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-img-right-button/card-img-right-button.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-img-right-button/card-img-right-button.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\" style=\"max-width: 540px;\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-8\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{mensajes.title}}</h5>\r\n        <p class=\"card-text\">{{mensajes.text}}</p>\r\n        <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"clicked(mensajes.textButton)\">{{mensajes.textButton}}</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <img [src]=\"this.sanitize(mensajes.url)\" class=\"card-img\" alt=\"...\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-img-right-button/card-img-right-button.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-img-right-button/card-img-right-button.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 15px auto;\n  border-radius: 0;\n  box-shadow: 10px 10px 36px -11px rgba(0, 0, 0, 0.75); }\n  .card .card-img-top {\n    border-radius: 0; }\n  .card .card-title {\n    font-size: 20px; }\n  .card .card-text {\n    font-size: 14px; }\n  .card .btn-primary {\n    box-shadow: 7px 8px 17px -2px rgba(0, 0, 0, 0.75);\n    border-radius: 3px;\n    font-size: 15px;\n    background: #010181;\n    border-width: 0;\n    border-color: transparent;\n    transition-duration: .3s;\n    margin: 5px auto; }\n  .card .btn-primary:hover {\n      box-shadow: 3px 4px 17px -2px rgba(0, 0, 0, 0.75);\n      background: #05059e;\n      transition-duration: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvY2FyZC9idXR0b24vY2FyZC1pbWctcmlnaHQtYnV0dG9uL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxjaGF0Ym90c1xcUGxhdGlsbGFzIHdpc3lcXGNoYXRCb3QtZnJvbnRFbmQvc3JjXFxhcHBcXGNoYXRcXGJ1YmJsZVxcY2FyZFxcYnV0dG9uXFxjYXJkLWltZy1yaWdodC1idXR0b25cXGNhcmQtaW1nLXJpZ2h0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBR2hCLG9EQUFpRCxFQUFBO0VBTnJEO0lBU1EsZ0JBQWdCLEVBQUE7RUFUeEI7SUFhUSxlQUFlLEVBQUE7RUFidkI7SUFpQlEsZUFBZSxFQUFBO0VBakJ2QjtJQXdCUSxpREFBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsZ0JBQWdCLEVBQUE7RUEvQnhCO01BcUNZLGlEQUE4QztNQUM5QyxtQkFBMEI7TUFDMUIsd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2J1YmJsZS9jYXJkL2J1dHRvbi9jYXJkLWltZy1yaWdodC1idXR0b24vY2FyZC1pbWctcmlnaHQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDM2cHggLTExcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuXHJcbiAgICAuY2FyZC1pbWctdG9we1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXByaW1hcnl7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogN3B4IDhweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICBib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEsIDEsIDEyOSk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcblxyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA0cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDUsIDUsIDE1OCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-img-right-button/card-img-right-button.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-img-right-button/card-img-right-button.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CardImgRightButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImgRightButtonComponent", function() { return CardImgRightButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _bubble_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bubble.component */ "./src/app/chat/bubble/bubble.component.ts");




var CardImgRightButtonComponent = /** @class */ (function () {
    function CardImgRightButtonComponent(sixe, click) {
        this.sixe = sixe;
        this.click = click;
    }
    CardImgRightButtonComponent.prototype.ngOnInit = function () {
    };
    CardImgRightButtonComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustUrl(url);
    };
    CardImgRightButtonComponent.prototype.clicked = function (click) {
        this.click.clicked(click);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardImgRightButtonComponent.prototype, "mensajes", void 0);
    CardImgRightButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-img-right-button',
            template: __webpack_require__(/*! ./card-img-right-button.component.html */ "./src/app/chat/bubble/card/button/card-img-right-button/card-img-right-button.component.html"),
            styles: [__webpack_require__(/*! ./card-img-right-button.component.scss */ "./src/app/chat/bubble/card/button/card-img-right-button/card-img-right-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _bubble_component__WEBPACK_IMPORTED_MODULE_3__["BubbleComponent"]])
    ], CardImgRightButtonComponent);
    return CardImgRightButtonComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-img-top-button/card-img-top-button.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-img-top-button/card-img-top-button.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <img [src]=\"this.sanitize(mensajes.url)\" class=\"card-img-top\" alt=\"{{mensajes.url}}\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{mensajes.title}}</h5>\r\n    <p class=\"card-text\">{{mensajes.text}}</p>\r\n    <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"clicked(mensajes.textButton)\">{{mensajes.textButton}}</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-img-top-button/card-img-top-button.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-img-top-button/card-img-top-button.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 15px auto;\n  border-radius: 0;\n  box-shadow: 10px 10px 36px -11px rgba(0, 0, 0, 0.75); }\n  .card .card-img-top {\n    border-radius: 0; }\n  .card .card-title {\n    font-size: 20px; }\n  .card .card-text {\n    font-size: 14px; }\n  .card .btn-primary {\n    box-shadow: 7px 8px 17px -2px rgba(0, 0, 0, 0.75);\n    border-radius: 3px;\n    font-size: 15px;\n    background: #010181;\n    border-width: 0;\n    border-color: transparent;\n    transition-duration: .3s;\n    margin: 5px auto; }\n  .card .btn-primary:hover {\n      box-shadow: 3px 4px 17px -2px rgba(0, 0, 0, 0.75);\n      background: #05059e;\n      transition-duration: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvY2FyZC9idXR0b24vY2FyZC1pbWctdG9wLWJ1dHRvbi9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xcY2hhdGJvdHNcXFBsYXRpbGxhcyB3aXN5XFxjaGF0Qm90LWZyb250RW5kL3NyY1xcYXBwXFxjaGF0XFxidWJibGVcXGNhcmRcXGJ1dHRvblxcY2FyZC1pbWctdG9wLWJ1dHRvblxcY2FyZC1pbWctdG9wLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBR2hCLG9EQUFpRCxFQUFBO0VBTnJEO0lBU1EsZ0JBQWdCLEVBQUE7RUFUeEI7SUFhUSxlQUFlLEVBQUE7RUFidkI7SUFpQlEsZUFBZSxFQUFBO0VBakJ2QjtJQXdCUSxpREFBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsZ0JBQWdCLEVBQUE7RUEvQnhCO01BcUNZLGlEQUE4QztNQUM5QyxtQkFBMEI7TUFDMUIsd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2J1YmJsZS9jYXJkL2J1dHRvbi9jYXJkLWltZy10b3AtYnV0dG9uL2NhcmQtaW1nLXRvcC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IC0xMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IC0xMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5cclxuICAgIC5jYXJkLWltZy10b3B7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeXtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDdweCA4cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDdweCA4cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMSwgMSwgMTI5KTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcclxuXHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAzcHggNHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggNHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNSwgNSwgMTU4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-img-top-button/card-img-top-button.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-img-top-button/card-img-top-button.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CardImgTopButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImgTopButtonComponent", function() { return CardImgTopButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _bubble_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bubble.component */ "./src/app/chat/bubble/bubble.component.ts");




var CardImgTopButtonComponent = /** @class */ (function () {
    function CardImgTopButtonComponent(sixe, click) {
        this.sixe = sixe;
        this.click = click;
    }
    CardImgTopButtonComponent.prototype.ngOnInit = function () {
    };
    CardImgTopButtonComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustUrl(url);
    };
    CardImgTopButtonComponent.prototype.clicked = function (click) {
        this.click.clicked(click);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardImgTopButtonComponent.prototype, "mensajes", void 0);
    CardImgTopButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-img-top-button',
            template: __webpack_require__(/*! ./card-img-top-button.component.html */ "./src/app/chat/bubble/card/button/card-img-top-button/card-img-top-button.component.html"),
            styles: [__webpack_require__(/*! ./card-img-top-button.component.scss */ "./src/app/chat/bubble/card/button/card-img-top-button/card-img-top-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _bubble_component__WEBPACK_IMPORTED_MODULE_3__["BubbleComponent"]])
    ], CardImgTopButtonComponent);
    return CardImgTopButtonComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-simple-button/card-simple-button.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-simple-button/card-simple-button.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{mensajes.title}}</h5>\r\n    <p class=\"card-text\">{{mensajes.text}}</p>\r\n    <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"clicked(mensajes.textButton)\">{{mensajes.textButton}}</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-simple-button/card-simple-button.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-simple-button/card-simple-button.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 15px auto;\n  border-radius: 0;\n  box-shadow: 10px 10px 36px -11px rgba(0, 0, 0, 0.75); }\n  .card .card-img-top {\n    border-radius: 0; }\n  .card .card-title {\n    font-size: 20px; }\n  .card .card-text {\n    font-size: 14px; }\n  .card .btn-primary {\n    box-shadow: 7px 8px 17px -2px rgba(0, 0, 0, 0.75);\n    border-radius: 3px;\n    font-size: 15px;\n    background: #010181;\n    border-width: 0;\n    border-color: transparent;\n    transition-duration: .3s;\n    margin: 5px auto; }\n  .card .btn-primary:hover {\n      box-shadow: 3px 4px 17px -2px rgba(0, 0, 0, 0.75);\n      background: #05059e;\n      transition-duration: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvY2FyZC9idXR0b24vY2FyZC1zaW1wbGUtYnV0dG9uL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxjaGF0Ym90c1xcUGxhdGlsbGFzIHdpc3lcXGNoYXRCb3QtZnJvbnRFbmQvc3JjXFxhcHBcXGNoYXRcXGJ1YmJsZVxcY2FyZFxcYnV0dG9uXFxjYXJkLXNpbXBsZS1idXR0b25cXGNhcmQtc2ltcGxlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBR2hCLG9EQUFpRCxFQUFBO0VBTnJEO0lBU1EsZ0JBQWdCLEVBQUE7RUFUeEI7SUFhUSxlQUFlLEVBQUE7RUFidkI7SUFpQlEsZUFBZSxFQUFBO0VBakJ2QjtJQXdCUSxpREFBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsZ0JBQWdCLEVBQUE7RUEvQnhCO01BcUNZLGlEQUE4QztNQUM5QyxtQkFBMEI7TUFDMUIsd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2J1YmJsZS9jYXJkL2J1dHRvbi9jYXJkLXNpbXBsZS1idXR0b24vY2FyZC1zaW1wbGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDM2cHggLTExcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuXHJcbiAgICAuY2FyZC1pbWctdG9we1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXByaW1hcnl7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogN3B4IDhweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICBib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEsIDEsIDEyOSk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcblxyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA0cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDUsIDUsIDE1OCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-simple-button/card-simple-button.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-simple-button/card-simple-button.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CardSimpleButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSimpleButtonComponent", function() { return CardSimpleButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _bubble_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bubble.component */ "./src/app/chat/bubble/bubble.component.ts");




var CardSimpleButtonComponent = /** @class */ (function () {
    function CardSimpleButtonComponent(sixe, click) {
        this.sixe = sixe;
        this.click = click;
    }
    CardSimpleButtonComponent.prototype.ngOnInit = function () {
    };
    CardSimpleButtonComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustUrl(url);
    };
    CardSimpleButtonComponent.prototype.clicked = function (click) {
        this.click.clicked(click);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardSimpleButtonComponent.prototype, "mensajes", void 0);
    CardSimpleButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-simple-button',
            template: __webpack_require__(/*! ./card-simple-button.component.html */ "./src/app/chat/bubble/card/button/card-simple-button/card-simple-button.component.html"),
            styles: [__webpack_require__(/*! ./card-simple-button.component.scss */ "./src/app/chat/bubble/card/button/card-simple-button/card-simple-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _bubble_component__WEBPACK_IMPORTED_MODULE_3__["BubbleComponent"]])
    ], CardSimpleButtonComponent);
    return CardSimpleButtonComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-video-button/card-video-button.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-video-button/card-video-button.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <iframe [src]=\"this.sanitize(mensajes.url)\" class=\"card-img-top\"></iframe>\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{mensajes.title}}</h5>\r\n    <p class=\"card-text\">{{mensajes.text}}</p>\r\n    <button class=\"btn btn-primary btn-lg btn-block\"\r\n      (click)=\"clicked(mensajes.textButton)\">{{mensajes.textButton}}</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-video-button/card-video-button.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-video-button/card-video-button.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 15px auto;\n  border-radius: 0;\n  box-shadow: 10px 10px 36px -11px rgba(0, 0, 0, 0.75); }\n  .card iframe {\n    border: none;\n    border-radius: 5px; }\n  .card .card-img-top {\n    border-radius: 0; }\n  .card .card-title {\n    font-size: 20px; }\n  .card .card-text {\n    font-size: 14px; }\n  .card .btn-primary {\n    box-shadow: 7px 8px 17px -2px rgba(0, 0, 0, 0.75);\n    border-radius: 3px;\n    font-size: 15px;\n    background: #010181;\n    border-width: 0;\n    border-color: transparent;\n    transition-duration: .3s;\n    margin: 5px auto; }\n  .card .btn-primary:hover {\n      box-shadow: 3px 4px 17px -2px rgba(0, 0, 0, 0.75);\n      background: #05059e;\n      transition-duration: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvY2FyZC9idXR0b24vY2FyZC12aWRlby1idXR0b24vQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXGNoYXRib3RzXFxQbGF0aWxsYXMgd2lzeVxcY2hhdEJvdC1mcm9udEVuZC9zcmNcXGFwcFxcY2hhdFxcYnViYmxlXFxjYXJkXFxidXR0b25cXGNhcmQtdmlkZW8tYnV0dG9uXFxjYXJkLXZpZGVvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBR2hCLG9EQUFpRCxFQUFBO0VBTnJEO0lBVVEsWUFBWTtJQUNaLGtCQUFrQixFQUFBO0VBWDFCO0lBZVEsZ0JBQWdCLEVBQUE7RUFmeEI7SUFtQlEsZUFBZSxFQUFBO0VBbkJ2QjtJQXVCUSxlQUFlLEVBQUE7RUF2QnZCO0lBOEJRLGlEQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUEwQjtJQUMxQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixnQkFBZ0IsRUFBQTtFQXJDeEI7TUEyQ1ksaURBQThDO01BQzlDLG1CQUEwQjtNQUMxQix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvYnViYmxlL2NhcmQvYnV0dG9uL2NhcmQtdmlkZW8tYnV0dG9uL2NhcmQtdmlkZW8tYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDM2cHggLTExcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuXHJcblxyXG4gICAgaWZyYW1le1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaW1nLXRvcHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogN3B4IDhweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDdweCA4cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogN3B4IDhweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxLCAxLCAxMjkpO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xyXG5cclxuXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggNHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDNweCA0cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCA0cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig1LCA1LCAxNTgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/bubble/card/button/card-video-button/card-video-button.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/button/card-video-button/card-video-button.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CardVideoButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardVideoButtonComponent", function() { return CardVideoButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _bubble_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bubble.component */ "./src/app/chat/bubble/bubble.component.ts");




var CardVideoButtonComponent = /** @class */ (function () {
    function CardVideoButtonComponent(sixe, click) {
        this.sixe = sixe;
        this.click = click;
    }
    CardVideoButtonComponent.prototype.ngOnInit = function () {
    };
    CardVideoButtonComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustResourceUrl(url);
    };
    CardVideoButtonComponent.prototype.clicked = function (click) {
        this.click.clicked(click);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardVideoButtonComponent.prototype, "mensajes", void 0);
    CardVideoButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-video-button',
            template: __webpack_require__(/*! ./card-video-button.component.html */ "./src/app/chat/bubble/card/button/card-video-button/card-video-button.component.html"),
            styles: [__webpack_require__(/*! ./card-video-button.component.scss */ "./src/app/chat/bubble/card/button/card-video-button/card-video-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _bubble_component__WEBPACK_IMPORTED_MODULE_3__["BubbleComponent"]])
    ], CardVideoButtonComponent);
    return CardVideoButtonComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-img-left-link/card-img-left-link.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-img-left-link/card-img-left-link.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\" style=\"max-width: 540px;\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-4\">\r\n      <img [src]=\"this.sanitize(mensajes.url)\" class=\"card-img\" alt=\"...\">\r\n    </div>\r\n    <div class=\"col-8\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{mensajes.title}}</h5>\r\n        <p class=\"card-text\">{{mensajes.text}}</p>\r\n        <a [href]=\"this.sanitize(mensajes.link)\" target=\"_blank\" class=\"btn btn-primary\">{{mensajes.textButton}}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-img-left-link/card-img-left-link.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-img-left-link/card-img-left-link.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 15px auto;\n  border-radius: 0;\n  box-shadow: 10px 10px 36px -11px rgba(0, 0, 0, 0.75); }\n  .card .card-img-top {\n    border-radius: 0; }\n  .card .card-title {\n    font-size: 20px; }\n  .card .card-text {\n    font-size: 14px; }\n  .card .btn-primary {\n    box-shadow: 7px 8px 17px -2px rgba(0, 0, 0, 0.75);\n    border-radius: 3px;\n    font-size: 15px;\n    background: #010181;\n    border-width: 0;\n    border-color: transparent;\n    transition-duration: .3s;\n    margin: 5px auto; }\n  .card .btn-primary:hover {\n      box-shadow: 3px 4px 17px -2px rgba(0, 0, 0, 0.75);\n      background: #05059e;\n      transition-duration: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvY2FyZC9saW5rL2NhcmQtaW1nLWxlZnQtbGluay9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xcY2hhdGJvdHNcXFBsYXRpbGxhcyB3aXN5XFxjaGF0Qm90LWZyb250RW5kL3NyY1xcYXBwXFxjaGF0XFxidWJibGVcXGNhcmRcXGxpbmtcXGNhcmQtaW1nLWxlZnQtbGlua1xcY2FyZC1pbWctbGVmdC1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFHaEIsb0RBQWlELEVBQUE7RUFOckQ7SUFTUSxnQkFBZ0IsRUFBQTtFQVR4QjtJQWFRLGVBQWUsRUFBQTtFQWJ2QjtJQWlCUSxlQUFlLEVBQUE7RUFqQnZCO0lBd0JRLGlEQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUEwQjtJQUMxQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixnQkFBZ0IsRUFBQTtFQS9CeEI7TUFxQ1ksaURBQThDO01BQzlDLG1CQUEwQjtNQUMxQix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvYnViYmxlL2NhcmQvbGluay9jYXJkLWltZy1sZWZ0LWxpbmsvY2FyZC1pbWctbGVmdC1saW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDM2cHggLTExcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuXHJcbiAgICAuY2FyZC1pbWctdG9we1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXByaW1hcnl7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogN3B4IDhweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICBib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEsIDEsIDEyOSk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcblxyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA0cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDUsIDUsIDE1OCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-img-left-link/card-img-left-link.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-img-left-link/card-img-left-link.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CardImgLeftLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImgLeftLinkComponent", function() { return CardImgLeftLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var CardImgLeftLinkComponent = /** @class */ (function () {
    function CardImgLeftLinkComponent(sixe) {
        this.sixe = sixe;
    }
    CardImgLeftLinkComponent.prototype.ngOnInit = function () {
    };
    CardImgLeftLinkComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustUrl(url);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardImgLeftLinkComponent.prototype, "mensajes", void 0);
    CardImgLeftLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-img-left-link',
            template: __webpack_require__(/*! ./card-img-left-link.component.html */ "./src/app/chat/bubble/card/link/card-img-left-link/card-img-left-link.component.html"),
            styles: [__webpack_require__(/*! ./card-img-left-link.component.scss */ "./src/app/chat/bubble/card/link/card-img-left-link/card-img-left-link.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], CardImgLeftLinkComponent);
    return CardImgLeftLinkComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-img-right-link/card-img-right-link.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-img-right-link/card-img-right-link.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\" style=\"max-width: 540px;\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-8\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{mensajes.title}}</h5>\r\n        <p class=\"card-text\">{{mensajes.text}}</p>\r\n        <a [href]=\"this.sanitize(mensajes.link)\" target=\"_blank\" class=\"btn btn-primary\">{{mensajes.textButton}}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <img [src]=\"this.sanitize(mensajes.url)\" class=\"card-img\" alt=\"...\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-img-right-link/card-img-right-link.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-img-right-link/card-img-right-link.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 15px auto;\n  border-radius: 0;\n  box-shadow: 10px 10px 36px -11px rgba(0, 0, 0, 0.75); }\n  .card .card-img-top {\n    border-radius: 0; }\n  .card .card-title {\n    font-size: 20px; }\n  .card .card-text {\n    font-size: 14px; }\n  .card .btn-primary {\n    box-shadow: 7px 8px 17px -2px rgba(0, 0, 0, 0.75);\n    border-radius: 3px;\n    font-size: 15px;\n    background: #010181;\n    border-width: 0;\n    border-color: transparent;\n    transition-duration: .3s;\n    margin: 5px auto; }\n  .card .btn-primary:hover {\n      box-shadow: 3px 4px 17px -2px rgba(0, 0, 0, 0.75);\n      background: #05059e;\n      transition-duration: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvY2FyZC9saW5rL2NhcmQtaW1nLXJpZ2h0LWxpbmsvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXGNoYXRib3RzXFxQbGF0aWxsYXMgd2lzeVxcY2hhdEJvdC1mcm9udEVuZC9zcmNcXGFwcFxcY2hhdFxcYnViYmxlXFxjYXJkXFxsaW5rXFxjYXJkLWltZy1yaWdodC1saW5rXFxjYXJkLWltZy1yaWdodC1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFHaEIsb0RBQWlELEVBQUE7RUFOckQ7SUFTUSxnQkFBZ0IsRUFBQTtFQVR4QjtJQWFRLGVBQWUsRUFBQTtFQWJ2QjtJQWlCUSxlQUFlLEVBQUE7RUFqQnZCO0lBd0JRLGlEQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUEwQjtJQUMxQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixnQkFBZ0IsRUFBQTtFQS9CeEI7TUFxQ1ksaURBQThDO01BQzlDLG1CQUEwQjtNQUMxQix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvYnViYmxlL2NhcmQvbGluay9jYXJkLWltZy1yaWdodC1saW5rL2NhcmQtaW1nLXJpZ2h0LWxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IC0xMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IC0xMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5cclxuICAgIC5jYXJkLWltZy10b3B7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeXtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDdweCA4cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDdweCA4cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMSwgMSwgMTI5KTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcclxuXHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAzcHggNHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggNHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNSwgNSwgMTU4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-img-right-link/card-img-right-link.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-img-right-link/card-img-right-link.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CardImgRightLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImgRightLinkComponent", function() { return CardImgRightLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var CardImgRightLinkComponent = /** @class */ (function () {
    function CardImgRightLinkComponent(sixe) {
        this.sixe = sixe;
    }
    CardImgRightLinkComponent.prototype.ngOnInit = function () {
    };
    CardImgRightLinkComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustUrl(url);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardImgRightLinkComponent.prototype, "mensajes", void 0);
    CardImgRightLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-img-right-link',
            template: __webpack_require__(/*! ./card-img-right-link.component.html */ "./src/app/chat/bubble/card/link/card-img-right-link/card-img-right-link.component.html"),
            styles: [__webpack_require__(/*! ./card-img-right-link.component.scss */ "./src/app/chat/bubble/card/link/card-img-right-link/card-img-right-link.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], CardImgRightLinkComponent);
    return CardImgRightLinkComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-img-top/card-img-top.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-img-top/card-img-top.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <img [src]=\"this.sanitize(mensajes.url)\" class=\"card-img-top\" alt=\"{{mensajes.url}}\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{mensajes.title}}</h5>\r\n    <p class=\"card-text\">{{mensajes.text}}</p>\r\n    <a [href]=\"this.sanitize(mensajes.link)\" target=\"_blank\" class=\"btn btn-primary btn-lg btn-block\">{{mensajes.textButton}}</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-img-top/card-img-top.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-img-top/card-img-top.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 60%;\n  margin: 15px auto;\n  border-radius: 0;\n  box-shadow: 10px 10px 36px -11px rgba(0, 0, 0, 0.75); }\n  .card .card-img-top {\n    border-radius: 0; }\n  .card .card-title {\n    font-size: 20px; }\n  .card .card-text {\n    font-size: 14px; }\n  .card .btn-primary {\n    box-shadow: 7px 8px 17px -2px rgba(0, 0, 0, 0.75);\n    border-radius: 3px;\n    font-size: 15px;\n    background: #010181;\n    border-width: 0;\n    border-color: transparent;\n    transition-duration: .3s;\n    margin: 5px auto; }\n  .card .btn-primary:hover {\n      box-shadow: 3px 4px 17px -2px rgba(0, 0, 0, 0.75);\n      background: #05059e;\n      transition-duration: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvY2FyZC9saW5rL2NhcmQtaW1nLXRvcC9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xcY2hhdGJvdHNcXFBsYXRpbGxhcyB3aXN5XFxjaGF0Qm90LWZyb250RW5kL3NyY1xcYXBwXFxjaGF0XFxidWJibGVcXGNhcmRcXGxpbmtcXGNhcmQtaW1nLXRvcFxcY2FyZC1pbWctdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFHaEIsb0RBQWlELEVBQUE7RUFOckQ7SUFTUSxnQkFBZ0IsRUFBQTtFQVR4QjtJQWFRLGVBQWUsRUFBQTtFQWJ2QjtJQWlCUSxlQUFlLEVBQUE7RUFqQnZCO0lBd0JRLGlEQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUEwQjtJQUMxQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixnQkFBZ0IsRUFBQTtFQS9CeEI7TUFxQ1ksaURBQThDO01BQzlDLG1CQUEwQjtNQUMxQix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvYnViYmxlL2NhcmQvbGluay9jYXJkLWltZy10b3AvY2FyZC1pbWctdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDM2cHggLTExcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuXHJcbiAgICAuY2FyZC1pbWctdG9we1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXByaW1hcnl7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogN3B4IDhweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICBib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEsIDEsIDEyOSk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcblxyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA0cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDUsIDUsIDE1OCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-img-top/card-img-top.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-img-top/card-img-top.component.ts ***!
  \******************************************************************************/
/*! exports provided: CardImgTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImgTopComponent", function() { return CardImgTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var CardImgTopComponent = /** @class */ (function () {
    function CardImgTopComponent(sixe) {
        this.sixe = sixe;
    }
    CardImgTopComponent.prototype.ngOnInit = function () {
    };
    CardImgTopComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustUrl(url);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardImgTopComponent.prototype, "mensajes", void 0);
    CardImgTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-img-top-link',
            template: __webpack_require__(/*! ./card-img-top.component.html */ "./src/app/chat/bubble/card/link/card-img-top/card-img-top.component.html"),
            styles: [__webpack_require__(/*! ./card-img-top.component.scss */ "./src/app/chat/bubble/card/link/card-img-top/card-img-top.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], CardImgTopComponent);
    return CardImgTopComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-simple-link/card-simple-link.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-simple-link/card-simple-link.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{mensajes.title}}</h5>\r\n    <p class=\"card-text\">{{mensajes.text}}</p>\r\n    <a [href]=\"this.sanitize(mensajes.link)\" target=\"_blank\"\r\n      class=\"btn btn-primary btn-lg btn-block\">{{mensajes.textButton}}</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-simple-link/card-simple-link.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-simple-link/card-simple-link.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 80%;\n  margin: 15px auto;\n  border-radius: 0;\n  box-shadow: 10px 10px 36px -11px rgba(0, 0, 0, 0.75); }\n  .card .card-img-top {\n    border-radius: 0; }\n  .card .card-title {\n    font-size: 20px; }\n  .card .card-text {\n    font-size: 14px; }\n  .card .btn-primary {\n    box-shadow: 7px 8px 17px -2px rgba(0, 0, 0, 0.75);\n    border-radius: 3px;\n    font-size: 15px;\n    background: #010181;\n    border-width: 0;\n    border-color: transparent;\n    transition-duration: .3s;\n    margin: 5px auto; }\n  .card .btn-primary:hover {\n      box-shadow: 3px 4px 17px -2px rgba(0, 0, 0, 0.75);\n      background: #05059e;\n      transition-duration: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvY2FyZC9saW5rL2NhcmQtc2ltcGxlLWxpbmsvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXGNoYXRib3RzXFxQbGF0aWxsYXMgd2lzeVxcY2hhdEJvdC1mcm9udEVuZC9zcmNcXGFwcFxcY2hhdFxcYnViYmxlXFxjYXJkXFxsaW5rXFxjYXJkLXNpbXBsZS1saW5rXFxjYXJkLXNpbXBsZS1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFHaEIsb0RBQWlELEVBQUE7RUFOckQ7SUFTUSxnQkFBZ0IsRUFBQTtFQVR4QjtJQWFRLGVBQWUsRUFBQTtFQWJ2QjtJQWlCUSxlQUFlLEVBQUE7RUFqQnZCO0lBd0JRLGlEQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUEwQjtJQUMxQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixnQkFBZ0IsRUFBQTtFQS9CeEI7TUFxQ1ksaURBQThDO01BQzlDLG1CQUEwQjtNQUMxQix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvYnViYmxlL2NhcmQvbGluay9jYXJkLXNpbXBsZS1saW5rL2NhcmQtc2ltcGxlLWxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IC0xMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IC0xMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5cclxuICAgIC5jYXJkLWltZy10b3B7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeXtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDdweCA4cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDdweCA4cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMSwgMSwgMTI5KTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcclxuXHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAzcHggNHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggNHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNSwgNSwgMTU4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-simple-link/card-simple-link.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-simple-link/card-simple-link.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CardSimpleLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSimpleLinkComponent", function() { return CardSimpleLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var CardSimpleLinkComponent = /** @class */ (function () {
    function CardSimpleLinkComponent(sixe) {
        this.sixe = sixe;
    }
    CardSimpleLinkComponent.prototype.ngOnInit = function () {
    };
    CardSimpleLinkComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustUrl(url);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardSimpleLinkComponent.prototype, "mensajes", void 0);
    CardSimpleLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-simple-link',
            template: __webpack_require__(/*! ./card-simple-link.component.html */ "./src/app/chat/bubble/card/link/card-simple-link/card-simple-link.component.html"),
            styles: [__webpack_require__(/*! ./card-simple-link.component.scss */ "./src/app/chat/bubble/card/link/card-simple-link/card-simple-link.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], CardSimpleLinkComponent);
    return CardSimpleLinkComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-video-link/card-video-link.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-video-link/card-video-link.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <iframe [src]=\"this.sanitize(mensajes.url)\" class=\"card-img-top\"></iframe>\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{mensajes.title}}</h5>\r\n    <p class=\"card-text\">{{mensajes.text}}</p>\r\n    <a [href]=\"this.sanitize(mensajes.link)\" target=\"_blank\"\r\n      class=\"btn btn-primary btn-lg btn-block\">{{mensajes.textButton}}</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-video-link/card-video-link.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-video-link/card-video-link.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 15px auto;\n  border-radius: 0;\n  box-shadow: 10px 10px 36px -11px rgba(0, 0, 0, 0.75); }\n  .card iframe {\n    border: none;\n    border-radius: 5px; }\n  .card .card-img-top {\n    border-radius: 0; }\n  .card .card-title {\n    font-size: 20px; }\n  .card .card-text {\n    font-size: 14px; }\n  .card .btn-primary {\n    box-shadow: 7px 8px 17px -2px rgba(0, 0, 0, 0.75);\n    border-radius: 3px;\n    font-size: 15px;\n    background: #010181;\n    border-width: 0;\n    border-color: transparent;\n    transition-duration: .3s;\n    margin: 5px auto; }\n  .card .btn-primary:hover {\n      box-shadow: 3px 4px 17px -2px rgba(0, 0, 0, 0.75);\n      background: #05059e;\n      transition-duration: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvY2FyZC9saW5rL2NhcmQtdmlkZW8tbGluay9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xcY2hhdGJvdHNcXFBsYXRpbGxhcyB3aXN5XFxjaGF0Qm90LWZyb250RW5kL3NyY1xcYXBwXFxjaGF0XFxidWJibGVcXGNhcmRcXGxpbmtcXGNhcmQtdmlkZW8tbGlua1xcY2FyZC12aWRlby1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFHaEIsb0RBQWlELEVBQUE7RUFOckQ7SUFTUSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUFWMUI7SUFjUSxnQkFBZ0IsRUFBQTtFQWR4QjtJQWtCUSxlQUFlLEVBQUE7RUFsQnZCO0lBc0JRLGVBQWUsRUFBQTtFQXRCdkI7SUE2QlEsaURBQThDO0lBQzlDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQTBCO0lBQzFCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGdCQUFnQixFQUFBO0VBcEN4QjtNQTBDWSxpREFBOEM7TUFDOUMsbUJBQTBCO01BQzFCLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9idWJibGUvY2FyZC9saW5rL2NhcmQtdmlkZW8tbGluay9jYXJkLXZpZGVvLWxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IC0xMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAzNnB4IC0xMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5cclxuICAgIGlmcmFtZXtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWltZy10b3B7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeXtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDdweCA4cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiA3cHggOHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDdweCA4cHggMTdweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMSwgMSwgMTI5KTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcclxuXHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDRweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAzcHggNHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggNHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNSwgNSwgMTU4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/bubble/card/link/card-video-link/card-video-link.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/chat/bubble/card/link/card-video-link/card-video-link.component.ts ***!
  \************************************************************************************/
/*! exports provided: CardVideoLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardVideoLinkComponent", function() { return CardVideoLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var CardVideoLinkComponent = /** @class */ (function () {
    function CardVideoLinkComponent(sixe) {
        this.sixe = sixe;
    }
    CardVideoLinkComponent.prototype.ngOnInit = function () {
    };
    CardVideoLinkComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustResourceUrl(url);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardVideoLinkComponent.prototype, "mensajes", void 0);
    CardVideoLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-video-link',
            template: __webpack_require__(/*! ./card-video-link.component.html */ "./src/app/chat/bubble/card/link/card-video-link/card-video-link.component.html"),
            styles: [__webpack_require__(/*! ./card-video-link.component.scss */ "./src/app/chat/bubble/card/link/card-video-link/card-video-link.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], CardVideoLinkComponent);
    return CardVideoLinkComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/carrousel/carrousel.component.html":
/*!****************************************************************!*\
  !*** ./src/app/chat/bubble/carrousel/carrousel.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-item {{mensajes.class}}\">\r\n  <div class=\"card\" style=\"width: 18rem;\">\r\n    <img [src]=\"mensajes.url\" class=\"card-img-top\" alt=\"{{mensajes.url}}\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{mensajes.title}}</h5>\r\n      <p class=\"card-text\">{{mensajes.text}}</p>\r\n      <a [href]=\"this.sanitize(mensajes.link)\" target=\"_blank\" class=\"btn btn-primary\">{{mensajes.textButton}}</a>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <img [src]=\"mensajes.url\" class=\"d-block w-100\" alt=\"...\"> -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/bubble/carrousel/carrousel.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/chat/bubble/carrousel/carrousel.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvYnViYmxlL2NhcnJvdXNlbC9jYXJyb3VzZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat/bubble/carrousel/carrousel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/chat/bubble/carrousel/carrousel.component.ts ***!
  \**************************************************************/
/*! exports provided: CarrouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrouselComponent", function() { return CarrouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var CarrouselComponent = /** @class */ (function () {
    function CarrouselComponent(sixe) {
        this.sixe = sixe;
    }
    CarrouselComponent.prototype.ngOnInit = function () {
    };
    CarrouselComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustUrl(url);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarrouselComponent.prototype, "mensajes", void 0);
    CarrouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carrousel',
            template: __webpack_require__(/*! ./carrousel.component.html */ "./src/app/chat/bubble/carrousel/carrousel.component.html"),
            styles: [__webpack_require__(/*! ./carrousel.component.scss */ "./src/app/chat/bubble/carrousel/carrousel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], CarrouselComponent);
    return CarrouselComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/image/image.component.html":
/*!********************************************************!*\
  !*** ./src/app/chat/bubble/image/image.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"margin: 10px;\">\r\n  <img src=\"{{mensajes}}\" class=\"rounded float-left\" alt=\"\">\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/image/image.component.scss":
/*!********************************************************!*\
  !*** ./src/app/chat/bubble/image/image.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvYnViYmxlL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/chat/bubble/image/image.component.ts":
/*!******************************************************!*\
  !*** ./src/app/chat/bubble/image/image.component.ts ***!
  \******************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ImageComponent = /** @class */ (function () {
    function ImageComponent(sixe) {
        this.sixe = sixe;
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    ImageComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustUrl(url);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageComponent.prototype, "mensajes", void 0);
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/chat/bubble/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.scss */ "./src/app/chat/bubble/image/image.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/chat/bubble/video/video.component.html":
/*!********************************************************!*\
  !*** ./src/app/chat/bubble/video/video.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card\">\r\n  <iframe width=\"100%\" height=\"100%\" [src]=\"sanitize(mensajes.link)\" ></iframe>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/bubble/video/video.component.scss":
/*!********************************************************!*\
  !*** ./src/app/chat/bubble/video/video.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  padding: 15px;\n  margin: 12px auto;\n  width: 80%;\n  box-shadow: 10px 10px 36px -11px rgba(0, 0, 0, 0.75); }\n  .card iframe {\n    border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9idWJibGUvdmlkZW8vQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXGNoYXRib3RzXFxQbGF0aWxsYXMgd2lzeVxcY2hhdEJvdC1mcm9udEVuZC9zcmNcXGFwcFxcY2hhdFxcYnViYmxlXFx2aWRlb1xcdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFVBQVU7RUFHVixvREFBaUQsRUFBQTtFQU5yRDtJQVVRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvYnViYmxlL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMnB4IGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMzZweCAtMTFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDM2cHggLTExcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuXHJcblxyXG4gICAgaWZyYW1le1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/bubble/video/video.component.ts":
/*!******************************************************!*\
  !*** ./src/app/chat/bubble/video/video.component.ts ***!
  \******************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var VideoComponent = /** @class */ (function () {
    function VideoComponent(sixe) {
        this.sixe = sixe;
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent.prototype.sanitize = function (url) {
        return this.sixe.bypassSecurityTrustResourceUrl(url);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoComponent.prototype, "mensajes", void 0);
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/chat/bubble/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/chat/bubble/video/video.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"chat\" style=\"margin: 0; padding: 0; margin: 0\">\r\n  <div id=\"chat-box-body\" class=\"chat-box-body\" >\r\n    <div id=\"chat\" class=\"chat-logs\" *ngFor=\"let mensaje of mensaje\">\r\n      <app-bubble [mensajes]=\"mensaje\"></app-bubble>\r\n    </div>\r\n  </div>\r\n  <div class=\"chat-input\">\r\n    <form>\r\n      <input type=\"text\" autocomplete=\"off\" value=\"{{this.text}}\" (keyup.enter)=\"onTaskAdd($event)\" min=\"4\" id=\"chat-input\" placeholder=\"Escribe tu consulta...\" />\r\n        <button type=\"submit\" class=\"chat-submit\" (click)=\"generarBubble()\" (keyup.enter)=\"onTaskAdd($event)\"><i class=\"fab fa-telegram-plane\"></i></button>\r\n          <button type=\"submit\" class=\"chat-submittwo\" (click)=\"speackToText()\" (keyup.enter)=\"onTaskAdd($event)\"><i class=\"fas fa-microphone\"></i></button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- formullario -->\r\n\r\n<div class=\"form\" *ngIf=\"form\">\r\n\r\n  <div class=\"body\">\r\n\r\n\r\n    <form action=\"\" class=\"formulario\" name=\"formulario_registro\" method=\"get\">\r\n      <div>\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" id=\"nombre\" placeholder=\"Nombre\" [(ngModel)]=\"account.Name\" name=\"nombre\">\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <input type=\"email\" id=\"correo\" [(ngModel)]=\"account.Email\" name=\"correo\" placeholder=\"E-Mail\">\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" id=\"correo\" [(ngModel)]=\"account.Phone\" name=\"phone\" placeholder=\"Celular\">\r\n        </div>\r\n        <!-- <div class=\"input-group radio\">\r\n          <input type=\"radio\" name=\"sexo\" id=\"hombre\" [(ngModel)]=\"account.hombre\" value=\"Hombre\">\r\n          <label for=\"hombre\">Hombre</label>\r\n          <input type=\"radio\" name=\"sexo\" id=\"mujer\" [(ngModel)]=\"account.mujer\" value=\"Mujer\">\r\n          <label for=\"mujer\">Mujer</label>\r\n        </div> -->\r\n        <div class=\"input-group checkbox\">\r\n          <input type=\"checkbox\" name=\"terminos\" #terminos id=\"terminos\">\r\n          <label for=\"terminos\">Acepto los Terminos y Condiciones</label>\r\n        </div>\r\n\r\n        <input type=\"submit\" id=\"btn-submit\" (click)=\"doSignup(terminos.checked)\" value=\"Enviar\">\r\n      </div>\r\n    </form>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Encode+Sans|Poppins\");\n.form {\n  background: #f2f2f2;\n  padding: 10px;\n  padding-top: 30px;\n  height: 100vh; }\n.form .body {\n    background: #f2f2f2;\n    font-family: \"Roboto\", Arial;\n    border-top: 0px solid #303F9F; }\n.form .body .formulario {\n    width: 100%;\n    margin: auto; }\n.form .body .formulario .input-group {\n    position: relative;\n    margin-bottom: 30px; }\n.form .body .formulario .input-group input[type=\"text\"],\n  .form .body .formulario .input-group input[type=\"email\"],\n  .form .body .formulario .input-group input[type=\"password\"] {\n    font-family: \"Roboto\", Arial;\n    font-size: 16px;\n    color: #303F9F;\n    width: 100%;\n    outline: none;\n    padding: 15px;\n    background: none;\n    border: none;\n    border-bottom: 2px solid #BBDEFB; }\n.form .body .formulario .input-group input[type=\"text\"]::-webkit-input-placeholder,\n    .form .body .formulario .input-group input[type=\"email\"]::-webkit-input-placeholder,\n    .form .body .formulario .input-group input[type=\"password\"]::-webkit-input-placeholder {\n      color: #303F9F; }\n.form .body .formulario .input-group input[type=\"text\"]::-ms-input-placeholder,\n    .form .body .formulario .input-group input[type=\"email\"]::-ms-input-placeholder,\n    .form .body .formulario .input-group input[type=\"password\"]::-ms-input-placeholder {\n      color: #303F9F; }\n.form .body .formulario .input-group input[type=\"text\"]::placeholder,\n    .form .body .formulario .input-group input[type=\"email\"]::placeholder,\n    .form .body .formulario .input-group input[type=\"password\"]::placeholder {\n      color: #303F9F; }\n.form .body .formulario .input-group input[type=\"text\"]:focus, .form .body .formulario .input-group input[type=\"text\"]:active,\n  .form .body .formulario .input-group input[type=\"email\"]:focus,\n  .form .body .formulario .input-group input[type=\"email\"]:active,\n  .form .body .formulario .input-group input[type=\"password\"]:focus,\n  .form .body .formulario .input-group input[type=\"password\"]:active {\n    outline: none;\n    border-bottom: 2px solid #303F9F; }\n.form .body .formulario .input-group input[type=\"text\"].error,\n  .form .body .formulario .input-group input[type=\"email\"].error,\n  .form .body .formulario .input-group input[type=\"password\"].error {\n    border-bottom: 2px solid #D32F2F; }\n.form .body .formulario .input-group input[type=\"text\"].error + label,\n  .form .body .formulario .input-group input[type=\"email\"].error + label,\n  .form .body .formulario .input-group input[type=\"password\"].error + label {\n    color: #D32F2F; }\n.form .body .formulario .input-group label {\n    color: #303F9F; }\n.form .body .formulario .input-group label.label {\n    transition: all 0.3s ease;\n    margin-left: 15px;\n    font-size: 16px;\n    line-height: 16px;\n    position: absolute;\n    top: 16px;\n    left: 0; }\n.form .body .formulario .input-group label.label.active {\n    top: -12px;\n    font-size: 12px;\n    line-height: 12px;\n    color: #B6B6B6; }\n.form .body .formulario .input-group.checkbox label, .form .body .formulario .input-group.radio label {\n    display: inline-block;\n    cursor: pointer;\n    color: #303F9F;\n    position: relative;\n    padding: 1px 15px 1px 51px;\n    font-size: 1em;\n    border-radius: 3px;\n    transition: all 0.3s ease; }\n.form .body .formulario .input-group.checkbox label::after, .form .body .formulario .input-group.radio label::after {\n      background: transparent;\n      border: none; }\n.form .body .formulario .input-group.checkbox label:hover, .form .body .formulario .input-group.radio label:hover {\n    background: #bbdefb; }\n.form .body .formulario .input-group.checkbox label:before, .form .body .formulario .input-group.radio label:before {\n    content: \"\";\n    display: inline-block;\n    width: 17px;\n    height: 17px;\n    position: absolute;\n    left: 15px;\n    border-radius: 50%;\n    background: none;\n    border: 2px solid #303F9F; }\n.form .body .formulario .input-group.error label {\n    color: #D32F2F; }\n.form .body .formulario .input-group.error label:hover {\n    background: rgba(211, 47, 47, 0.2); }\n.form .body .formulario .input-group.error label:before {\n    border: 2px solid #D32F2F; }\n.form .body .formulario .input-group.radio input[type=\"radio\"] {\n    display: none; }\n.form .body .formulario .input-group.radio input[type=\"radio\"]:checked + label:before {\n    display: none; }\n.form .body .formulario .input-group.radio input[type=\"radio\"]:checked + label {\n    padding: 0px 15px;\n    background: #303F9F;\n    border-radius: 2px;\n    color: #f2f2f2; }\n.form .body .formulario .input-group.checkbox label:before {\n    border-radius: 3px; }\n.form .body .formulario .input-group.checkbox input[type=\"checkbox\"] {\n    display: none; }\n.form .body .formulario .input-group.checkbox input[type=\"checkbox\"]:checked + label:before {\n    display: none; }\n.form .body .formulario .input-group.checkbox input[type=\"checkbox\"]:checked + label {\n    background: #303F9F;\n    color: #f2f2f2;\n    padding: 1px 15px; }\n.form .body .formulario input[type=\"submit\"] {\n    background: #303F9F;\n    border-radius: 1px;\n    border: 2px solid #f2f2f2;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: \"Roboto\", Arial;\n    font-size: 16px;\n    padding: 15px;\n    width: 100%;\n    transition: all 0.3s ease; }\n.form .body .formulario input[type=\"submit\"]:hover {\n    background: #1976D2; }\nh1, h2, h3, h4, h5, h6, p {\n  font-family: 'Encode Sans', sans-serif !important;\n  font-family: 'Poppins', sans-serif !important;\n  border: 0;\n  border-color: transparent;\n  overflow: none; }\n#center-text {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-height: 300px !important; }\n#chat-circle {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  background: #115BDE;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  color: white;\n  padding: 20px;\n  cursor: pointer;\n  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  font-size: 13px; }\n.btn#my-btn {\n  background: white;\n  padding-top: 13px;\n  padding-bottom: 12px;\n  border-radius: 45px;\n  padding-right: 40px;\n  padding-left: 40px;\n  color: #5865C3; }\n.chat-box {\n  display: none;\n  background: #efefef;\n  position: fixed;\n  right: 20px;\n  bottom: 15px;\n  width: 350px;\n  max-width: 85vw;\n  max-height: 100vh;\n  border-radius: 5px;\n  /*   box-shadow: 0px 5px 35px 9px #464a92; */\n  box-shadow: 0px 5px 35px 9px #ccc; }\n.chat-box-toggle {\n  float: right;\n  margin-right: 15px;\n  cursor: pointer; }\n.chat-box-header {\n  background: #115BDE;\n  height: 70px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  color: white;\n  text-align: center;\n  font-size: 20px;\n  padding-top: 17px; }\n.chat-box-body {\n  padding: 10px;\n  height: 94vh;\n  border: 0;\n  overflow: auto; }\n.chat-box-body::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5; }\n.chat-box-body::-webkit-scrollbar {\n  width: 5px;\n  height: 0;\n  background-color: #F5F5F5; }\n.chat-box-body::-webkit-scrollbar-thumb {\n  background-color: #5A5EB9; }\n.chat-box-body::-moz-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5; }\n.chat-box-body::-moz-scrollbar {\n  width: 5px;\n  height: 0;\n  background-color: #F5F5F5; }\n.chat-box-body::-moz-scrollbar-thumb {\n  background-color: #5A5EB9; }\n.chat-box-body:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgOCkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjE3NiIgY3k9IjEyIiByPSI0Ii8+PHBhdGggZD0iTTIwLjUuNWwyMyAxMW0tMjkgODRsLTMuNzkgMTAuMzc3TTI3LjAzNyAxMzEuNGw1Ljg5OCAyLjIwMy0zLjQ2IDUuOTQ3IDYuMDcyIDIuMzkyLTMuOTMzIDUuNzU4bTEyOC43MzMgMzUuMzdsLjY5My05LjMxNiAxMC4yOTIuMDUyLjQxNi05LjIyMiA5LjI3NC4zMzJNLjUgNDguNXM2LjEzMSA2LjQxMyA2Ljg0NyAxNC44MDVjLjcxNSA4LjM5My0yLjUyIDE0LjgwNi0yLjUyIDE0LjgwNk0xMjQuNTU1IDkwcy03LjQ0NCAwLTEzLjY3IDYuMTkyYy02LjIyNyA2LjE5Mi00LjgzOCAxMi4wMTItNC44MzggMTIuMDEybTIuMjQgNjguNjI2cy00LjAyNi05LjAyNS0xOC4xNDUtOS4wMjUtMTguMTQ1IDUuNy0xOC4xNDUgNS43IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTg1LjcxNiAzNi4xNDZsNS4yNDMtOS41MjFoMTEuMDkzbDUuNDE2IDkuNTIxLTUuNDEgOS4xODVIOTAuOTUzbC01LjIzNy05LjE4NXptNjMuOTA5IDE1LjQ3OWgxMC43NXYxMC43NWgtMTAuNzV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjcxLjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjE3MC41IiBjeT0iOTUuNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjMDAwIiBjeD0iODEuNSIgY3k9IjEzNC41IiByPSIxLjUiLz48Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIxMy41IiBjeT0iMjMuNSIgcj0iMS41Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkzIDcxaDN2M2gtM3ptMzMgODRoM3YzaC0zem0tODUgMThoM3YzaC0zeiIvPjxwYXRoIGQ9Ik0zOS4zODQgNTEuMTIybDUuNzU4LTQuNDU0IDYuNDUzIDQuMjA1LTIuMjk0IDcuMzYzaC03Ljc5bC0yLjEyNy03LjExNHpNMTMwLjE5NSA0LjAzbDEzLjgzIDUuMDYyLTEwLjA5IDcuMDQ4LTMuNzQtMTIuMTF6bS04MyA5NWwxNC44MyA1LjQyOS0xMC44MiA3LjU1Ny00LjAxLTEyLjk4N3pNNS4yMTMgMTYxLjQ5NWwxMS4zMjggMjAuODk3TDIuMjY1IDE4MGwyLjk0OC0xOC41MDV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxwYXRoIGQ9Ik0xNDkuMDUgMTI3LjQ2OHMtLjUxIDIuMTgzLjk5NSAzLjM2NmMxLjU2IDEuMjI2IDguNjQyLTEuODk1IDMuOTY3LTcuNzg1LTIuMzY3LTIuNDc3LTYuNS0zLjIyNi05LjMzIDAtNS4yMDggNS45MzYgMCAxNy41MSAxMS42MSAxMy43MyAxMi40NTgtNi4yNTcgNS42MzMtMjEuNjU2LTUuMDczLTIyLjY1NC02LjYwMi0uNjA2LTE0LjA0MyAxLjc1Ni0xNi4xNTcgMTAuMjY4LTEuNzE4IDYuOTIgMS41ODQgMTcuMzg3IDEyLjQ1IDIwLjQ3NiAxMC44NjYgMy4wOSAxOS4zMzEtNC4zMSAxOS4zMzEtNC4zMSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4=\");\n  opacity: 0.1;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  position: absolute;\n  z-index: -1; }\n#chat-input {\n  background: #f4f7f9;\n  width: 100%;\n  position: fixed;\n  height: 47px;\n  padding-top: 10px;\n  padding-right: 50px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n  border: none;\n  resize: none;\n  outline: none;\n  bottom: 0 !important;\n  border: 0;\n  color: #888;\n  border-top: none;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  overflow: hidden; }\n.chat-input > form {\n  margin-bottom: 0; }\n#chat-input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #ccc; }\n#chat-input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #ccc; }\n#chat-input:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #ccc; }\n#chat-input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #ccc; }\n.chat-submit {\n  position: absolute;\n  bottom: 3px;\n  right: 10px;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  border-radius: 50%;\n  color: #5A5EB9;\n  width: 35px;\n  height: 35px; }\n.chat-submittwo {\n  position: absolute;\n  bottom: 3px;\n  right: 40px;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  border-radius: 50%;\n  color: #5A5EB9;\n  width: 35px;\n  height: 35px; }\n.chat-logs {\n  padding: 5px; }\n.chat-msg.user img {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  float: left;\n  width: 15%; }\n.chat-msg.self img {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  float: right;\n  width: 15%; }\n.cm-msg-text {\n  background: white;\n  padding: 10px 15px 10px 15px;\n  color: #666;\n  max-width: 75%;\n  float: left;\n  margin-left: 10px;\n  position: relative;\n  margin-bottom: 20px;\n  border-radius: 30px; }\n.chat-msg {\n  clear: both; }\n.chat-msg.self > .cm-msg-text {\n  float: right;\n  margin-right: 10px;\n  background: #5A5EB9;\n  color: white; }\n.cm-msg-button > ul > li {\n  list-style: none;\n  float: left;\n  width: 50%; }\n.cm-msg-button {\n  clear: both;\n  margin-bottom: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xcY2hhdGJvdHNcXFBsYXRpbGxhcyB3aXN5XFxjaGF0Qm90LWZyb250RW5kL3NyY1xcYXBwXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUFZO0FBb0JaO0VBRUUsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsYUFBYSxFQUFBO0FBTGY7SUFTRSxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QixFQUFBO0FBWC9CO0lBZ0JFLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFqQmQ7SUFvQkUsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0FBckJyQjs7O0lBNEJFLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0NBQWdDLEVBQUE7QUFwQ2xDOzs7TUF1Q0ksY0FBYyxFQUFBO0FBdkNsQjs7O01BdUNJLGNBQWMsRUFBQTtBQXZDbEI7OztNQXVDSSxjQUFjLEVBQUE7QUF2Q2xCOzs7OztJQStDRSxhQUFhO0lBQ2IsZ0NBQWdDLEVBQUE7QUFoRGxDOzs7SUFxREUsZ0NBQWdDLEVBQUE7QUFyRGxDOzs7SUEwREUsY0FBYyxFQUFBO0FBMURoQjtJQTZERSxjQUFjLEVBQUE7QUE3RGhCO0lBZ0VFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU8sRUFBQTtBQXRFVDtJQXlFRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjLEVBQUE7QUE1RWhCO0lBK0VFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBQTtBQXRGM0I7TUF5RkksdUJBQXVCO01BQ3ZCLFlBQVksRUFBQTtBQTFGaEI7SUE4RkUsbUJBQW1CLEVBQUE7QUE5RnJCO0lBaUdFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCLEVBQUE7QUF6RzNCO0lBNEdFLGNBQWMsRUFBQTtBQTVHaEI7SUErR0Usa0NBQWtDLEVBQUE7QUEvR3BDO0lBa0hFLHlCQUF5QixFQUFBO0FBbEgzQjtJQXFIRSxhQUFhLEVBQUE7QUFySGY7SUF3SEUsYUFBYSxFQUFBO0FBeEhmO0lBMkhFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTtBQTlIaEI7SUFpSUUsa0JBQWtCLEVBQUE7QUFqSXBCO0lBb0lFLGFBQWEsRUFBQTtBQXBJZjtJQXVJRSxhQUFhLEVBQUE7QUF2SWY7SUEwSUUsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTtBQTVJbkI7SUErSUUsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QixFQUFBO0FBekozQjtJQTRKRSxtQkFBbUIsRUFBQTtBQWdCckI7RUFDSSxpREFBaUQ7RUFDakQsNkNBQTZDO0VBQzdDLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsY0FBYyxFQUFBO0FBRWxCO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw0QkFBMkIsRUFBQTtBQUc3QjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixtSEFBbUg7RUFDbkgsZUFBZSxFQUFBO0FBR2pCO0VBQ0ssaUJBQWlCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0FBR2xCO0VBQ0UsYUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFjO0VBQ2QsV0FBVTtFQUNWLFlBQVc7RUFDWCxZQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDbkIsNENBQUE7RUFDRSxpQ0FBaUMsRUFBQTtBQUVuQztFQUNFLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsZUFBYyxFQUFBO0FBRWhCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVc7RUFDWCwyQkFBMEI7RUFDMUIsNEJBQTJCO0VBQzNCLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGlCQUFnQixFQUFBO0FBRWxCO0VBQ0UsYUFBYTtFQUNiLFlBQVc7RUFDWCxTQUFRO0VBQ1IsY0FBYyxFQUFBO0FBSWhCO0VBRUMsNENBQXlDO0VBQ3pDLHlCQUF5QixFQUFBO0FBRzFCO0VBRUUsVUFBVTtFQUNWLFNBQVM7RUFDVix5QkFBeUIsRUFBQTtBQUcxQjtFQUVDLHlCQUF5QixFQUFBO0FBTTFCO0VBRUMsNENBQXlDO0VBQ3pDLHlCQUF5QixFQUFBO0FBRzFCO0VBRUUsVUFBVTtFQUNWLFNBQVM7RUFDVix5QkFBeUIsRUFBQTtBQUcxQjtFQUVDLHlCQUF5QixFQUFBO0FBRzFCO0VBQ0UsV0FBVztFQUNYLCt1RUFBK3VFO0VBQy91RSxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBRWI7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVTtFQUNWLGVBQWM7RUFDZCxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxZQUFXO0VBQ1gsYUFBWTtFQUNaLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsV0FBVTtFQUNWLGdCQUFlO0VBQ2YsK0JBQThCO0VBQzlCLDhCQUE2QjtFQUM3QixnQkFBZSxFQUFBO0FBRWpCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFFcEI7RUFBeUMsd0JBQUE7RUFDdkMsV0FBVyxFQUFBO0FBRWI7RUFBZ0MsZ0JBQUE7RUFDOUIsV0FBVyxFQUFBO0FBRWI7RUFBb0MsV0FBQTtFQUNsQyxXQUFXLEVBQUE7QUFFYjtFQUErQixnQkFBQTtFQUM3QixXQUFXLEVBQUE7QUFFYjtFQUNFLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsV0FBVTtFQUNWLHVCQUF1QjtFQUN2QixnQkFBZTtFQUNmLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLFdBQVU7RUFDVixZQUFXLEVBQUE7QUFHYjtFQUNFLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsV0FBVTtFQUNWLHVCQUF1QjtFQUN2QixnQkFBZTtFQUNmLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLFdBQVU7RUFDVixZQUFXLEVBQUE7QUFFYjtFQUNFLFlBQVcsRUFBQTtBQUdiO0VBQ0UsV0FBVTtFQUNWLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsV0FBVTtFQUNWLFVBQVMsRUFBQTtBQUVYO0VBQ0UsV0FBVTtFQUNWLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsWUFBVztFQUNYLFVBQVMsRUFBQTtBQUlYO0VBQ0UsaUJBQWdCO0VBQ2hCLDRCQUEyQjtFQUMzQixXQUFVO0VBQ1YsY0FBYTtFQUNiLFdBQVU7RUFDVixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFBQTtBQUVwQjtFQUNFLFdBQVUsRUFBQTtBQUVaO0VBQ0UsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBVyxFQUFBO0FBRWI7RUFDRSxnQkFBZTtFQUNmLFdBQVU7RUFDVixVQUFTLEVBQUE7QUFFWDtFQUNJLFdBQVc7RUFDWCxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RW5jb2RlK1NhbnN8UG9wcGlucycpO1xyXG5cclxuJGJvcmRlcjogI0QxRDdFMztcclxuJHN1Y2Nlc3M6ICM2OUREOTU7XHJcbiR0ZXh0Q29sb3I6ICM3OTdDODY7XHJcbiR0ZXh0QnV0b246IHJnYig3NSwgNzYsIDc4KTtcclxuJHBsYWNlaG9sZGVyQ29sb3I6ICNDN0M4Q0M7XHJcbiRpbnB1dEJvcmRlcjogMDtcclxuJGlucHV0U2hhZG93OiAwIDRweCAxMnB4IC0ycHggcmdiYSgjNkI3NUExLCAuMTYpO1xyXG5cclxuJGJvcmRlcjogI0QxRDdFMztcclxuJHN1Y2Nlc3M6ICM2OUREOTU7XHJcbiR0ZXh0Q29sb3I6ICM3OTdDODY7XHJcbiR0ZXh0QnV0b246IHJnYigyOSwgMjksIDI5KTtcclxuJHBsYWNlaG9sZGVyQ29sb3I6ICNDN0M4Q0M7XHJcbiRpbnB1dEJvcmRlcjogMDtcclxuJGlucHV0U2hhZG93OiAwIDRweCAxMnB4IC0ycHggcmdiYSgjNkI3NUExLCAuMTYpO1xyXG5cclxuLy8gZm9ybXVsYXJpb1xyXG5cclxuLmZvcm17XHJcblxyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuXHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBBcmlhbDtcclxuICBib3JkZXItdG9wOiAwcHggc29saWQgIzMwM0Y5RjtcclxuXHJcblxyXG59XHJcbi5ib2R5IC5mb3JtdWxhcmlvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcblxyXG59XHJcbi5ib2R5IC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cCBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEFyaWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzMwM0Y5RjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNCQkRFRkI7XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogIzMwM0Y5RjtcclxuICB9XHJcbn1cclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLCAuYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInRleHRcIl06YWN0aXZlLFxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmFjdGl2ZSxcclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTphY3RpdmUge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMDNGOUY7XHJcbn1cclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLmVycm9yLFxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLmVycm9yLFxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLmVycm9yIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0QzMkYyRjtcclxufVxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInRleHRcIl0uZXJyb3IgKyBsYWJlbCxcclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJlbWFpbFwiXS5lcnJvciArIGxhYmVsLFxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLmVycm9yICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjRDMyRjJGO1xyXG59XHJcbi5ib2R5IC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cCBsYWJlbCB7XHJcbiAgY29sb3I6ICMzMDNGOUY7XHJcbn1cclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGxhYmVsLmxhYmVsIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNnB4O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwIGxhYmVsLmxhYmVsLmFjdGl2ZSB7XHJcbiAgdG9wOiAtMTJweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgY29sb3I6ICNCNkI2QjY7XHJcbn1cclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwLmNoZWNrYm94IGxhYmVsLCAuYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAucmFkaW8gbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMzMDNGOUY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDFweCAxNXB4IDFweCA1MXB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAmOjphZnRlcntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAuY2hlY2tib3ggbGFiZWw6aG92ZXIsIC5ib2R5IC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cC5yYWRpbyBsYWJlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2JiZGVmYjtcclxufVxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAuY2hlY2tib3ggbGFiZWw6YmVmb3JlLCAuYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAucmFkaW8gbGFiZWw6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTdweDtcclxuICBoZWlnaHQ6IDE3cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzMwM0Y5RjtcclxufVxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAuZXJyb3IgbGFiZWwge1xyXG4gIGNvbG9yOiAjRDMyRjJGO1xyXG59XHJcbi5ib2R5IC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cC5lcnJvciBsYWJlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTEsIDQ3LCA0NywgMC4yKTtcclxufVxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAuZXJyb3IgbGFiZWw6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjRDMyRjJGO1xyXG59XHJcbi5ib2R5IC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cC5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5ib2R5IC5mb3JtdWxhcmlvIC5pbnB1dC1ncm91cC5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjMzAzRjlGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogI2YyZjJmMjtcclxufVxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAuY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYm9keSAuZm9ybXVsYXJpbyAuaW5wdXQtZ3JvdXAuY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmJvZHkgLmZvcm11bGFyaW8gLmlucHV0LWdyb3VwLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gIGJhY2tncm91bmQ6ICMzMDNGOUY7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMXB4IDE1cHg7XHJcbn1cclxuLmJvZHkgLmZvcm11bGFyaW8gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZDogIzMwM0Y5RjtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2YyZjJmMjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBBcmlhbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5ib2R5IC5mb3JtdWxhcmlvIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxOTc2RDI7XHJcbn1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBjaGF0XHJcblxyXG5cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHB7XHJcbiAgICBmb250LWZhbWlseTogJ0VuY29kZSBTYW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG92ZXJmbG93OiBub25lO1xyXG59XHJcbiNjZW50ZXItdGV4dCB7ICAgICAgICAgIFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcclxuICBtYXgtaGVpZ2h0OjMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbn1cclxuI2NoYXQtY2lyY2xlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMxMTVCREU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4OyAgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmJ0biNteS1idG4ge1xyXG4gICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgY29sb3I6ICM1ODY1QzM7XHJcbn1cclxuXHJcbi5jaGF0LWJveCB7XHJcbiAgZGlzcGxheTpub25lO1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgcmlnaHQ6MjBweDtcclxuICBib3R0b206MTVweDsgIFxyXG4gIHdpZHRoOjM1MHB4O1xyXG4gIG1heC13aWR0aDogODV2dztcclxuICBtYXgtaGVpZ2h0OjEwMHZoO1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4OyAgXHJcbi8qICAgYm94LXNoYWRvdzogMHB4IDVweCAzNXB4IDlweCAjNDY0YTkyOyAqL1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMzVweCA5cHggI2NjYztcclxufVxyXG4uY2hhdC1ib3gtdG9nZ2xlIHtcclxuICBmbG9hdDpyaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4uY2hhdC1ib3gtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMTE1QkRFO1xyXG4gIGhlaWdodDo3MHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjVweDsgXHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbiAgcGFkZGluZy10b3A6MTdweDtcclxufVxyXG4uY2hhdC1ib3gtYm9keSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBoZWlnaHQ6OTR2aDtcclxuICBib3JkZXI6MDsgIFxyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmNoYXQtYm94LWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXHJcbntcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uY2hhdC1ib3gtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXJcclxue1xyXG4gIHdpZHRoOiA1cHg7ICBcclxuICBoZWlnaHQ6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuLmNoYXQtYm94LWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNUE1RUI5O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uY2hhdC1ib3gtYm9keTo6LW1vei1zY3JvbGxiYXItdHJhY2tcclxue1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5jaGF0LWJveC1ib2R5OjotbW96LXNjcm9sbGJhclxyXG57XHJcbiAgd2lkdGg6IDVweDsgIFxyXG4gIGhlaWdodDogMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uY2hhdC1ib3gtYm9keTo6LW1vei1zY3JvbGxiYXItdGh1bWJcclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1QTVFQjk7XHJcbn1cclxuXHJcbi5jaGF0LWJveC1ib2R5OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTWpBd0lpQm9aV2xuYUhROUlqSXdNQ0lnZG1sbGQwSnZlRDBpTUNBd0lESXdNQ0F5TURBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHY2dkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTVRBZ09Da2lJR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK1BHTnBjbU5zWlNCemRISnZhMlU5SWlNd01EQWlJSE4wY205clpTMTNhV1IwYUQwaU1TNHlOU0lnWTNnOUlqRTNOaUlnWTNrOUlqRXlJaUJ5UFNJMElpOCtQSEJoZEdnZ1pEMGlUVEl3TGpVdU5Xd3lNeUF4TVcwdE1qa2dPRFJzTFRNdU56a2dNVEF1TXpjM1RUSTNMakF6TnlBeE16RXVOR3cxTGpnNU9DQXlMakl3TXkwekxqUTJJRFV1T1RRM0lEWXVNRGN5SURJdU16a3lMVE11T1RNeklEVXVOelU0YlRFeU9DNDNNek1nTXpVdU16ZHNMalk1TXkwNUxqTXhOaUF4TUM0eU9USXVNRFV5TGpReE5pMDVMakl5TWlBNUxqSTNOQzR6TXpKTkxqVWdORGd1TlhNMkxqRXpNU0EyTGpReE15QTJMamcwTnlBeE5DNDRNRFZqTGpjeE5TQTRMak01TXkweUxqVXlJREUwTGpnd05pMHlMalV5SURFMExqZ3dOazB4TWpRdU5UVTFJRGt3Y3kwM0xqUTBOQ0F3TFRFekxqWTNJRFl1TVRreVl5MDJMakl5TnlBMkxqRTVNaTAwTGpnek9DQXhNaTR3TVRJdE5DNDRNemdnTVRJdU1ERXliVEl1TWpRZ05qZ3VOakkyY3kwMExqQXlOaTA1TGpBeU5TMHhPQzR4TkRVdE9TNHdNalV0TVRndU1UUTFJRFV1TnkweE9DNHhORFVnTlM0M0lpQnpkSEp2YTJVOUlpTXdNREFpSUhOMGNtOXJaUzEzYVdSMGFEMGlNUzR5TlNJZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJaTgrUEhCaGRHZ2daRDBpVFRnMUxqY3hOaUF6Tmk0eE5EWnNOUzR5TkRNdE9TNDFNakZvTVRFdU1Ea3piRFV1TkRFMklEa3VOVEl4TFRVdU5ERWdPUzR4T0RWSU9UQXVPVFV6YkMwMUxqSXpOeTA1TGpFNE5YcHROak11T1RBNUlERTFMalEzT1dneE1DNDNOWFl4TUM0M05XZ3RNVEF1TnpWNklpQnpkSEp2YTJVOUlpTXdNREFpSUhOMGNtOXJaUzEzYVdSMGFEMGlNUzR5TlNJdlBqeGphWEpqYkdVZ1ptbHNiRDBpSXpBd01DSWdZM2c5SWpjeExqVWlJR041UFNJM0xqVWlJSEk5SWpFdU5TSXZQanhqYVhKamJHVWdabWxzYkQwaUl6QXdNQ0lnWTNnOUlqRTNNQzQxSWlCamVUMGlPVFV1TlNJZ2NqMGlNUzQxSWk4K1BHTnBjbU5zWlNCbWFXeHNQU0lqTURBd0lpQmplRDBpT0RFdU5TSWdZM2s5SWpFek5DNDFJaUJ5UFNJeExqVWlMejQ4WTJseVkyeGxJR1pwYkd3OUlpTXdNREFpSUdONFBTSXhNeTQxSWlCamVUMGlNak11TlNJZ2NqMGlNUzQxSWk4K1BIQmhkR2dnWm1sc2JEMGlJekF3TUNJZ1pEMGlUVGt6SURjeGFETjJNMmd0TTNwdE16TWdPRFJvTTNZemFDMHplbTB0T0RVZ01UaG9NM1l6YUMwemVpSXZQanh3WVhSb0lHUTlJazB6T1M0ek9EUWdOVEV1TVRJeWJEVXVOelU0TFRRdU5EVTBJRFl1TkRVeklEUXVNakExTFRJdU1qazBJRGN1TXpZemFDMDNMamM1YkMweUxqRXlOeTAzTGpFeE5IcE5NVE13TGpFNU5TQTBMakF6YkRFekxqZ3pJRFV1TURZeUxURXdMakE1SURjdU1EUTRMVE11TnpRdE1USXVNVEY2YlMwNE15QTVOV3d4TkM0NE15QTFMalF5T1MweE1DNDRNaUEzTGpVMU55MDBMakF4TFRFeUxqazROM3BOTlM0eU1UTWdNVFl4TGpRNU5Xd3hNUzR6TWpnZ01qQXVPRGszVERJdU1qWTFJREU0TUd3eUxqazBPQzB4T0M0MU1EVjZJaUJ6ZEhKdmEyVTlJaU13TURBaUlITjBjbTlyWlMxM2FXUjBhRDBpTVM0eU5TSXZQanh3WVhSb0lHUTlJazB4TkRrdU1EVWdNVEkzTGpRMk9ITXRMalV4SURJdU1UZ3pMams1TlNBekxqTTJObU14TGpVMklERXVNakkySURndU5qUXlMVEV1T0RrMUlETXVPVFkzTFRjdU56ZzFMVEl1TXpZM0xUSXVORGMzTFRZdU5TMHpMakl5TmkwNUxqTXpJREF0TlM0eU1EZ2dOUzQ1TXpZZ01DQXhOeTQxTVNBeE1TNDJNU0F4TXk0M015QXhNaTQwTlRndE5pNHlOVGNnTlM0Mk16TXRNakV1TmpVMkxUVXVNRGN6TFRJeUxqWTFOQzAyTGpZd01pMHVOakEyTFRFMExqQTBNeUF4TGpjMU5pMHhOaTR4TlRjZ01UQXVNalk0TFRFdU56RTRJRFl1T1RJZ01TNDFPRFFnTVRjdU16ZzNJREV5TGpRMUlESXdMalEzTmlBeE1DNDROallnTXk0d09TQXhPUzR6TXpFdE5DNHpNU0F4T1M0ek16RXROQzR6TVNJZ2MzUnliMnRsUFNJak1EQXdJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRXVNalVpSUhOMGNtOXJaUzFzYVc1bFkyRndQU0p5YjNWdVpDSXZQand2Wno0OEwzTjJaejQ9Jyk7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7ICAgXHJcbn1cclxuI2NoYXQtaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmNGY3Zjk7XHJcbiAgd2lkdGg6MTAwJTsgXHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgaGVpZ2h0OjQ3cHg7ICBcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6NTBweDtcclxuICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIHJlc2l6ZTpub25lO1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDA7XHJcbiAgY29sb3I6Izg4ODtcclxuICBib3JkZXItdG9wOm5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4O1xyXG4gIG92ZXJmbG93OmhpZGRlbjsgIFxyXG59XHJcbi5jaGF0LWlucHV0ID4gZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbiNjaGF0LWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcbiNjaGF0LWlucHV0OjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cclxuICBjb2xvcjogI2NjYztcclxufVxyXG4jY2hhdC1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cclxuICBjb2xvcjogI2NjYztcclxufVxyXG4jY2hhdC1pbnB1dDotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cclxuICBjb2xvcjogI2NjYztcclxufVxyXG4uY2hhdC1zdWJtaXQgeyAgXHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm90dG9tOjNweDtcclxuICByaWdodDoxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6bm9uZTtcclxuICBib3JkZXI6bm9uZTtcclxuICBib3JkZXItcmFkaXVzOjUwJTtcclxuICBjb2xvcjojNUE1RUI5O1xyXG4gIHdpZHRoOjM1cHg7XHJcbiAgaGVpZ2h0OjM1cHg7ICBcclxufVxyXG5cclxuLmNoYXQtc3VibWl0dHdvIHsgIFxyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGJvdHRvbTozcHg7XHJcbiAgcmlnaHQ6NDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93Om5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgY29sb3I6IzVBNUVCOTtcclxuICB3aWR0aDozNXB4O1xyXG4gIGhlaWdodDozNXB4OyAgXHJcbn1cclxuLmNoYXQtbG9ncyB7XHJcbiAgcGFkZGluZzo1cHg7XHJcbn1cclxuXHJcbi5jaGF0LW1zZy51c2VyIGltZyB7XHJcbiAgd2lkdGg6NDVweDtcclxuICBoZWlnaHQ6NDVweDtcclxuICBib3JkZXItcmFkaXVzOjUwJTtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIHdpZHRoOjE1JTtcclxufVxyXG4uY2hhdC1tc2cuc2VsZiBpbWcge1xyXG4gIHdpZHRoOjQ1cHg7XHJcbiAgaGVpZ2h0OjQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgd2lkdGg6MTUlO1xyXG59XHJcblxyXG5cclxuLmNtLW1zZy10ZXh0IHtcclxuICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIHBhZGRpbmc6MTBweCAxNXB4IDEwcHggMTVweDsgIFxyXG4gIGNvbG9yOiM2NjY7XHJcbiAgbWF4LXdpZHRoOjc1JTtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHg7IFxyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206MjBweDtcclxuICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbn1cclxuLmNoYXQtbXNnIHtcclxuICBjbGVhcjpib3RoOyAgICBcclxufVxyXG4uY2hhdC1tc2cuc2VsZiA+IC5jbS1tc2ctdGV4dCB7ICBcclxuICBmbG9hdDpyaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICBiYWNrZ3JvdW5kOiAjNUE1RUI5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbi5jbS1tc2ctYnV0dG9uPnVsPmxpIHtcclxuICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDo1MCU7XHJcbn1cclxuLmNtLW1zZy1idXR0b24ge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/formulario.service */ "./src/app/services/formulario.service.ts");




var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, signupService) {
        this.chatService = chatService;
        this.signupService = signupService;
        this.account = {};
        this.chat = false;
        this.form = true;
        this.speak = false;
        this.node = '';
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.mensaje = [];
        // const scrolling = document.getElementById('chat-box-body');
        // scrolling.scrollTop = scrolling.scrollHeight;
    };
    // speack
    ChatComponent.prototype.speackToText = function () {
        var _this = this;
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.addEventListener('result', function (e) {
            var trascript = Array.from(e.results)
                .map(function (result) { return result[0]; })
                .map(function (result) { return result.transcript; })
                .join('');
            _this.text = trascript;
            console.log(trascript);
        });
        recognition.addEventListener('end', recognition.stop);
        recognition.start();
        this.text = '';
    };
    // formulario
    ChatComponent.prototype.doSignup = function (terminos) {
        var _this = this;
        console.log(this.account);
        if (terminos === true && this.account.Name !== '' && this.account.Phone !== '' && this.account.Email !== '') {
            localStorage.setItem('name', this.account.Name);
            localStorage.setItem('phone', this.account.Phone);
            this.signupService.Signup(this.account);
            this.chat = true;
            this.form = false;
            var email = this.account.Email;
            this.mail = email;
            var envio = {
                text: 'hola',
                node: this.node,
                email: this.mail,
                sessionId: '',
                type: 'user',
            };
            console.log(envio);
            this.chatService.Messenger(envio).then(function (res) {
                var resp = res;
                _this.uId = resp.sessionId;
                _this.node = resp.node;
                console.log(res);
                if (_this.speak === true) {
                    responsiveVoice.speak(resp.text[0], 'Spanish Female', { pitch: 1 });
                }
                _this.name = _this.account.Name;
                var comp = resp.text[0];
                var name = comp.indexOf('_nombre');
                console.log(name);
                if (name !== -1) {
                    var text = resp.text[0];
                    var nombre = text.replace('_nombre', _this.name);
                    resp.text = nombre;
                    _this.mensaje.push(resp);
                }
                else {
                    _this.mensaje.push(resp);
                }
            });
        }
        else {
            alert('llene los campos');
        }
    };
    // chat
    ChatComponent.prototype.onTaskAdd = function (event) {
        var textInput = document.getElementById('chat-input');
        textInput.value = '';
    };
    ChatComponent.prototype.clicked = function (mensajes) {
        var _this = this;
        var envio = {
            text: mensajes,
            node: this.node,
            type: 'user',
            email: this.mail
        };
        console.log(mensajes);
        this.chatService.Messenger(envio).then(function (res) {
            var resp = res;
            var comp = resp.text[0];
            _this.node = resp.node;
            var name = comp.indexOf('_nombre');
            console.log(name);
            if (name !== -1) {
                var text = resp.text[0];
                var nombre = text.replace('_nombre', _this.name);
                resp.text = nombre;
                _this.mensaje.push(envio, resp);
            }
            else {
                _this.mensaje.push(envio, resp);
            }
        });
        console.log(envio);
        return envio;
    };
    ChatComponent.prototype.generarBubble = function () {
        var _this = this;
        var envio = {
            text: document.getElementById('chat-input').value,
            sessionId: this.uId,
            node: this.node,
            type: 'user',
            email: this.mail
        };
        if (envio.text === '') {
            alert('por favor poner un mensaje');
            console.log('entro nulo');
        }
        else {
            this.mensaje.push(envio);
            console.log(envio);
            // responsiveVoice.speak(envio.text, 'Spanish Female', {pitch: 3});
            this.chatService.Messenger(envio).then(function (res) {
                var resp = res;
                var comp = resp.text[0];
                var name = comp.indexOf('_nombre');
                _this.node = resp.node;
                console.log(res);
                console.log(name);
                if (name !== -1) {
                    var text = resp.text[0];
                    var nombre = text.replace('_nombre', _this.name);
                    resp.text = nombre;
                    _this.mensaje.push(resp);
                }
                else {
                    _this.mensaje.push(resp);
                }
                if (_this.speak === true) {
                    responsiveVoice.speak(resp.text[0], 'Spanish Female', { pitch: 1 });
                }
            });
        }
        this.text = '';
    };
    ChatComponent.prototype.sumar = function (numero1, numero2) {
        return numero1 + numero2;
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], _services_formulario_service__WEBPACK_IMPORTED_MODULE_3__["FormularioService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.Api = 'https://berryback.herokuapp.com';
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/Api */ "./src/providers/Api.ts");



// import { Socket } from 'ngx-socket-io';
var ChatService = /** @class */ (function () {
    function ChatService(api) {
        this.api = api;
    }
    ChatService.prototype.Messenger = function (Data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:no-shadowed-variable
            var obs = _this.api.post('conversation', Data).subscribe(function (Data) {
                resolve(Data);
                return obs;
            }, function (error) {
                reject(error);
            });
        });
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_Api__WEBPACK_IMPORTED_MODULE_2__["Api"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/formulario.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/formulario.service.ts ***!
  \************************************************/
/*! exports provided: FormularioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioService", function() { return FormularioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/Api */ "./src/providers/Api.ts");



var FormularioService = /** @class */ (function () {
    function FormularioService(api) {
        this.api = api;
    }
    FormularioService.prototype.Signup = function (Data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:no-shadowed-variable
            var obs = _this.api.post('signup', Data).subscribe(function (Data) {
                resolve(Data);
                return obs;
            });
        });
    };
    FormularioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_Api__WEBPACK_IMPORTED_MODULE_2__["Api"]])
    ], FormularioService);
    return FormularioService;
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

/***/ "./src/providers/Api.ts":
/*!******************************!*\
  !*** ./src/providers/Api.ts ***!
  \******************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "./src/app/constants.ts");




var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].Api;
    }
    Api.prototype.post = function (endpoint, body) {
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.url + '/' + endpoint, body);
    };
    Api.prototype.get = function (endpoint, body) {
        // const headers:HttpHeaders  = new HttpHeaders();
        return this.http.get(this.url + '/' + endpoint, body);
    };
    Api = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Api);
    return Api;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Documents\chatbots\Platillas wisy\chatBot-frontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map