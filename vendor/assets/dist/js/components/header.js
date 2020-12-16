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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components/header.entry.js");
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

/***/ "./src/js/components/header.entry.js":
/*!*******************************************!*\
  !*** ./src/js/components/header.entry.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pug_views_components_header_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pug/views/components/header.pug */ "./src/pug/views/components/header.pug");
/* harmony import */ var _scss_components_header_entry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scss/components/header.entry.scss */ "./src/scss/components/header.entry.scss");
/* harmony import */ var _scss_components_header_entry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_header_entry_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/js/components/header.js");




/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no exports provided */
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

var BRHeader = /*#__PURE__*/function () {
  function BRHeader(name, component) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BRHeader);

    this.name = name;
    this.component = component;

    this._setBehavior();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BRHeader, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      this._setLoginBehavior();

      this._setSearchInputBehavior();

      this._setSearchCloseBehavior();

      this._setSearchButtonBehavior();

      this._setHideBehavior();

      this._setDropdownBehavior();

      window.addEventListener('resize', function () {
        _this._setHideBehavior();
      });
    }
  }, {
    key: "_setLoginBehavior",
    value: function _setLoginBehavior() {
      var _this2 = this;

      var _iterator = _createForOfIteratorHelper(this.component.querySelectorAll('.login button')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var login = _step.value;
          login.addEventListener('click', function (event) {
            event.currentTarget.classList.add('d-none');

            var _iterator2 = _createForOfIteratorHelper(_this2.component.querySelectorAll('.avatar')),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var avatar = _step2.value;
                avatar.classList.remove('d-none');
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_setSearchInputBehavior",
    value: function _setSearchInputBehavior() {
      var _this3 = this;

      var _iterator3 = _createForOfIteratorHelper(this.component.querySelectorAll('.search input[type="text"]')),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var input = _step3.value;
          input.addEventListener('focus', function (event) {
            var _iterator4 = _createForOfIteratorHelper(_this3.component.querySelectorAll('.search')),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var search = _step4.value;
                search.setAttribute('active', '');
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var _iterator5 = _createForOfIteratorHelper(_this3.component.querySelectorAll('.menu')),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var menu = _step5.value;
                menu.classList.add('d-none');
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "_setSearchCloseBehavior",
    value: function _setSearchCloseBehavior() {
      var _this4 = this;

      var _iterator6 = _createForOfIteratorHelper(this.component.querySelectorAll('.search button.search-close')),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var searchClose = _step6.value;
          searchClose.addEventListener('click', function (event) {
            var _iterator7 = _createForOfIteratorHelper(_this4.component.querySelectorAll('.search')),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var search = _step7.value;
                search.removeAttribute('active');
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            var _iterator8 = _createForOfIteratorHelper(_this4.component.querySelectorAll('.menu')),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var menu = _step8.value;
                menu.classList.remove('d-none');
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          });
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "_setSearchButtonBehavior",
    value: function _setSearchButtonBehavior() {
      var _this5 = this;

      var _iterator9 = _createForOfIteratorHelper(this.component.querySelectorAll('.search-btn button')),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var searchButton = _step9.value;
          searchButton.addEventListener('click', function (event) {
            var _iterator10 = _createForOfIteratorHelper(_this5.component.querySelectorAll('.search')),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var search = _step10.value;
                var clonedSearch = search.cloneNode(true);

                var _iterator11 = _createForOfIteratorHelper(_this5.component.querySelectorAll('.flex-container')),
                    _step11;

                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var container = _step11.value;
                    clonedSearch.style.height = "".concat(container.offsetHeight - 2, "px");
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }

                var _iterator12 = _createForOfIteratorHelper(clonedSearch.querySelectorAll('button.search-close')),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var searchClose = _step12.value;
                    searchClose.addEventListener('click', function (event) {
                      _this5._closePopMenu('.flex-container');
                    });
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }

                _this5._openPopMenu(clonedSearch, '.flex-container');

                var _iterator13 = _createForOfIteratorHelper(clonedSearch.querySelectorAll('input[type="text"]')),
                    _step13;

                try {
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                    var input = _step13.value;
                    input.focus();
                  }
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          });
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "_setHideBehavior",
    value: function _setHideBehavior() {
      var functionalityList = this.component.querySelector('.functions');
      var functionalities = functionalityList.querySelectorAll('ul li');
      var linkList = this.component.querySelector('.links');
      var links = linkList.querySelectorAll('ul li');

      for (var i = links.length - 1; i > 0; i--) {
        if (window.screen.width < 992) {
          links[i].classList.add('d-none');
        } else {
          links[i].classList.remove('d-none');
        }
      }

      for (var _i = functionalities.length - 1; _i > 0; _i--) {
        if (window.screen.width < 992) {
          functionalities[_i].classList.add('d-none');
        } else {
          functionalities[_i].classList.remove('d-none');
        }
      }

      if (functionalityList.scrollWidth > functionalityList.offsetWidth) {
        var _iterator14 = _createForOfIteratorHelper(this.component.querySelectorAll('.functions button[data-trigger]')),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var trigger = _step14.value;
            trigger.classList.remove('d-none');
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        this._setHideFunctionsBehavior();
      } else {
        var _iterator15 = _createForOfIteratorHelper(this.component.querySelectorAll('.functions button[data-trigger]')),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _trigger = _step15.value;

            _trigger.classList.add('d-none');
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }

      if (linkList.scrollWidth > linkList.offsetWidth) {
        var _iterator16 = _createForOfIteratorHelper(this.component.querySelectorAll('.links button[data-trigger]')),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _trigger2 = _step16.value;

            _trigger2.classList.remove('d-none');
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }

        this._setHideLinksBehavior();
      } else {
        var _iterator17 = _createForOfIteratorHelper(this.component.querySelectorAll('.links button[data-trigger]')),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _trigger3 = _step17.value;

            _trigger3.classList.add('d-none');
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
      }
    }
  }, {
    key: "_setHideFunctionsBehavior",
    value: function _setHideFunctionsBehavior() {
      var functionalityList = this.component.querySelector('.functions');
      var functionalities = functionalityList.querySelectorAll('ul li');
      var linkList = this.component.querySelector('.links');

      for (var i = functionalities.length - 1; i > 0; i--) {
        if (linkList.scrollWidth > linkList.offsetWidth) {
          functionalities[i].classList.add('d-none');
        } else if (functionalityList.scrollWidth > functionalityList.offsetWidth) {
          functionalities[i].classList.add('d-none');
        }
      }
    }
  }, {
    key: "_setHideLinksBehavior",
    value: function _setHideLinksBehavior() {
      var linkList = this.component.querySelector('.links');
      var links = linkList.querySelectorAll('ul li');

      for (var i = links.length - 1; i > 1; i--) {
        if (linkList.scrollWidth > linkList.offsetWidth) {
          links[i].classList.add('d-none');
        }
      }
    }
  }, {
    key: "_setDropdownBehavior",
    value: function _setDropdownBehavior() {
      var _this6 = this;

      var _iterator18 = _createForOfIteratorHelper(this.component.querySelectorAll('.functions button[data-trigger], .links button[data-trigger]')),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var trigger = _step18.value;
          trigger.addEventListener('click', function (event) {
            var _iterator19 = _createForOfIteratorHelper(_this6.component.querySelectorAll('.actions .popmenu')),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var popmenu = _step19.value;

                if (popmenu.hasAttribute('active')) {
                  _this6._closeDropdown();
                }
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }

            _this6._openDropDown(event);
          });
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      window.document.addEventListener('click', function (event) {
        if (!_this6.component.contains(event.target)) {
          _this6._closeDropdown();
        }
      });
    }
  }, {
    key: "_openDropDown",
    value: function _openDropDown(event) {
      var list = document.createElement('div');
      list.classList.add('br-list', 'condensed');
      var ul = document.createElement('ul');
      var item;

      var _iterator20 = _createForOfIteratorHelper(event.currentTarget.parentElement.querySelectorAll('ul li')),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var li = _step20.value;

          if (li.classList.contains('d-none')) {
            item = li.cloneNode(true);
            item.classList.remove('d-none');
            ul.appendChild(item);
          }
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }

      list.appendChild(ul);

      this._openPopMenu(list, '.actions');

      var _iterator21 = _createForOfIteratorHelper(this.component.querySelectorAll('.popmenu')),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var popmenu = _step21.value;
          popmenu.setAttribute(event.currentTarget.parentElement.classList[0], '');
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
    }
  }, {
    key: "_closeDropdown",
    value: function _closeDropdown() {
      this._closePopMenu('.actions');
    }
  }, {
    key: "_openPopMenu",
    value: function _openPopMenu(element, containerSelector) {
      var popMenu = document.createElement('div');
      popMenu.classList.add('popmenu');
      popMenu.setAttribute('active', '');
      popMenu.appendChild(element);

      var _iterator22 = _createForOfIteratorHelper(this.component.querySelectorAll(containerSelector)),
          _step22;

      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var container = _step22.value;

          if (!container.hasAttribute('active')) {
            container.setAttribute('active', '');
            container.prepend(popMenu);
          }
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
    }
  }, {
    key: "_closePopMenu",
    value: function _closePopMenu(containerSelector) {
      var _iterator23 = _createForOfIteratorHelper(this.component.querySelectorAll(containerSelector)),
          _step23;

      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var element = _step23.value;

          var _iterator24 = _createForOfIteratorHelper(element.querySelectorAll('.popmenu')),
              _step24;

          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var popMenu = _step24.value;
              element.removeChild(popMenu);
              element.removeAttribute('active');
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
    }
  }]);

  return BRHeader;
}();

var headerList = [];

var _iterator25 = _createForOfIteratorHelper(window.document.querySelectorAll('.br-header')),
    _step25;

try {
  for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
    var brHeader = _step25.value;
    headerList.push(new BRHeader('br-header', brHeader));
  }
} catch (err) {
  _iterator25.e(err);
} finally {
  _iterator25.f();
}

/***/ }),

/***/ "./src/pug/views/components/header.pug":
/*!*********************************************!*\
  !*** ./src/pug/views/components/header.pug ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "components/header.html");

/***/ }),

/***/ "./src/scss/components/header.entry.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/header.entry.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=header.js.map