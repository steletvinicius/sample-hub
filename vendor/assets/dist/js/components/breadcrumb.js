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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components/breadcrumb.entry.js");
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

/***/ "./src/js/components/breadcrumb.entry.js":
/*!***********************************************!*\
  !*** ./src/js/components/breadcrumb.entry.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pug_views_components_breadcrumb_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pug/views/components/breadcrumb.pug */ "./src/pug/views/components/breadcrumb.pug");
/* harmony import */ var _scss_components_breadcrumb_entry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scss/components/breadcrumb.entry.scss */ "./src/scss/components/breadcrumb.entry.scss");
/* harmony import */ var _scss_components_breadcrumb_entry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_breadcrumb_entry_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb */ "./src/js/components/breadcrumb.js");




/***/ }),

/***/ "./src/js/components/breadcrumb.js":
/*!*****************************************!*\
  !*** ./src/js/components/breadcrumb.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var BRBreadcrumb = /*#__PURE__*/function () {
  function BRBreadcrumb(name, component) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BRBreadcrumb);

    this.name = name;
    this.component = component;

    this._setBehavior();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BRBreadcrumb, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      this._insertExpandButton();

      this._setView();

      window.addEventListener('resize', function (event) {
        _this._setView();
      });
    }
  }, {
    key: "_setView",
    value: function _setView() {
      this._expand();

      var _iterator = _createForOfIteratorHelper(this.component.querySelectorAll('.crumb-list')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var crumbList = _step.value;
          var crumbs = crumbList.querySelectorAll('.crumb');

          if (window.innerWidth < 576) {
            for (var i = crumbs.length - 3; i > 0; i--) {
              crumbs[i].classList.add('d-none');
            }
          } else {
            for (var _i = crumbs.length - 3; _i > 0; _i--) {
              if (crumbList.scrollWidth > crumbList.offsetWidth) {
                crumbs[_i].classList.add('d-none');
              }
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_insertExpandButton",
    value: function _insertExpandButton() {
      var crumb = this._createCrumb();

      var _iterator2 = _createForOfIteratorHelper(this.component.querySelectorAll('.crumb-list')),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var crumbList = _step2.value;
          var crumbs = crumbList.querySelectorAll('.crumb');

          if (crumbList.scrollWidth > crumbList.offsetWidth) {
            crumbList.insertBefore(crumb, crumbs[crumbs.length - 1]);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "_expand",
    value: function _expand(event) {
      var _iterator3 = _createForOfIteratorHelper(this.component.querySelectorAll('.crumb-list')),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var crumbList = _step3.value;

          var _iterator4 = _createForOfIteratorHelper(crumbList.querySelectorAll('.crumb')),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var crumb = _step4.value;

              if (crumb.classList.contains('d-none')) {
                crumb.classList.remove('d-none');
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (event) {
        event.currentTarget.classList.add('d-none');
      }
    }
  }, {
    key: "_createCrumb",
    value: function _createCrumb() {
      var _this2 = this;

      var crumb = document.createElement('li');
      crumb.classList.add('crumb');
      crumb.setAttribute('expand', '');
      var chevronIcon = document.createElement('i');
      chevronIcon.classList.add('icon', 'fas', 'fa-chevron-right');
      var button = document.createElement('button');
      button.classList.add('br-button', 'circle', 'small');
      button.setAttribute('type', 'button');
      button.setAttribute('aria-label', 'Expande o conteúdo do breadcrumb');
      var ellipsisIcon = document.createElement('i');
      ellipsisIcon.classList.add('fas', 'fa-ellipsis-h');
      crumb.appendChild(chevronIcon);
      button.appendChild(ellipsisIcon);
      crumb.appendChild(button);
      crumb.addEventListener('click', function (event) {
        _this2._expand(event);
      });
      return crumb;
    }
  }]);

  return BRBreadcrumb;
}();

var breadcrumbList = [];

var _iterator5 = _createForOfIteratorHelper(window.document.querySelectorAll('.br-breadcrumb')),
    _step5;

try {
  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
    var brBreadcrumb = _step5.value;
    breadcrumbList.push(new BRBreadcrumb('br-breadcrumb', brBreadcrumb));
  }
} catch (err) {
  _iterator5.e(err);
} finally {
  _iterator5.f();
}

/* harmony default export */ __webpack_exports__["default"] = (BRBreadcrumb);

/***/ }),

/***/ "./src/pug/views/components/breadcrumb.pug":
/*!*************************************************!*\
  !*** ./src/pug/views/components/breadcrumb.pug ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "components/breadcrumb.html");

/***/ }),

/***/ "./src/scss/components/breadcrumb.entry.scss":
/*!***************************************************!*\
  !*** ./src/scss/components/breadcrumb.entry.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=breadcrumb.js.map