(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fabiosomaglia/Documents/Projects/Typing Test/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_Key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Key */ "IEF5");
/* harmony import */ var _models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/TimerStatus */ "8A9k");
/* harmony import */ var _models_ModalActiveLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/ModalActiveLayout */ "qtR4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/interaction.service */ "zD6u");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/db.service */ "ajt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function ModalComponent_div_3_div_5_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_3_div_5_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r5.goToInputLayout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save the score");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_3_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onTryAgainButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Try again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_div_3_div_5_button_3_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Or press the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Esc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " key.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.ranking === null || ctx_r3.correctWords > ctx_r3.ranking.wpm ? "grid" : "flex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.ranking === null || ctx_r3.ranking !== null && ctx_r3.correctWords > ctx_r3.ranking.wpm);
} }
function ModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalComponent_div_3_div_5_Template, 9, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.modalContent.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.modalContent.imgAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.modalContent.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.modalContent.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.modalContent.showBtnTryAgain);
} }
function ModalComponent_div_4_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalComponent_div_4_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alphanumeric characters only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalComponent_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_div_4_div_12_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalComponent_div_4_div_12_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.pattern);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function ModalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Save your score");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Write your name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalComponent_div_4_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.usernameInputValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModalComponent_div_4_div_12_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_4_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.goToStatsLayout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_4_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onSaveScoreButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Congratulations on reaching ", ctx_r1.correctWords, " WPM!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.usernameInputValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.touched && !_r9.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !_r9.valid));
} }
function ModalComponent_div_5_table_4_ng_container_12_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r21 + 1);
} }
function ModalComponent_div_5_table_4_ng_container_12_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.userPosition);
} }
function ModalComponent_div_5_table_4_ng_container_12_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "highlights-score": a0 }; };
function ModalComponent_div_5_table_4_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalComponent_div_5_table_4_ng_container_12_td_2_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_div_5_table_4_ng_container_12_td_3_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModalComponent_div_5_table_4_ng_container_12_tr_11_Template, 2, 0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const score_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, (ctx_r19.ranking == null ? null : ctx_r19.ranking.id) === score_r20.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r21 <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r21 === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](score_r20.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](score_r20.wpm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, score_r20.testDate, "dd\uFF65MM\uFF65yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r21 === 2 && ctx_r19.rankingToDisplay.length === 4);
} }
function ModalComponent_div_5_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "WPM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModalComponent_div_5_table_4_ng_container_12_Template, 12, 12, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.rankingToDisplay);
} }
function ModalComponent_div_5_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The saved scores could not be retrieved. Try later.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ranking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalComponent_div_5_table_4_Template, 13, 1, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalComponent_div_5_p_5_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onTryAgainButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Or press the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Esc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " key.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rankingToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.rankingToDisplay);
} }
const _c2 = function (a0) { return { "show": a0 }; };
class ModalComponent {
    constructor(interactionService, dbService) {
        this.interactionService = interactionService;
        this.dbService = dbService;
        this.showModal = false;
        this.activeLayout = _models_ModalActiveLayout__WEBPACK_IMPORTED_MODULE_3__["ModalActiveLayout"].NONE;
    }
    ngOnInit() {
        // detect Android device
        if (/Android/i.test(navigator.userAgent)) {
            this.androidModalContent();
        }
        this.interactionService.getTimerStatus()
            .subscribe(status => {
            if (status === _models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__["TimerStatus"].OFF) {
                this.generateStats();
            }
        });
        this.interactionService.getCorrectWords()
            .subscribe(words => this.correctWords = words);
        this.interactionService.getCorrectChars()
            .subscribe(chars => this.correctChars = chars);
        this.interactionService.getAccuracy()
            .subscribe(accuracy => this.accuracy = accuracy);
        this.interactionService.getTopWPM()
            .subscribe(topWPM => this.topWPM = topWPM);
        // retrieve ranking from db
        this.retrieveAllInfoFromDb();
    }
    androidModalContent() {
        this.modalContent = {
            img: './assets/android.svg',
            imgAlt: 'android device',
            title: 'Sorry, Android is not supported :(',
            body: `Due to abnormal behavior of Android devices detecting keystrokes, Android is not currently supported.<br><br>More info <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=118639" target="_blank">here</a>.`,
            showBtnTryAgain: false
        };
        this.activeLayout = _models_ModalActiveLayout__WEBPACK_IMPORTED_MODULE_3__["ModalActiveLayout"].STATS;
        this.showModal = true;
    }
    handleKeyboardEvent(event) {
        if (event.code === _models_Key__WEBPACK_IMPORTED_MODULE_1__["Key"].ESCAPE) {
            if (this.showModal === true) {
                this.showModal = false;
            }
        }
    }
    // only for testing
    onOpenButtonClick() {
        this.correctWords = 27;
        this.generateStats();
    }
    onTryAgainButtonClick() {
        this.interactionService.incrTestCounter();
        this.showModal = false;
    }
    onSaveScoreButtonClick() {
        const scoreToSave = {
            id: localStorage.getItem('user-uuid'),
            user: this.usernameInputValue,
            wpm: this.correctWords,
            testDate: new Date().getTime()
        };
        this.dbService.saveRanking(scoreToSave).subscribe(res => {
            if (res) {
                this.goToRankingLayout();
            }
            else {
                document.getElementById('save-btn').classList.remove('disabled');
            }
        });
        document.getElementById('save-btn').classList.add('disabled');
    }
    goToStatsLayout() {
        this.activeLayout = _models_ModalActiveLayout__WEBPACK_IMPORTED_MODULE_3__["ModalActiveLayout"].STATS;
    }
    goToInputLayout() {
        this.activeLayout = _models_ModalActiveLayout__WEBPACK_IMPORTED_MODULE_3__["ModalActiveLayout"].INPUT;
    }
    goToRankingLayout() {
        this.retrieveAllInfoFromDb();
        this.activeLayout = _models_ModalActiveLayout__WEBPACK_IMPORTED_MODULE_3__["ModalActiveLayout"].RANKING;
        this.showModal = true;
    }
    generateStats() {
        if (this.correctWords < 30) {
            this.modalContent = {
                img: './assets/typewriter.svg',
                imgAlt: 'typewriter',
                title: 'Keep practicing!',
                body: `Well... You type with the speed of <span class="highlight">${this.correctWords} WPM</span> (${this.correctChars} CPM). Your accuracy was <span class="bold">${this.accuracy}%</span>. It could be better!`,
                showBtnTryAgain: true
            };
        }
        else {
            this.modalContent = {
                img: './assets/rocket.svg',
                imgAlt: 'rocket',
                title: 'You\'re a Rocket!',
                body: `Nice! You type with the speed of <span class="highlight">${this.correctWords} WPM</span> (${this.correctChars} CPM). Your accuracy was <span class="bold">${this.accuracy}%</span>. Keep practicing!`,
                showBtnTryAgain: true
            };
        }
        this.activeLayout = _models_ModalActiveLayout__WEBPACK_IMPORTED_MODULE_3__["ModalActiveLayout"].STATS;
        this.showModal = true;
    }
    generateRankingToDisplay() {
        var _a;
        this.rankingToDisplay = this.topThreeRanking;
        if (this.userPosition > 3) {
            this.rankingToDisplay.push(this.ranking);
        }
        this.rankingToDisplay = (_a = this.rankingToDisplay) === null || _a === void 0 ? void 0 : _a.sort((obj1, obj2) => (obj1.wpm > obj2.wpm ? -1 : 1));
    }
    retrieveAllInfoFromDb() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            this.dbService.getRankingById(),
            this.dbService.getTopThree(),
            this.dbService.getPositionById()
        ]).subscribe(([ranking, topThree, pos]) => {
            var _a;
            this.ranking = ranking;
            this.topThreeRanking = topThree;
            this.userPosition = pos;
            // set default username value
            this.usernameInputValue = (_a = this.ranking) === null || _a === void 0 ? void 0 : _a.user;
            this.generateRankingToDisplay();
        }, err => console.log(err));
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_6__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db_service__WEBPACK_IMPORTED_MODULE_7__["DbService"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], hostBindings: function ModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ModalComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 7, consts: [["id", "modal-container", 1, "modal-container", 3, "ngClass"], [1, "modal"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["width", "250", 3, "src", "alt"], [3, "innerHTML"], ["class", "btn-container", 3, "ngClass", 4, "ngIf"], [1, "btn-container", 3, "ngClass"], [1, "btn-purple", 3, "click"], ["class", "btn-white", 3, "click", 4, "ngIf"], [1, "info"], [1, "highlight-esc"], [1, "btn-white", 3, "click"], ["src", "./assets/cloud.svg", "alt", "cloud", "width", "250"], [1, "input-container"], ["for", "username"], ["type", "text", "required", "", "maxlength", "8", "pattern", "[a-zA-Z0-9]+", "name", "username", "id", "username", "size", "8", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "input-error", 4, "ngIf"], [1, "btn-container", "grid"], ["id", "save-btn", 1, "btn-purple", 3, "ngClass", "click"], [1, "input-error"], [4, "ngIf"], ["src", "./assets/cup.svg", "alt", "cup", "width", "250"], [1, "btn-container", "flex"], [4, "ngFor", "ngForOf"], [3, "ngClass"], ["class", "blank_row", 4, "ngIf"], [1, "blank_row"], ["colspan", "4"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_div_3_Template, 6, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalComponent_div_4_Template, 18, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalComponent_div_5_Template, 14, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx.showModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.activeLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, .8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: opacity 0.3s ease;\n}\n\n.modal-container.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 25px;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  min-height: 425px;\n}\n\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 3rem 0 0 0;\n}\n\n.modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: .7;\n}\n\n[_nghost-%COMP%]     .highlight {\n  font-size: 1.125rem;\n  font-weight: 500;\n  color: black;\n  background-color: #a3bffa;\n  border-radius: .25rem;\n  padding-left: .25rem;\n  padding-right: .25rem;\n  white-space: nowrap;\n}\n\n[_nghost-%COMP%]     .bold {\n  font-size: 1.125rem;\n  font-weight: 500;\n  color: black;\n}\n\n.btn-container.flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-container.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  grid-column-gap: 20px;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton.btn-purple[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  white-space: nowrap;\n  background-color: #5a67d8;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n  color: white;\n  margin-top: 1rem;\n  padding: 10px 25px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover.btn-purple {\n  background-color: #667eea;\n  border-color: #4c51bf;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n#save-btn.disabled[_ngcontent-%COMP%] {\n  opacity: .65;\n  pointer-events: none;\n}\n\nbutton.btn-white[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  white-space: nowrap;\n  background-color: white;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n  color: #667eea;\n  margin-top: 1rem;\n  padding: 10px 25px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover.btn-white {\n  background-color: #eef2ff;\n  border-color: transparent;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.info[_ngcontent-%COMP%] {\n  margin: .5rem;\n  font-size: .75rem;\n  font-weight: 200;\n}\n\n.highlight-esc[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #e2e8f0;\n  border-radius: .25rem;\n  padding-left: .25rem;\n  padding-right: .25rem;\n  white-space: nowrap;\n  color: rgba(55, 65, 81, 1);\n}\n\n.input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 2px 0 1rem 0;\n  text-align: left;\n  white-space: nowrap;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 300;\n  margin-right: .5rem;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  border: 2px solid #DADDE1;\n  background-color: white;\n  border-radius: 0.375rem;\n  padding: 4px 6px;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  outline: 0;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus {\n  border-color: #5456E3;\n}\n\n#username.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: #F9C1C1;\n}\n\n.input-error[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  font-size: .5rem;\n  line-height: .75rem;\n  font-weight: 200;\n  color: #E44241;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin: 1rem;\n  border-collapse: separate;\n  border-spacing: 1rem 2px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.875rem;\n  font-weight: 300;\n  letter-spacing: .025em;\n}\n\ntd[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.highlights-score[_ngcontent-%COMP%] > td[_ngcontent-%COMP%] {\n  color: #5456E3;\n}\n\n.blank_row[_ngcontent-%COMP%] {\n  height: 5px;\n}\n\n\n\n@media (hover: none){\n  .info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n\n@media (min-width: 640px) {\n  .modal[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n    padding: 30px 50px;\n    height: auto;\n    width: 600px;\n    max-width: 100%;\n  }\n\n  input[type=text][_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsU0FBUztFQUNULGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix3R0FBd0c7RUFDeEcsMEJBQTBCO0VBQzFCLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix3R0FBd0c7RUFDeEcsMEJBQTBCO0VBQzFCLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxVQUFVOztBQUNWO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG4ubW9kYWwtY29udGFpbmVyLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG59XG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDI1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDI1cHg7XG59XG5cbi5tb2RhbCBoMiB7XG4gIG1hcmdpbjogM3JlbSAwIDAgMDtcbn1cblxuLm1vZGFsIHAge1xuICBvcGFjaXR5OiAuNztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWdobGlnaHQge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2JmZmE7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ib2xkIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuLWNvbnRhaW5lci5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tY29udGFpbmVyLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uLmJ0bi1wdXJwbGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY3ZDg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3Zlci5idG4tcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2N2VlYTtcbiAgYm9yZGVyLWNvbG9yOiAjNGM1MWJmO1xuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG5cbiNzYXZlLWJ0bi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IC42NTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmJ1dHRvbi5idG4td2hpdGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICBjb2xvcjogIzY2N2VlYTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3Zlci5idG4td2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMmZmO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luOiAuNXJlbTtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5oaWdobGlnaHQtZXNjIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiByZ2JhKDU1LCA2NSwgODEsIDEpO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMnB4IDAgMXJlbSAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1yaWdodDogLjVyZW07XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjREFEREUxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIHBhZGRpbmc6IDRweCA2cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgb3V0bGluZTogMDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzU0NTZFMztcbn1cblxuI3VzZXJuYW1lLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI0Y5QzFDMTtcbn1cblxuLmlucHV0LWVycm9yIGRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIGZvbnQtc2l6ZTogLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGNvbG9yOiAjRTQ0MjQxO1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbjogMXJlbTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDFyZW0gMnB4O1xufVxuXG50aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAuMDI1ZW07XG59XG5cbnRkIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmhpZ2hsaWdodHMtc2NvcmU+dGQge1xuICBjb2xvcjogIzU0NTZFMztcbn1cblxuLmJsYW5rX3JvdyB7XG4gIGhlaWdodDogNXB4O1xufVxuXG4vKiB0b3VjaCBzdHVmZiBnb2VzIGhlcmUgKi9cbkBtZWRpYSAoaG92ZXI6IG5vbmUpe1xuICAuaW5mbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4vKiBTbWFsbCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5tb2RhbCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICB9XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('animate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                ]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('animate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                        ]),
                    ])
                ]
            }]
    }], function () { return [{ type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_6__["InteractionService"] }, { type: _services_db_service__WEBPACK_IMPORTED_MODULE_7__["DbService"] }]; }, { handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "8A9k":
/*!***************************************!*\
  !*** ./src/app/models/TimerStatus.ts ***!
  \***************************************/
/*! exports provided: TimerStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerStatus", function() { return TimerStatus; });
var TimerStatus;
(function (TimerStatus) {
    TimerStatus[TimerStatus["OFF"] = 0] = "OFF";
    TimerStatus[TimerStatus["ON"] = 1] = "ON";
    TimerStatus[TimerStatus["DEFAULT"] = 2] = "DEFAULT";
})(TimerStatus || (TimerStatus = {}));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true
};


/***/ }),

/***/ "IEF5":
/*!*******************************!*\
  !*** ./src/app/models/Key.ts ***!
  \*******************************/
/*! exports provided: Key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
var Key;
(function (Key) {
    Key["SPACE"] = " ";
    Key["ENTER"] = "Enter";
    Key["BACKSPACE"] = "Backspace";
    Key["ESCAPE"] = "Escape";
    Key["ARROW_UP"] = "ArrowUp";
    Key["ARROW_DOWN"] = "ArrowDown";
    Key["ARROW_LEFT"] = "ArrowLeft";
    Key["ARROW_RIGHT"] = "ArrowRight";
})(Key || (Key = {}));


/***/ }),

/***/ "PVgB":
/*!*****************************************************!*\
  !*** ./src/app/components/timer/timer.component.ts ***!
  \*****************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_TimerStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/TimerStatus */ "8A9k");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/interaction.service */ "zD6u");




class TimerComponent {
    constructor(interactionService) {
        this.interactionService = interactionService;
        this.timerInterval = null;
        this.timeLeft = '60';
    }
    ngOnInit() {
        this.interactionService.getTimerStatus()
            .subscribe(status => {
            if (status === _models_TimerStatus__WEBPACK_IMPORTED_MODULE_1__["TimerStatus"].DEFAULT) {
                this.stopTimer();
                this.timeLeft = '60';
            }
            if (status === _models_TimerStatus__WEBPACK_IMPORTED_MODULE_1__["TimerStatus"].ON) {
                this.startTimer();
            }
        });
    }
    myTimer(d0) {
        // get current time
        const d = (new Date()).valueOf();
        const startValue = 60000;
        const diff = startValue - (d - d0);
        const seconds = Math.floor(diff / 1000);
        this.timeLeft = seconds.toString();
        if (this.timeLeft.length === 1) {
            this.timeLeft = '0' + seconds;
        }
        if (seconds === 0) {
            this.stopTimer();
            this.interactionService.setTimerStatus(_models_TimerStatus__WEBPACK_IMPORTED_MODULE_1__["TimerStatus"].OFF);
        }
    }
    startTimer() {
        // get current time
        const d0 = (new Date()).valueOf();
        if (this.timerInterval !== null) {
            clearInterval(this.timerInterval);
        }
        this.timerInterval = setInterval(() => {
            this.myTimer(d0);
        }, 100);
    }
    stopTimer() {
        clearInterval(this.timerInterval);
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"])); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], decls: 6, vars: 1, consts: [[1, "timer-wrapper"], [1, "timer"], [1, "timer-label"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeLeft);
    } }, styles: [".timer-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.timer[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.timer-label[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: center;\n  color: #4a5568;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n@media (min-width: 640px) {\n  .timer[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n\n\n\n@media (min-width: 1280px) {\n  .timer[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aW1lci90aW1lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGltZXIvdGltZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aW1lciB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0YTU1Njg7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFNtYWxsICovXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLnRpbWVyIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cblxuLyogRXh0cmEgTGFyZ2UgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLnRpbWVyIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.css']
            }]
    }], function () { return [{ type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"] }]; }, null); })();


/***/ }),

/***/ "PZHL":
/*!*********************************************************!*\
  !*** ./src/app/components/cta-btn/cta-btn.component.ts ***!
  \*********************************************************/
/*! exports provided: CtaBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaBtnComponent", function() { return CtaBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_Key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Key */ "IEF5");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/interaction.service */ "zD6u");




class CtaBtnComponent {
    constructor(interactionService) {
        this.interactionService = interactionService;
        this.openRankingModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    handleKeyboardEvent(event) {
        if (event.code === _models_Key__WEBPACK_IMPORTED_MODULE_1__["Key"].ESCAPE) {
            this.interactionService.incrTestCounter();
        }
    }
    onRestartButtonClick() {
        this.interactionService.incrTestCounter();
    }
    onRankingButtonClick() {
        this.openRankingModalEvent.emit();
    }
}
CtaBtnComponent.ɵfac = function CtaBtnComponent_Factory(t) { return new (t || CtaBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"])); };
CtaBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtaBtnComponent, selectors: [["app-cta-btn"]], hostBindings: function CtaBtnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CtaBtnComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, outputs: { openRankingModalEvent: "openRankingModalEvent" }, decls: 10, vars: 0, consts: [[1, "btn-container"], ["id", "restart", 3, "click"], ["id", "ranking", 3, "click"], [1, "info"], [1, "highlight"]], template: function CtaBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtaBtnComponent_Template_button_click_1_listener() { return ctx.onRestartButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Retry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtaBtnComponent_Template_button_click_3_listener() { return ctx.onRankingButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Or press the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Esc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " key.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".btn-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\nbutton#restart[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  background-color: #5a67d8;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n  color: white;\n  margin-top: 3rem;\n  padding: 10px 25px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover#restart {\n  background-color: #667eea;\n  border-color: #4c51bf;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nbutton#ranking[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  background-color: white;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n  color: #667eea;\n  margin-top: 3rem;\n  padding: 10px 25px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover#ranking {\n  background-color: #eef2ff;\n  border-color: transparent;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.info[_ngcontent-%COMP%] {\n  margin: .5rem;\n  font-size: .75rem;\n  font-weight: 200;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #e2e8f0;\n  border-radius: .25rem;\n  padding-left: .25rem;\n  padding-right: .25rem;\n  white-space: nowrap;\n}\n\n\n\n@media (hover: none){\n  .info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdGEtYnRuL2N0YS1idG4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsd0dBQXdHO0VBQ3hHLDBCQUEwQjtFQUMxQix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHdHQUF3RztFQUN4RywwQkFBMEI7RUFDMUIsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3RhLWJ0bi9jdGEtYnRuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24jcmVzdGFydCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjdkODtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyI3Jlc3RhcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY3ZWVhO1xuICBib3JkZXItY29sb3I6ICM0YzUxYmY7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBjb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cblxuYnV0dG9uI3Jhbmtpbmcge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICBjb2xvcjogIzY2N2VlYTtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciNyYW5raW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmZjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbjogLjVyZW07XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uaGlnaGxpZ2h0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qIHRvdWNoIHN0dWZmIGdvZXMgaGVyZSAqL1xuQG1lZGlhIChob3Zlcjogbm9uZSl7XG4gIC5pbmZvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtaBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cta-btn',
                templateUrl: './cta-btn.component.html',
                styleUrls: ['./cta-btn.component.css']
            }]
    }], function () { return [{ type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"] }]; }, { openRankingModalEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/stats/stats.component */ "jyt5");
/* harmony import */ var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/timer/timer.component */ "PVgB");
/* harmony import */ var _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/input-box/input-box.component */ "oz0K");
/* harmony import */ var _components_cta_btn_cta_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cta-btn/cta-btn.component */ "PZHL");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal/modal.component */ "7aL3");







class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 25, vars: 0, consts: [[1, "container"], [1, "header-wrapper"], [1, "app-wrapper"], [1, "stats-wrapper"], ["id", "timer"], ["id", "input-box"], [3, "openRankingModalEvent"], [1, "footer-wrapper"], [1, "footer"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "svg-heart"], ["fill-rule", "evenodd", "d", "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z", "clip-rule", "evenodd"], [2, "margin", "0 .5rem 0 .5rem"], ["href", "https://github.com/nanyx95/Typing-Test", "target", "_blank", 1, "btn-github"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], ["modalComponent", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Typing Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Test your typing skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-timer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-input-box", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-cta-btn", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openRankingModalEvent", function AppComponent_Template_app_cta_btn_openRankingModalEvent_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r0.goToRankingLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " by Fabio Somaglia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-modal", null, 15);
    } }, directives: [_components_stats_stats_component__WEBPACK_IMPORTED_MODULE_1__["StatsComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"], _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_3__["InputBoxComponent"], _components_cta_btn_cta_btn_component__WEBPACK_IMPORTED_MODULE_4__["CtaBtnComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 580px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  flex: 1 0 auto;\n  text-align: center;\n}\n\n.header-wrapper[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 100;\n  letter-spacing: .1rem;\n  margin-bottom: .5rem;\n  text-transform: uppercase;\n}\n\n.header-wrapper[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #5456E3;\n  font-size: 2.75rem;\n  font-weight: 800;\n  margin-top: .5rem;\n}\n\n.app-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n}\n\n.stats-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n#timer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n#input-box[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.footer-wrapper[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  font-weight: 300;\n  color: #718096;\n  letter-spacing: 0.025em;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  flex: 1 0 auto;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.svg-heart[_ngcontent-%COMP%] {\n  height: .75rem;\n  width: .75rem;\n  margin-left: .25rem;\n  margin-right: .25rem;\n  color: #5456E3;\n}\n\n.btn-github[_ngcontent-%COMP%] {\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n\n\n@media (min-width: 640px) {\n  .stats-wrapper[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n\n  #timer[_ngcontent-%COMP%] {\n    margin: 0 3rem 0 0;\n  }\n}\n\n\n\n@media (min-width: 768px) {\n  .header-wrapper[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n\n\n\n@media (min-width: 1024px) {\n  .header-wrapper[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n\n\n\n@media (min-width: 1280px) {\n  .header-wrapper[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 4.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSxVQUFVOztBQUNWO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQSxXQUFXOztBQUNYO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSxVQUFVOztBQUNWO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsZ0JBQWdCOztBQUNoQjtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA1ODBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMSAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci13cmFwcGVyID4gaDEge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZWFkZXItd3JhcHBlciA+IGgzIHtcbiAgY29sb3I6ICM1NDU2RTM7XG4gIGZvbnQtc2l6ZTogMi43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLXRvcDogLjVyZW07XG59XG5cbi5hcHAtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbi5zdGF0cy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbiN0aW1lciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbiNpbnB1dC1ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNzE4MDk2O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN2Zy1oZWFydCB7XG4gIGhlaWdodDogLjc1cmVtO1xuICB3aWR0aDogLjc1cmVtO1xuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcbiAgY29sb3I6ICM1NDU2RTM7XG59XG5cbi5idG4tZ2l0aHViIHtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICB3aWR0aDogMS4yNXJlbTtcbn1cblxuLyogU21hbGwgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAuc3RhdHMtd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG5cbiAgI3RpbWVyIHtcbiAgICBtYXJnaW46IDAgM3JlbSAwIDA7XG4gIH1cbn1cblxuLyogTWVkaXVtICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci13cmFwcGVyID4gaDMge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICB9XG59XG5cbi8qIExhcmdlICovXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5oZWFkZXItd3JhcHBlciA+IGgzIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbn1cblxuLyogRXh0cmEgTGFyZ2UgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLmhlYWRlci13cmFwcGVyID4gaDMge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UMYA":
/*!*******************************************!*\
  !*** ./src/app/services/words.service.ts ***!
  \*******************************************/
/*! exports provided: WordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsService", function() { return WordsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class WordsService {
    constructor(http) {
        this.http = http;
        this.springApi = 'api/v1';
    }
    getWord() {
        return this.http.get(`${this.springApi}/word`);
    }
    getWords(num) {
        return this.http.get(`${this.springApi}/words/${num}`);
    }
}
WordsService.ɵfac = function WordsService_Factory(t) { return new (t || WordsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WordsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WordsService, factory: WordsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input-box/input-box.component */ "oz0K");
/* harmony import */ var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/timer/timer.component */ "PVgB");
/* harmony import */ var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/stats/stats.component */ "jyt5");
/* harmony import */ var _services_words_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/words.service */ "UMYA");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal/modal.component */ "7aL3");
/* harmony import */ var _components_cta_btn_cta_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cta-btn/cta-btn.component */ "PZHL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_words_service__WEBPACK_IMPORTED_MODULE_7__["WordsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_4__["InputBoxComponent"],
        _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
        _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
        _components_cta_btn_cta_btn_component__WEBPACK_IMPORTED_MODULE_9__["CtaBtnComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_4__["InputBoxComponent"],
                    _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
                    _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
                    _components_cta_btn_cta_btn_component__WEBPACK_IMPORTED_MODULE_9__["CtaBtnComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
                ],
                providers: [_services_words_service__WEBPACK_IMPORTED_MODULE_7__["WordsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ajt+":
/*!****************************************!*\
  !*** ./src/app/services/db.service.ts ***!
  \****************************************/
/*! exports provided: DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DbService {
    constructor(http) {
        this.http = http;
        this.rankingApi = 'api/v1/ranking';
        // generate and save user id
        this.userUUID = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        if (localStorage.getItem('user-uuid') === null) {
            localStorage.setItem('user-uuid', this.userUUID);
        }
        else {
            this.userUUID = localStorage.getItem('user-uuid');
        }
    }
    getRankingById() {
        return this.http.get(`${this.rankingApi}/info/${this.userUUID}`);
    }
    saveRanking(ranking) {
        return this.http.post(`${this.rankingApi}/save`, ranking);
    }
    getTopThree() {
        return this.http.get(`${this.rankingApi}/top`);
    }
    getPositionById() {
        return this.http.get(`${this.rankingApi}/pos/${this.userUUID}`);
    }
}
DbService.ɵfac = function DbService_Factory(t) { return new (t || DbService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DbService, factory: DbService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jyt5":
/*!*****************************************************!*\
  !*** ./src/app/components/stats/stats.component.ts ***!
  \*****************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/interaction.service */ "zD6u");



class StatsComponent {
    constructor(interactionService) {
        this.interactionService = interactionService;
    }
    ngOnInit() {
        this.interactionService.getCorrectWords()
            .subscribe(words => this.correctWords = words);
        this.interactionService.getCorrectChars()
            .subscribe(chars => this.correctChars = chars);
        this.interactionService.getAccuracy()
            .subscribe(accuracy => this.accuracy = accuracy);
        this.interactionService.getTopWPM()
            .subscribe(topWPM => this.topWPM = topWPM);
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"])); };
StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 21, vars: 4, consts: [[1, "stats-container"], [1, "stat-wrapper"], [1, "stat"], [1, "stat-label"], ["id", "top-wpm", 1, "stat-wrapper"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "words/min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "chars/min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "% accuracy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "top words/min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.correctWords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.correctChars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accuracy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.topWPM);
    } }, styles: [".stats-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.stat-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 .5rem 0 .5rem;\n}\n\n.stat[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: center;\n  white-space: nowrap;\n  color: #4a5568;\n}\n\n#top-wpm[_ngcontent-%COMP%] {\n  display: none;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n@media (min-width: 353px) {\n  #top-wpm[_ngcontent-%COMP%] {\n    display: inherit;\n    justify-content: flex-end;\n  }\n\n  #top-wpm[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n\n  #top-wpm[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n    font-size: .5rem;\n  }\n}\n\n\n\n@media (min-width: 640px) {\n  #top-wpm[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin-left: 1.5rem;\n  }\n\n  #top-wpm[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n\n  #top-wpm[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n    font-size: .625rem;\n  }\n}\n\n\n\n@media (min-width: 1280px) {\n  .stat[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0cy9zdGF0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdHMvc3RhdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3RhdC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAuNXJlbSAwIC41cmVtO1xufVxuXG4uc3RhdCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0YXQtbGFiZWwge1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogIzRhNTU2ODtcbn1cblxuI3RvcC13cG0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBTaG93ICN0b3Atd3BtICovXG5AbWVkaWEgKG1pbi13aWR0aDogMzUzcHgpIHtcbiAgI3RvcC13cG0ge1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gICN0b3Atd3BtIC5zdGF0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuXG4gICN0b3Atd3BtIC5zdGF0LWxhYmVsIHtcbiAgICBmb250LXNpemU6IC41cmVtO1xuICB9XG59XG5cbi8qIFNtYWxsIChzbSkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAjdG9wLXdwbSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgfVxuXG4gICN0b3Atd3BtIC5zdGF0IHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gIH1cblxuICAjdG9wLXdwbSAuc3RhdC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAuNjI1cmVtO1xuICB9XG59XG5cbi8qIEV4dHJhIExhcmdlICovXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC5zdGF0IHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stats',
                templateUrl: './stats.component.html',
                styleUrls: ['./stats.component.css']
            }]
    }], function () { return [{ type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"] }]; }, null); })();


/***/ }),

/***/ "oz0K":
/*!*************************************************************!*\
  !*** ./src/app/components/input-box/input-box.component.ts ***!
  \*************************************************************/
/*! exports provided: InputBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBoxComponent", function() { return InputBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_TypedWord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/TypedWord */ "uBEk");
/* harmony import */ var _models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/TimerStatus */ "8A9k");
/* harmony import */ var _models_Key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Key */ "IEF5");
/* harmony import */ var _services_words_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/words.service */ "UMYA");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/interaction.service */ "zD6u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0) { return { "wrong-word": a0 }; };
function InputBoxComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const typedWord_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !typedWord_r2.isCorrect));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](typedWord_r2.word);
} }
function InputBoxComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](word_r3.word);
} }
class InputBoxComponent {
    constructor(wordsService, interactionService) {
        this.wordsService = wordsService;
        this.interactionService = interactionService;
        this.currentWord = null;
        this.flagWrongWord = false;
    }
    ngOnInit() {
        this.interactionService.getTimerStatus()
            .subscribe(status => {
            this.timerStatus = status;
            if (status === _models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__["TimerStatus"].OFF) {
                // unfocus test-input
                document.getElementById('test-input').blur();
            }
        });
        this.interactionService.getCorrectWords()
            .subscribe(words => this.correctWordsCounter = words);
        this.interactionService.getCorrectChars()
            .subscribe(chars => this.correctCharsCounter = chars);
        this.interactionService.getTestCounter()
            .subscribe(() => this.restartTest());
        this.typedWords = [];
        // set input focus
        this.setFocus();
        this.retrieveWords();
    }
    restartTest() {
        this.retrieveWords();
        this.typedWords = [];
        this.currentWord = null;
        this.flagWrongWord = false;
        this.interactionService.setTimerStatus(_models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__["TimerStatus"].DEFAULT);
        this.interactionService.setCorrectWords(0);
        this.interactionService.setCorrectChars(0);
        this.interactionService.setTotalWords(0);
        document.getElementById('test-input').textContent = '';
        this.setFocus();
    }
    setFocus() {
        document.getElementById('test-input').focus();
        this.setCaretPosition('test-input', null);
    }
    retrieveWord() {
        this.wordsService.getWord().subscribe(word => this.words.push(word));
    }
    retrieveWords() {
        this.wordsService.getWords(10).subscribe(words => {
            this.words = words;
        });
    }
    /**
     * Handle {@link Key} event
     * @param event the event to handle
     */
    onKeyDown(event) {
        const inputValue = event.target.textContent;
        if (event.key === _models_Key__WEBPACK_IMPORTED_MODULE_3__["Key"].ENTER || event.key === _models_Key__WEBPACK_IMPORTED_MODULE_3__["Key"].SPACE) {
            event.preventDefault();
            event.stopPropagation();
            // add typed word inside typedWords array
            if (inputValue !== '') {
                const tw = new _models_TypedWord__WEBPACK_IMPORTED_MODULE_1__["TypedWord"]();
                tw.word = inputValue;
                tw.isCorrect = inputValue === this.currentWord;
                this.typedWords.push(tw);
                // share data with stats component
                if (tw.isCorrect === true) {
                    this.correctWordsCounter++;
                    this.interactionService.setCorrectWords(this.correctWordsCounter);
                    this.correctCharsCounter = this.correctCharsCounter + tw.word.length;
                    this.interactionService.setCorrectChars(this.correctCharsCounter);
                }
                this.interactionService.setTotalWords(this.typedWords.length);
                // remove first item of the words array
                this.words.shift();
                // set to null the current word
                this.currentWord = null;
                // clear input value
                event.target.textContent = '';
                // set the incorrectness of the word to default
                this.flagWrongWord = false;
                this.retrieveWord();
            }
        }
        else if (event.key === _models_Key__WEBPACK_IMPORTED_MODULE_3__["Key"].BACKSPACE) {
            if (this.currentWord !== null && inputValue === this.currentWord.substr(0, inputValue.length)) {
                this.words[0].word = inputValue.charAt(inputValue.length - 1).concat(this.words[0].word);
            }
        }
        else if (event.key === _models_Key__WEBPACK_IMPORTED_MODULE_3__["Key"].ARROW_UP
            || event.key === _models_Key__WEBPACK_IMPORTED_MODULE_3__["Key"].ARROW_DOWN
            || event.key === _models_Key__WEBPACK_IMPORTED_MODULE_3__["Key"].ARROW_LEFT
            || event.key === _models_Key__WEBPACK_IMPORTED_MODULE_3__["Key"].ARROW_RIGHT) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * Handle typed characters
     * @param event the event to handle
     */
    onInput(event) {
        // set the new current word
        if (this.currentWord === null) {
            this.currentWord = this.words[0].word;
        }
        // start the timer
        if (this.timerStatus === _models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__["TimerStatus"].DEFAULT || this.timerStatus === _models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__["TimerStatus"].OFF) {
            this.interactionService.setTimerStatus(_models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__["TimerStatus"].ON);
        }
        this.checkCharacter(event);
    }
    /**
     * Check the validity of the character
     * @param event the event containing the character to check
     * @private
     */
    checkCharacter(event) {
        const inputEvent = event;
        const inputType = inputEvent.inputType;
        const inputValue = event.target.textContent;
        if (inputValue === this.currentWord.substr(0, inputValue.length)) {
            if (inputType !== 'deleteContentBackward') {
                this.words[0].word = this.words[0].word.substring(1);
                this.flagWrongWord = false;
            }
            else if (inputType === 'deleteContentBackward') {
                this.flagWrongWord = false;
            }
        }
        else {
            this.flagWrongWord = true;
        }
    }
    /**
     * Set focus on .main-container click
     */
    onMainContainerClick() {
        this.setFocus();
    }
    /**
     * Ignore the mouse click
     * @param event the click to ignore
     */
    onMouseDown(event) {
        this.setFocus();
        event.preventDefault();
    }
    /**
     * Ignore the tap on touch devices
     * @param event the tap to ignore
     */
    onTouchStart(event) {
        this.setFocus();
        event.preventDefault();
    }
    /**
     * Set the caret position
     * @param elemId id of the html element
     * @param caretPos the position of the caret
     * @private
     */
    setCaretPosition(elemId, caretPos) {
        if (caretPos === null) {
            caretPos = document.getElementById(elemId).textContent.length;
        }
        const el = document.getElementById(elemId);
        const range = document.createRange();
        const sel = window.getSelection();
        if (el.childNodes[0]) {
            range.setStart(el.childNodes[0], caretPos);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}
InputBoxComponent.ɵfac = function InputBoxComponent_Factory(t) { return new (t || InputBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_words_service__WEBPACK_IMPORTED_MODULE_4__["WordsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"])); };
InputBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputBoxComponent, selectors: [["app-input-box"]], decls: 7, vars: 5, consts: [[1, "main-container", 3, "click"], [1, "typed-words-container"], [1, "whitespace-no-wrap"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "test-input", "tabindex", "1", "contenteditable", "true", "autocapitalize", "off", "autocomplete", "off", "autocorrect", "off", "spellcheck", "false", 3, "ngClass", "input", "keydown", "mousedown", "touchstart"], [1, "words-container"], [4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function InputBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputBoxComponent_Template_div_click_0_listener() { return ctx.onMainContainerClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputBoxComponent_span_3_Template, 2, 4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputBoxComponent_Template_div_input_4_listener($event) { return ctx.onInput($event); })("keydown", function InputBoxComponent_Template_div_keydown_4_listener($event) { return ctx.onKeyDown($event); })("mousedown", function InputBoxComponent_Template_div_mousedown_4_listener($event) { return ctx.onMouseDown($event); })("touchstart", function InputBoxComponent_Template_div_touchstart_4_listener($event) { return ctx.onTouchStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputBoxComponent_span_6_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typedWords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.flagWrongWord));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.words);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: 'Merriweather', serif;\n  font-weight: 100;\n  font-size: 2.5rem;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 2rem;\n}\n\n.typed-words-container[_ngcontent-%COMP%] {\n  height: 55px;\n  width: 50%;\n  overflow: hidden;\n}\n\n.whitespace-no-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  float: right;\n  white-space: nowrap;\n  text-align: right;\n}\n\n#test-input[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-left: .25rem;\n  display: inline-block;\n  color: #5A67D8;\n  caret-color: black;\n  outline: none;\n}\n\n.words-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex: none;\n  width: 50%;\n  height: 55px;\n}\n\n.words-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-left: .25rem;\n  padding-right: .25rem;\n}\n\n.whitespace-no-wrap[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-left: .25rem;\n  padding-right: .25rem;\n  opacity: 35%;\n}\n\n.words-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 0;\n}\n\n.wrong-word[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi50eXBlZC13b3Jkcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53aGl0ZXNwYWNlLW5vLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiN0ZXN0LWlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzVBNjdEODtcbiAgY2FyZXQtY29sb3I6IGJsYWNrO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ud29yZHMtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4ud29yZHMtY29udGFpbmVyID4gc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XG59XG5cbi53aGl0ZXNwYWNlLW5vLXdyYXAgPiBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcbiAgb3BhY2l0eTogMzUlO1xufVxuXG4ud29yZHMtY29udGFpbmVyID4gc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ud3Jvbmctd29yZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-box',
                templateUrl: './input-box.component.html',
                styleUrls: ['./input-box.component.css']
            }]
    }], function () { return [{ type: _services_words_service__WEBPACK_IMPORTED_MODULE_4__["WordsService"] }, { type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"] }]; }, null); })();


/***/ }),

/***/ "qtR4":
/*!*********************************************!*\
  !*** ./src/app/models/ModalActiveLayout.ts ***!
  \*********************************************/
/*! exports provided: ModalActiveLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalActiveLayout", function() { return ModalActiveLayout; });
var ModalActiveLayout;
(function (ModalActiveLayout) {
    ModalActiveLayout[ModalActiveLayout["NONE"] = 0] = "NONE";
    ModalActiveLayout[ModalActiveLayout["STATS"] = 1] = "STATS";
    ModalActiveLayout[ModalActiveLayout["INPUT"] = 2] = "INPUT";
    ModalActiveLayout[ModalActiveLayout["RANKING"] = 3] = "RANKING";
})(ModalActiveLayout || (ModalActiveLayout = {}));


/***/ }),

/***/ "uBEk":
/*!*************************************!*\
  !*** ./src/app/models/TypedWord.ts ***!
  \*************************************/
/*! exports provided: TypedWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypedWord", function() { return TypedWord; });
class TypedWord {
}


/***/ }),

/***/ "zD6u":
/*!*************************************************!*\
  !*** ./src/app/services/interaction.service.ts ***!
  \*************************************************/
/*! exports provided: InteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionService", function() { return InteractionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/TimerStatus */ "8A9k");




class InteractionService {
    constructor() {
        this.timerStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__["TimerStatus"].DEFAULT);
        this.correctWords = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.correctChars = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.totalWords = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.accuracy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.topWPM = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.testCounter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.getTimerStatus()
            .subscribe(status => {
            if (status === _models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__["TimerStatus"].OFF) {
                this.saveTopWPMToLocalStorage();
            }
        });
        this.retrieveTopWPMFromLocalStorage();
    }
    setTimerStatus(status) {
        this.timerStatus.next(status);
    }
    getTimerStatus() {
        return this.timerStatus.asObservable();
    }
    setCorrectWords(words) {
        this.correctWords.next(words);
    }
    getCorrectWords() {
        return this.correctWords.asObservable();
    }
    setCorrectChars(chars) {
        this.correctChars.next(chars);
    }
    getCorrectChars() {
        return this.correctChars.asObservable();
    }
    setTotalWords(totalWords) {
        this.totalWords.next(totalWords);
        this.setAccuracy(totalWords);
    }
    getTotalWords() {
        return this.totalWords.asObservable();
    }
    setAccuracy(totalWords) {
        if (totalWords === 0) {
            this.accuracy.next(0);
        }
        else {
            this.accuracy.next(Math.round((this.correctWords.getValue() / totalWords) * 100));
        }
    }
    getAccuracy() {
        return this.accuracy.asObservable();
    }
    retrieveTopWPMFromLocalStorage() {
        const wpm = Number(localStorage.getItem('top-wpm')) || 0;
        this.topWPM.next(wpm);
    }
    saveTopWPMToLocalStorage() {
        const wpm = this.correctWords.getValue();
        if (wpm > this.topWPM.getValue()) {
            localStorage.setItem('top-wpm', String(wpm));
            this.setTopWPM(wpm);
        }
    }
    setTopWPM(wpm) {
        this.topWPM.next(wpm);
    }
    getTopWPM() {
        return this.topWPM.asObservable();
    }
    incrTestCounter() {
        this.testCounter.next(this.testCounter.getValue() + 1);
    }
    getTestCounter() {
        return this.testCounter.asObservable();
    }
}
InteractionService.ɵfac = function InteractionService_Factory(t) { return new (t || InteractionService)(); };
InteractionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InteractionService, factory: InteractionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteractionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map