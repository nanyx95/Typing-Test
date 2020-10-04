(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fabiosomaglia/Documents/Projects/Typing Test/frontend/src/main.ts */"zUnb");


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


class TimerComponent {
    constructor() { }
    ngOnInit() {
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], decls: 2, vars: 0, template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "timer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGltZXIvdGltZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/input-box/input-box.component */ "oz0K");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-input-box");
    } }, directives: [_components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_1__["InputBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
        _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_4__["InputBoxComponent"],
                    _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
                    _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"]
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


class StatsComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(); };
StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 2, vars: 0, template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "stats works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdHMvc3RhdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stats',
                templateUrl: './stats.component.html',
                styleUrls: ['./stats.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _services_words_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/words.service */ "UMYA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["testInput"];
function InputBoxComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](word_r2.word);
} }
class InputBoxComponent {
    constructor(wordsService) {
        this.wordsService = wordsService;
        this.currentWord = null;
    }
    ngOnInit() {
        // set input focus
        document.getElementById('test-input').focus();
        this.retrieveWords();
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
            // remove first item of the words array
            this.words.shift();
            // set to null the current word
            this.currentWord = null;
            // clear input value
            event.target.textContent = '';
            this.retrieveWord();
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
        this.checkCharacter(event);
    }
    /**
     * Check the validity of the character
     * @param event the event containing the character to check
     * @private
     */
    checkCharacter(event) {
        const inputEvent = event;
        const key = inputEvent.data;
        const inputValue = event.target.textContent;
        if (key === this.words[0].word.charAt(0)) {
            if (inputValue === this.currentWord.substr(0, inputValue.length)) {
                this.words[0].word = this.words[0].word.substring(1);
            }
        }
    }
    /**
     * Ignore the mouse click
     * @param event the click to ignore
     */
    onMouseDown(event) {
        document.getElementById('test-input').focus();
        this.setCaretPosition('test-input', event.target.textContent.length);
        event.preventDefault();
    }
    /**
     * Ignore the tap on touch devices
     * @param event the tap to ignore
     */
    onTouchStart(event) {
        document.getElementById('test-input').focus();
        this.setCaretPosition('test-input', event.target.textContent.length);
        event.preventDefault();
    }
    /**
     * Set the caret position
     * @param elemId id of the html element
     * @param caretPos the position of the caret
     */
    setCaretPosition(elemId, caretPos) {
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
InputBoxComponent.ɵfac = function InputBoxComponent_Factory(t) { return new (t || InputBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_words_service__WEBPACK_IMPORTED_MODULE_1__["WordsService"])); };
InputBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputBoxComponent, selectors: [["app-input-box"]], viewQuery: function InputBoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.testInput = _t.first);
    } }, decls: 9, vars: 1, consts: [[1, "main-container"], [1, "typed-words-container"], [1, "whitespace-no-wrap"], ["id", "test-input", "tabindex", "1", "contenteditable", "true", "autocapitalize", "off", "autocomplete", "off", "autocorrect", "off", "spellcheck", "false", 3, "input", "keydown", "mousedown", "touchstart"], ["testInput", ""], [1, "words-container"], [4, "ngFor", "ngForOf"]], template: function InputBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "input-box works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputBoxComponent_Template_div_input_5_listener($event) { return ctx.onInput($event); })("keydown", function InputBoxComponent_Template_div_keydown_5_listener($event) { return ctx.onKeyDown($event); })("mousedown", function InputBoxComponent_Template_div_mousedown_5_listener($event) { return ctx.onMouseDown($event); })("touchstart", function InputBoxComponent_Template_div_touchstart_5_listener($event) { return ctx.onTouchStart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InputBoxComponent_span_8_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.words);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.typed-words-container[_ngcontent-%COMP%] {\n  height: 55px;\n  width: 50%;\n  overflow: hidden;\n}\n\n.whitespace-no-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1%;\n  height: 100%;\n  float: right;\n  white-space: nowrap;\n  text-align: right;\n}\n\n#test-input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  font-size: 3rem;\n  caret-color: black;\n  background-color: yellow;\n  outline: none;\n}\n\n.words-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex: none;\n  width: 50%;\n  height: 55px;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  padding-left: .25rem;\n  padding-right: .25rem;\n}\n\nspan[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udHlwZWQtd29yZHMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2hpdGVzcGFjZS1uby13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDElO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiN0ZXN0LWlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjYXJldC1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLndvcmRzLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTVweDtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcbn1cblxuc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-box',
                templateUrl: './input-box.component.html',
                styleUrls: ['./input-box.component.css']
            }]
    }], function () { return [{ type: _services_words_service__WEBPACK_IMPORTED_MODULE_1__["WordsService"] }]; }, { testInput: [{
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