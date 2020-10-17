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
/* harmony import */ var _models_TimerStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/TimerStatus */ "8A9k");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/interaction.service */ "zD6u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ModalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ModalComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You're a Turtle.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Well... You type with the speed of ", ctx_r2.correctWords, " WPM (", ctx_r2.correctChars, " CPM). Your accuracy was ", ctx_r2.accuracy, "%. It could be better! ");
} }
function ModalComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You're a T-REX.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Nice! You type with the speed of ", ctx_r4.correctWords, " WPM (", ctx_r4.correctChars, " CPM). Your accuracy was ", ctx_r4.accuracy, "%. Keep practicing! ");
} }
const _c0 = function (a0) { return { "show": a0 }; };
class ModalComponent {
    constructor(interactionService) {
        this.interactionService = interactionService;
        this.showModal = false;
    }
    ngOnInit() {
        this.interactionService.getCorrectWords()
            .subscribe(words => this.correctWords = words);
        this.interactionService.getCorrectChars()
            .subscribe(chars => this.correctChars = chars);
        this.interactionService.getAccuracy()
            .subscribe(accuracy => this.accuracy = accuracy);
        this.interactionService.getTimerStatus()
            .subscribe(status => {
            if (status === _models_TimerStatus__WEBPACK_IMPORTED_MODULE_1__["TimerStatus"].OFF) {
                this.showModal = true;
            }
        });
    }
    onOpenButtonClick() {
        this.showModal = true;
    }
    onCloseButtonClick() {
        this.showModal = false;
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 11, vars: 9, consts: [["id", "open", 3, "click"], ["id", "modal-container", 1, "modal-container", 3, "ngClass"], [1, "modal", 3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["id", "close", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_0_listener() { return ctx.onOpenButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalComponent_div_4_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalComponent_ng_template_5_Template, 4, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModalComponent_ng_template_7_Template, 4, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_9_listener() { return ctx.onCloseButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Try again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.showModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.showModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.correctWords < 30)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, .8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: opacity 0.3s ease;\n}\n\n.modal-container.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 50px;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n}\n\n.modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: .7;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #5a67d8;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n  color: white;\n  padding: 10px 25px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #667eea;\n  border-color: #4c51bf;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n\n\n@media (min-width: 640px) {\n  .modal[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n    padding: 30px 50px;\n    height: auto;\n    width: 600px;\n    max-width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix3R0FBd0c7RUFDeEcsMEJBQTBCO0VBQzFCLHdEQUF3RDtBQUMxRDs7QUFFQSxVQUFVOztBQUNWO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbi5tb2RhbC1jb250YWluZXIuc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbn1cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kYWwgaDEge1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2RhbCBwIHtcbiAgb3BhY2l0eTogLjc7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY3ZDg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjdlZWE7XG4gIGJvcmRlci1jb2xvcjogIzRjNTFiZjtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuXG4vKiBTbWFsbCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5tb2RhbCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return [{ type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"] }]; }, null); })();


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
    } }, styles: [".timer-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.timer[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.timer-label[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: center;\n  color: #4a5568;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n@media (min-width: 640px) {\n  .timer-wrapper[_ngcontent-%COMP%] {\n    margin: 0 3rem 1rem 0;\n  }\n\n  .timer[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n\n\n\n@media (min-width: 1280px) {\n  .timer[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aW1lci90aW1lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSxVQUFVOztBQUNWO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsZ0JBQWdCOztBQUNoQjtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4udGltZXIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aW1lci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNGE1NTY4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBTbWFsbCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC50aW1lci13cmFwcGVyIHtcbiAgICBtYXJnaW46IDAgM3JlbSAxcmVtIDA7XG4gIH1cblxuICAudGltZXIge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuXG4vKiBFeHRyYSBMYXJnZSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAudGltZXIge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.css']
            }]
    }], function () { return [{ type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"] }]; }, null); })();


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
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/modal.component */ "7aL3");






class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [[1, "content-wrapper"], [1, "header"], [1, "stats-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Typing Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Test your typing skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-input-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-modal");
    } }, directives: [_components_stats_stats_component__WEBPACK_IMPORTED_MODULE_1__["StatsComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"], _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_3__["InputBoxComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]], styles: [".content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.header[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 100;\n  letter-spacing: .1rem;\n  margin-bottom: .5rem;\n  text-transform: uppercase;\n}\n\n.header[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #5456E3;\n  font-size: 2.75rem;\n  font-weight: 800;\n  margin-top: .5rem;\n}\n\n.stats-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n\n\n@media (min-width: 640px) {\n  .stats-wrapper[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n}\n\n\n\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n\n\n\n@media (min-width: 1024px) {\n  .header[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n\n\n\n@media (min-width: 1280px) {\n  .header[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 4.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBLFdBQVc7O0FBQ1g7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlciA+IGgxIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGVhZGVyID4gaDMge1xuICBjb2xvcjogIzU0NTZFMztcbiAgZm9udC1zaXplOiAyLjc1cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tdG9wOiAuNXJlbTtcbn1cblxuLnN0YXRzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLyogU21hbGwgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAuc3RhdHMtd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG59XG5cbi8qIE1lZGl1bSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXIgPiBoMyB7XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gIH1cbn1cblxuLyogTGFyZ2UgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhlYWRlciA+IGgzIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbn1cblxuLyogRXh0cmEgTGFyZ2UgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLmhlYWRlciA+IGgzIHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgfVxufVxuIl19 */"] });
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










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_words_service__WEBPACK_IMPORTED_MODULE_7__["WordsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_4__["InputBoxComponent"],
        _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
        _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_4__["InputBoxComponent"],
                    _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
                    _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [_services_words_service__WEBPACK_IMPORTED_MODULE_7__["WordsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"])); };
StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 16, vars: 3, consts: [[1, "stats-container"], [1, "stat-wrapper"], [1, "stat"], [1, "stat-label"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.correctWords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.correctChars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accuracy);
    } }, styles: [".stats-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1rem;\n}\n\n.stat-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 .5rem 0 .5rem;\n}\n\n.stat[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: center;\n  white-space: nowrap;\n  color: #4a5568;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n@media (min-width: 1280px) {\n  .stat[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0cy9zdGF0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBLGdCQUFnQjs7QUFDaEI7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGF0cy9zdGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zdGF0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIC41cmVtIDAgLjVyZW07XG59XG5cbi5zdGF0IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3RhdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjNGE1NTY4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBFeHRyYSBMYXJnZSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAuc3RhdCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cbiJdfQ== */"] });
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
/* harmony import */ var _services_words_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/words.service */ "UMYA");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/interaction.service */ "zD6u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["testInput"];
const _c1 = function (a0) { return { "wrong-word": a0 }; };
function InputBoxComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const typedWord_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, !typedWord_r3.isCorrect));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](typedWord_r3.word);
} }
function InputBoxComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](word_r4.word);
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
        this.typedWords = [];
        // set input focus
        this.setFocus();
        this.retrieveWords();
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
            this.words.forEach(word => console.log(word));
        });
    }
    /**
     * Handle {@link KEY_CODE} event
     * @param event the event to handle
     */
    onKeyDown(event) {
        const inputValue = event.target.textContent;
        if (event.code === KEY_CODE.ENTER || event.code === KEY_CODE.SPACE) {
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
        else if (event.code === KEY_CODE.BACKSPACE) {
            if (inputValue === this.currentWord.substr(0, inputValue.length)) {
                this.words[0].word = inputValue.charAt(inputValue.length - 1).concat(this.words[0].word);
            }
        }
        else if (event.code === KEY_CODE.ARROW_UP
            || event.code === KEY_CODE.ARROW_DOWN
            || event.code === KEY_CODE.ARROW_LEFT
            || event.code === KEY_CODE.ARROW_RIGHT) {
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
InputBoxComponent.ɵfac = function InputBoxComponent_Factory(t) { return new (t || InputBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_words_service__WEBPACK_IMPORTED_MODULE_3__["WordsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"])); };
InputBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputBoxComponent, selectors: [["app-input-box"]], viewQuery: function InputBoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.testInput = _t.first);
    } }, decls: 8, vars: 5, consts: [[1, "main-container", 3, "click"], [1, "typed-words-container"], [1, "whitespace-no-wrap"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "test-input", "tabindex", "1", "contenteditable", "true", "autocapitalize", "off", "autocomplete", "off", "autocorrect", "off", "spellcheck", "false", 3, "ngClass", "input", "keydown", "mousedown", "touchstart"], ["testInput", ""], [1, "words-container"], [4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function InputBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputBoxComponent_Template_div_click_0_listener() { return ctx.onMainContainerClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputBoxComponent_span_3_Template, 2, 4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputBoxComponent_Template_div_input_4_listener($event) { return ctx.onInput($event); })("keydown", function InputBoxComponent_Template_div_keydown_4_listener($event) { return ctx.onKeyDown($event); })("mousedown", function InputBoxComponent_Template_div_mousedown_4_listener($event) { return ctx.onMouseDown($event); })("touchstart", function InputBoxComponent_Template_div_touchstart_4_listener($event) { return ctx.onTouchStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InputBoxComponent_span_7_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typedWords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.flagWrongWord));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.words);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: 'Merriweather', serif;\n  font-weight: 100;\n  font-size: 2.5rem;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 2rem;\n}\n\n.typed-words-container[_ngcontent-%COMP%] {\n  height: 55px;\n  width: 50%;\n  overflow: hidden;\n}\n\n.whitespace-no-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  float: right;\n  white-space: nowrap;\n  text-align: right;\n}\n\n#test-input[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-left: .25rem;\n  display: inline-block;\n  color: #5A67D8;\n  caret-color: black;\n  outline: none;\n}\n\n.words-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex: none;\n  width: 50%;\n  height: 55px;\n}\n\n.words-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-left: .25rem;\n  padding-right: .25rem;\n}\n\n.whitespace-no-wrap[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-left: .25rem;\n  padding-right: .25rem;\n  opacity: 35%;\n}\n\n.words-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 0;\n}\n\n.wrong-word[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi50eXBlZC13b3Jkcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53aGl0ZXNwYWNlLW5vLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiN0ZXN0LWlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzVBNjdEODtcbiAgY2FyZXQtY29sb3I6IGJsYWNrO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ud29yZHMtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4ud29yZHMtY29udGFpbmVyID4gc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XG59XG5cbi53aGl0ZXNwYWNlLW5vLXdyYXAgPiBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcbiAgb3BhY2l0eTogMzUlO1xufVxuXG4ud29yZHMtY29udGFpbmVyID4gc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ud3Jvbmctd29yZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-box',
                templateUrl: './input-box.component.html',
                styleUrls: ['./input-box.component.css']
            }]
    }], function () { return [{ type: _services_words_service__WEBPACK_IMPORTED_MODULE_3__["WordsService"] }, { type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"] }]; }, { testInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['testInput']
        }] }); })();
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE["SPACE"] = "Space";
    KEY_CODE["ENTER"] = "Enter";
    KEY_CODE["BACKSPACE"] = "Backspace";
    KEY_CODE["ARROW_UP"] = "ArrowUp";
    KEY_CODE["ARROW_DOWN"] = "ArrowDown";
    KEY_CODE["ARROW_LEFT"] = "ArrowLeft";
    KEY_CODE["ARROW_RIGHT"] = "ArrowRight";
})(KEY_CODE || (KEY_CODE = {}));


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