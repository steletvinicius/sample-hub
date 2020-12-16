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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components/select.entry.js");
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

/***/ "./src/js/components/select.entry.js":
/*!*******************************************!*\
  !*** ./src/js/components/select.entry.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pug_views_components_select_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pug/views/components/select.pug */ "./src/pug/views/components/select.pug");
/* harmony import */ var _scss_components_select_entry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scss/components/select.entry.scss */ "./src/scss/components/select.entry.scss");
/* harmony import */ var _scss_components_select_entry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_select_entry_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select */ "./src/js/components/select.js");




/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
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

var BRSelect = /*#__PURE__*/function () {
  function BRSelect(name, component) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BRSelect);

    this.name = name;
    this.component = component;
    this.multiple = component.hasAttribute('multiple');
    this.optionsList = this._setOptionsList();

    this._setBehavior();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BRSelect, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      this._setDropdownBehavior();

      this._setKeyboardBehavior();

      this._setSelectionBehavior();

      this._setFilterBehavior();
    }
  }, {
    key: "_setOptionsList",
    value: function _setOptionsList() {
      var optionsList = [];

      var _iterator = _createForOfIteratorHelper(this.component.querySelectorAll('.br-list .item')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          var _iterator2 = _createForOfIteratorHelper(item.querySelectorAll('.content .br-radio label, .content .br-checkbox label')),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var label = _step2.value;
              var option = {
                value: label.innerText,
                selected: false,
                focus: false,
                visible: true
              };
              optionsList.push(option);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return optionsList;
    }
  }, {
    key: "_setDropdownBehavior",
    value: function _setDropdownBehavior() {
      var _this = this;

      var _iterator3 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-input input[type="text"]')),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var input = _step3.value;
          input.addEventListener('focus', function () {
            _this._openSelect();

            _this._resetFocus();
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var _iterator4 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-input button[data-trigger]')),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var trigger = _step4.value;
          trigger.addEventListener('click', function () {
            var _iterator5 = _createForOfIteratorHelper(_this.component.querySelectorAll('.br-list')),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var list = _step5.value;

                if (list.hasAttribute('expanded')) {
                  _this._closeSelect();
                } else {
                  _this._openSelect();
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          });
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      window.document.addEventListener('click', function (event) {
        if (!_this.component.contains(event.target)) {
          _this._closeSelect();
        }
      });
    }
  }, {
    key: "_setKeyboardBehavior",
    value: function _setKeyboardBehavior() {
      var _this2 = this;

      var _iterator6 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-input input[type="text"]')),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var input = _step6.value;
          input.addEventListener('keydown', function (event) {
            if (event.keyCode === 40) {
              event.preventDefault();

              var _iterator8 = _createForOfIteratorHelper(_this2.component.querySelectorAll('.br-list')),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var list = _step8.value;
                  list.focus();

                  if (list === document.activeElement) {
                    _this2._getNextItem().focus();
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          });
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var _iterator7 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-list')),
          _step7;

      try {
        var _loop = function _loop() {
          var list = _step7.value;
          list.addEventListener('keydown', function (event) {
            event.preventDefault();

            switch (event.keyCode) {
              case 9:
                _this2._closeSelect();

                _this2._resetFocus();

                break;

              case 27:
                _this2._closeSelect();

                break;

              case 32:
                var _iterator9 = _createForOfIteratorHelper(list.querySelectorAll('.item').entries()),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var _step9$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step9.value, 2),
                        index = _step9$value[0],
                        item = _step9$value[1];

                    if (_this2.optionsList[index].focus) {
                      var _iterator10 = _createForOfIteratorHelper(item.querySelectorAll('.content .br-radio input[type="radio"], .content .br-checkbox input[type="checkbox"]')),
                          _step10;

                      try {
                        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                          var check = _step10.value;
                          check.click();
                        }
                      } catch (err) {
                        _iterator10.e(err);
                      } finally {
                        _iterator10.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }

                break;

              case 38:
                _this2._getPreviousItem().focus();

                break;

              case 40:
                _this2._getNextItem().focus();

                break;
            }
          });
        };

        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "_setSelectionBehavior",
    value: function _setSelectionBehavior() {
      var _this3 = this;

      var _iterator11 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-list .item').entries()),
          _step11;

      try {
        var _loop2 = function _loop2() {
          var _step11$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step11.value, 2),
              index = _step11$value[0],
              item = _step11$value[1];

          var _iterator12 = _createForOfIteratorHelper(item.querySelectorAll('.content .br-radio input[type="radio"], .content .br-checkbox input[type="checkbox"]')),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var check = _step12.value;
              check.addEventListener('click', function (event) {
                if (!_this3.multiple) {
                  var _iterator13 = _createForOfIteratorHelper(_this3.component.querySelectorAll('.br-list .item').entries()),
                      _step13;

                  try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                      var _step13$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step13.value, 2),
                          index2 = _step13$value[0],
                          item2 = _step13$value[1];

                      _this3._removeSelected(index2, item2);
                    }
                  } catch (err) {
                    _iterator13.e(err);
                  } finally {
                    _iterator13.f();
                  }

                  _this3._setSelected(index, item);

                  _this3._closeSelect();
                } else if (!event.currentTarget.hasAttribute('checked')) {
                  _this3._setSelected(index, item);
                } else {
                  _this3._removeSelected(index, item);
                }

                if (item.hasAttribute('data-all')) {
                  _this3._setSelectAll(item);
                }
              });
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        };

        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  }, {
    key: "_setFilterBehavior",
    value: function _setFilterBehavior() {
      var _this4 = this;

      var _iterator14 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-input input[type="text"]')),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var input = _step14.value;
          input.addEventListener('input', function (event) {
            var allHidden = true;

            _this4._filter(event.currentTarget.value);

            var _iterator15 = _createForOfIteratorHelper(_this4.optionsList),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var option = _step15.value;

                if (option.visible) {
                  allHidden = false;
                }
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }

            if (allHidden) {
              event.currentTarget.value = event.currentTarget.value.slice(0, -1);

              _this4._filter(event.currentTarget.value);
            }
          });
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
  }, {
    key: "_filter",
    value: function _filter(value) {
      var _iterator16 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-list .item').entries()),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var _step16$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step16.value, 2),
              index = _step16$value[0],
              item = _step16$value[1];

          if (this.optionsList[index].value.toUpperCase().indexOf(value.toUpperCase()) === -1) {
            item.classList.add('d-none');
            this.optionsList[index].visible = false;
          } else {
            item.classList.remove('d-none');
            this.optionsList[index].visible = true;
          }
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }
  }, {
    key: "_setSelectAll",
    value: function _setSelectAll(item) {
      var _iterator17 = _createForOfIteratorHelper(item.querySelectorAll('.content .br-checkbox input[type="checkbox"]')),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var check = _step17.value;

          if (!check.hasAttribute('checked')) {
            var _iterator18 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-list .item')),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var item2 = _step18.value;

                var _iterator19 = _createForOfIteratorHelper(item2.querySelectorAll('.content .br-checkbox input[type="checkbox"]')),
                    _step19;

                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var check2 = _step19.value;

                    if (check2.hasAttribute('checked')) {
                      check2.click();
                    }
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          } else {
            var _iterator20 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-list .item')),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var _item = _step20.value;

                var _iterator21 = _createForOfIteratorHelper(_item.querySelectorAll('.content .br-checkbox input[type="checkbox"]')),
                    _step21;

                try {
                  for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                    var _check = _step21.value;

                    if (!_check.hasAttribute('checked')) {
                      _check.click();
                    }
                  }
                } catch (err) {
                  _iterator21.e(err);
                } finally {
                  _iterator21.f();
                }
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
    }
  }, {
    key: "_setSelected",
    value: function _setSelected(index, item) {
      item.classList.add('selected');

      var _iterator22 = _createForOfIteratorHelper(item.querySelectorAll('.content .br-radio, .content .br-checkbox')),
          _step22;

      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var check = _step22.value;

          var _iterator23 = _createForOfIteratorHelper(check.querySelectorAll('input[type="radio"], input[type="checkbox"]')),
              _step23;

          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var input = _step23.value;
              input.setAttribute('checked', '');
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }

      this.optionsList[index].selected = true;

      this._setInput();
    }
  }, {
    key: "_removeSelected",
    value: function _removeSelected(index, item) {
      item.classList.remove('selected');

      var _iterator24 = _createForOfIteratorHelper(item.querySelectorAll('.content .br-radio, .content .br-checkbox')),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var check = _step24.value;

          var _iterator25 = _createForOfIteratorHelper(check.querySelectorAll('input[type="radio"], input[type="checkbox"')),
              _step25;

          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var input = _step25.value;
              input.removeAttribute('checked');
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }

          this.optionsList[index].selected = false;

          this._setInput();
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }
  }, {
    key: "_setInput",
    value: function _setInput() {
      var _iterator26 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-input input[type="text"]')),
          _step26;

      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var input = _step26.value;

          if (!this.multiple) {
            input.value = this.selected;
          } else if (this.selected.length === 0) {
            input.value = '';
          } else if (this.selected.length === 1) {
            input.value = this.selected[0];
          } else {
            input.value = this.selected[0] + ' + (' + (this.selected.length - 1) + ')';
          }
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
    }
  }, {
    key: "_getNextItem",
    value: function _getNextItem() {
      var list = this.component.querySelectorAll('.br-list .item');

      for (var iFocused = 0; iFocused < this.optionsList.length; iFocused++) {
        if (this.optionsList[iFocused].focus) {
          for (var iVisible = iFocused + 1; iVisible < this.optionsList.length; iVisible++) {
            if (this.optionsList[iVisible].visible) {
              break;
            }
          }

          break;
        }
      }

      if (iFocused === this.optionsList.length) {
        var _iterator27 = _createForOfIteratorHelper(this.optionsList.entries()),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _step27$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step27.value, 2),
                index = _step27$value[0],
                option = _step27$value[1];

            if (option.visible) {
              option.focus = true;
              return list[index];
            }
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }
      } else if (iVisible < this.optionsList.length) {
        this.optionsList[iFocused].focus = false;
        this.optionsList[iVisible].focus = true;
        return list[iVisible];
      } else {
        return list[iFocused];
      }
    }
  }, {
    key: "_getPreviousItem",
    value: function _getPreviousItem() {
      var list = this.component.querySelectorAll('.br-list .item');

      for (var iFocused = 0; iFocused < this.optionsList.length; iFocused++) {
        if (this.optionsList[iFocused].focus) {
          for (var iVisible = iFocused - 1; iVisible > 0; iVisible--) {
            if (this.optionsList[iVisible].visible) {
              break;
            }
          }

          break;
        }
      }

      if (iFocused === 0) {
        return list[iFocused];
      } else {
        this.optionsList[iFocused].focus = false;
        this.optionsList[iVisible].focus = true;
        return list[iVisible];
      }
    }
  }, {
    key: "_resetInput",
    value: function _resetInput() {
      var _iterator28 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-input input[type="text"]')),
          _step28;

      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var input = _step28.value;
          input.value = '';
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }
    }
  }, {
    key: "_resetFocus",
    value: function _resetFocus() {
      var _iterator29 = _createForOfIteratorHelper(this.optionsList),
          _step29;

      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var option = _step29.value;
          option.focus = false;
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }
    }
  }, {
    key: "_resetVisible",
    value: function _resetVisible() {
      var list = this.component.querySelectorAll('.br-list .item');

      var _iterator30 = _createForOfIteratorHelper(this.optionsList.entries()),
          _step30;

      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var _step30$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step30.value, 2),
              index = _step30$value[0],
              option = _step30$value[1];

          option.visible = true;
          list[index].classList.remove('d-none');
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
    }
  }, {
    key: "_openSelect",
    value: function _openSelect() {
      var _iterator31 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-list')),
          _step31;

      try {
        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
          var list = _step31.value;
          list.setAttribute('expanded', '');
        }
      } catch (err) {
        _iterator31.e(err);
      } finally {
        _iterator31.f();
      }

      var _iterator32 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-input button svg')),
          _step32;

      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var icon = _step32.value;
          icon.classList.remove('fa-angle-down');
          icon.classList.add('fa-angle-up');
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }

      this._resetInput();
    }
  }, {
    key: "_closeSelect",
    value: function _closeSelect() {
      var _iterator33 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-list')),
          _step33;

      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var list = _step33.value;
          list.removeAttribute('expanded');
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }

      var _iterator34 = _createForOfIteratorHelper(this.component.querySelectorAll('.br-input button svg')),
          _step34;

      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var icon = _step34.value;
          icon.classList.remove('fa-angle-up');
          icon.classList.add('fa-angle-down');
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }

      this._setInput();

      this._resetFocus();

      this._resetVisible();
    }
  }, {
    key: "selected",
    get: function get() {
      var selected = [];

      var _iterator35 = _createForOfIteratorHelper(this.optionsList.entries()),
          _step35;

      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var _step35$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step35.value, 2),
              index = _step35$value[0],
              option = _step35$value[1];

          if (!this.multiple) {
            if (option.selected) {
              selected = option.value;
              break;
            }
          } else {
            if (index > 0 && option.selected) {
              selected.push(option.value);
            }
          }
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }

      return selected;
    }
  }]);

  return BRSelect;
}();

var selectList = [];

var _iterator36 = _createForOfIteratorHelper(window.document.querySelectorAll('.br-select')),
    _step36;

try {
  for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
    var brSelect = _step36.value;
    selectList.push(new BRSelect('br-select', brSelect));
  }
} catch (err) {
  _iterator36.e(err);
} finally {
  _iterator36.f();
}

/* harmony default export */ __webpack_exports__["default"] = (BRSelect);

/***/ }),

/***/ "./src/pug/views/components/select.pug":
/*!*********************************************!*\
  !*** ./src/pug/views/components/select.pug ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "components/select.html");

/***/ }),

/***/ "./src/scss/components/select.entry.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/select.entry.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=select.js.map