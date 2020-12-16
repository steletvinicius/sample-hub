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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components/table.entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/js/components/table.entry.js":
/*!******************************************!*\
  !*** ./src/js/components/table.entry.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pug_views_components_table_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pug/views/components/table.pug */ "./src/pug/views/components/table.pug");
/* harmony import */ var _scss_components_table_entry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scss/components/table.entry.scss */ "./src/scss/components/table.entry.scss");
/* harmony import */ var _scss_components_table_entry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_table_entry_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table */ "./src/js/components/table.js");




/***/ }),

/***/ "./src/js/components/table.js":
/*!************************************!*\
  !*** ./src/js/components/table.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable complexity */
var BRTable = /*#__PURE__*/function () {
  function BRTable(name, component, sequence) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BRTable);

    this.name = name;
    this.component = component;
    this._sequence = sequence;

    this._setBehavior();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BRTable, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      this._cloneHeader();

      this._setHeaderWidth();

      this._toogleSearch();

      this._toogleGrid();

      this._setClickActions();
    }
  }, {
    key: "_cloneHeader",
    value: function _cloneHeader() {
      var _iterator = _createForOfIteratorHelper(this.component.querySelectorAll('.responsive')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var responsive = _step.value;

          this._setSyncScroll(responsive);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var scrollerTag = document.createElement('div');

      this._setSyncScroll(scrollerTag);

      scrollerTag.classList.add('scroller');

      var _iterator2 = _createForOfIteratorHelper(this.component.querySelectorAll('table thead tr th')),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var header = _step2.value;
          var clonedHeader = document.createElement('div');
          clonedHeader.classList.add('item');
          clonedHeader.innerHTML = header.innerHTML;

          if (header.offsetWidth) {
            clonedHeader.style.flex = "1 0 ".concat(header.offsetWidth, "px");
          }

          scrollerTag.appendChild(clonedHeader);

          if (clonedHeader.firstElementChild) {
            if (clonedHeader.firstElementChild.classList.contains('br-checkbox')) {
              var clonedCheckboxId = "headers-".concat(this.component.id, "-check-all");

              var _iterator4 = _createForOfIteratorHelper(clonedHeader.firstElementChild.querySelectorAll('input')),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var checkboxInput = _step4.value;
                  checkboxInput.id = clonedCheckboxId;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              var _iterator5 = _createForOfIteratorHelper(clonedHeader.firstElementChild.querySelectorAll('label')),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var checkboxLabel = _step5.value;
                  checkboxLabel.setAttribute('for', clonedCheckboxId);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var headersTag = document.createElement('div');
      headersTag.classList.add('headers');
      headersTag.appendChild(scrollerTag);
      var isResponsive = false;

      var _iterator3 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-table > div')),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var child = _step3.value;

          if (child.classList.contains('responsive')) {
            child.insertAdjacentElement('beforebegin', headersTag);
            isResponsive = true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (!isResponsive) {
        this.component.appendChild(headersTag);
      }
    }
  }, {
    key: "_setSyncScroll",
    value: function _setSyncScroll(element) {
      element.classList.add('syncscroll');
      element.setAttribute('name', "table-".concat(this._sequence));
      element.setAttribute('style', 'overflow-y: hidden');
      element.setAttribute('tabindex', 0);
    }
  }, {
    key: "_setHeaderWidth",
    value: function _setHeaderWidth() {
      var _iterator6 = _createForOfIteratorHelper(this.component.querySelectorAll('.headers > div')),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var clonedHeader = _step6.value;

          var _iterator7 = _createForOfIteratorHelper(this.component.querySelectorAll('table thead tr th').entries()),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _step7$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step7.value, 2),
                  index = _step7$value[0],
                  header = _step7$value[1];

              clonedHeader.children[index].style.flex = "1 0 ".concat(header.offsetWidth, "px");
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "_toogleSearch",
    value: function _toogleSearch() {
      var _this = this;

      var _iterator8 = _createForOfIteratorHelper(this.component.querySelectorAll('.search-bar')),
          _step8;

      try {
        var _loop = function _loop() {
          var searchBar = _step8.value;

          var _iterator9 = _createForOfIteratorHelper(_this.component.querySelectorAll('.search-trigger')),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var searchTrigger = _step9.value;
              searchTrigger.addEventListener('click', function () {
                searchBar.classList.add('is-active');
              });
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          var _iterator10 = _createForOfIteratorHelper(searchBar.querySelectorAll('.search-close')),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var searchClose = _step10.value;
              searchClose.addEventListener('click', function () {
                searchBar.classList.remove('is-active');
              });
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        };

        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }, {
    key: "_toogleGrid",
    value: function _toogleGrid() {
      var _this2 = this;

      var _iterator11 = _createForOfIteratorHelper(this.component.querySelectorAll('.grid-large-trigger')),
          _step11;

      try {
        var _loop2 = function _loop2() {
          var gridLTrigger = _step11.value;
          gridLTrigger.addEventListener('click', function () {
            _this2.component.classList.remove('is-grid-small');

            gridLTrigger.closest('.top-bar').querySelector('.grid-small-trigger').classList.remove('active');
            gridLTrigger.classList.add('active');
          });
        };

        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      var _iterator12 = _createForOfIteratorHelper(this.component.querySelectorAll('.grid-small-trigger')),
          _step12;

      try {
        var _loop3 = function _loop3() {
          var gridSTrigger = _step12.value;
          gridSTrigger.addEventListener('click', function () {
            _this2.component.classList.add('is-grid-small');

            gridSTrigger.closest('.top-bar').querySelector('.grid-large-trigger').classList.remove('active');
            gridSTrigger.classList.add('active');
          });
        };

        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  }, {
    key: "_setClickActions",
    value: function _setClickActions() {
      var _this3 = this;

      var headerCheckbox = this.component.querySelector(".headers [type='checkbox']");
      var tableCheckboxes = this.component.querySelectorAll("tbody [type='checkbox']");
      var selectedBar = this.component.querySelector('.selected-bar');
      var infoSelectAll = this.component.querySelector('.selected-bar .info .select-all');

      if (tableCheckboxes) {
        var _iterator13 = _createForOfIteratorHelper(tableCheckboxes),
            _step13;

        try {
          var _loop4 = function _loop4() {
            var checkbox = _step13.value;
            checkbox.addEventListener('click', function () {
              _this3._checkRow(checkbox, selectedBar, tableCheckboxes, headerCheckbox);
            });
          };

          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            _loop4();
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      }

      if (headerCheckbox) {
        headerCheckbox.addEventListener('click', function () {
          _this3._checkAllTable(selectedBar, tableCheckboxes, headerCheckbox);
        });
      }

      if (infoSelectAll) {
        infoSelectAll.addEventListener('click', function () {
          _this3._checkAllTable(selectedBar, tableCheckboxes, headerCheckbox);
        });
      }
    }
  }, {
    key: "_setRow",
    value: function _setRow(checkbox, check) {
      var tr = checkbox.parentNode.parentNode.parentNode;

      if (check) {
        tr.classList.add('is-selected');
        checkbox.parentNode.classList.add('is-inverted');
        checkbox.checked = true;
      } else {
        tr.classList.remove('is-selected');
        checkbox.parentNode.classList.remove('is-inverted');
        checkbox.checked = false;
      }
    }
  }, {
    key: "_checkRow",
    value: function _checkRow(checkbox, selectedBar, tableCheckboxes, headerCheckbox) {
      var check = checkbox.checked;

      this._setRow(checkbox, check);

      this._setSelectedBar(check ? 1 : -1, selectedBar, tableCheckboxes, headerCheckbox);
    }
  }, {
    key: "_checkAllRows",
    value: function _checkAllRows(tableCheckboxes) {
      var _iterator14 = _createForOfIteratorHelper(tableCheckboxes),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var checkbox = _step14.value;

          this._setRow(checkbox, true);
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
  }, {
    key: "_uncheckAllRows",
    value: function _uncheckAllRows(tableCheckboxes) {
      var _iterator15 = _createForOfIteratorHelper(tableCheckboxes),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var checkbox = _step15.value;

          this._setRow(checkbox, false);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }
  }, {
    key: "_checkAllTable",
    value: function _checkAllTable(selectedBar, tableCheckboxes, headerCheckbox) {
      var count = tableCheckboxes.length;
      var infoCount = selectedBar.querySelector('.info .count');
      var total = parseInt(infoCount.innerHTML, 10);

      if (total === count) {
        this._uncheckAllRows(tableCheckboxes);

        count = -1 * count;
      } else {
        this._checkAllRows(tableCheckboxes);
      }

      this._setSelectedBar(count, selectedBar, tableCheckboxes, headerCheckbox);
    }
  }, {
    key: "_setSelectedBar",
    value: function _setSelectedBar(count, selectedBar, tableCheckboxes, headerCheckbox) {
      var infoCount = selectedBar.querySelector('.info .count');
      var infoText = selectedBar.querySelector('.info .text');

      var _selectedBar$querySel = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(selectedBar.querySelector('.info .select-all').children, 1),
          mobileIco = _selectedBar$querySel[0];

      var total = count < 2 ? parseInt(infoCount.innerHTML, 10) + count : count;

      if (total > 0) {
        selectedBar.classList.add('is-active');
        infoCount.innerHTML = total;
        infoText.innerHTML = total > 1 ? 'itens selecionados' : 'item selecionado';
        if (headerCheckbox) headerCheckbox.parentNode.classList.add('is-checking');

        if (mobileIco) {
          mobileIco.classList.add('fa-minus-square');
          mobileIco.classList.remove('fa-check-square');
        }

        if (total === tableCheckboxes.length) {
          if (headerCheckbox) {
            headerCheckbox.checked = true;
            headerCheckbox.parentNode.classList.remove('is-checking');
          }

          if (mobileIco) {
            mobileIco.classList.remove('fa-minus-square');
            mobileIco.classList.add('fa-check-square');
          }
        }
      } else {
        infoCount.innerHTML = 0;

        if (headerCheckbox) {
          headerCheckbox.checked = false;
          headerCheckbox.parentNode.classList.remove('is-checking');
        }

        if (mobileIco) {
          mobileIco.classList.remove('fa-check-square');
          mobileIco.classList.add('fa-minus-square');
        }

        selectedBar.classList.remove('is-active');
      }
    }
    /**
     * @fileoverview syncscroll - scroll several areas simultaniously
     * @version 0.0.3
     *
     * @license MIT, see http://github.com/asvd/intence
     * @copyright 2015 asvd <heliosframework@gmail.com>
     */

  }], [{
    key: "_syncscroll",
    value: function _syncscroll() {
      var scroll = 'scroll';
      var elems = document.getElementsByClassName("sync".concat(scroll));
      var EventListener = 'EventListener';
      var length = 'length';
      var names = {}; // clearing existing listeners

      var i, j, el, found, name;

      for (name in names) {
        if (Object.prototype.hasOwnProperty.call(names, name)) {
          for (i = 0; i < names[name][length]; i++) {
            names[name][i]["remove".concat(EventListener)](scroll, names[name][i].syn, 0);
          }
        }
      } // setting-up the new listeners


      for (i = 0; i < elems[length]; i++) {
        found = j = 0;
        el = elems[i];

        if (!(name = el.getAttribute('name'))) {
          // name attribute is not set
          continue;
        }

        el = el["".concat(scroll, "er")] || el; // needed for intence
        // searching for existing entry in array of names;
        // searching for the element in that entry

        for (; j < (names[name] = names[name] || [])[length]; j++) {
          found |= names[name][j] === el;
        }

        if (!found) {
          names[name].push(el);
        }

        el.eX = el.eY = 0;

        this._elSyn(el, name, scroll, elems, EventListener, length, names);
      }
    }
  }, {
    key: "_elSyn",
    value: function _elSyn(el, name, scroll, elems, EventListener, length, names) {
      var addEventListener = "add".concat(EventListener);
      var client = 'client';
      var Height = 'Height';
      var Left = 'Left';
      var mathRound = Math.round;
      var Top = 'Top';
      var Width = 'Width';
      el[addEventListener](scroll, function () {
        var otherElems = names[name];
        var scrollX = el[scroll + Left];
        var scrollY = el[scroll + Top];
        var xRate = scrollX / (el[scroll + Width] - el[client + Width]);
        var yRate = scrollY / (el[scroll + Height] - el[client + Height]);
        var updateX = scrollX !== el.eX;
        var updateY = scrollY !== el.eY;
        el.eX = scrollX;
        el.eY = scrollY;
        otherElems.forEach(function (element) {
          if (element !== el) {
            if (updateX && mathRound(element[scroll + Left] - (scrollX = element.eX = mathRound(xRate * (element[scroll + Width] - element[client + Width]))))) {
              element[scroll + Left] = scrollX;
            }

            if (updateY && mathRound(element[scroll + Top] - (scrollY = element.eY = mathRound(yRate * (element[scroll + Height] - element[client + Height]))))) {
              element[scroll + Top] = scrollY;
            }
          }
        });
      }, 0);
    }
  }]);

  return BRTable;
}();

var tableList = [];

var _iterator16 = _createForOfIteratorHelper(window.document.querySelectorAll('.br-table').entries()),
    _step16;

try {
  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
    var _step16$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step16.value, 2),
        index = _step16$value[0],
        brTable = _step16$value[1];

    tableList.push(new BRTable('br-table', brTable, index));
  }
} catch (err) {
  _iterator16.e(err);
} finally {
  _iterator16.f();
}

BRTable._syncscroll();

/* harmony default export */ __webpack_exports__["default"] = (BRTable);

/***/ }),

/***/ "./src/pug/views/components/table.pug":
/*!********************************************!*\
  !*** ./src/pug/views/components/table.pug ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "components/table.html");

/***/ }),

/***/ "./src/scss/components/table.entry.scss":
/*!**********************************************!*\
  !*** ./src/scss/components/table.entry.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=table.js.map