webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 100;


/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(112);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_electron_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(electron, gameService) {
        this.electron = electron;
        this.gameService = gameService;
        this.state = 'intro';
    }
    AppComponent.prototype.ngOnInit = function () {
        process.env = this.electron.getEnvironment();
        this.gameService.create();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(172),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_electron_service__["a" /* ElectronService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_electron_service__["a" /* ElectronService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__["a" /* GameService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(82)))

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__intro_intro_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__intro_intro_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movie_movie_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__movie_movie_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_service_animate_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_data_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_service_electron_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_service_game_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_service_push_notification_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_service_statistics_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'intro' },
    { path: 'intro', component: __WEBPACK_IMPORTED_MODULE_6__intro_intro_component__["a" /* IntroComponent */] },
    { path: 'movie', component: __WEBPACK_IMPORTED_MODULE_8__movie_movie_component__["a" /* MovieComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__intro_intro_module__["a" /* IntroModule */],
            __WEBPACK_IMPORTED_MODULE_9__movie_movie_module__["a" /* MovieModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__shared_service_animate_service__["a" /* AnimateService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_12__shared_service_electron_service__["a" /* ElectronService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_service_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_service_push_notification_service__["a" /* PushNotificationService */],
            __WEBPACK_IMPORTED_MODULE_15__shared_service_statistics_service__["a" /* StatisticsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__intro_component__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IntroModule = (function () {
    function IntroModule() {
    }
    return IntroModule;
}());
IntroModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__intro_component__["a" /* IntroComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__intro_component__["a" /* IntroComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: []
    })
], IntroModule);

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_game_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieCreditsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieCreditsComponent = (function () {
    function MovieCreditsComponent(game) {
        this.game = game;
    }
    MovieCreditsComponent.prototype.ngOnInit = function () {
        var results = this.game.getStats();
        this.mostCorrectAnswers = this.getBest(results.correct);
        this.mostWrongAnswers = this.getBest(results.incorrect);
        this.mostMissedAnswers = this.getBest(results.missed);
        this.mostDrinks = this.getBest(results.drinks);
        this.bestStreak = this.getBest(results.streak);
        this.bestAnswerSpeed = this.getBest(results.speed);
        this.bestAnswerSpeedText = (this.bestAnswerSpeed.answer_speed / 1000).toFixed(2);
    };
    MovieCreditsComponent.prototype.getBest = function (result) {
        var topPlayers = result[0];
        if (topPlayers.length > 1) {
            var topPlayer = void 0;
            for (var _i = 0, topPlayers_1 = topPlayers; _i < topPlayers_1.length; _i++) {
                var player = topPlayers_1[_i];
                if (!topPlayer || player.answer_speed > topPlayer.answer_speed) {
                    topPlayer = player;
                }
            }
            return topPlayer;
        }
        return topPlayers[0];
    };
    return MovieCreditsComponent;
}());
MovieCreditsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'mdg-movie-credits',
        template: __webpack_require__(174),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_game_service__["a" /* GameService */]) === "function" && _a || Object])
], MovieCreditsComponent);

var _a;
//# sourceMappingURL=movie-credits.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__credits_movie_credits_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_movie_question_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MovieModule = (function () {
    function MovieModule() {
    }
    return MovieModule;
}());
MovieModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__movie_component__["a" /* MovieComponent */],
            __WEBPACK_IMPORTED_MODULE_5__credits_movie_credits_component__["a" /* MovieCreditsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__question_movie_question_component__["a" /* MovieQuestionComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__movie_component__["a" /* MovieComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: []
    })
], MovieModule);

//# sourceMappingURL=movie.module.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".intro {\n  background-color: #b4e8e6;\n  height: 100%;\n}\n\n.title {\n  margin: 20px 0px 37px 0px;\n  color: #065d7b;\n  text-align: center;\n  font-family: PaytoneOne;\n}\n\n.title .title-small {\n  font-size: 2vh;\n}\n\n.title .title-large {\n  font-size: 4vh;\n}\n\nimg {\n  margin: auto;\n  content: url(" + __webpack_require__(215) + ");\n  display: block;\n  height: 67vh;\n}\n\n.start {\n  margin: auto;\n  display: block;\n  width: 13vw;\n  border-radius: 10px;\n  height: 90px;\n  background-color: #065d7b;\n  color: #f5f8fe;\n  border: 0px;\n  border-bottom: 4px solid #04495e;\n  font-size: 30px;\n  cursor: pointer;\n}\n\n.start:active {\n  background-color: #04495e;\n}\n\n.player {\n  position: absolute;\n  font-size: 37px;\n  color: black;\n  font-family: FillMeWithColor;\n}\n\n.logo {\n  padding: 3% 0px;\n  display: block;\n  margin: auto;\n  position: relative;\n  color: #f4f8fb;\n  font-size: 70px;\n  font-family: Cheri;\n}\n\n###################\n\nbody {\n\toverflow-x: hidden;\n}\n\n#background-wrap {\n  bottom: 0;\n\tleft: 0;\n  pointer-events: none;\n\tposition: fixed;\n\tright: 0;\n\ttop: 0;\n}\n\n/* KEYFRAMES */\n\n@-webkit-keyframes animateBubble {\n    0% {\n        margin-top: 1000px;\n    }\n    100% {\n        margin-top: -100%;\n    }\n}\n\n@keyframes animateBubble {\n    0% {\n        margin-top: 1000px;\n    }\n    100% {\n        margin-top: -100%;\n    }\n}\n\n@-webkit-keyframes sideWays {\n    0% {\n        margin-left:0px;\n    }\n    100% {\n        margin-left:50px;\n    }\n}\n\n@keyframes sideWays {\n    0% {\n        margin-left:0px;\n    }\n    100% {\n        margin-left:50px;\n    }\n}\n\n/* ANIMATIONS */\n\n.x1 {\n    -webkit-animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\tanimation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\n\tleft: -5%;\n\ttop: 5%;\n\n\t-webkit-transform: scale(0.6);\n\ttransform: scale(0.6);\n}\n\n.x2 {\n    -webkit-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\tanimation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\n\tleft: 5%;\n\ttop: 80%;\n\n\t-webkit-transform: scale(0.4);\n\ttransform: scale(0.4);\n}\n\n.x3 {\n    -webkit-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\tanimation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\n\tleft: 10%;\n\ttop: 40%;\n\n\t-webkit-transform: scale(0.7);\n\ttransform: scale(0.7);\n}\n\n.x4 {\n    -webkit-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;\n\tanimation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;\n\n\tleft: 20%;\n\ttop: 0;\n\n\t-webkit-transform: scale(0.3);\n\ttransform: scale(0.3);\n}\n\n.x5 {\n    -webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\tanimation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\n\tleft: 30%;\n\ttop: 50%;\n\n\t-webkit-transform: scale(0.5);\n\ttransform: scale(0.5);\n}\n\n.x6 {\n    -webkit-animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\tanimation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\n\tleft: 50%;\n\ttop: 0;\n\n\t-webkit-transform: scale(0.8);\n\ttransform: scale(0.8);\n}\n\n.x7 {\n    -webkit-animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\tanimation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\n\tleft: 65%;\n\ttop: 70%;\n\n\t-webkit-transform: scale(0.4);\n\ttransform: scale(0.4);\n}\n\n.x8 {\n    -webkit-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;\n\tanimation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;\n\n\tleft: 80%;\n\ttop: 10%;\n\n\t-webkit-transform: scale(0.3);\n\ttransform: scale(0.3);\n}\n\n.x9 {\n    -webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\tanimation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\n\tleft: 90%;\n\ttop: 50%;\n\n\t-webkit-transform: scale(0.6);\n\ttransform: scale(0.6);\n}\n\n.x10 {\n    -webkit-animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\tanimation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\n\tleft: 80%;\n\ttop: 80%;\n\n\t-webkit-transform: scale(0.3);\n\ttransform: scale(0.3);\n}\n\n/* OBJECTS */\n\n.bubble {\n\tborder-radius: 50%;\n\tbox-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);\n\n    height: 200px;\n\tposition: absolute;\n\twidth: 200px;\n}\n\n.bubble:after { /* FF3.6+ */ /* Chrome,Safari4+ */ /* Chrome10+,Safari5.1+ */ /* Opera 12+ */ /* IE10+ */\n    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */\n\tborder-radius: 50%;\n\tbox-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);\n\n\tcontent: \"\";\n    height: 180px;\n\tleft: 10px;\n\tposition: absolute;\n\twidth: 180px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.credits {\n  position: absolute;\n  width: 100%;\n  font-family: Raleway;\n  font-weight: 700;\n  text-align: center;\n  color: #fff;\n  background-color: black;\n}\n\n.scroll {\n  -webkit-animation: 45s credits linear infinite;\n          animation: 45s credits linear infinite;\n}\n\n.credits .movie-title {\n  text-transform: uppercase;\n  margin-bottom: 145px;\n  font-size: 108px;\n}\n\n.credits .title {\n  text-transform: uppercase;\n  margin-bottom: 13px;\n  font-size: 46px;\n}\n\n.credits .name {\n  font-weight: 100;\n  margin-bottom: 170px;\n  font-size: 35px;\n}\n\n@-webkit-keyframes credits {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: -160%;\n  }\n}\n\n@keyframes credits {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: -160%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".time-display {\n\tposition: absolute;\n\tcolor: white;\n\tfont-size: 33px;\n}\n\n.movie {\n\theight: 100%;\n\twidth: 100%;\n}\n\n.overlay {\n  font-family: PaytoneOne;\n  top: 46vh;\n  left: 18vw;\n  position: absolute;\n  z-index: 2147483647;\n}\n\n#question {\n  position: relative;\n}\n\n#question-overlay .badge img {\n  content: url(" + __webpack_require__(99) + ");\n}\n\n#question-container {\n  overflow: hidden;\n  font-size: 26px;\n  position: relative;\n  top: 87px;\n  left: 215px;\n  padding: 35px 0px;\n  width: 960px;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 9;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n  -moz-border-top-right-radius: 14px;\n  border-top-right-radius: 14px;\n  -moz-border-bottom-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n}\n\n.question-text {\n  z-index: 3;\n  position: relative;\n}\n\n.timer {\n  top: 0px;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.timer.timer-foreground {\n  z-index: 2;\n  background-color: #f25424;\n}\n\n.timer.timer-background {\n  z-index: 1;\n  background-color: white;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n}\n\ntable {\n  border-spacing: 1em;\n  width: 95%;\n  position: relative;\n  top: 100px;\n  left: 254px;\n  color: black;\n  font-size: 20px;\n}\n\n.answer .answer-letter {\n  color: #f25424;\n  margin-right: 10px;\n  float: left;\n}\n\ntd {\n  border: 4px solid #f25424;\n  border-radius: 10px;\n  background-color: #f4f8fb;\n  text-align: left;\n  width: 50%;\n  padding: 17px 20px;\n}\n\ntd.correct {\n  background-color: #f25424;\n  color: white;\n}\n\n.answer.correct .answer-letter {\n  color: white;\n}\n\n#drinks-overlay .badge {\n  width: 280px;\n}\n\n#drinks-overlay table {\n  margin-left: 68px;\n  table-layout: fixed;\n  width: 60%;\n}\n\n#drinks-overlay table td {\n  white-space: nowrap;\n  text-align: center;\n  border-color: #065d7b;\n}\n\n#sociables-overlay {\n  position: absolute;\n  width: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 100%;\n  font-family: AgentOrange;\n  color: #f4f8fb;\n  text-shadow: -3px 0px 19px #f4f8fb;\n  font-size: 13em;\n  top: 0;\n}\n\n#sociables-overlay p {\n  margin: auto;\n}\n\n.drinks-overlay {\n  top: 0;\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.badge {\n  position: absolute;\n  margin-top: 8px;\n  width: 230px;\n  height: 403px;\n  z-index: 10;\n}\n\n.badge img {\n  position: absolute;\n  height: auto;\n  width: 100%;\n}\n\n.movie-container {\n\theight: 100%;\n}\n\nvideo {\n\tbackground-color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".time-display {\n\tposition: absolute;\n\tcolor: white;\n\tfont-size: 33px;\n}\n\n.movie {\n\theight: 100%;\n\twidth: 100%;\n}\n\n.overlay {\n  font-family: PaytoneOne;\n  top: 46vh;\n  left: 18vw;\n  position: absolute;\n  z-index: 2147483647;\n}\n\n#question {\n  position: relative;\n}\n\n#question-overlay .badge img {\n  content: url(" + __webpack_require__(99) + ");\n}\n\n#question-container {\n  overflow: hidden;\n  font-size: 26px;\n  position: relative;\n  top: 87px;\n  left: 215px;\n  padding: 35px 0px;\n  width: 960px;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 9;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n  -moz-border-top-right-radius: 14px;\n  border-top-right-radius: 14px;\n  -moz-border-bottom-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n}\n\n.question-text {\n  z-index: 3;\n  position: relative;\n}\n\n.timer {\n  top: 0px;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.timer.timer-foreground {\n  z-index: 2;\n  background-color: #f25424;\n}\n\n.timer.timer-background {\n  z-index: 1;\n  background-color: white;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n}\n\ntable {\n  border-spacing: 1em;\n  width: 95%;\n  position: relative;\n  top: 100px;\n  left: 254px;\n  color: black;\n  font-size: 20px;\n}\n\n.answer .answer-letter {\n  color: #f25424;\n  margin-right: 10px;\n  float: left;\n}\n\ntd {\n  border: 4px solid #f25424;\n  border-radius: 10px;\n  background-color: #f4f8fb;\n  text-align: left;\n  width: 50%;\n  padding: 17px 20px;\n}\n\ntd.correct {\n  background-color: #f25424;\n  color: white;\n}\n\n.answer.correct .answer-letter {\n  color: white;\n}\n\n#drinks-overlay .badge {\n  width: 280px;\n}\n\n#drinks-overlay table {\n  margin-left: 68px;\n  table-layout: fixed;\n  width: 60%;\n}\n\n#drinks-overlay table td {\n  white-space: nowrap;\n  text-align: center;\n  border-color: #065d7b;\n}\n\n#sociables-overlay {\n  position: absolute;\n  width: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 100%;\n  font-family: AgentOrange;\n  color: #f4f8fb;\n  text-shadow: -3px 0px 19px #f4f8fb;\n  font-size: 13em;\n  top: 0;\n}\n\n#sociables-overlay p {\n  margin: auto;\n}\n\n.drinks-overlay {\n  top: 0;\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.badge {\n  position: absolute;\n  margin-top: 8px;\n  width: 230px;\n  height: 403px;\n  z-index: 10;\n}\n\n.badge img {\n  position: absolute;\n  height: auto;\n  width: 100%;\n}\n\n.movie-container {\n\theight: 100%;\n}\n\nvideo {\n\tbackground-color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<div class=\"intro\">\n  <div class=\"logo animated fadeIn\">\n    <img class=\"animated rotateIn\">\n    <div class=\"title animated bounceInDown\">\n      <span class=\"title-small\">go to</span>\n      <span class=\"title-large\">DRINKUPCINEMA.COM</span>\n      <span class=\"title-small\">to play!</span>\n    </div>\n    <button (click)=\"start()\" class=\"start animated bounceInUp\">Start</button>\n  </div>\n  <div *ngIf=\"players\">\n    <div *ngFor=\"let player of players; let i = index\"\n      [style.top]=\"getPlayerTop(i)\"\n      [style.left]=\"getPlayerLeft(i)\"\n      class=\"player animated pulse infinite\"\n    >\n    {{ player.name }}\n    </div>\n  </div>\n  <div id=\"background-wrap\">\n    <div class=\"bubble x1\"></div>\n    <div class=\"bubble x2\"></div>\n    <div class=\"bubble x3\"></div>\n    <div class=\"bubble x4\"></div>\n    <div class=\"bubble x5\"></div>\n    <div class=\"bubble x6\"></div>\n    <div class=\"bubble x7\"></div>\n    <div class=\"bubble x8\"></div>\n    <div class=\"bubble x9\"></div>\n    <div class=\"bubble x10\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<div class=\"credits scroll\">\n  <div class=\"movie-title\"></div>\n  <div class=\"title\">Best Duder</div>\n  <div class=\"name\">{{ mostCorrectAnswers.name }} ({{ mostCorrectAnswers.correct_answers }} correct)</div>\n  <div class=\"title\">Worst Duder</div>\n  <div class=\"name\">{{ mostWrongAnswers.name }} ({{ mostWrongAnswers.incorrect_answers }} incorrcet)</div>\n  <div class=\"title\">Where was this Duder</div>\n  <div class=\"name\">{{ mostMissedAnswers.name }} ({{ mostMissedAnswers.missed_answers }} missed)</div>\n  <div class=\"title\">Drunkest Duder</div>\n  <div class=\"name\">{{ mostDrinks.name }} ({{ mostDrinks.drinks }} drinks)</div>\n  <div class=\"title\">Quickest Duder</div>\n  <div class=\"name\">{{ bestAnswerSpeed.name }} ({{ bestAnswerSpeedText }} sec)</div>\n  <div class=\"title\">Longest Streak Duder</div>\n  <div class=\"name\">{{ bestStreak.name }} ({{ bestStreak.best_streak }} in a row)</div>\n</div>\n"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTime\" class=\"time-display\">{{ time }} ({{time - 22}})</div>\n<div class=\"movie-container animated\" [class.fadeOut]=\"showCredits()\">\n  <video\n    #movie\n    class=\"movie\"\n    autoplay=\"autoplay\"\n    [muted]=\"muteVideo\"\n    [controls]=\"showControls\"\n    (click)=\"toggleControls()\"\n    (timeupdate)=\"onTimeUpdate($event.target.currentTime)\"\n    (seeked)=\"onSeeked($event.target.currentTime)\"\n  >\n    <source id=\"avi\" [src]=\"movieFilePath\" type=\"video/mp4\">\n    <track label=\"English\" kind=\"subtitles\" srclang=\"en\" src=\"/home/rmiller/Desktop/movie/subs.vtt\" default>\n    <p>Your user agent does not support the HTML5 Video element.</p>\n  </video>\n  <mdg-movie-question *ngIf=\"showQuestion()\" #question></mdg-movie-question>\n</div>\n<mdg-movie-credits *ngIf=\"showCredits()\"></mdg-movie-credits>\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<div id=\"question-overlay\" class=\"overlay animated {{ enterAnimation }}\">\n  <div id=\"question\">\n    <div class=\"badge\">\n      <img class=\"question\">\n    </div>\n    <div id=\"question-container\">\n      <div class=\"question-text\">{{ question.text }}</div>\n      <div class=\"timer timer-background\"></div>\n      <div class=\"timer timer-foreground\" [style.width]=\"timerWidth\"></div>\n    </div>\n  </div>\n  <table *ngIf=\"showAnswers()\">\n    <tr>\n      <td class=\"answer\" [class.correct]=\"isCorrect(0)\">\n        <div class=\"answer-letter\">A.</div>\n        <div>{{ question.answers[0].text }}</div>\n      </td>\n      <td class=\"answer\" [class.correct]=\"isCorrect(1)\">\n        <div class=\"answer-letter\">B.</div>\n        <div>{{ question.answers[1].text }}</div>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"answer\" [class.correct]=\"isCorrect(2)\">\n        <div class=\"answer-letter\">C.</div>\n        <div>{{ question.answers[2].text }}</div>\n      </td>\n      <td class=\"answer\" [class.correct]=\"isCorrect(3)\">\n        <div class=\"answer-letter\">D.</div>\n        <div>{{ question.answers[3].text }}</div>\n      </td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__electron_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__push_notification_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__statistics_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var fs = window.require('fs');
var random = window.require('randomstring');




var GameService = (function () {
    function GameService(data, electron, pushNotification, router, sanitizer, statistics) {
        this.data = data;
        this.electron = electron;
        this.pushNotification = pushNotification;
        this.router = router;
        this.sanitizer = sanitizer;
        this.statistics = statistics;
        this.NEW_GAME = 'new_game';
        this.IDLE = 'idle';
        this.SHOW_QUESTION = 'show_question';
        this.WAITING_FOR_QUESTION = 'waiting_for_question';
        this.SHOW_ANSWERS = 'show_answers';
        this.WAITING_FOR_ANSWERS = 'waiting_for_answers';
        this.SHOW_CORRECT_ANSWER = 'show_correct_answer';
        this.WAITING_FOR_CORRECT_ANSWER = 'waiting_for_correct_answer';
        this.HIDE_QUESTION = 'hide_question';
        this.WAITING_FOR_END = 'waiting_for_end';
        this.END_GAME = 'end_game';
        this.currentState = this.NEW_GAME;
        this.currentTime = 0;
        this.sentNotification = false;
        this._players = {};
        this.players = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.gameFilepath = this.electron.openFileDialog('Select game file')[0];
        this.movieFilepath = this.sanitizer.bypassSecurityTrustResourceUrl(this.electron.openFileDialog('Select movie file')[0]);
    }
    GameService.prototype.create = function () {
        var _this = this;
        var gameJson = fs.readFileSync(this.gameFilepath);
        var gameData = JSON.parse(gameJson.toString());
        this.endTime = gameData.end_time;
        this.rules = gameData.rules;
        this.questions = {};
        for (var _i = 0, _a = gameData.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            question.duration = question.duration ? question.duration : 15;
            if (question.shuffle_answers === undefined ||
                question.shuffle_answers) {
                this.shuffle(question);
            }
            this.questions[question.movie_time] = question;
        }
        ;
        this.id = random.generate();
        var game = {
            name: gameData.name,
            rules: this.rules,
            state: this.currentState
        };
        this.data.create('game', this.id, game);
        this.data.bind('player', null, 'child_added', function (player) { return _this.addPlayer(player); });
        this.data.bind('answer', null, 'child_added', function (answer) { return _this.answer(answer); });
    };
    /**
     * Shuffles array in place. ES6 version
     * @param {Array} a items An array containing the items.
     */
    GameService.prototype.shuffle = function (a) {
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    GameService.prototype.addPlayer = function (player) {
        var _this = this;
        if (!this.getPlayer(player.id)) {
            console.log('addPlayer', player);
            this._players[player.id] = player;
            this.players.next(this.getPlayers());
            this.data.bind('player', player.id, 'value', function (player) { return _this._players[player.id] = player; });
            this.pushNotification.subscribe(this.id, player.fcm_token);
        }
    };
    GameService.prototype.getPlayer = function (id) {
        for (var _i = 0, _a = this._players; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.id == id) {
                return i;
            }
        }
        return null;
    };
    GameService.prototype.getPlayers = function () {
        var players = [];
        for (var id in this._players) {
            players.push(this._players[id]);
        }
        return players;
    };
    GameService.prototype.sendState = function () {
        var answers = null;
        if (this.currentQuestion) {
            answers = this.currentQuestion.answers.map(function (a) { return a.text; });
        }
        var state = {
            answers: answers,
            question: this.currentQuestion,
            rules: this.rules,
            seconds_to_next_question: this.secondsTillNextQuestion(),
            state: this.currentState
        };
        this.data.update('game', this.id, state);
    };
    GameService.prototype.start = function () {
        console.log('starting game');
        this.currentState = this.IDLE;
        this.clearQuestion();
        this.sendState();
    };
    GameService.prototype.processState = function (time) {
        this.currentTime = time;
        switch (this.currentState) {
            case this.NEW_GAME:
                break;
            case this.IDLE:
                this.idle(time);
                break;
            case this.WAITING_FOR_QUESTION:
                var questionTime = this.currentQuestion.movie_time + 5;
                this.waiting(time, questionTime, this.SHOW_ANSWERS);
                break;
            case this.SHOW_ANSWERS:
                this.showAnswers();
                break;
            case this.WAITING_FOR_ANSWERS:
                var answerTime = this.currentQuestion.movie_time + this.currentQuestion.duration + 5;
                this.waiting(time, answerTime, this.SHOW_CORRECT_ANSWER);
                break;
            case this.SHOW_CORRECT_ANSWER:
                this.showCorrectAnswers();
                break;
            case this.WAITING_FOR_CORRECT_ANSWER:
                var correctTime = this.currentQuestion.movie_time + this.currentQuestion.duration + 5 + 5;
                this.waiting(time, correctTime, this.HIDE_QUESTION);
                break;
            case this.HIDE_QUESTION:
                this.hideQuestion();
                break;
            case this.WAITING_FOR_END:
                this.waiting(time, this.endTime, this.END_GAME);
                break;
            case this.END_GAME:
                this.endGame();
        }
    };
    GameService.prototype.idle = function (time) {
        if (this.questions[time]) {
            this.showQuestion(this.questions[time]);
            return;
        }
        // Update the phone client every minute before the next question
        var secondsTillNextQuestion = this.secondsTillNextQuestion();
        if (secondsTillNextQuestion % 60 === 0) {
            this.sendState();
            if (secondsTillNextQuestion / 60 == 1 && !this.sentNotification) {
                this.sentNotification = true;
                this.pushNotification.send(this.id, 'Drink Up Cinema', 'Question coming up...');
            }
        }
    };
    GameService.prototype.showQuestion = function (question) {
        console.log('show question:', question.text);
        this.currentQuestion = question;
        this.currentState = this.WAITING_FOR_QUESTION;
        this.currentAnswers = {};
        this.sendState();
    };
    GameService.prototype.showAnswers = function () {
        console.log('show answers');
        this.currentState = this.WAITING_FOR_ANSWERS;
        this.currentQuestion.start_time = Date.now();
        this.sendState();
    };
    GameService.prototype.showCorrectAnswers = function () {
        console.log('show correct answer');
        this.currentState = this.WAITING_FOR_CORRECT_ANSWER;
        this.statistics.process(this.currentQuestion, this.currentAnswers, this.getPlayers());
        for (var _i = 0, _a = this.getPlayers(); _i < _a.length; _i++) {
            var player = _a[_i];
            this.data.update('player', player.id, player);
        }
        this.sendState();
    };
    GameService.prototype.hideQuestion = function () {
        console.log('hide question');
        this.clearQuestion();
        this.currentState = this.nextQuestion ? this.IDLE : this.WAITING_FOR_END;
        this.sendState();
    };
    GameService.prototype.getStats = function () {
        return this.statistics.getResults(this.getPlayers());
    };
    GameService.prototype.endGame = function () {
        this.sendState();
    };
    GameService.prototype.answer = function (answer) {
        var states = [this.SHOW_ANSWERS, this.WAITING_FOR_ANSWERS];
        if (!states.includes(this.currentState))
            return;
        if (this.currentAnswers[answer.player_id])
            return;
        answer.speed = Date.now() - this.currentQuestion.start_time;
        console.log('answer', answer);
        this.currentAnswers[answer.player_id] = answer;
    };
    GameService.prototype.clearQuestion = function () {
        var questionIndex = null;
        var keys = [];
        for (var i in this.questions)
            keys.push(Number(i));
        if (this.currentQuestion) {
            questionIndex = keys.indexOf(this.currentQuestion.movie_time) + 1;
        }
        else {
            questionIndex = 0;
        }
        this.nextQuestion = (questionIndex <= keys.length) ? this.questions[keys[questionIndex]] : null;
        this.currentQuestion = null;
        this.currentAnswers = null;
        this.sentNotification = false;
        this.data.delete('answer');
    };
    GameService.prototype.waiting = function (currentTime, endTime, nextState) {
        if (currentTime >= endTime) {
            this.currentState = nextState;
        }
    };
    GameService.prototype.secondsTillNextQuestion = function () {
        if (!this.nextQuestion) {
            return 0;
        }
        return Math.max(0, this.nextQuestion.movie_time - this.currentTime);
    };
    GameService.prototype.isState = function (state) {
        return this.currentState == state;
    };
    return GameService;
}());
GameService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__electron_service__["a" /* ElectronService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__electron_service__["a" /* ElectronService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__push_notification_service__["a" /* PushNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__push_notification_service__["a" /* PushNotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__statistics_service__["a" /* StatisticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__statistics_service__["a" /* StatisticsService */]) === "function" && _f || Object])
], GameService);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var electron = window.require('electron');
var ElectronService = (function () {
    function ElectronService() {
    }
    ElectronService.prototype.getEnvironment = function () {
        return electron.remote.process.env;
    };
    ElectronService.prototype.listen = function (event, func) {
        electron.ipcRenderer.on(event, function (e, result) { return func(result); });
    };
    ElectronService.prototype.notifyClient = function (event, message) {
        if (message === void 0) { message = {}; }
        electron.ipcRenderer.send(event, message);
    };
    ElectronService.prototype.openFileDialog = function (title) {
        return electron.remote.dialog.showOpenDialog({ title: title, properties: ['openFile'] });
    };
    return ElectronService;
}());
ElectronService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ElectronService);

//# sourceMappingURL=electron.service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "splash.a04a5680eabc8441edb3.png";

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroComponent = (function () {
    function IntroComponent(game, router, cd) {
        this.game = game;
        this.router = router;
        this.cd = cd;
        this.positions = [
            { top: 89, left: 200 },
            { top: 800, left: 1500 },
            { top: 610, left: 39 },
            { top: 212, left: 1300 },
            { top: 319, left: 299 },
            { top: 500, left: 1450 },
            { top: 900, left: 300 },
            { top: 58, left: 1500 },
            { top: 481, left: 110 },
            { top: 621, left: 1400 },
            { top: 700, left: 200 },
            { top: 400, left: 1400 },
            { top: 174, left: 114 },
            { top: 900, left: 1600 },
            { top: 800, left: 76 }
        ];
    }
    IntroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playersSub = this.game.players.subscribe(function (players) {
            _this.players = players;
            _this.cd.detectChanges();
        });
    };
    IntroComponent.prototype.ngOnDestroy = function () {
        this.playersSub.unsubscribe();
    };
    IntroComponent.prototype.getPlayerLeft = function (index) {
        return this.positions[index].left + 'px';
    };
    IntroComponent.prototype.getPlayerTop = function (index) {
        return this.positions[index].top + 'px';
    };
    IntroComponent.prototype.start = function () {
        this.router.navigateByUrl('/movie');
    };
    return IntroComponent;
}());
IntroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'mdg-intro',
        template: __webpack_require__(173),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */]) === "function" && _c || Object])
], IntroComponent);

var _a, _b, _c;
//# sourceMappingURL=intro.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_movie_question_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieComponent = (function () {
    function MovieComponent(game) {
        this.game = game;
        this.showControls = false;
        this.time = 0;
        this.muteVideo = process.env.NODE_ENV === 'dev';
        this.showTime = process.env.NODE_ENV === 'testing';
        this.movieFilePath = game.movieFilepath;
        this.game.start();
    }
    MovieComponent.prototype.onSeeked = function (time) {
        this.onTimeUpdate(time);
        this.game.sendState();
    };
    MovieComponent.prototype.onTimeUpdate = function (time) {
        this.time = Math.floor(time);
        this.game.processState(this.time);
        var states = [
            this.game.SHOW_ANSWERS,
            this.game.WAITING_FOR_ANSWERS,
            this.game.SHOW_CORRECT_ANSWER
        ];
        if (this.question) {
            states.includes(this.game.currentState) ? this.question.startTimer() : this.question.stopTimer();
        }
    };
    MovieComponent.prototype.toggleControls = function () {
        this.showControls = !this.showControls;
    };
    MovieComponent.prototype.showQuestion = function () {
        var states = [
            this.game.WAITING_FOR_QUESTION,
            this.game.SHOW_ANSWERS,
            this.game.WAITING_FOR_ANSWERS,
            this.game.SHOW_CORRECT_ANSWER,
            this.game.WAITING_FOR_CORRECT_ANSWER
        ];
        return this.game.currentQuestion && states.includes(this.game.currentState);
    };
    MovieComponent.prototype.showCredits = function () {
        return this.game.isState(this.game.END_GAME);
    };
    return MovieComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('question'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_movie_question_component__["a" /* MovieQuestionComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_movie_question_component__["a" /* MovieQuestionComponent */]) === "function" && _a || Object)
], MovieComponent.prototype, "question", void 0);
MovieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'mdg-movie',
        template: __webpack_require__(175),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__["a" /* GameService */]) === "function" && _b || Object])
], MovieComponent);

var _a, _b;
//# sourceMappingURL=movie.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(82)))

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_animate_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieQuestionComponent = (function () {
    function MovieQuestionComponent(animate, game) {
        this.animate = animate;
        this.game = game;
    }
    MovieQuestionComponent.prototype.ngOnInit = function () {
        this.timerWidth = '100%';
        this.enterAnimation = this.animate.randomEnter();
        this.question = this.game.currentQuestion;
    };
    MovieQuestionComponent.prototype.startTimer = function () {
        var _this = this;
        if (!this.timer) {
            var startTime_1 = Date.now();
            var duration_1 = this.game.currentQuestion.duration;
            this.timer = setInterval(function () { return _this.timerWidth = _this.getTimerWidth(startTime_1, duration_1); }, 10);
        }
    };
    MovieQuestionComponent.prototype.stopTimer = function () {
        clearInterval(this.timer);
        this.timer = null;
    };
    MovieQuestionComponent.prototype.showAnswers = function () {
        var states = [
            this.game.SHOW_ANSWERS,
            this.game.WAITING_FOR_ANSWERS,
            this.game.SHOW_CORRECT_ANSWER,
            this.game.WAITING_FOR_CORRECT_ANSWER
        ];
        return states.includes(this.game.currentState);
    };
    MovieQuestionComponent.prototype.getTimerWidth = function (startTime, duration) {
        var now = Date.now();
        var progressInSeconds = (now - startTime) / 1000;
        var timerPercent = 100 * progressInSeconds / duration;
        return Math.max(100 - timerPercent, 0) + '%';
    };
    MovieQuestionComponent.prototype.isCorrect = function (answer_index) {
        var states = [
            this.game.SHOW_CORRECT_ANSWER,
            this.game.WAITING_FOR_CORRECT_ANSWER
        ];
        if (states.includes(this.game.currentState)) {
            var answer = this.game.currentQuestion.answers[answer_index];
            return answer && answer.is_correct;
        }
        return false;
    };
    return MovieQuestionComponent;
}());
MovieQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'mdg-movie-question',
        template: __webpack_require__(176),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_animate_service__["a" /* AnimateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_animate_service__["a" /* AnimateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_game_service__["a" /* GameService */]) === "function" && _b || Object])
], MovieQuestionComponent);

var _a, _b;
//# sourceMappingURL=movie-question.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AnimateService = (function () {
    function AnimateService() {
    }
    AnimateService.prototype.randomEnter = function () {
        var enterAnimations = [
            'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp',
            'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig',
            'flipInX', 'flipInY',
            'lightSpeedIn',
            'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
            'rollIn',
            'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
            'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'
        ];
        var index = Math.round(Math.random() * (enterAnimations.length - 1));
        return enterAnimations[index];
    };
    AnimateService.prototype.randomExit = function () {
        var exitAnimations = [
            'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
            'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig',
            'flipOutX', 'flipOutY',
            'lightSpeedOut',
            'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
            'rollOut',
            'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp',
            'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
        ];
        var index = Math.round(Math.random() * (exitAnimations.length - 1));
        return exitAnimations[index];
    };
    return AnimateService;
}());
AnimateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AnimateService);

//# sourceMappingURL=animate.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__electron_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(electron) {
        this.electron = electron;
    }
    DataService.prototype.bind = function (resource, id, event, func) {
        var responseKey = this.getResource(resource, id) + "/" + event;
        this.electron.listen(responseKey, func);
        this.send(resource, id, 'bind', { event: event });
    };
    DataService.prototype.create = function (resource, id, data) {
        this.send(resource, id, 'set', data);
    };
    DataService.prototype.delete = function (resource) {
        this.send(resource, null, 'remove', null);
    };
    DataService.prototype.update = function (resource, id, data) {
        this.send(resource, id, 'update', data);
    };
    DataService.prototype.send = function (resource, id, action, data) {
        var transaction = {
            resource: this.getResource(resource, id),
            action: action,
            data: data
        };
        this.electron.notifyClient('database', transaction);
    };
    DataService.prototype.getResource = function (resource, id) {
        return id ? resource + "/" + id : resource;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__electron_service__["a" /* ElectronService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__electron_service__["a" /* ElectronService */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__electron_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PushNotificationService = (function () {
    function PushNotificationService(electron) {
        this.electron = electron;
    }
    PushNotificationService.prototype.send = function (topic, title, body) {
        var params = [{
                notification: { title: title, body: body },
                topic: topic
            }];
        this.electron.notifyClient('push-notification', { action: 'send', params: params });
    };
    PushNotificationService.prototype.subscribe = function (topic, token) {
        if (!token)
            return;
        var params = [[token], topic];
        this.electron.notifyClient('push-notification', { action: 'subscribeToTopic', params: params });
    };
    return PushNotificationService;
}());
PushNotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__electron_service__["a" /* ElectronService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__electron_service__["a" /* ElectronService */]) === "function" && _a || Object])
], PushNotificationService);

var _a;
//# sourceMappingURL=push-notification.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsService = (function () {
    function StatisticsService() {
        this.drinkers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    StatisticsService.prototype.getResults = function (players) {
        var correct = [];
        var incorrect = [];
        var missed = [];
        var drinks = [];
        var speed = [];
        var streak = [];
        for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
            var player = players_1[_i];
            this.addStat(correct, player.correct_answers, player);
            this.addStat(drinks, player.drinks, player);
            this.addStat(incorrect, player.incorrect_answers, player);
            this.addStat(missed, player.missed_answers, player);
            this.addStat(speed, Math.floor(player.answer_speed / 100), player);
            this.addStat(streak, player.best_streak, player);
        }
        return {
            correct: this.flattenResults(correct).reverse(),
            drinks: this.flattenResults(drinks).reverse(),
            incorrect: this.flattenResults(incorrect).reverse(),
            missed: this.flattenResults(missed).reverse(),
            speed: this.flattenResults(speed),
            streak: this.flattenResults(streak).reverse()
        };
    };
    StatisticsService.prototype.process = function (question, answers, players) {
        var drinkers = [];
        for (var _i = 0, players_2 = players; _i < players_2.length; _i++) {
            var player = players_2[_i];
            var answer = answers[player.id];
            var isDrinking = this.updatePlayer(question, answer, player);
            if (isDrinking)
                drinkers.push(player);
        }
        this.drinkers.next(drinkers);
    };
    StatisticsService.prototype.addStat = function (rankings, score, player) {
        if (!rankings[score])
            rankings[score] = [];
        rankings[score].push(player);
    };
    StatisticsService.prototype.flattenResults = function (results) {
        var flattenedResults = [];
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var result = results_1[_i];
            if (result)
                flattenedResults.push(result);
        }
        return flattenedResults;
    };
    StatisticsService.prototype.updatePlayer = function (question, answer_index, player) {
        var isWrong = false;
        if (answer_index) {
            var answer = question.answers[answer_index];
            if (answer && answer.is_correct) {
                this.increment(player, 'correct_answers');
                this.increment(player, 'current_streak');
                player.best_streak = this.max(player.current_streak, player.best_streak);
            }
            else {
                this.increment(player, 'incorrect_answers');
                isWrong = true;
            }
        }
        else {
            this.increment(player, 'missed_answers');
            isWrong = true;
        }
        if (isWrong) {
            player.current_streak = 0;
            this.increment(player, 'drinks');
        }
        player.answer_speed = this.getAnswerSpeed(player, answer_index);
        return isWrong;
    };
    StatisticsService.prototype.increment = function (player, index, amount) {
        if (amount === void 0) { amount = 1; }
        if (!Number.isInteger(player[index]))
            player[index] = 0;
        player[index] += amount;
    };
    StatisticsService.prototype.max = function (value1, value2) {
        if (!Number.isInteger(value1))
            value1 = 0;
        if (!Number.isInteger(value2))
            value2 = 0;
        return Math.max(value1, value2);
    };
    StatisticsService.prototype.getAnswerSpeed = function (player, answer) {
        var numQuestions = player.correct_answers + player.incorrect_answers + player.missed_answers;
        var answerSpeed = answer ? answer.speed : 10000;
        if (!player.answer_speed)
            player.answer_speed = 0;
        return player.answer_speed + ((answerSpeed - player.answer_speed) / numQuestions);
    };
    return StatisticsService;
}());
StatisticsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StatisticsService);

//# sourceMappingURL=statistics.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "question.373c43905aa9458092d3.png";

/***/ })

},[217]);
//# sourceMappingURL=main.bundle.js.map