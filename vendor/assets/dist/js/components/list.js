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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components/list.entry.js");
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

/***/ "./src/js/components/list.entry.js":
/*!*****************************************!*\
  !*** ./src/js/components/list.entry.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pug_views_components_list_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pug/views/components/list.pug */ "./src/pug/views/components/list.pug");
/* harmony import */ var _scss_components_list_entry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scss/components/list.entry.scss */ "./src/scss/components/list.entry.scss");
/* harmony import */ var _scss_components_list_entry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_list_entry_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/js/components/list.js");




/***/ }),

/***/ "./src/js/components/list.js":
/*!***********************************!*\
  !*** ./src/js/components/list.js ***!
  \***********************************/
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

var BRList = /*#__PURE__*/function () {
  function BRList(name, component) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BRList);

    this.name = name;
    this.component = component;
    this.collapsible = this.name === 'br-list-collapsible';
    this.checkable = this.name === 'br-list-checkable';
    this.unique = component.hasAttribute('unique');
    this.horizontal = component.hasAttribute('horizontal');
    this.cols = this.horizontal ? component.querySelectorAll('.col') : [];
    this.itens = component.querySelectorAll(':scope > .item'); // suporte a colunas do bootstrap dentro da lista

    if (this.itens.length === 0) this.itens = component.querySelectorAll('div > .item');

    this._setBehavior();
  } // eslint-disable-next-line complexity


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BRList, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      if (this.collapsible) {
        this._closeAllItens();

        this.itens.forEach(function (item) {
          item.addEventListener('click', function (event) {
            _this._toggle(event, item);
          });
        });
      }

      if (this.checkable) {
        this.itens.forEach(function (item) {
          _this._setSelected(item);

          if (!item.hasAttribute('disabled')) {
            item.querySelector('.br-checkbox > input').addEventListener('click', function (event) {
              if (event.target.getAttribute('type') === 'checkbox') {
                _this._check(event, item);
              }
            });
          }
        });
      }

      if (this.cols.length > 0) {
        var n = this.cols.length;
        var pos = n > 6 && n % 2 === 1 ? n + 1 : n;
        var resto = pos / Math.ceil(pos / 6);
        var equal = 100 / resto;
        this.cols.forEach(function (col) {
          col.style.flexBasis = "".concat(equal, "%");
        });
      }
    }
  }, {
    key: "_toggle",
    value: function _toggle(event, item) {
      if (!item.hasAttribute('active')) {
        if (this.unique) this._closeAllItens();
      }

      item.toggleAttribute('active');
      var icon = item.querySelector('.fa-angle-down') ? item.querySelector('.fa-angle-down') : item.querySelector('.fa-angle-up');

      if (icon) {
        icon.classList.toggle('fa-angle-down');
        icon.classList.toggle('fa-angle-up');
      }
    }
  }, {
    key: "_closeAllItens",
    value: function _closeAllItens() {
      this.itens.forEach(function (item) {
        item.removeAttribute('active');
        var icon = item.querySelector('.fa-angle-down') ? item.querySelector('.fa-angle-down') : item.querySelector('.fa-angle-up');

        if (icon) {
          icon.classList.add('fa-angle-down');
          icon.classList.remove('fa-angle-up');
        }
      });
    }
  }, {
    key: "_check",
    value: function _check(event, item) {
      item.classList.toggle('selected');

      this._setSelected(item);
    }
  }, {
    key: "_setSelected",
    value: function _setSelected(item) {
      var brCheckbox = item.querySelector('.br-checkbox');
      var brCheckboxInput = brCheckbox.querySelector('input');
      var selected = item.classList.contains('selected');

      if (brCheckbox) {
        if (selected) {
          brCheckbox.classList.add('is-inverted');
          brCheckboxInput.setAttribute('checked', '');
          brCheckboxInput.checked = true;
        } else {
          brCheckbox.classList.remove('is-inverted');
          brCheckboxInput.removeAttribute('checked');
          brCheckboxInput.checked = false;
        }
      }
    }
  }]);

  return BRList;
}();

var listList = [];

var _iterator = _createForOfIteratorHelper(window.document.querySelectorAll('.br-list[collapsible]')),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var brList = _step.value;
    listList.push(new BRList('br-list-collapsible', brList));
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var _iterator2 = _createForOfIteratorHelper(window.document.querySelectorAll('.br-list[checkable]')),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _brList = _step2.value;
    listList.push(new BRList('br-list-checkable', _brList));
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

/* harmony default export */ __webpack_exports__["default"] = (BRList);

/***/ }),

/***/ "./src/pug/views/components/list.pug":
/*!*******************************************!*\
  !*** ./src/pug/views/components/list.pug ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "components/list.html");

/***/ }),

/***/ "./src/scss/components/list.entry.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/list.entry.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=list.js.map