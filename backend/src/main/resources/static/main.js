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
/* harmony import */ var _models_ModalContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/ModalContent */ "cWV+");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/interaction.service */ "zD6u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0) { return { "show": a0 }; };
const _c1 = function (a0) { return { "hide": a0 }; };
class ModalComponent {
    constructor(interactionService) {
        this.interactionService = interactionService;
        this.showModal = false;
        this.modalContent = new _models_ModalContent__WEBPACK_IMPORTED_MODULE_2__["ModalContent"]();
    }
    ngOnInit() {
        this.interactionService.getModalContent()
            .subscribe(content => {
            if (content !== null) {
                this.modalContent = content;
                this.showModal = true;
            }
        });
    }
    handleKeyboardEvent(event) {
        if (event.code === _models_Key__WEBPACK_IMPORTED_MODULE_1__["Key"].ESCAPE) {
            if (this.showModal === true) {
                this.showModal = false;
            }
        }
    }
    onOpenButtonClick() {
        this.showModal = true;
    }
    onCloseButtonClick() {
        this.interactionService.incrTestCounter();
        this.showModal = false;
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], hostBindings: function ModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ModalComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 14, vars: 13, consts: [["id", "modal-container", 1, "modal-container", 3, "ngClass"], [1, "modal", 3, "ngClass"], ["width", "250", 3, "src", "alt"], [3, "innerHTML"], [1, "button-container", 3, "ngClass"], ["id", "close", 3, "click"], [1, "info"], [1, "highlight-esc"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_7_listener() { return ctx.onCloseButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Try again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Or press the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Esc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " key.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.showModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.showModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.modalContent.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.modalContent.imgAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modalContent.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.modalContent.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, !ctx.modalContent.showButton));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, .8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: opacity 0.3s ease;\n}\n\n.modal-container.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 25px;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n}\n\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 3rem 0 0 0;\n}\n\n.modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: .7;\n}\n\n[_nghost-%COMP%]     .highlight {\n  font-size: 1.125rem;\n  font-weight: 500;\n  color: black;\n  background-color: #a3bffa;\n  border-radius: .25rem;\n  padding-left: .25rem;\n  padding-right: .25rem;\n  white-space: nowrap;\n}\n\n[_nghost-%COMP%]     .bold {\n  font-size: 1.125rem;\n  font-weight: 500;\n  color: black;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.button-container.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  background-color: #5a67d8;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n  color: white;\n  margin-top: 1rem;\n  padding: 10px 25px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #667eea;\n  border-color: #4c51bf;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.info[_ngcontent-%COMP%] {\n  margin: .5rem;\n  font-size: .75rem;\n  font-weight: 200;\n}\n\n.highlight-esc[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #e2e8f0;\n  border-radius: .25rem;\n  padding-left: .25rem;\n  padding-right: .25rem;\n  white-space: nowrap;\n}\n\n\n\n@media (hover: none){\n  .info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n\n@media (min-width: 640px) {\n  .modal[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n    padding: 30px 50px;\n    height: auto;\n    width: 600px;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsU0FBUztFQUNULGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix3R0FBd0c7RUFDeEcsMEJBQTBCO0VBQzFCLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUEsMEJBQTBCOztBQUMxQjtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEsVUFBVTs7QUFDVjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG4ubW9kYWwtY29udGFpbmVyLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG59XG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDI1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vZGFsIGgyIHtcbiAgbWFyZ2luOiAzcmVtIDAgMCAwO1xufVxuXG4ubW9kYWwgcCB7XG4gIG9wYWNpdHk6IC43O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmhpZ2hsaWdodCB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzYmZmYTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogLjI1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJvbGQge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b24tY29udGFpbmVyLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY3ZDg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjdlZWE7XG4gIGJvcmRlci1jb2xvcjogIzRjNTFiZjtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbjogLjVyZW07XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uaGlnaGxpZ2h0LWVzYyB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogLjI1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vKiB0b3VjaCBzdHVmZiBnb2VzIGhlcmUgKi9cbkBtZWRpYSAoaG92ZXI6IG5vbmUpe1xuICAuaW5mbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4vKiBTbWFsbCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5tb2RhbCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return [{ type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"] }]; }, { handleKeyboardEvent: [{
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
/* harmony import */ var _components_restart_test_restart_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/restart-test/restart-test.component */ "lnAX");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal/modal.component */ "7aL3");







class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 0, consts: [[1, "container"], [1, "header-wrapper"], [1, "app-wrapper"], [1, "stats-wrapper"], ["id", "timer"], ["id", "input-box"], [1, "footer-wrapper"], [1, "footer"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "svg-heart"], ["fill-rule", "evenodd", "d", "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z", "clip-rule", "evenodd"], [2, "margin", "0 .5rem 0 .5rem"], ["href", "https://www.github.com", "target", "_blank", 1, "btn-github"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-restart-test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " by Fabio Somaglia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-modal");
    } }, directives: [_components_stats_stats_component__WEBPACK_IMPORTED_MODULE_1__["StatsComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"], _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_3__["InputBoxComponent"], _components_restart_test_restart_test_component__WEBPACK_IMPORTED_MODULE_4__["RestartTestComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 580px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  flex: 1 0 auto;\n  text-align: center;\n}\n\n.header-wrapper[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 100;\n  letter-spacing: .1rem;\n  margin-bottom: .5rem;\n  text-transform: uppercase;\n}\n\n.header-wrapper[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #5456E3;\n  font-size: 2.75rem;\n  font-weight: 800;\n  margin-top: .5rem;\n}\n\n.app-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n}\n\n.stats-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n#timer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n#input-box[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.footer-wrapper[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  font-weight: 300;\n  color: #718096;\n  letter-spacing: 0.025em;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  flex: 1 0 auto;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.svg-heart[_ngcontent-%COMP%] {\n  height: .75rem;\n  width: .75rem;\n  margin-left: .25rem;\n  margin-right: .25rem;\n  color: #5456E3;\n}\n\n.btn-github[_ngcontent-%COMP%] {\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n\n\n@media (min-width: 640px) {\n  .stats-wrapper[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n\n  #timer[_ngcontent-%COMP%] {\n    margin: 0 3rem 0 0;\n  }\n}\n\n\n\n@media (min-width: 768px) {\n  .header-wrapper[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n\n\n\n@media (min-width: 1024px) {\n  .header-wrapper[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n\n\n\n@media (min-width: 1280px) {\n  .header-wrapper[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 4.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSxVQUFVOztBQUNWO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQSxXQUFXOztBQUNYO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSxVQUFVOztBQUNWO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsZ0JBQWdCOztBQUNoQjtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA1ODBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMSAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci13cmFwcGVyID4gaDEge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZWFkZXItd3JhcHBlciA+IGgzIHtcbiAgY29sb3I6ICM1NDU2RTM7XG4gIGZvbnQtc2l6ZTogMi43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLXRvcDogLjVyZW07XG59XG5cbi5hcHAtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbi5zdGF0cy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbiN0aW1lciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbiNpbnB1dC1ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNzE4MDk2O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN2Zy1oZWFydCB7XG4gIGhlaWdodDogLjc1cmVtO1xuICB3aWR0aDogLjc1cmVtO1xuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcbiAgY29sb3I6ICM1NDU2RTM7XG59XG5cbi5idG4tZ2l0aHViIHtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICB3aWR0aDogMS4yNXJlbTtcbn1cblxuLyogU21hbGwgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAuc3RhdHMtd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG5cbiAgI3RpbWVyIHtcbiAgICBtYXJnaW46IDAgM3JlbSAwIDA7XG4gIH1cbn1cblxuLyogTWVkaXVtICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci13cmFwcGVyID4gaDMge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICB9XG59XG5cbi8qIExhcmdlICovXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5oZWFkZXItd3JhcHBlciA+IGgzIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbn1cblxuLyogRXh0cmEgTGFyZ2UgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLmhlYWRlci13cmFwcGVyID4gaDMge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICB9XG59XG4iXX0= */"] });
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
/* harmony import */ var _components_restart_test_restart_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/restart-test/restart-test.component */ "lnAX");











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
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
        _components_restart_test_restart_test_component__WEBPACK_IMPORTED_MODULE_9__["RestartTestComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_4__["InputBoxComponent"],
                    _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
                    _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
                    _components_restart_test_restart_test_component__WEBPACK_IMPORTED_MODULE_9__["RestartTestComponent"]
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

/***/ "cWV+":
/*!****************************************!*\
  !*** ./src/app/models/ModalContent.ts ***!
  \****************************************/
/*! exports provided: ModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContent", function() { return ModalContent; });
class ModalContent {
}


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

/***/ "lnAX":
/*!*******************************************************************!*\
  !*** ./src/app/components/restart-test/restart-test.component.ts ***!
  \*******************************************************************/
/*! exports provided: RestartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestartTestComponent", function() { return RestartTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_Key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Key */ "IEF5");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/interaction.service */ "zD6u");




class RestartTestComponent {
    constructor(interactionService) {
        this.interactionService = interactionService;
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
}
RestartTestComponent.ɵfac = function RestartTestComponent_Factory(t) { return new (t || RestartTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"])); };
RestartTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RestartTestComponent, selectors: [["app-restart-test"]], hostBindings: function RestartTestComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RestartTestComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 0, consts: [[1, "restart-container"], ["id", "restart", 3, "click"], [1, "info"], [1, "highlight"]], template: function RestartTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RestartTestComponent_Template_button_click_1_listener() { return ctx.onRestartButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Retry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Or press the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Esc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " key.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".restart-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  background-color: #5a67d8;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n  color: white;\n  margin-top: 3rem;\n  padding: 10px 25px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #667eea;\n  border-color: #4c51bf;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.info[_ngcontent-%COMP%] {\n  margin: .5rem;\n  font-size: .75rem;\n  font-weight: 200;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #e2e8f0;\n  border-radius: .25rem;\n  padding-left: .25rem;\n  padding-right: .25rem;\n  white-space: nowrap;\n}\n\n\n\n@media (hover: none){\n  .info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN0YXJ0LXRlc3QvcmVzdGFydC10ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHdHQUF3RztFQUN4RywwQkFBMEI7RUFDMUIsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGFydC10ZXN0L3Jlc3RhcnQtdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3RhcnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjdkODtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2N2VlYTtcbiAgYm9yZGVyLWNvbG9yOiAjNGM1MWJmO1xuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luOiAuNXJlbTtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5oaWdobGlnaHQge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLyogdG91Y2ggc3R1ZmYgZ29lcyBoZXJlICovXG5AbWVkaWEgKGhvdmVyOiBub25lKXtcbiAgLmluZm8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestartTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-restart-test',
                templateUrl: './restart-test.component.html',
                styleUrls: ['./restart-test.component.css']
            }]
    }], function () { return [{ type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"] }]; }, { handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keyup', ['$event']]
        }] }); })();


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
            this.words.forEach(word => console.log(word));
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: 'Merriweather', serif;\n  font-weight: 100;\n  font-size: 2.5rem;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 2rem;\n}\n\n.typed-words-container[_ngcontent-%COMP%] {\n  height: 55px;\n  width: 50%;\n  overflow: hidden;\n}\n\n.whitespace-no-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  float: right;\n  white-space: nowrap;\n  text-align: right;\n}\n\n#test-input[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-left: .25rem;\n  display: inline-block;\n  color: #5A67D8;\n  caret-color: black;\n  outline: none;\n}\n\n.words-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex: none;\n  width: 50%;\n  height: 55px;\n}\n\n.words-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-left: .25rem;\n  padding-right: .25rem;\n}\n\n.whitespace-no-wrap[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-left: .25rem;\n  padding-right: .25rem;\n  opacity: 35%;\n}\n\n.words-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 0;\n}\n\n.wrong-word[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi50eXBlZC13b3Jkcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53aGl0ZXNwYWNlLW5vLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiN0ZXN0LWlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzVBNjdEODtcbiAgY2FyZXQtY29sb3I6IGJsYWNrO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ud29yZHMtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4ud29yZHMtY29udGFpbmVyID4gc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XG59XG5cbi53aGl0ZXNwYWNlLW5vLXdyYXAgPiBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcbiAgb3BhY2l0eTogMzUlO1xufVxuXG4ud29yZHMtY29udGFpbmVyID4gc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ud3Jvbmctd29yZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-box',
                templateUrl: './input-box.component.html',
                styleUrls: ['./input-box.component.css']
            }]
    }], function () { return [{ type: _services_words_service__WEBPACK_IMPORTED_MODULE_4__["WordsService"] }, { type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"] }]; }, { testInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['testInput']
        }] }); })();


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
/* harmony import */ var _models_ModalContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ModalContent */ "cWV+");





class InteractionService {
    constructor() {
        this.timerStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__["TimerStatus"].DEFAULT);
        this.correctWords = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.correctChars = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.totalWords = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.accuracy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.topWPM = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.testCounter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.modalContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getTimerStatus()
            .subscribe(status => {
            if (status === _models_TimerStatus__WEBPACK_IMPORTED_MODULE_2__["TimerStatus"].OFF) {
                this.generateModalContentWithStats();
                this.saveTopWPMToLocalStorage();
            }
        });
        // detect Android device
        if (/Android/i.test(navigator.userAgent)) {
            this.androidModalContent();
        }
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
    generateModalContentWithStats() {
        const modalContent = new _models_ModalContent__WEBPACK_IMPORTED_MODULE_3__["ModalContent"]();
        if (this.correctWords.getValue() < 30) {
            modalContent.img = './assets/rocket-1.svg';
            modalContent.imgAlt = 'rocket';
            modalContent.title = 'This was a static fire test, right?';
            modalContent.body = `Well... You type with the speed of <span class="highlight">${this.correctWords.getValue()} WPM</span> (${this.correctChars.getValue()} CPM). Your accuracy was <span class="bold">${this.accuracy.getValue()}%</span>. It could be better!`;
            modalContent.showButton = true;
        }
        else {
            modalContent.img = './assets/rocket-2.svg';
            modalContent.imgAlt = 'rocket';
            modalContent.title = 'You\'re a Rocket!';
            modalContent.body = `Nice! You type with the speed of <span class="highlight">${this.correctWords.getValue()} WPM</span> (${this.correctChars.getValue()} CPM). Your accuracy was <span class="bold">${this.accuracy.getValue()}%</span>. Keep practicing!`;
            modalContent.showButton = true;
        }
        this.modalContent.next(modalContent);
    }
    androidModalContent() {
        const modalContent = new _models_ModalContent__WEBPACK_IMPORTED_MODULE_3__["ModalContent"]();
        modalContent.img = './assets/android.svg';
        modalContent.imgAlt = 'android device';
        modalContent.title = 'Sorry, Android is not supported :(';
        modalContent.body = `Due to abnormal behavior of Android devices detecting keystrokes, Android is not currently supported.<br><br>More info <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=118639" target="_blank">here</a>.`;
        modalContent.showButton = false;
        this.modalContent.next(modalContent);
    }
    getModalContent() {
        return this.modalContent.asObservable();
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