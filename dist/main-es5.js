function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIntroIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\n  <div class=\"logo animated fadeIn\">\n    <img class=\"animated rotateIn\">\n    <div class=\"title animated bounceInDown\">\n      <span class=\"title-small\">go to</span>\n      <span class=\"title-large\">DRINKUPCINEMA.COM</span>\n      <span class=\"title-small\">to play!</span>\n    </div>\n    <button (click)=\"start()\" class=\"start animated bounceInUp\">Start</button>\n  </div>\n  <div *ngIf=\"players\">\n    <div *ngFor=\"let player of players; let i = index\"\n      [style.top]=\"getPlayerTop(i)\"\n      [style.left]=\"getPlayerLeft(i)\"\n      class=\"player animated pulse infinite\"\n    >\n    {{ player.name }}\n    </div>\n  </div>\n  <div id=\"background-wrap\">\n    <div class=\"bubble x1\"></div>\n    <div class=\"bubble x2\"></div>\n    <div class=\"bubble x3\"></div>\n    <div class=\"bubble x4\"></div>\n    <div class=\"bubble x5\"></div>\n    <div class=\"bubble x6\"></div>\n    <div class=\"bubble x7\"></div>\n    <div class=\"bubble x8\"></div>\n    <div class=\"bubble x9\"></div>\n    <div class=\"bubble x10\"></div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/credits/movie-credits.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie/credits/movie-credits.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMovieCreditsMovieCreditsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"credits scroll\">\n  <div class=\"movie-title\"></div>\n  <div class=\"title\">Best Duder</div>\n  <div class=\"name\">{{ mostCorrectAnswers.name }} ({{ mostCorrectAnswers.correct_answers }} correct)</div>\n  <div class=\"title\">Worst Duder</div>\n  <div class=\"name\">{{ mostWrongAnswers.name }} ({{ mostWrongAnswers.incorrect_answers }} incorrcet)</div>\n  <div class=\"title\">Where was this Duder</div>\n  <div class=\"name\">{{ mostMissedAnswers.name }} ({{ mostMissedAnswers.missed_answers }} missed)</div>\n  <div class=\"title\">Drunkest Duder</div>\n  <div class=\"name\">{{ mostDrinks.name }} ({{ mostDrinks.drinks }} drinks)</div>\n  <div class=\"title\">Quickest Duder</div>\n  <div class=\"name\">{{ bestAnswerSpeed.name }} ({{ bestAnswerSpeedText }} sec)</div>\n  <div class=\"title\">Longest Streak Duder</div>\n  <div class=\"name\">{{ bestStreak.name }} ({{ bestStreak.best_streak }} in a row)</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMovieMovieComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"showTime\" class=\"time-display\">{{ time }} ({{time - 22}})</div>\n<div class=\"movie-container animated\" [class.fadeOut]=\"showCredits()\">\n  <video\n    #movie\n    class=\"movie\"\n    autoplay=\"autoplay\"\n    [muted]=\"muteVideo\"\n    [controls]=\"showControls\"\n    (click)=\"toggleControls()\"\n    (timeupdate)=\"onTimeUpdate($event.target.currentTime)\"\n    (seeked)=\"onSeeked($event.target.currentTime)\"\n  >\n    <source id=\"avi\" [src]=\"movieFilePath\" type=\"video/mp4\">\n    <track label=\"English\" kind=\"subtitles\" srclang=\"en\" src=\"/home/rmiller/Desktop/movie/subs.vtt\" default>\n    <p>Your user agent does not support the HTML5 Video element.</p>\n  </video>\n  <mdg-movie-question *ngIf=\"showQuestion()\" #question></mdg-movie-question>\n</div>\n<mdg-movie-credits *ngIf=\"showCredits()\"></mdg-movie-credits>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/question/movie-question.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie/question/movie-question.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMovieQuestionMovieQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"question-overlay\" class=\"overlay animated {{ enterAnimation }}\">\n  <div id=\"question\">\n    <div class=\"badge\">\n      <img class=\"question\">\n    </div>\n    <div id=\"question-container\">\n      <div class=\"question-text\" [innerHTML]=\"question.text\"></div>\n      <div class=\"timer timer-background\"></div>\n      <div class=\"timer timer-foreground\" [style.width]=\"timerWidth\"></div>\n    </div>\n  </div>\n  <table *ngIf=\"showAnswers()\">\n    <tr>\n      <td class=\"answer\" [class.correct]=\"isCorrect(0)\">\n        <div class=\"answer-letter\">A.</div>\n        <div [innerHTML]=\"question.answers[0].text\"></div>\n      </td>\n      <td class=\"answer\" [class.correct]=\"isCorrect(1)\">\n        <div class=\"answer-letter\">B.</div>\n        <div [innerHTML]=\"question.answers[1].text\"></div>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"answer\" [class.correct]=\"isCorrect(2)\">\n        <div class=\"answer-letter\">C.</div>\n        <div [innerHTML]=\"question.answers[2].text\"></div>\n      </td>\n      <td class=\"answer\" [class.correct]=\"isCorrect(3)\">\n        <div class=\"answer-letter\">D.</div>\n        <div [innerHTML]=\"question.answers[3].text\"></div>\n      </td>\n    </tr>\n  </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_service_electron_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/service/electron.service */
    "./src/app/shared/service/electron.service.ts");
    /* harmony import */


    var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/service/game.service */
    "./src/app/shared/service/game.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(electron, gameService) {
        _classCallCheck(this, AppComponent);

        this.electron = electron;
        this.gameService = gameService;
        this.state = 'intro';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          process.env = this.electron.getEnvironment();
          this.gameService.create();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _shared_service_electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]
      }, {
        type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], _shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/intro/intro.component.ts");
    /* harmony import */


    var _intro_intro_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./intro/intro.module */
    "./src/app/intro/intro.module.ts");
    /* harmony import */


    var _movie_movie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./movie/movie.component */
    "./src/app/movie/movie.component.ts");
    /* harmony import */


    var _movie_movie_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./movie/movie.module */
    "./src/app/movie/movie.module.ts");
    /* harmony import */


    var _shared_service_animate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/service/animate.service */
    "./src/app/shared/service/animate.service.ts");
    /* harmony import */


    var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/service/data.service */
    "./src/app/shared/service/data.service.ts");
    /* harmony import */


    var _shared_service_electron_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/service/electron.service */
    "./src/app/shared/service/electron.service.ts");
    /* harmony import */


    var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/service/game.service */
    "./src/app/shared/service/game.service.ts");
    /* harmony import */


    var _shared_service_push_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/service/push-notification.service */
    "./src/app/shared/service/push-notification.service.ts");
    /* harmony import */


    var _shared_service_statistics_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/service/statistics.service */
    "./src/app/shared/service/statistics.service.ts");

    var appRoutes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'intro'
    }, {
      path: 'intro',
      component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"]
    }, {
      path: 'movie',
      component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_8__["MovieComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _intro_intro_module__WEBPACK_IMPORTED_MODULE_7__["IntroModule"], _movie_movie_module__WEBPACK_IMPORTED_MODULE_9__["MovieModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)],
      providers: [_shared_service_animate_service__WEBPACK_IMPORTED_MODULE_10__["AnimateService"], _shared_service_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"], _shared_service_electron_service__WEBPACK_IMPORTED_MODULE_12__["ElectronService"], _shared_service_game_service__WEBPACK_IMPORTED_MODULE_13__["GameService"], _shared_service_push_notification_service__WEBPACK_IMPORTED_MODULE_14__["PushNotificationService"], _shared_service_statistics_service__WEBPACK_IMPORTED_MODULE_15__["StatisticsService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/intro/intro.component.css":
  /*!*******************************************!*\
    !*** ./src/app/intro/intro.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppIntroIntroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".intro {\n  background-color: #b4e8e6;\n  height: 100%;\n}\n\n.title {\n  margin: 20px 0px 37px 0px;\n  color: #065d7b;\n  text-align: center;\n  font-family: PaytoneOne;\n}\n\n.title .title-small {\n  font-size: 2vh;\n}\n\n.title .title-large {\n  font-size: 4vh;\n}\n\nimg {\n  margin: auto;\n  content: url('splash.png');\n  display: block;\n  height: 67vh;\n}\n\n.start {\n  margin: auto;\n  display: block;\n  width: 13vw;\n  border-radius: 10px;\n  height: 90px;\n  background-color: #065d7b;\n  color: #f5f8fe;\n  border: 0px;\n  border-bottom: 4px solid #04495e;\n  font-size: 30px;\n  cursor: pointer;\n}\n\n.start:active {\n  background-color: #04495e;\n}\n\n.player {\n  position: absolute;\n  font-size: 37px;\n  color: black;\n  font-family: FillMeWithColor;\n}\n\n.logo {\n  padding: 3% 0px;\n  display: block;\n  margin: auto;\n  position: relative;\n  color: #f4f8fb;\n  font-size: 70px;\n  font-family: Cheri;\n}\n\n###################\n\nbody {\n\toverflow-x: hidden;\n}\n\n#background-wrap {\n  bottom: 0;\n\tleft: 0;\n  pointer-events: none;\n\tposition: fixed;\n\tright: 0;\n\ttop: 0;\n}\n\n/* KEYFRAMES */\n\n@-webkit-keyframes animateBubble {\n    0% {\n        margin-top: 1000px;\n    }\n    100% {\n        margin-top: -100%;\n    }\n}\n\n@keyframes animateBubble {\n    0% {\n        margin-top: 1000px;\n    }\n    100% {\n        margin-top: -100%;\n    }\n}\n\n@-webkit-keyframes sideWays {\n    0% {\n        margin-left:0px;\n    }\n    100% {\n        margin-left:50px;\n    }\n}\n\n@keyframes sideWays {\n    0% {\n        margin-left:0px;\n    }\n    100% {\n        margin-left:50px;\n    }\n}\n\n/* ANIMATIONS */\n\n.x1 {\n    -webkit-animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\tanimation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\n\tleft: -5%;\n\ttop: 5%;\n\n\t-webkit-transform: scale(0.6);\n\ttransform: scale(0.6);\n}\n\n.x2 {\n    -webkit-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\tanimation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\n\tleft: 5%;\n\ttop: 80%;\n\n\t-webkit-transform: scale(0.4);\n\ttransform: scale(0.4);\n}\n\n.x3 {\n    -webkit-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\tanimation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\n\tleft: 10%;\n\ttop: 40%;\n\n\t-webkit-transform: scale(0.7);\n\ttransform: scale(0.7);\n}\n\n.x4 {\n    -webkit-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;\n\tanimation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;\n\n\tleft: 20%;\n\ttop: 0;\n\n\t-webkit-transform: scale(0.3);\n\ttransform: scale(0.3);\n}\n\n.x5 {\n    -webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\tanimation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\n\tleft: 30%;\n\ttop: 50%;\n\n\t-webkit-transform: scale(0.5);\n\ttransform: scale(0.5);\n}\n\n.x6 {\n    -webkit-animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\tanimation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\n\tleft: 50%;\n\ttop: 0;\n\n\t-webkit-transform: scale(0.8);\n\ttransform: scale(0.8);\n}\n\n.x7 {\n    -webkit-animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\tanimation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\n\tleft: 65%;\n\ttop: 70%;\n\n\t-webkit-transform: scale(0.4);\n\ttransform: scale(0.4);\n}\n\n.x8 {\n    -webkit-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;\n\tanimation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;\n\n\tleft: 80%;\n\ttop: 10%;\n\n\t-webkit-transform: scale(0.3);\n\ttransform: scale(0.3);\n}\n\n.x9 {\n    -webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\tanimation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;\n\n\tleft: 90%;\n\ttop: 50%;\n\n\t-webkit-transform: scale(0.6);\n\ttransform: scale(0.6);\n}\n\n.x10 {\n    -webkit-animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\tanimation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;\n\n\tleft: 80%;\n\ttop: 80%;\n\n\t-webkit-transform: scale(0.3);\n\ttransform: scale(0.3);\n}\n\n/* OBJECTS */\n\n.bubble {\n\tborder-radius: 50%;\n\tbox-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);\n\n    height: 200px;\n\tposition: absolute;\n\twidth: 200px;\n}\n\n.bubble:after { /* FF3.6+ */ /* Chrome,Safari4+ */ /* Chrome10+,Safari5.1+ */ /* Opera 12+ */ /* IE10+ */\n    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */\n\tborder-radius: 50%;\n\tbox-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);\n\n\tcontent: \"\";\n    height: 180px;\n\tleft: 10px;\n\tposition: absolute;\n\twidth: 180px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBeUM7RUFDekMsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBOzs7Q0FHQyxrQkFBa0I7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0NBQ1YsT0FBTztFQUNOLG9CQUFvQjtDQUNyQixlQUFlO0NBQ2YsUUFBUTtDQUNSLE1BQU07QUFDUDs7QUFFQSxjQUFjOztBQUVkO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQVdBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFXQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGdHQUFnRztDQUVuRyx3RkFBd0Y7O0NBRXhGLFNBQVM7Q0FDVCxPQUFPOztDQUVQLDZCQUE2QjtDQUU3QixxQkFBcUI7QUFDdEI7O0FBRUE7SUFDSSxnR0FBZ0c7Q0FFbkcsd0ZBQXdGOztDQUV4RixRQUFRO0NBQ1IsUUFBUTs7Q0FFUiw2QkFBNkI7Q0FFN0IscUJBQXFCO0FBQ3RCOztBQUVBO0lBQ0ksZ0dBQWdHO0NBRW5HLHdGQUF3Rjs7Q0FFeEYsU0FBUztDQUNULFFBQVE7O0NBRVIsNkJBQTZCO0NBRTdCLHFCQUFxQjtBQUN0Qjs7QUFFQTtJQUNJLGdHQUFnRztDQUVuRyx3RkFBd0Y7O0NBRXhGLFNBQVM7Q0FDVCxNQUFNOztDQUVOLDZCQUE2QjtDQUU3QixxQkFBcUI7QUFDdEI7O0FBRUE7SUFDSSxnR0FBZ0c7Q0FFbkcsd0ZBQXdGOztDQUV4RixTQUFTO0NBQ1QsUUFBUTs7Q0FFUiw2QkFBNkI7Q0FFN0IscUJBQXFCO0FBQ3RCOztBQUVBO0lBQ0ksZ0dBQWdHO0NBRW5HLHdGQUF3Rjs7Q0FFeEYsU0FBUztDQUNULE1BQU07O0NBRU4sNkJBQTZCO0NBRTdCLHFCQUFxQjtBQUN0Qjs7QUFFQTtJQUNJLGdHQUFnRztDQUVuRyx3RkFBd0Y7O0NBRXhGLFNBQVM7Q0FDVCxRQUFROztDQUVSLDZCQUE2QjtDQUU3QixxQkFBcUI7QUFDdEI7O0FBRUE7SUFDSSxnR0FBZ0c7Q0FFbkcsd0ZBQXdGOztDQUV4RixTQUFTO0NBQ1QsUUFBUTs7Q0FFUiw2QkFBNkI7Q0FFN0IscUJBQXFCO0FBQ3RCOztBQUVBO0lBQ0ksZ0dBQWdHO0NBRW5HLHdGQUF3Rjs7Q0FFeEYsU0FBUztDQUNULFFBQVE7O0NBRVIsNkJBQTZCO0NBRTdCLHFCQUFxQjtBQUN0Qjs7QUFFQTtJQUNJLGdHQUFnRztDQUVuRyx3RkFBd0Y7O0NBRXhGLFNBQVM7Q0FDVCxRQUFROztDQUVSLDZCQUE2QjtDQUU3QixxQkFBcUI7QUFDdEI7O0FBRUEsWUFBWTs7QUFFWjtDQUdDLGtCQUFrQjtDQUlsQiwwRkFBMEY7O0lBRXZGLGFBQWE7Q0FDaEIsa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjs7QUFFQSxnQkFDaUgsV0FBVyxFQUNrQyxvQkFBb0IsRUFDL0QseUJBQXlCLEVBQzlCLGNBQWMsRUFDYixVQUFVO0lBQ3JILGlHQUFpRyxFQUFFLFFBQVE7SUFDM0csdUhBQXVILEVBQUUsMENBQTBDO0NBSXRLLGtCQUFrQjtDQUlsQixzREFBc0Q7O0NBRXRELFdBQVc7SUFDUixhQUFhO0NBQ2hCLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRybyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGU4ZTY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luOiAyMHB4IDBweCAzN3B4IDBweDtcbiAgY29sb3I6ICMwNjVkN2I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBheXRvbmVPbmU7XG59XG5cbi50aXRsZSAudGl0bGUtc21hbGwge1xuICBmb250LXNpemU6IDJ2aDtcbn1cblxuLnRpdGxlIC50aXRsZS1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogNHZoO1xufVxuXG5pbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvaW1nL3NwbGFzaC5wbmcpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA2N3ZoO1xufVxuXG4uc3RhcnQge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTN2dztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY1ZDdiO1xuICBjb2xvcjogI2Y1ZjhmZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDQ0OTVlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN0YXJ0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDQ5NWU7XG59XG5cbi5wbGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMzdweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogRmlsbE1lV2l0aENvbG9yO1xufVxuXG4ubG9nbyB7XG4gIHBhZGRpbmc6IDMlIDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2Y0ZjhmYjtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBmb250LWZhbWlseTogQ2hlcmk7XG59XG5cbiMjIyMjIyMjIyMjIyMjIyMjIyNcblxuYm9keSB7XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuI2JhY2tncm91bmQtd3JhcCB7XG4gIGJvdHRvbTogMDtcblx0bGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0cmlnaHQ6IDA7XG5cdHRvcDogMDtcbn1cblxuLyogS0VZRlJBTUVTICovXG5cbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlQnViYmxlIHtcbiAgICAwJSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMDAlO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGFuaW1hdGVCdWJibGUge1xuICAgIDAlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwMHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMCU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVCdWJibGUge1xuICAgIDAlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwMHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMCU7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2lkZVdheXMge1xuICAgIDAlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6NTBweDtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBzaWRlV2F5cyB7XG4gICAgMCUge1xuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBtYXJnaW4tbGVmdDo1MHB4O1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzaWRlV2F5cyB7XG4gICAgMCUge1xuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBtYXJnaW4tbGVmdDo1MHB4O1xuICAgIH1cbn1cblxuLyogQU5JTUFUSU9OUyAqL1xuXG4ueDEge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDI1cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblx0LW1vei1hbmltYXRpb246IGFuaW1hdGVCdWJibGUgMjVzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXHRhbmltYXRpb246IGFuaW1hdGVCdWJibGUgMjVzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXG5cdGxlZnQ6IC01JTtcblx0dG9wOiA1JTtcblxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42KTtcblx0LW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNik7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbn1cblxuLngyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZUJ1YmJsZSAyMHMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cdC1tb3otYW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDIwcyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblx0YW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDIwcyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblxuXHRsZWZ0OiA1JTtcblx0dG9wOiA4MCU7XG5cblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG5cdC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG59XG5cbi54MyB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGVCdWJibGUgMjhzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXHQtbW96LWFuaW1hdGlvbjogYW5pbWF0ZUJ1YmJsZSAyOHMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyAycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cdGFuaW1hdGlvbjogYW5pbWF0ZUJ1YmJsZSAyOHMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyAycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cblx0bGVmdDogMTAlO1xuXHR0b3A6IDQwJTtcblxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcblx0LW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbn1cblxuLng0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZUJ1YmJsZSAyMnMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cdC1tb3otYW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDIycyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblx0YW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDIycyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblxuXHRsZWZ0OiAyMCU7XG5cdHRvcDogMDtcblxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcblx0LW1vei10cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbn1cblxuLng1IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZUJ1YmJsZSAyOXMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cdC1tb3otYW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDI5cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblx0YW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDI5cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblxuXHRsZWZ0OiAzMCU7XG5cdHRvcDogNTAlO1xuXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuXHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xufVxuXG4ueDYge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDIxcyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblx0LW1vei1hbmltYXRpb246IGFuaW1hdGVCdWJibGUgMjFzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXHRhbmltYXRpb246IGFuaW1hdGVCdWJibGUgMjFzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXG5cdGxlZnQ6IDUwJTtcblx0dG9wOiAwO1xuXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuXHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xufVxuXG4ueDcge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDIwcyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblx0LW1vei1hbmltYXRpb246IGFuaW1hdGVCdWJibGUgMjBzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXHRhbmltYXRpb246IGFuaW1hdGVCdWJibGUgMjBzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXG5cdGxlZnQ6IDY1JTtcblx0dG9wOiA3MCU7XG5cblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG5cdC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG59XG5cbi54OCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGVCdWJibGUgMjJzIGxpbmVhciBpbmZpbml0ZSwgc2lkZVdheXMgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXHQtbW96LWFuaW1hdGlvbjogYW5pbWF0ZUJ1YmJsZSAyMnMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cdGFuaW1hdGlvbjogYW5pbWF0ZUJ1YmJsZSAyMnMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cblx0bGVmdDogODAlO1xuXHR0b3A6IDEwJTtcblxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcblx0LW1vei10cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbn1cblxuLng5IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZUJ1YmJsZSAyOXMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cdC1tb3otYW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDI5cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblx0YW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDI5cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblxuXHRsZWZ0OiA5MCU7XG5cdHRvcDogNTAlO1xuXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuXHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMC42KTtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xufVxuXG4ueDEwIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZUJ1YmJsZSAyNnMgbGluZWFyIGluZmluaXRlLCBzaWRlV2F5cyAycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cdC1tb3otYW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDI2cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblx0YW5pbWF0aW9uOiBhbmltYXRlQnViYmxlIDI2cyBsaW5lYXIgaW5maW5pdGUsIHNpZGVXYXlzIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcblxuXHRsZWZ0OiA4MCU7XG5cdHRvcDogODAlO1xuXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuXHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xufVxuXG4vKiBPQkpFQ1RTICovXG5cbi5idWJibGUge1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAxMHB4IDMwcHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG5cdC1tb3otYm94LXNoYWRvdzogMCAyMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMTBweCAzMHB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuXHRib3gtc2hhZG93OiAwIDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAxMHB4IDMwcHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG5cbiAgICBoZWlnaHQ6IDIwMHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAyMDBweDtcbn1cblxuLmJ1YmJsZTphZnRlciB7XG4gICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwwLjUpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDcwJSk7IC8qIEZGMy42KyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUscmdiYSgyNTUsMjU1LDI1NSwwLjUpKSwgY29sb3Itc3RvcCg3MCUscmdiYSgyNTUsMjU1LDI1NSwwKSkpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDAuNSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwKSA3MCUpOyAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xuICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDAuNSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwKSA3MCUpOyAvKiBPcGVyYSAxMisgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMC41KSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDApIDcwJSk7IC8qIElFMTArICovXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwwLjUpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkgNzAlKTsgLyogVzNDICovXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM4MGZmZmZmZicsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cblxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAyMHB4IDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMjBweCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAyMHB4IDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXG5cdGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxODBweDtcblx0bGVmdDogMTBweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTgwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/intro/intro.component.ts":
  /*!******************************************!*\
    !*** ./src/app/intro/intro.component.ts ***!
    \******************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/service/game.service */
    "./src/app/shared/service/game.service.ts");

    var IntroComponent =
    /*#__PURE__*/
    function () {
      function IntroComponent(game, router, cd) {
        _classCallCheck(this, IntroComponent);

        this.game = game;
        this.router = router;
        this.cd = cd;
        this.positions = [{
          top: 89,
          left: 200
        }, {
          top: 800,
          left: 1500
        }, {
          top: 610,
          left: 39
        }, {
          top: 212,
          left: 1300
        }, {
          top: 319,
          left: 299
        }, {
          top: 500,
          left: 1450
        }, {
          top: 900,
          left: 300
        }, {
          top: 58,
          left: 1500
        }, {
          top: 481,
          left: 110
        }, {
          top: 621,
          left: 1400
        }, {
          top: 700,
          left: 200
        }, {
          top: 400,
          left: 1400
        }, {
          top: 174,
          left: 114
        }, {
          top: 900,
          left: 1600
        }, {
          top: 800,
          left: 76
        }];
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.playersSub = this.game.players.subscribe(function (players) {
            _this.players = players;

            _this.cd.detectChanges();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.playersSub.unsubscribe();
        }
      }, {
        key: "getPlayerLeft",
        value: function getPlayerLeft(index) {
          return this.positions[index].left + 'px';
        }
      }, {
        key: "getPlayerTop",
        value: function getPlayerTop(index) {
          return this.positions[index].top + 'px';
        }
      }, {
        key: "start",
        value: function start() {
          this.router.navigateByUrl('/movie');
        }
      }]);

      return IntroComponent;
    }();

    IntroComponent.ctorParameters = function () {
      return [{
        type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mdg-intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intro.component.css */
      "./src/app/intro/intro.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], IntroComponent);
    /***/
  },

  /***/
  "./src/app/intro/intro.module.ts":
  /*!***************************************!*\
    !*** ./src/app/intro/intro.module.ts ***!
    \***************************************/

  /*! exports provided: IntroModule */

  /***/
  function srcAppIntroIntroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroModule", function () {
      return IntroModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./intro.component */
    "./src/app/intro/intro.component.ts");

    var IntroModule = function IntroModule() {
      _classCallCheck(this, IntroModule);
    };

    IntroModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_intro_component__WEBPACK_IMPORTED_MODULE_4__["IntroComponent"]],
      exports: [_intro_component__WEBPACK_IMPORTED_MODULE_4__["IntroComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: []
    })], IntroModule);
    /***/
  },

  /***/
  "./src/app/movie/credits/movie-credits.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/movie/credits/movie-credits.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMovieCreditsMovieCreditsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.credits {\n  position: absolute;\n  width: 100%;\n  font-family: Raleway;\n  font-weight: 700;\n  text-align: center;\n  color: #fff;\n  background-color: black;\n}\n\n.scroll {\n  -webkit-animation: 45s credits linear infinite;\n          animation: 45s credits linear infinite;\n}\n\n.credits .movie-title {\n  text-transform: uppercase;\n  margin-bottom: 145px;\n  font-size: 108px;\n}\n\n.credits .title {\n  text-transform: uppercase;\n  margin-bottom: 13px;\n  font-size: 46px;\n}\n\n.credits .name {\n  font-weight: 100;\n  margin-bottom: 170px;\n  font-size: 35px;\n}\n\n@-webkit-keyframes credits {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: -160%;\n  }\n}\n\n@keyframes credits {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: -160%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvY3JlZGl0cy9tb3ZpZS1jcmVkaXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW92aWUvY3JlZGl0cy9tb3ZpZS1jcmVkaXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jcmVkaXRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uc2Nyb2xsIHtcbiAgYW5pbWF0aW9uOiA0NXMgY3JlZGl0cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5jcmVkaXRzIC5tb3ZpZS10aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE0NXB4O1xuICBmb250LXNpemU6IDEwOHB4O1xufVxuXG4uY3JlZGl0cyAudGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICBmb250LXNpemU6IDQ2cHg7XG59XG5cbi5jcmVkaXRzIC5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTcwcHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuQGtleWZyYW1lcyBjcmVkaXRzIHtcbiAgMCUge1xuICAgIHRvcDogMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IC0xNjAlO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/movie/credits/movie-credits.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/movie/credits/movie-credits.component.ts ***!
    \**********************************************************/

  /*! exports provided: MovieCreditsComponent */

  /***/
  function srcAppMovieCreditsMovieCreditsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieCreditsComponent", function () {
      return MovieCreditsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/service/game.service */
    "./src/app/shared/service/game.service.ts");

    var MovieCreditsComponent =
    /*#__PURE__*/
    function () {
      function MovieCreditsComponent(game) {
        _classCallCheck(this, MovieCreditsComponent);

        this.game = game;
      }

      _createClass(MovieCreditsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var results = this.game.getStats();
          this.mostCorrectAnswers = this.getBest(results.correct);
          this.mostWrongAnswers = this.getBest(results.incorrect);
          this.mostMissedAnswers = this.getBest(results.missed);
          this.mostDrinks = this.getBest(results.drinks);
          this.bestStreak = this.getBest(results.streak);
          this.bestAnswerSpeed = this.getBest(results.speed);
          this.bestAnswerSpeedText = (this.bestAnswerSpeed.answer_speed / 1000).toFixed(2);
        }
      }, {
        key: "getBest",
        value: function getBest(result) {
          var topPlayers = result[0];

          if (topPlayers.length > 1) {
            var topPlayer;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = topPlayers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var player = _step.value;

                if (!topPlayer || player.answer_speed > topPlayer.answer_speed) {
                  topPlayer = player;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return topPlayer;
          }

          return topPlayers[0];
        }
      }]);

      return MovieCreditsComponent;
    }();

    MovieCreditsComponent.ctorParameters = function () {
      return [{
        type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
      }];
    };

    MovieCreditsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mdg-movie-credits',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movie-credits.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/credits/movie-credits.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movie-credits.component.css */
      "./src/app/movie/credits/movie-credits.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])], MovieCreditsComponent);
    /***/
  },

  /***/
  "./src/app/movie/movie.component.css":
  /*!*******************************************!*\
    !*** ./src/app/movie/movie.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMovieMovieComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".time-display {\n\tposition: absolute;\n\tcolor: white;\n\tfont-size: 33px;\n}\n\n.movie {\n\theight: 100%;\n\twidth: 100%;\n}\n\n.overlay {\n  font-family: PaytoneOne;\n  top: 46vh;\n  left: 18vw;\n  position: absolute;\n  z-index: 2147483647;\n}\n\n#question {\n  position: relative;\n}\n\n#question-overlay .badge img {\n  content: url('question.png');\n}\n\n#question-container {\n  overflow: hidden;\n  font-size: 26px;\n  position: relative;\n  top: 87px;\n  left: 215px;\n  padding: 35px 0px;\n  width: 960px;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 9;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n  -moz-border-top-right-radius: 14px;\n  border-top-right-radius: 14px;\n  -moz-border-bottom-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n}\n\n.question-text {\n  z-index: 3;\n  position: relative;\n}\n\n.timer {\n  top: 0px;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.timer.timer-foreground {\n  z-index: 2;\n  background-color: #f25424;\n}\n\n.timer.timer-background {\n  z-index: 1;\n  background-color: white;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n}\n\ntable {\n  border-spacing: 1em;\n  width: 95%;\n  position: relative;\n  top: 100px;\n  left: 254px;\n  color: black;\n  font-size: 20px;\n}\n\n.answer .answer-letter {\n  color: #f25424;\n  margin-right: 10px;\n  float: left;\n}\n\ntd {\n  border: 4px solid #f25424;\n  border-radius: 10px;\n  background-color: #f4f8fb;\n  text-align: left;\n  width: 50%;\n  padding: 17px 20px;\n}\n\ntd.correct {\n  background-color: #f25424;\n  color: white;\n}\n\n.answer.correct .answer-letter {\n  color: white;\n}\n\n#drinks-overlay .badge {\n  width: 280px;\n}\n\n#drinks-overlay table {\n  margin-left: 68px;\n  table-layout: fixed;\n  width: 60%;\n}\n\n#drinks-overlay table td {\n  white-space: nowrap;\n  text-align: center;\n  border-color: #065d7b;\n}\n\n#sociables-overlay {\n  position: absolute;\n  width: 100%;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  height: 100%;\n  font-family: AgentOrange;\n  color: #f4f8fb;\n  text-shadow: -3px 0px 19px #f4f8fb;\n  font-size: 13em;\n  top: 0;\n}\n\n#sociables-overlay p {\n  margin: auto;\n}\n\n.drinks-overlay {\n  top: 0;\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.badge {\n  position: absolute;\n  margin-top: 8px;\n  width: 230px;\n  height: 403px;\n  z-index: 10;\n}\n\n.badge img {\n  position: absolute;\n  height: auto;\n  width: 100%;\n}\n\n.movie-container {\n\theight: 100%;\n}\n\nvideo {\n\tbackground-color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsa0NBQWtDO0VBRWxDLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFFckMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUd6QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDJCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lLWRpc3BsYXkge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAzM3B4O1xufVxuXG4ubW92aWUge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ub3ZlcmxheSB7XG4gIGZvbnQtZmFtaWx5OiBQYXl0b25lT25lO1xuICB0b3A6IDQ2dmg7XG4gIGxlZnQ6IDE4dnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjE0NzQ4MzY0Nztcbn1cblxuI3F1ZXN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcXVlc3Rpb24tb3ZlcmxheSAuYmFkZ2UgaW1nIHtcbiAgY29udGVudDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvcXVlc3Rpb24ucG5nKTtcbn1cblxuI3F1ZXN0aW9uLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDg3cHg7XG4gIGxlZnQ6IDIxNXB4O1xuICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgd2lkdGg6IDk2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICB6LWluZGV4OiA5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLW1vei1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTRweDtcbiAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE0cHg7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE0cHg7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNHB4O1xufVxuXG4ucXVlc3Rpb24tdGV4dCB7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpbWVyIHtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpbWVyLnRpbWVyLWZvcmVncm91bmQge1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI1NDI0O1xufVxuXG4udGltZXIudGltZXItYmFja2dyb3VuZCB7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMDtcbn1cblxudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMWVtO1xuICB3aWR0aDogOTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDI1NHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFuc3dlciAuYW5zd2VyLWxldHRlciB7XG4gIGNvbG9yOiAjZjI1NDI0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG50ZCB7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmMjU0MjQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmOGZiO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxN3B4IDIwcHg7XG59XG5cbnRkLmNvcnJlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI1NDI0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbnN3ZXIuY29ycmVjdCAuYW5zd2VyLWxldHRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2RyaW5rcy1vdmVybGF5IC5iYWRnZSB7XG4gIHdpZHRoOiAyODBweDtcbn1cblxuI2RyaW5rcy1vdmVybGF5IHRhYmxlIHtcbiAgbWFyZ2luLWxlZnQ6IDY4cHg7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdpZHRoOiA2MCU7XG59XG5cbiNkcmlua3Mtb3ZlcmxheSB0YWJsZSB0ZCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjMDY1ZDdiO1xufVxuXG4jc29jaWFibGVzLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogQWdlbnRPcmFuZ2U7XG4gIGNvbG9yOiAjZjRmOGZiO1xuICB0ZXh0LXNoYWRvdzogLTNweCAwcHggMTlweCAjZjRmOGZiO1xuICBmb250LXNpemU6IDEzZW07XG4gIHRvcDogMDtcbn1cblxuI3NvY2lhYmxlcy1vdmVybGF5IHAge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5kcmlua3Mtb3ZlcmxheSB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiA0MDNweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5iYWRnZSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb3ZpZS1jb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbnZpZGVvIHtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/movie/movie.component.ts":
  /*!******************************************!*\
    !*** ./src/app/movie/movie.component.ts ***!
    \******************************************/

  /*! exports provided: MovieComponent */

  /***/
  function srcAppMovieMovieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieComponent", function () {
      return MovieComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _question_movie_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./question/movie-question.component */
    "./src/app/movie/question/movie-question.component.ts");
    /* harmony import */


    var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/service/game.service */
    "./src/app/shared/service/game.service.ts");

    var MovieComponent =
    /*#__PURE__*/
    function () {
      function MovieComponent(game) {
        _classCallCheck(this, MovieComponent);

        this.game = game;
        this.showControls = false;
        this.time = 0;
        this.muteVideo = "development" === 'dev';
        this.showTime = "development" === 'testing';
        this.movieFilePath = game.movieFilepath;
        this.game.start();
      }

      _createClass(MovieComponent, [{
        key: "onSeeked",
        value: function onSeeked(time) {
          this.onTimeUpdate(time);
          this.game.sendState();
        }
      }, {
        key: "onTimeUpdate",
        value: function onTimeUpdate(time) {
          this.time = Math.floor(time);
          this.game.processState(this.time);
          var states = [this.game.SHOW_ANSWERS, this.game.WAITING_FOR_ANSWERS, this.game.SHOW_CORRECT_ANSWER];

          if (this.question) {
            states.includes(this.game.currentState) ? this.question.startTimer() : this.question.stopTimer();
          }
        }
      }, {
        key: "toggleControls",
        value: function toggleControls() {
          this.showControls = !this.showControls;
        }
      }, {
        key: "showQuestion",
        value: function showQuestion() {
          var states = [this.game.WAITING_FOR_QUESTION, this.game.SHOW_ANSWERS, this.game.WAITING_FOR_ANSWERS, this.game.SHOW_CORRECT_ANSWER, this.game.WAITING_FOR_CORRECT_ANSWER];
          return this.game.currentQuestion && states.includes(this.game.currentState);
        }
      }, {
        key: "showCredits",
        value: function showCredits() {
          return this.game.isState(this.game.END_GAME);
        }
      }]);

      return MovieComponent;
    }();

    MovieComponent.ctorParameters = function () {
      return [{
        type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('question', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _question_movie_question_component__WEBPACK_IMPORTED_MODULE_2__["MovieQuestionComponent"])], MovieComponent.prototype, "question", void 0);
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mdg-movie',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movie.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movie.component.css */
      "./src/app/movie/movie.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])], MovieComponent);
    /***/
  },

  /***/
  "./src/app/movie/movie.module.ts":
  /*!***************************************!*\
    !*** ./src/app/movie/movie.module.ts ***!
    \***************************************/

  /*! exports provided: MovieModule */

  /***/
  function srcAppMovieMovieModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieModule", function () {
      return MovieModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./movie.component */
    "./src/app/movie/movie.component.ts");
    /* harmony import */


    var _credits_movie_credits_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./credits/movie-credits.component */
    "./src/app/movie/credits/movie-credits.component.ts");
    /* harmony import */


    var _question_movie_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./question/movie-question.component */
    "./src/app/movie/question/movie-question.component.ts");

    var MovieModule = function MovieModule() {
      _classCallCheck(this, MovieModule);
    };

    MovieModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"], _credits_movie_credits_component__WEBPACK_IMPORTED_MODULE_5__["MovieCreditsComponent"], _question_movie_question_component__WEBPACK_IMPORTED_MODULE_6__["MovieQuestionComponent"]],
      exports: [_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: []
    })], MovieModule);
    /***/
  },

  /***/
  "./src/app/movie/question/movie-question.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/movie/question/movie-question.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMovieQuestionMovieQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".time-display {\n\tposition: absolute;\n\tcolor: white;\n\tfont-size: 33px;\n}\n\n.movie {\n\theight: 100%;\n\twidth: 100%;\n}\n\n.overlay {\n  font-family: PaytoneOne;\n  top: 46vh;\n  left: 18vw;\n  position: absolute;\n  z-index: 2147483647;\n}\n\n#question {\n  position: relative;\n}\n\n#question-overlay .badge img {\n  content: url('question.png');\n}\n\n#question-container {\n  overflow: hidden;\n  font-size: 26px;\n  position: relative;\n  top: 87px;\n  left: 215px;\n  padding: 35px 0px;\n  width: 960px;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 9;\n  text-align: center;\n  vertical-align: middle;\n  display: inline-block;\n  -moz-border-top-right-radius: 14px;\n  border-top-right-radius: 14px;\n  -moz-border-bottom-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n}\n\n.question-text {\n  z-index: 3;\n  position: relative;\n}\n\n.timer {\n  top: 0px;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.timer.timer-foreground {\n  z-index: 2;\n  background-color: #f25424;\n}\n\n.timer.timer-background {\n  z-index: 1;\n  background-color: white;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n}\n\ntable {\n  border-spacing: 1em;\n  width: 95%;\n  position: relative;\n  top: 100px;\n  left: 254px;\n  color: black;\n  font-size: 20px;\n}\n\n.answer .answer-letter {\n  color: #f25424;\n  margin-right: 10px;\n  float: left;\n}\n\ntd {\n  border: 4px solid #f25424;\n  border-radius: 10px;\n  background-color: #f4f8fb;\n  text-align: left;\n  width: 50%;\n  padding: 17px 20px;\n}\n\ntd.correct {\n  background-color: #f25424;\n  color: white;\n}\n\n.answer.correct .answer-letter {\n  color: white;\n}\n\n#drinks-overlay .badge {\n  width: 280px;\n}\n\n#drinks-overlay table {\n  margin-left: 68px;\n  table-layout: fixed;\n  width: 60%;\n}\n\n#drinks-overlay table td {\n  white-space: nowrap;\n  text-align: center;\n  border-color: #065d7b;\n}\n\n#sociables-overlay {\n  position: absolute;\n  width: 100%;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  height: 100%;\n  font-family: AgentOrange;\n  color: #f4f8fb;\n  text-shadow: -3px 0px 19px #f4f8fb;\n  font-size: 13em;\n  top: 0;\n}\n\n#sociables-overlay p {\n  margin: auto;\n}\n\n.drinks-overlay {\n  top: 0;\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.badge {\n  position: absolute;\n  margin-top: 8px;\n  width: 230px;\n  height: 403px;\n  z-index: 10;\n}\n\n.badge img {\n  position: absolute;\n  height: auto;\n  width: 100%;\n}\n\n.movie-container {\n\theight: 100%;\n}\n\nvideo {\n\tbackground-color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvcXVlc3Rpb24vbW92aWUtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQThDO0FBQ2hEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsa0NBQWtDO0VBRWxDLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFFckMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUd6QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDJCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbW92aWUvcXVlc3Rpb24vbW92aWUtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lLWRpc3BsYXkge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAzM3B4O1xufVxuXG4ubW92aWUge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ub3ZlcmxheSB7XG4gIGZvbnQtZmFtaWx5OiBQYXl0b25lT25lO1xuICB0b3A6IDQ2dmg7XG4gIGxlZnQ6IDE4dnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjE0NzQ4MzY0Nztcbn1cblxuI3F1ZXN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcXVlc3Rpb24tb3ZlcmxheSAuYmFkZ2UgaW1nIHtcbiAgY29udGVudDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcXVlc3Rpb24ucG5nKTtcbn1cblxuI3F1ZXN0aW9uLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDg3cHg7XG4gIGxlZnQ6IDIxNXB4O1xuICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgd2lkdGg6IDk2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICB6LWluZGV4OiA5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLW1vei1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTRweDtcbiAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE0cHg7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE0cHg7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNHB4O1xufVxuXG4ucXVlc3Rpb24tdGV4dCB7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpbWVyIHtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpbWVyLnRpbWVyLWZvcmVncm91bmQge1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI1NDI0O1xufVxuXG4udGltZXIudGltZXItYmFja2dyb3VuZCB7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMDtcbn1cblxudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMWVtO1xuICB3aWR0aDogOTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDI1NHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFuc3dlciAuYW5zd2VyLWxldHRlciB7XG4gIGNvbG9yOiAjZjI1NDI0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG50ZCB7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmMjU0MjQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmOGZiO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxN3B4IDIwcHg7XG59XG5cbnRkLmNvcnJlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI1NDI0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbnN3ZXIuY29ycmVjdCAuYW5zd2VyLWxldHRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2RyaW5rcy1vdmVybGF5IC5iYWRnZSB7XG4gIHdpZHRoOiAyODBweDtcbn1cblxuI2RyaW5rcy1vdmVybGF5IHRhYmxlIHtcbiAgbWFyZ2luLWxlZnQ6IDY4cHg7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdpZHRoOiA2MCU7XG59XG5cbiNkcmlua3Mtb3ZlcmxheSB0YWJsZSB0ZCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjMDY1ZDdiO1xufVxuXG4jc29jaWFibGVzLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogQWdlbnRPcmFuZ2U7XG4gIGNvbG9yOiAjZjRmOGZiO1xuICB0ZXh0LXNoYWRvdzogLTNweCAwcHggMTlweCAjZjRmOGZiO1xuICBmb250LXNpemU6IDEzZW07XG4gIHRvcDogMDtcbn1cblxuI3NvY2lhYmxlcy1vdmVybGF5IHAge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5kcmlua3Mtb3ZlcmxheSB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiA0MDNweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5iYWRnZSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb3ZpZS1jb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbnZpZGVvIHtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/movie/question/movie-question.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/movie/question/movie-question.component.ts ***!
    \************************************************************/

  /*! exports provided: MovieQuestionComponent */

  /***/
  function srcAppMovieQuestionMovieQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieQuestionComponent", function () {
      return MovieQuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_service_animate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/service/animate.service */
    "./src/app/shared/service/animate.service.ts");
    /* harmony import */


    var _shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/service/game.service */
    "./src/app/shared/service/game.service.ts");

    var MovieQuestionComponent =
    /*#__PURE__*/
    function () {
      function MovieQuestionComponent(animate, game) {
        _classCallCheck(this, MovieQuestionComponent);

        this.animate = animate;
        this.game = game;
      }

      _createClass(MovieQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.timerWidth = '100%';
          this.enterAnimation = this.animate.randomEnter();
          this.question = this.game.currentQuestion;
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this2 = this;

          if (!this.timer) {
            var startTime = Date.now();
            var duration = this.game.currentQuestion.duration;
            this.timer = setInterval(function () {
              return _this2.timerWidth = _this2.getTimerWidth(startTime, duration);
            }, 10);
          }
        }
      }, {
        key: "stopTimer",
        value: function stopTimer() {
          clearInterval(this.timer);
          this.timer = null;
        }
      }, {
        key: "showAnswers",
        value: function showAnswers() {
          var states = [this.game.SHOW_ANSWERS, this.game.WAITING_FOR_ANSWERS, this.game.SHOW_CORRECT_ANSWER, this.game.WAITING_FOR_CORRECT_ANSWER];
          return states.includes(this.game.currentState);
        }
      }, {
        key: "getTimerWidth",
        value: function getTimerWidth(startTime, duration) {
          var now = Date.now();
          var progressInSeconds = (now - startTime) / 1000;
          var timerPercent = 100 * progressInSeconds / duration;
          return Math.max(100 - timerPercent, 0) + '%';
        }
      }, {
        key: "isCorrect",
        value: function isCorrect(answer_index) {
          var states = [this.game.SHOW_CORRECT_ANSWER, this.game.WAITING_FOR_CORRECT_ANSWER];

          if (states.includes(this.game.currentState)) {
            var answer = this.game.currentQuestion.answers[answer_index];
            return answer && answer.is_correct;
          }

          return false;
        }
      }]);

      return MovieQuestionComponent;
    }();

    MovieQuestionComponent.ctorParameters = function () {
      return [{
        type: _shared_service_animate_service__WEBPACK_IMPORTED_MODULE_2__["AnimateService"]
      }, {
        type: _shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
      }];
    };

    MovieQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mdg-movie-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movie-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/question/movie-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movie-question.component.css */
      "./src/app/movie/question/movie-question.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_animate_service__WEBPACK_IMPORTED_MODULE_2__["AnimateService"], _shared_service_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])], MovieQuestionComponent);
    /***/
  },

  /***/
  "./src/app/shared/service/animate.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/service/animate.service.ts ***!
    \***************************************************/

  /*! exports provided: AnimateService */

  /***/
  function srcAppSharedServiceAnimateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateService", function () {
      return AnimateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AnimateService =
    /*#__PURE__*/
    function () {
      function AnimateService() {
        _classCallCheck(this, AnimateService);
      }

      _createClass(AnimateService, [{
        key: "randomEnter",
        value: function randomEnter() {
          var enterAnimations = ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'];
          var index = Math.round(Math.random() * (enterAnimations.length - 1));
          return enterAnimations[index];
        }
      }, {
        key: "randomExit",
        value: function randomExit() {
          var exitAnimations = ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flipOutX', 'flipOutY', 'lightSpeedOut', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'rollOut', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'];
          var index = Math.round(Math.random() * (exitAnimations.length - 1));
          return exitAnimations[index];
        }
      }]);

      return AnimateService;
    }();

    AnimateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AnimateService);
    /***/
  },

  /***/
  "./src/app/shared/service/data.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/service/data.service.ts ***!
    \************************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppSharedServiceDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _electron_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./electron.service */
    "./src/app/shared/service/electron.service.ts");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(electron) {
        _classCallCheck(this, DataService);

        this.electron = electron;
      }

      _createClass(DataService, [{
        key: "bind",
        value: function bind(resource, id, event, func) {
          var responseKey = "".concat(this.getResource(resource, id), "/").concat(event);
          this.electron.listen(responseKey, func);
          this.send(resource, id, 'bind', {
            event: event
          });
        }
      }, {
        key: "create",
        value: function create(resource, id, data) {
          this.send(resource, id, 'set', data);
        }
      }, {
        key: "delete",
        value: function _delete(resource) {
          this.send(resource, null, 'remove', null);
        }
      }, {
        key: "update",
        value: function update(resource, id, data) {
          this.send(resource, id, 'update', data);
        }
      }, {
        key: "send",
        value: function send(resource, id, action, data) {
          var transaction = {
            resource: this.getResource(resource, id),
            action: action,
            data: data
          };
          this.electron.notifyClient('database', transaction);
        }
      }, {
        key: "getResource",
        value: function getResource(resource, id) {
          return id ? "".concat(resource, "/").concat(id) : resource;
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]])], DataService);
    /***/
  },

  /***/
  "./src/app/shared/service/electron.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/service/electron.service.ts ***!
    \****************************************************/

  /*! exports provided: ElectronService */

  /***/
  function srcAppSharedServiceElectronServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElectronService", function () {
      return ElectronService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var electron = window.require('electron');

    var ElectronService =
    /*#__PURE__*/
    function () {
      function ElectronService() {
        _classCallCheck(this, ElectronService);
      }

      _createClass(ElectronService, [{
        key: "getEnvironment",
        value: function getEnvironment() {
          return electron.remote.process.env;
        }
      }, {
        key: "listen",
        value: function listen(event, func) {
          electron.ipcRenderer.on(event, function (e, result) {
            return func(result);
          });
        }
      }, {
        key: "notifyClient",
        value: function notifyClient(event) {
          var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          electron.ipcRenderer.send(event, message);
        }
      }, {
        key: "openFileDialog",
        value: function openFileDialog(title) {
          return electron.remote.dialog.showOpenDialog({
            title: title,
            properties: ['openFile']
          });
        }
      }]);

      return ElectronService;
    }();

    ElectronService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ElectronService);
    /***/
  },

  /***/
  "./src/app/shared/service/game.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/service/game.service.ts ***!
    \************************************************/

  /*! exports provided: GameService */

  /***/
  function srcAppSharedServiceGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameService", function () {
      return GameService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/ReplaySubject */
    "./node_modules/rxjs-compat/_esm2015/ReplaySubject.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/shared/service/data.service.ts");
    /* harmony import */


    var _electron_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./electron.service */
    "./src/app/shared/service/electron.service.ts");
    /* harmony import */


    var _push_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./push-notification.service */
    "./src/app/shared/service/push-notification.service.ts");
    /* harmony import */


    var _statistics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./statistics.service */
    "./src/app/shared/service/statistics.service.ts");

    var fs = window.require('fs');

    var random = window.require('randomstring');

    var GameService =
    /*#__PURE__*/
    function () {
      function GameService(data, electron, pushNotification, router, sanitizer, statistics) {
        _classCallCheck(this, GameService);

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
        this.players = new rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.gameFilepath = this.electron.openFileDialog('Select game file')[0];
        this.movieFilepath = this.sanitizer.bypassSecurityTrustResourceUrl(this.electron.openFileDialog('Select movie file')[0]);
      }

      _createClass(GameService, [{
        key: "create",
        value: function create() {
          var _this3 = this;

          var gameJson = fs.readFileSync(this.gameFilepath);
          var gameData = JSON.parse(gameJson.toString());
          this.endTime = gameData.end_time;
          this.rules = gameData.rules;
          this.questions = {};
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = gameData.questions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var question = _step2.value;
              question.duration = question.duration ? question.duration : 15;

              if (question.shuffle_answers === undefined || question.shuffle_answers) {
                this.shuffle(question);
              }

              this.questions[question.movie_time] = question;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          ;
          this.id = random.generate();
          var game = {
            name: gameData.name,
            rules: this.rules,
            state: this.currentState
          };
          this.data.create('game', this.id, game);
          this.data.bind('player', null, 'child_added', function (player) {
            return _this3.addPlayer(player);
          });
          this.data.bind('answer', null, 'child_added', function (answer) {
            return _this3.answer(answer);
          });
        }
        /**
         * Shuffles array in place. ES6 version
         * @param {Array} a items An array containing the items.
         */

      }, {
        key: "shuffle",
        value: function shuffle(a) {
          for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var _ref = [a[j], a[i]];
            a[i] = _ref[0];
            a[j] = _ref[1];
          }

          return a;
        }
      }, {
        key: "addPlayer",
        value: function addPlayer(player) {
          var _this4 = this;

          if (!this.getPlayer(player.id)) {
            console.log('addPlayer', player);
            this._players[player.id] = player;
            this.players.next(this.getPlayers());
            this.data.bind('player', player.id, 'value', function (player) {
              return _this4._players[player.id] = player;
            });
            this.pushNotification.subscribe(this.id, player.fcm_token);
          }
        }
      }, {
        key: "getPlayer",
        value: function getPlayer(id) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this._players[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var i = _step3.value;

              if (i.id == id) {
                return i;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          return null;
        }
      }, {
        key: "getPlayers",
        value: function getPlayers() {
          var players = [];

          for (var id in this._players) {
            players.push(this._players[id]);
          }

          return players;
        }
      }, {
        key: "sendState",
        value: function sendState() {
          var answers = null;

          if (this.currentQuestion) {
            answers = this.currentQuestion.answers.map(function (a) {
              return a.text;
            });
          }

          var state = {
            answers: answers,
            question: this.currentQuestion,
            rules: this.rules,
            seconds_to_next_question: this.secondsTillNextQuestion(),
            state: this.currentState
          };
          this.data.update('game', this.id, state);
        }
      }, {
        key: "start",
        value: function start() {
          console.log('starting game');
          this.currentState = this.IDLE;
          this.clearQuestion();
          this.sendState();
        }
      }, {
        key: "processState",
        value: function processState(time) {
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
        }
      }, {
        key: "idle",
        value: function idle(time) {
          if (this.questions[time]) {
            this.showQuestion(this.questions[time]);
            return;
          } // Update the phone client every minute before the next question


          var secondsTillNextQuestion = this.secondsTillNextQuestion();

          if (secondsTillNextQuestion % 60 === 0) {
            this.sendState();

            if (secondsTillNextQuestion / 60 == 1 && !this.sentNotification) {
              this.sentNotification = true;
              this.pushNotification.send(this.id, 'Drink Up Cinema', 'Question coming up...');
            }
          }
        }
      }, {
        key: "showQuestion",
        value: function showQuestion(question) {
          console.log('show question:', question.text);
          this.currentQuestion = question;
          this.currentState = this.WAITING_FOR_QUESTION;
          this.currentAnswers = {};
          this.sendState();
        }
      }, {
        key: "showAnswers",
        value: function showAnswers() {
          console.log('show answers');
          this.currentState = this.WAITING_FOR_ANSWERS;
          this.currentQuestion.start_time = Date.now();
          this.sendState();
        }
      }, {
        key: "showCorrectAnswers",
        value: function showCorrectAnswers() {
          console.log('show correct answer');
          this.currentState = this.WAITING_FOR_CORRECT_ANSWER;
          this.statistics.process(this.currentQuestion, this.currentAnswers, this.getPlayers());
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.getPlayers()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var player = _step4.value;
              this.data.update('player', player.id, player);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          this.sendState();
        }
      }, {
        key: "hideQuestion",
        value: function hideQuestion() {
          console.log('hide question');
          this.clearQuestion();
          this.currentState = this.nextQuestion ? this.IDLE : this.WAITING_FOR_END;
          this.sendState();
        }
      }, {
        key: "getStats",
        value: function getStats() {
          return this.statistics.getResults(this.getPlayers());
        }
      }, {
        key: "endGame",
        value: function endGame() {
          this.sendState();
        }
      }, {
        key: "answer",
        value: function answer(_answer) {
          var states = [this.SHOW_ANSWERS, this.WAITING_FOR_ANSWERS];
          if (!states.includes(this.currentState)) return;
          if (this.currentAnswers[_answer.player_id]) return;
          _answer.speed = Date.now() - this.currentQuestion.start_time;
          console.log('answer', _answer);
          this.currentAnswers[_answer.player_id] = _answer;
        }
      }, {
        key: "clearQuestion",
        value: function clearQuestion() {
          var questionIndex = null;
          var keys = [];

          for (var i in this.questions) {
            keys.push(Number(i));
          }

          if (this.currentQuestion) {
            questionIndex = keys.indexOf(this.currentQuestion.movie_time) + 1;
          } else {
            questionIndex = 0;
          }

          this.nextQuestion = questionIndex <= keys.length ? this.questions[keys[questionIndex]] : null;
          this.currentQuestion = null;
          this.currentAnswers = null;
          this.sentNotification = false;
          this.data.delete('answer');
        }
      }, {
        key: "waiting",
        value: function waiting(currentTime, endTime, nextState) {
          if (currentTime >= endTime) {
            this.currentState = nextState;
          }
        }
      }, {
        key: "secondsTillNextQuestion",
        value: function secondsTillNextQuestion() {
          if (!this.nextQuestion) {
            return 0;
          }

          return Math.max(0, this.nextQuestion.movie_time - this.currentTime);
        }
      }, {
        key: "isState",
        value: function isState(state) {
          return this.currentState == state;
        }
      }]);

      return GameService;
    }();

    GameService.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }, {
        type: _electron_service__WEBPACK_IMPORTED_MODULE_6__["ElectronService"]
      }, {
        type: _push_notification_service__WEBPACK_IMPORTED_MODULE_7__["PushNotificationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _statistics_service__WEBPACK_IMPORTED_MODULE_8__["StatisticsService"]
      }];
    };

    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _electron_service__WEBPACK_IMPORTED_MODULE_6__["ElectronService"], _push_notification_service__WEBPACK_IMPORTED_MODULE_7__["PushNotificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _statistics_service__WEBPACK_IMPORTED_MODULE_8__["StatisticsService"]])], GameService);
    /***/
  },

  /***/
  "./src/app/shared/service/push-notification.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/service/push-notification.service.ts ***!
    \*************************************************************/

  /*! exports provided: PushNotificationService */

  /***/
  function srcAppSharedServicePushNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PushNotificationService", function () {
      return PushNotificationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _electron_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./electron.service */
    "./src/app/shared/service/electron.service.ts");

    var PushNotificationService =
    /*#__PURE__*/
    function () {
      function PushNotificationService(electron) {
        _classCallCheck(this, PushNotificationService);

        this.electron = electron;
      }

      _createClass(PushNotificationService, [{
        key: "send",
        value: function send(topic, title, body) {
          var params = [{
            notification: {
              title: title,
              body: body
            },
            topic: topic
          }];
          this.electron.notifyClient('push-notification', {
            action: 'send',
            params: params
          });
        }
      }, {
        key: "subscribe",
        value: function subscribe(topic, token) {
          if (!token) return;
          var params = [[token], topic];
          this.electron.notifyClient('push-notification', {
            action: 'subscribeToTopic',
            params: params
          });
        }
      }]);

      return PushNotificationService;
    }();

    PushNotificationService.ctorParameters = function () {
      return [{
        type: _electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]
      }];
    };

    PushNotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]])], PushNotificationService);
    /***/
  },

  /***/
  "./src/app/shared/service/statistics.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/service/statistics.service.ts ***!
    \******************************************************/

  /*! exports provided: StatisticsService */

  /***/
  function srcAppSharedServiceStatisticsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsService", function () {
      return StatisticsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/BehaviorSubject */
    "./node_modules/rxjs-compat/_esm2015/BehaviorSubject.js");

    var StatisticsService =
    /*#__PURE__*/
    function () {
      function StatisticsService() {
        _classCallCheck(this, StatisticsService);

        this.drinkers = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
      }

      _createClass(StatisticsService, [{
        key: "getResults",
        value: function getResults(players) {
          var correct = [];
          var incorrect = [];
          var missed = [];
          var drinks = [];
          var speed = [];
          var streak = [];
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = players[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var player = _step5.value;
              this.addStat(correct, player.correct_answers, player);
              this.addStat(drinks, player.drinks, player);
              this.addStat(incorrect, player.incorrect_answers, player);
              this.addStat(missed, player.missed_answers, player);
              this.addStat(speed, Math.floor(player.answer_speed / 100), player);
              this.addStat(streak, player.best_streak, player);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return {
            correct: this.flattenResults(correct).reverse(),
            drinks: this.flattenResults(drinks).reverse(),
            incorrect: this.flattenResults(incorrect).reverse(),
            missed: this.flattenResults(missed).reverse(),
            speed: this.flattenResults(speed),
            streak: this.flattenResults(streak).reverse()
          };
        }
      }, {
        key: "process",
        value: function process(question, answers, players) {
          var drinkers = [];
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = players[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var player = _step6.value;
              var answer = answers[player.id];
              var isDrinking = this.updatePlayer(question, answer, player);
              if (isDrinking) drinkers.push(player);
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          this.drinkers.next(drinkers);
        }
      }, {
        key: "addStat",
        value: function addStat(rankings, score, player) {
          if (!rankings[score]) rankings[score] = [];
          rankings[score].push(player);
        }
      }, {
        key: "flattenResults",
        value: function flattenResults(results) {
          var flattenedResults = [];
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = results[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var result = _step7.value;
              if (result) flattenedResults.push(result);
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          return flattenedResults;
        }
      }, {
        key: "updatePlayer",
        value: function updatePlayer(question, answer_index, player) {
          var isWrong = false;

          if (answer_index) {
            var answer = question.answers[answer_index];

            if (answer && answer.is_correct) {
              this.increment(player, 'correct_answers');
              this.increment(player, 'current_streak');
              player.best_streak = this.max(player.current_streak, player.best_streak);
            } else {
              this.increment(player, 'incorrect_answers');
              isWrong = true;
            }
          } else {
            this.increment(player, 'missed_answers');
            isWrong = true;
          }

          if (isWrong) {
            player.current_streak = 0;
            this.increment(player, 'drinks');
          }

          player.answer_speed = this.getAnswerSpeed(player, answer_index);
          return isWrong;
        }
      }, {
        key: "increment",
        value: function increment(player, index) {
          var amount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          if (!Number.isInteger(player[index])) player[index] = 0;
          player[index] += amount;
        }
      }, {
        key: "max",
        value: function max(value1, value2) {
          if (!Number.isInteger(value1)) value1 = 0;
          if (!Number.isInteger(value2)) value2 = 0;
          return Math.max(value1, value2);
        }
      }, {
        key: "getAnswerSpeed",
        value: function getAnswerSpeed(player, answer) {
          var numQuestions = player.correct_answers + player.incorrect_answers + player.missed_answers;
          var answerSpeed = answer ? answer.speed : 10000;
          if (!player.answer_speed) player.answer_speed = 0;
          return player.answer_speed + (answerSpeed - player.answer_speed) / numQuestions;
        }
      }]);

      return StatisticsService;
    }();

    StatisticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StatisticsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/rmill/sandbox/personal/movie-drinking-game-desktop-client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map