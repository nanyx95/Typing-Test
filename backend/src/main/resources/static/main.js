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
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/interaction.service */ "zD6u");



class TimerComponent {
    constructor(interactionService) {
        this.interactionService = interactionService;
        this.timerInterval = null;
        this.timeLeft = '60';
    }
    ngOnInit() {
        this.interactionService.getTimerStatus()
            .subscribe(status => {
            if (status === true) {
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
            this.interactionService.setTimerStatus(false);
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
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"])); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], decls: 2, vars: 1, template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.timeLeft, " seconds");
    } }, styles: ["p[_ngcontent-%COMP%] {\n  margin: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aW1lci90aW1lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aW1lci90aW1lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIG1hcmdpbjogMnJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.css']
            }]
    }], function () { return [{ type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"] }]; }, null); })();


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
/* harmony import */ var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/timer/timer.component */ "PVgB");
/* harmony import */ var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/stats/stats.component */ "jyt5");
/* harmony import */ var _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/input-box/input-box.component */ "oz0K");





class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "stats-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-input-box");
    } }, directives: [_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__["TimerComponent"], _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_2__["StatsComponent"], _components_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_3__["InputBoxComponent"]], styles: [".stats-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });
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
        this.interactionService.getTotalWords()
            .subscribe(totalWords => this.accuracyCalc(totalWords));
    }
    accuracyCalc(totalWords) {
        if (totalWords === 0) {
            this.accuracy = 0;
        }
        else {
            this.accuracy = Math.round((this.correctWords / totalWords) * 100);
        }
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_1__["InteractionService"])); };
StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 7, vars: 3, consts: [[1, "container"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("WPM ", ctx.correctWords, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("CPM ", ctx.correctChars, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Accuracy ", ctx.accuracy, "%");
    } }, styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0cy9zdGF0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGF0cy9zdGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXIgPiBwIHtcbiAgbWFyZ2luOiAycmVtO1xufVxuIl19 */"] });
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
/* harmony import */ var _services_words_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/words.service */ "UMYA");
/* harmony import */ var _services_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/interaction.service */ "zD6u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






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
            .subscribe(status => this.isTimerOn = status);
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
                if (tw.isCorrect === true) {
                    this.correctWordsCounter++;
                    this.interactionService.setCorrectWords(this.correctWordsCounter);
                    this.correctCharsCounter = this.correctCharsCounter + tw.word.length;
                    this.interactionService.setCorrectChars(this.correctCharsCounter);
                }
                this.interactionService.setTotalWords(this.typedWords.length);
            }
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
        if (this.isTimerOn === false) {
            this.interactionService.setTimerStatus(true);
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
                this.flagWrongWord = false;
            }
            else {
                this.flagWrongWord = true;
            }
        }
        else if (inputEvent.inputType === 'deleteContentBackward' && inputValue === this.currentWord.substr(0, inputValue.length)) {
            this.flagWrongWord = false;
        }
        else {
            this.flagWrongWord = true;
        }
    }
    /**
     * Ignore the mouse click
     * @param event the click to ignore
     */
    onMouseDown(event) {
        this.setFocus();
        this.setCaretPosition('test-input', event.target.textContent.length);
        event.preventDefault();
    }
    /**
     * Ignore the tap on touch devices
     * @param event the tap to ignore
     */
    onTouchStart(event) {
        this.setFocus();
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
InputBoxComponent.ɵfac = function InputBoxComponent_Factory(t) { return new (t || InputBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_words_service__WEBPACK_IMPORTED_MODULE_2__["WordsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"])); };
InputBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputBoxComponent, selectors: [["app-input-box"]], viewQuery: function InputBoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.testInput = _t.first);
    } }, decls: 8, vars: 5, consts: [[1, "main-container"], [1, "typed-words-container"], [1, "whitespace-no-wrap"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "test-input", "tabindex", "1", "contenteditable", "true", "autocapitalize", "off", "autocomplete", "off", "autocorrect", "off", "spellcheck", "false", 3, "ngClass", "input", "keydown", "mousedown", "touchstart"], ["testInput", ""], [1, "words-container"], [4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function InputBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: 'Merriweather', serif;\n  font-weight: 100;\n  font-size: 2.5rem;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.typed-words-container[_ngcontent-%COMP%] {\n  height: 55px;\n  width: 50%;\n  overflow: hidden;\n}\n\n.whitespace-no-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  float: right;\n  white-space: nowrap;\n  text-align: right;\n}\n\n#test-input[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-left: .25rem;\n  display: inline-block;\n  color: #5A67D8;\n  caret-color: black;\n  outline: none;\n}\n\n.words-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex: none;\n  width: 50%;\n  height: 55px;\n}\n\n.words-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-left: .25rem;\n  padding-right: .25rem;\n}\n\n.whitespace-no-wrap[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-left: .25rem;\n  padding-right: .25rem;\n  opacity: 35%;\n}\n\n.words-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 0;\n}\n\n.wrong-word[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnR5cGVkLXdvcmRzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndoaXRlc3BhY2Utbm8td3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI3Rlc3QtaW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNUE2N0Q4O1xuICBjYXJldC1jb2xvcjogYmxhY2s7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi53b3Jkcy1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4OiBub25lO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi53b3Jkcy1jb250YWluZXIgPiBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcbn1cblxuLndoaXRlc3BhY2Utbm8td3JhcCA+IHNwYW4ge1xuICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogLjI1cmVtO1xuICBvcGFjaXR5OiAzNSU7XG59XG5cbi53b3Jkcy1jb250YWluZXIgPiBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi53cm9uZy13b3JkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-box',
                templateUrl: './input-box.component.html',
                styleUrls: ['./input-box.component.css']
            }]
    }], function () { return [{ type: _services_words_service__WEBPACK_IMPORTED_MODULE_2__["WordsService"] }, { type: _services_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"] }]; }, { testInput: [{
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



class InteractionService {
    constructor() {
        this.timerStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.correctWords = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.correctChars = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.totalWords = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
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
    }
    getTotalWords() {
        return this.totalWords.asObservable();
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