/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components/wizard.entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./src/js/components/swipe.js":
/*!************************************!*\
  !*** ./src/js/components/swipe.js ***!
  \************************************/
/*! exports provided: SwipeEventDispatcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeEventDispatcher", function() { return SwipeEventDispatcher; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var SwipeEventDispatcher = /*#__PURE__*/function () {
  function SwipeEventDispatcher(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SwipeEventDispatcher);

    this.evtMap = {
      SWIPE_DOWN: [],
      SWIPE_LEFT: [],
      SWIPE_RIGHT: [],
      SWIPE_UP: []
    };
    this.xDown = null;
    this.yDown = null;
    this.element = element;
    this.options = Object.assign({
      triggerPercent: 0.3
    }, options);
    element.addEventListener('touchstart', function (evt) {
      return _this.handleTouchStart(evt);
    }, false);
    element.addEventListener('touchend', function (evt) {
      return _this.handleTouchEnd(evt);
    }, false);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SwipeEventDispatcher, [{
    key: "on",
    value: function on(evt, cb) {
      this.evtMap[evt].push(cb);
    }
  }, {
    key: "off",
    value: function off(evt, lcb) {
      this.evtMap[evt] = this.evtMap[evt].filter(function (cb) {
        return cb !== lcb;
      });
    }
  }, {
    key: "trigger",
    value: function trigger(evt, data) {
      this.evtMap[evt].map(function (handler) {
        return handler(data);
      });
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(evt) {
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(evt) {
      var deltaX = evt.changedTouches[0].clientX - this.xDown;
      var deltaY = evt.changedTouches[0].clientY - this.yDown;
      var distMoved = Math.abs(Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY);
      var activePct = distMoved / this.element.offsetWidth;

      if (activePct > this.options.triggerPercent) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          deltaX < 0 ? this.trigger('SWIPE_LEFT') : this.trigger('SWIPE_RIGHT');
        } else {
          deltaY > 0 ? this.trigger('SWIPE_DOWN') : this.trigger('SWIPE_UP');
        }
      }
    }
  }]);

  return SwipeEventDispatcher;
}();
/* harmony default export */ __webpack_exports__["default"] = (SwipeEventDispatcher);

/***/ }),

/***/ "./src/js/components/wizard.entry.js":
/*!*******************************************!*\
  !*** ./src/js/components/wizard.entry.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pug_views_components_wizard_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pug/views/components/wizard.pug */ "./src/pug/views/components/wizard.pug");
/* harmony import */ var _scss_components_wizard_entry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scss/components/wizard.entry.scss */ "./src/scss/components/wizard.entry.scss");
/* harmony import */ var _scss_components_wizard_entry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_wizard_entry_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizard */ "./src/js/components/wizard.js");




/***/ }),

/***/ "./src/js/components/wizard.js":
/*!*************************************!*\
  !*** ./src/js/components/wizard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swipe */ "./src/js/components/swipe.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var BRWizard = /*#__PURE__*/function () {
  function BRWizard(name, component) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BRWizard);

    this.name = name;
    this.component = component; // DOM elements

    this.DOMstrings = {
      stepFormPanelClass: 'wizard-panel',
      // stepFormPanels: document.querySelectorAll('.wizard-panel'),
      stepFormPanels: this.component.querySelectorAll('.wizard-panel'),
      stepNextBtnClass: 'wizard-btn-next',
      stepPrevBtnClass: 'wizard-btn-prev',
      // stepsBar: document.querySelector('.wizard-progress'),
      stepsBar: this.component.querySelector('.wizard-progress'),
      stepsBarClass: 'wizard-progress',
      stepsBtnClass: 'wizard-progress-btn',
      // stepsBtns: document.querySelectorAll(`.wizard-progress-btn`),
      stepsBtns: this.component.querySelectorAll('.wizard-progress-btn'),
      // stepsForm: document.querySelector('.wizard-form'),
      stepsForm: this.component.querySelector('.wizard-form')
    }; // remove class from a set of items

    this.removeAttributes = function (elemSet, attrName) {
      elemSet.forEach(function (elem) {
        elem.removeAttribute(attrName);
      });
    }; // return exect parent node of the element


    this.findParent = function (elem, parentClass) {
      var currentNode = elem;

      while (!currentNode.classList.contains(parentClass)) {
        currentNode = currentNode.parentNode;
      }

      return currentNode;
    }; // get active button step number


    this.getActiveStep = function (elem) {
      return Array.from(_this.DOMstrings.stepsBtns).indexOf(elem);
    }; // set all steps before clicked (and clicked too) to active


    this.setActiveStep = function (activeStepNum) {
      // remove active state from all the state
      _this.removeAttributes(_this.DOMstrings.stepsBtns, 'active');

      _this.removeAttributes(_this.DOMstrings.stepsBtns, 'inactive'); // set picked items to active


      _this.DOMstrings.stepsBtns.forEach(function (elem, index) {
        if (index === activeStepNum) {
          elem.setAttribute('active', '');
        }

        if (index < activeStepNum) {
          elem.setAttribute('inactive', '');
        }
      });
    }; // get active panel


    this.getActivePanel = function () {
      var activePanel;

      _this.DOMstrings.stepFormPanels.forEach(function (elem) {
        if (elem.hasAttribute('active')) {
          activePanel = elem;
        }
      });

      return activePanel;
    }; // open active panel (and close unactive panels)


    this.setActivePanel = function (activePanelNum) {
      // remove active class from all the panels
      _this.removeAttributes(_this.DOMstrings.stepFormPanels, 'active'); // show active panel


      _this.DOMstrings.stepFormPanels.forEach(function (elem, index) {
        if (index === activePanelNum) {
          elem.setAttribute('active', '');
        }
      });
    };

    this.setStepsNum = function () {
      _this.DOMstrings.stepsBtns.forEach(function (elem, index) {
        elem.setAttribute('step', index + 1);
      });
    };

    this.setStep = function (num) {
      var activeStep = num <= _this.DOMstrings.stepsBtns.length ? num - 1 : 0;

      _this.setActiveStep(activeStep);

      _this.setActivePanel(activeStep);
    };

    this.collapseSteps = function () {
      _this.component.setAttribute('collapsed', '');
    };

    this.expandSteps = function () {
      _this.component.removeAttribute('collapsed');
    };

    this._setBehavior();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BRWizard, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this2 = this;

      // STEPS BAR CLICK FUNCTION
      this.DOMstrings.stepsBar.addEventListener('click', function (e) {
        // check if click target is a step button
        var eventTarget = e.target;

        if (!eventTarget.classList.contains("".concat(_this2.DOMstrings.stepsBtnClass))) {
          e.target.parentNode.click();
          return;
        } // get active button step number


        var activeStep = _this2.getActiveStep(eventTarget); // set all steps before clicked (and clicked too) to active


        _this2.setActiveStep(activeStep); // open active panel


        _this2.setActivePanel(activeStep);
      }); // PREV/NEXT BTNS CLICK

      this.DOMstrings.stepsForm.addEventListener('click', function (e) {
        var eventTarget = e.target; // check if we clicked on `PREV` or NEXT` buttons

        if (!(eventTarget.classList.contains("".concat(_this2.DOMstrings.stepPrevBtnClass)) || eventTarget.classList.contains("".concat(_this2.DOMstrings.stepNextBtnClass)))) {
          return;
        } // find active panel


        var activePanel = _this2.findParent(eventTarget, "".concat(_this2.DOMstrings.stepFormPanelClass));

        var activePanelNum = Array.from(_this2.DOMstrings.stepFormPanels).indexOf(activePanel); // set active step and active panel onclick

        if (eventTarget.classList.contains("".concat(_this2.DOMstrings.stepPrevBtnClass))) {
          activePanelNum -= 1;
          activePanel.style.left = '1%';
        } else {
          activePanelNum += 1;
          activePanel.style.left = '-1%';
        }

        _this2.setActiveStep(activePanelNum);

        _this2.setActivePanel(activePanelNum);
      }); // Set Steps label number

      this.setStepsNum(); // Set default active step

      if (this.component.hasAttribute('step')) {
        this.setStep(this.component.getAttribute('step'));
      } // set steps buttons grid style if it needs to scroll horizontaly


      if (this.component.hasAttribute('scroll') && !this.component.hasAttribute('vertical')) {
        var stepsWidth = Math.round(100 / this.DOMstrings.stepsBtns.length) - 0.5;
        this.DOMstrings.stepsBar.style.gridTemplateColumns = "repeat(auto-fit, minmax(100px, ".concat(stepsWidth, "% ))");
      } // Swipe


      var dispatcher = new _swipe__WEBPACK_IMPORTED_MODULE_2__["default"](this.DOMstrings.stepsBar);

      if (this.component.hasAttribute('vertical')) {
        dispatcher.on('SWIPE_LEFT', function () {
          _this2.collapseSteps();
        });
        dispatcher.on('SWIPE_RIGHT', function () {
          _this2.expandSteps();
        });

        this.DOMstrings.stepsForm.ontouchstart = function () {
          _this2.collapseSteps();
        };
      } else {
        this.DOMstrings.stepsBar.ontouchstart = function () {
          _this2.expandSteps();
        };

        this.DOMstrings.stepsForm.ontouchstart = function () {
          _this2.collapseSteps();
        };
      }
    }
  }]);

  return BRWizard;
}();

var wizardList = [];

var _iterator = _createForOfIteratorHelper(window.document.querySelectorAll('.br-wizard')),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var brWizard = _step.value;
    wizardList.push(new BRWizard('br-wizard', brWizard));
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/* harmony default export */ __webpack_exports__["default"] = (BRWizard);

/***/ }),

/***/ "./src/pug/views/components/wizard.pug":
/*!*********************************************!*\
  !*** ./src/pug/views/components/wizard.pug ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "components/wizard.html");

/***/ }),

/***/ "./src/scss/components/wizard.entry.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/wizard.entry.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=wizard.js.map