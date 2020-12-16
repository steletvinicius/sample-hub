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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components/input.entry.js");
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

/***/ "./src/js/components/input.entry.js":
/*!******************************************!*\
  !*** ./src/js/components/input.entry.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pug_views_components_input_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pug/views/components/input.pug */ "./src/pug/views/components/input.pug");
/* harmony import */ var _scss_components_input_entry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scss/components/input.entry.scss */ "./src/scss/components/input.entry.scss");
/* harmony import */ var _scss_components_input_entry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_input_entry_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./src/js/components/input.js");




/***/ }),

/***/ "./src/js/components/input.js":
/*!************************************!*\
  !*** ./src/js/components/input.js ***!
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

var BRInput = /*#__PURE__*/function () {
  function BRInput(name, component) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BRInput);

    this.name = name;
    this.component = component;
    this._currentFocus = -1;

    this._setBehavior();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BRInput, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      this._setPasswordViewBehavior();

      this._setAutocompleteBehavior();
    }
  }, {
    key: "_setPasswordViewBehavior",
    value: function _setPasswordViewBehavior() {
      var _this = this;

      var _iterator = _createForOfIteratorHelper(this.component.querySelectorAll("input[type='password']")),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var inputPassword = _step.value;

          if (!inputPassword.disabled) {
            var _iterator2 = _createForOfIteratorHelper(inputPassword.parentNode.querySelectorAll('button.icon')),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var buttonIcon = _step2.value;
                buttonIcon.addEventListener('click', function (event) {
                  _this._toggleShowPassword(event);
                }, false);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
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
    key: "_toggleShowPassword",
    value: function _toggleShowPassword(event) {
      var _iterator3 = _createForOfIteratorHelper(event.currentTarget.querySelectorAll('.svg-inline--fa')),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var icon = _step3.value;

          if (icon.classList.contains('fa-eye')) {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');

            var _iterator4 = _createForOfIteratorHelper(this.component.querySelectorAll("input[type='password']")),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var input = _step4.value;
                input.setAttribute('type', 'text');
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          } else if (icon.classList.contains('fa-eye-slash')) {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');

            var _iterator5 = _createForOfIteratorHelper(this.component.querySelectorAll("input[type='text']")),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _input = _step5.value;

                _input.setAttribute('type', 'password');
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "_setAutocompleteBehavior",
    value: function _setAutocompleteBehavior() {
      var _this2 = this;

      var _iterator6 = _createForOfIteratorHelper(this.component.querySelectorAll('input.search-autocomplete')),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var inputAutocomplete = _step6.value;
          inputAutocomplete.addEventListener('input', function (event) {
            _this2._clearSearchItems();

            _this2._buildSearchItems(event.currentTarget);
          }, false);
          inputAutocomplete.addEventListener('keydown', function (event) {
            _this2._handleArrowKeys(event);
          }, false);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "_buildSearchItems",
    value: function _buildSearchItems(element) {
      var _this3 = this;

      var searchList = window.document.createElement('div');
      searchList.setAttribute('class', 'search-items');
      this.component.appendChild(searchList);

      if (element.value !== '') {
        var _iterator7 = _createForOfIteratorHelper(this.dataList),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var data = _step7.value;

            if (data.substr(0, element.value.length).toUpperCase() === element.value.toUpperCase()) {
              var item = window.document.createElement('div');
              item.innerHTML = "<strong>".concat(data.substr(0, element.value.length), "</strong>");
              item.innerHTML += data.substr(element.value.length);
              item.innerHTML += "<input type=\"hidden\" value=\"".concat(data, "\">");
              item.addEventListener('click', function (event) {
                var _iterator8 = _createForOfIteratorHelper(event.currentTarget.querySelectorAll("input[type='hidden']")),
                    _step8;

                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var input = _step8.value;
                    element.value = input.value;
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }

                _this3._clearSearchItems();
              }, false);
              searchList.appendChild(item);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      } else {
        this._clearSearchItems();
      }
    }
  }, {
    key: "_clearSearchItems",
    value: function _clearSearchItems() {
      var _iterator9 = _createForOfIteratorHelper(this.component.querySelectorAll('.search-items')),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var searchItems = _step9.value;

          var _iterator10 = _createForOfIteratorHelper(searchItems.querySelectorAll('div')),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var item = _step10.value;
              searchItems.removeChild(item);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          this.component.removeChild(searchItems);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "_handleArrowKeys",
    value: function _handleArrowKeys(event) {
      switch (event.keyCode) {
        case 13:
          if (this._currentFocus > -1) {
            event.preventDefault();

            var _iterator11 = _createForOfIteratorHelper(this.component.querySelectorAll('.search-items')),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var searchItems = _step11.value;

                var _iterator12 = _createForOfIteratorHelper(searchItems.querySelectorAll('div.is-active')),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var itemActive = _step12.value;
                    itemActive.click();
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            this._currentFocus = -1;
          }

          break;

        case 38:
          if (this._currentFocus > 0) {
            this._currentFocus -= 1;
          }

          this._switchFocus();

          break;

        case 40:
          var _iterator13 = _createForOfIteratorHelper(this.component.querySelectorAll('.search-items')),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var _searchItems = _step13.value;

              if (this._currentFocus < _searchItems.querySelectorAll('div').length - 1) {
                this._currentFocus += 1;
              }
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          this._switchFocus();

          break;
        // skip default case
      }
    }
  }, {
    key: "_switchFocus",
    value: function _switchFocus() {
      var _iterator14 = _createForOfIteratorHelper(this.component.querySelectorAll('.search-items')),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var searchItems = _step14.value;

          var _iterator15 = _createForOfIteratorHelper(searchItems.querySelectorAll('div').entries()),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var _step15$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step15.value, 2),
                  index = _step15$value[0],
                  item = _step15$value[1];

              if (index === this._currentFocus) {
                item.classList.add('is-active');
              }

              if (index !== this._currentFocus) {
                item.classList.remove('is-active');
              }
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
  }, {
    key: "setAutocompleteData",
    value: function setAutocompleteData(dataList) {
      this.dataList = dataList;
    }
  }]);

  return BRInput;
}();

var countries = ['Afeganistão', 'África do Sul', 'Albânia', 'Alemanha', 'Andorra', 'Angola', 'Anguilla', 'Antártida', 'Antígua e Barbuda', 'Antilhas Holandesas', 'Arábia Saudita', 'Argélia', 'Argentina', 'Armênia', 'Aruba', 'Austrália', 'Áustria', 'Azerbaijão', 'Bahamas', 'Bahrein', 'Bangladesh', 'Barbados', 'Belarus', 'Bélgica', 'Belize', 'Benin', 'Bermudas', 'Bolívia', 'Bósnia-Herzegóvina', 'Botsuana', 'Brasil', 'Brunei', 'Bulgária', 'Burkina Fasso', 'Burundi', 'Butão', 'Cabo Verde', 'Camarões', 'Camboja', 'Canadá', 'Cazaquistão', 'Chade', 'Chile', 'China', 'Chipre', 'Cingapura', 'Colômbia', 'Congo', 'Coréia do Norte', 'Coréia do Sul', 'Costa do Marfim', 'Costa Rica', 'Croácia (Hrvatska)', 'Cuba', 'Dinamarca', 'Djibuti', 'Dominica', 'Egito', 'El Salvador', 'Emirados Árabes Unidos', 'Equador', 'Eritréia', 'Eslováquia', 'Eslovênia', 'Espanha', 'Estados Unidos', 'Estônia', 'Etiópia', 'Fiji', 'Filipinas', 'Finlândia', 'França', 'Gabão', 'Gâmbia', 'Gana', 'Geórgia', 'Gibraltar', 'Grã-Bretanha (Reino Unido, UK)', 'Granada', 'Grécia', 'Groelândia', 'Guadalupe', 'Guam (Território dos Estados Unidos)', 'Guatemala', 'Guernsey', 'Guiana', 'Guiana Francesa', 'Guiné', 'Guiné Equatorial', 'Guiné-Bissau', 'Haiti', 'Holanda', 'Honduras', 'Hong Kong', 'Hungria', 'Iêmen', 'Ilha Bouvet (Território da Noruega)', 'Ilha do Homem', 'Ilha Natal', 'Ilha Pitcairn', 'Ilha Reunião', 'Ilhas Aland', 'Ilhas Cayman', 'Ilhas Cocos', 'Ilhas Comores', 'Ilhas Cook', 'Ilhas Faroes', 'Ilhas Falkland (Malvinas)', 'Ilhas Geórgia do Sul e Sandwich do Sul', 'Ilhas Heard e McDonald (Território da Austrália)', 'Ilhas Marianas do Norte', 'Ilhas Marshall', 'Ilhas Menores dos Estados Unidos', 'Ilhas Norfolk', 'Ilhas Seychelles', 'Ilhas Solomão', 'Ilhas Svalbard e Jan Mayen', 'Ilhas Tokelau', 'Ilhas Turks e Caicos', 'Ilhas Virgens (Estados Unidos)', 'Ilhas Virgens (Inglaterra)', 'Ilhas Wallis e Futuna', 'índia', 'Indonésia', 'Irã', 'Iraque', 'Irlanda', 'Islândia', 'Israel', 'Itália', 'Jamaica', 'Japão', 'Jersey', 'Jordânia', 'Kênia', 'Kiribati', 'Kuait', 'Laos', 'Látvia', 'Lesoto', 'Líbano', 'Libéria', 'Líbia', 'Liechtenstein', 'Lituânia', 'Luxemburgo', 'Macau', 'Macedônia (República Yugoslava)', 'Madagascar', 'Malásia', 'Malaui', 'Maldivas', 'Mali', 'Malta', 'Marrocos', 'Martinica', 'Maurício', 'Mauritânia', 'Mayotte', 'México', 'Micronésia', 'Moçambique', 'Moldova', 'Mônaco', 'Mongólia', 'Montenegro', 'Montserrat', 'Myanma', 'Namíbia', 'Nauru', 'Nepal', 'Nicarágua', 'Níger', 'Nigéria', 'Niue', 'Noruega', 'Nova Caledônia', 'Nova Zelândia', 'Omã', 'Palau', 'Panamá', 'Papua-Nova Guiné', 'Paquistão', 'Paraguai', 'Peru', 'Polinésia Francesa', 'Polônia', 'Porto Rico', 'Portugal', 'Qatar', 'Quirguistão', 'República Centro-Africana', 'República Democrática do Congo', 'República Dominicana', 'República Tcheca', 'Romênia', 'Ruanda', 'Rússia (antiga URSS) - Federação Russa', 'Saara Ocidental', 'Saint Vincente e Granadinas', 'Samoa Americana', 'Samoa Ocidental', 'San Marino', 'Santa Helena', 'Santa Lúcia', 'São Bartolomeu', 'São Cristóvão e Névis', 'São Martim', 'São Tomé e Príncipe', 'Senegal', 'Serra Leoa', 'Sérvia', 'Síria', 'Somália', 'Sri Lanka', 'St. Pierre and Miquelon', 'Suazilândia', 'Sudão', 'Suécia', 'Suíça', 'Suriname', 'Tadjiquistão', 'Tailândia', 'Taiwan', 'Tanzânia', 'Território Britânico do Oceano índico', 'Territórios do Sul da França', 'Territórios Palestinos Ocupados', 'Timor Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunísia', 'Turcomenistão', 'Turquia', 'Tuvalu', 'Ucrânia', 'Uganda', 'Uruguai', 'Uzbequistão', 'Vanuatu', 'Vaticano', 'Venezuela', 'Vietnã', 'Zâmbia', 'Zimbábue'];
var inputList = [];

var _iterator16 = _createForOfIteratorHelper(window.document.querySelectorAll('.br-input')),
    _step16;

try {
  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
    var brInput = _step16.value;
    inputList.push(new BRInput('br-input', brInput));
  }
} catch (err) {
  _iterator16.e(err);
} finally {
  _iterator16.f();
}

var _loop = function _loop() {
  var brInput = _inputList[_i];
  brInput.component.querySelectorAll('input.search-autocomplete').forEach(function () {
    brInput.setAutocompleteData(countries);
  });
};

for (var _i = 0, _inputList = inputList; _i < _inputList.length; _i++) {
  _loop();
}

/* harmony default export */ __webpack_exports__["default"] = (BRInput);

/***/ }),

/***/ "./src/pug/views/components/input.pug":
/*!********************************************!*\
  !*** ./src/pug/views/components/input.pug ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "components/input.html");

/***/ }),

/***/ "./src/scss/components/input.entry.scss":
/*!**********************************************!*\
  !*** ./src/scss/components/input.entry.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=input.js.map