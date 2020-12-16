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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components/menu.entry.js");
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

/***/ "./src/js/components/menu.entry.js":
/*!*****************************************!*\
  !*** ./src/js/components/menu.entry.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pug_views_components_menu_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pug/views/components/menu.pug */ "./src/pug/views/components/menu.pug");
/* harmony import */ var _scss_components_menu_entry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scss/components/menu.entry.scss */ "./src/scss/components/menu.entry.scss");
/* harmony import */ var _scss_components_menu_entry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_menu_entry_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/js/components/menu.js");




/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
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

var BRMenu = /*#__PURE__*/function () {
  function BRMenu(name, component) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BRMenu);

    this.name = name;
    this.component = component;
    this.folders = this.component.querySelectorAll('.folder');
    this.main = this.folders.length >= 2;

    this._setBehavior();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BRMenu, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      this._closeAllSubmenus();

      this._setHref(); // Menu do tipo principal para ação de colapsar


      if (this.main) {
        this.folders.forEach(function (folder, i, arr) {
          var header = folder.querySelector('.header');
          var submenu = folder.querySelector('ul'); // Abre o ultimo menu
          // eslint-disable-next-line no-plusplus

          if (arr.length === ++i) {
            submenu.removeAttribute('hidden');
          } // Ação do header


          header.addEventListener('click', function (event) {
            _this._toggleCollapse(event, header);
          });
        });
      } else {
        // Menu tipo Auxiliar e parte inter do Principal
        var submenu = this.component.querySelector('.folder > ul');
        submenu.removeAttribute('hidden');
      }

      this.folders.forEach(function (folder) {
        var itens = folder.querySelectorAll('.item');
        itens.forEach(function (item) {
          if (!item.hasAttribute('disabled')) {
            // Testa se o item tem um submenu
            var _submenu = item.parentNode.querySelector('ul');

            if (_submenu) {
              // Ação dos itens com submenu
              item.addEventListener('click', function (event) {
                if (!item.hasAttribute('disabled')) _this._itemClick(folder, item, _submenu);
              });
            } else {
              // Ação dos itens com links
              item.addEventListener('click', function (event) {
                if (!item.hasAttribute('disabled')) _this._linkClick(item);
              });
            }
          }
        });
      });

      this._showLinked();
    }
  }, {
    key: "_showLinked",
    value: function _showLinked() {
      var linked = this.component.querySelector('.item[linked]');

      if (linked) {
        var steps = [];
        var parentLink = linked;

        while (!parentLink.classList.contains('folder')) {
          parentLink = parentLink.parentNode;

          if (this.main ? parentLink.tagName === 'LI' || parentLink.tagName === 'DIV' : parentLink.tagName === 'LI') {
            steps.unshift(parentLink.querySelector('a'));
          }
        }

        steps.forEach(function (step) {
          var subfolder = step.parentNode.querySelector('ul');
          if (!subfolder) step.click();else if (subfolder.hasAttribute('hidden')) step.click();
        });
      }
    }
  }, {
    key: "_setHref",
    value: function _setHref() {
      var tagsA = this.component.querySelectorAll('.folder a');
      tagsA.forEach(function (link) {
        var href = link.hasAttribute('href') ? link.getAttribute('href') : '';
        if (href.trim().length < 1) link.setAttribute('href', 'javascript:void(0);');
      });
    }
  }, {
    key: "_toggleCollapse",
    value: function _toggleCollapse(event, header) {
      var _this2 = this;

      this.folders.forEach(function (folder) {
        var ul1 = folder.querySelector('ul');

        var _header = folder.querySelector('.header');

        var icon = folder.querySelector('.header .fa-angle-down') ? folder.querySelector('.header .fa-angle-down') : folder.querySelector('.header .fa-angle-up');

        _header.removeAttribute('hidden');

        if (header === _header) {
          ul1.toggleAttribute('hidden');
          icon.classList.toggle('fa-angle-down');
          icon.classList.toggle('fa-angle-up');
          if (!ul1.hasAttribute('hidden')) _this2._showOnlyLastActive(folder);
        } else {
          ul1.setAttribute('hidden', '');
          icon.classList.add('fa-angle-down');
          icon.classList.remove('fa-angle-up');
        }
      });
    }
  }, {
    key: "_linkClick",
    value: function _linkClick(link) {
      var linked = this.component.querySelectorAll('[linked]');
      linked.forEach(function (_link) {
        _link.removeAttribute('linked');
      });
      link.setAttribute('linked', '');
    }
  }, {
    key: "_itemClick",
    value: function _itemClick(folder, item, submenu) {
      submenu.toggleAttribute('hidden');
      item.toggleAttribute('active'); // Posibilita o uso de um item com submenu como link

      if (item.hasAttribute('active')) this._linkClick(item);else item.removeAttribute('linked');
      var icon = item.querySelector('.fa-angle-right') ? item.querySelector('.fa-angle-right') : item.querySelector('.fa-angle-left');
      icon.classList.toggle('fa-angle-left');
      icon.classList.toggle('fa-angle-right');

      this._showOnlyLastActive(folder);

      this._toggleSiblingsItens(item);
    }
  }, {
    key: "_closeAllSubmenus",
    value: function _closeAllSubmenus() {
      var submenus = this.component.querySelectorAll('ul');
      submenus.forEach(function (submenu) {
        submenu.setAttribute('hidden', '');
      });
    }
  }, {
    key: "_toggleAllHeaders",
    value: function _toggleAllHeaders(hidden) {
      var headers = this.component.querySelectorAll('.header');
      headers.forEach(function (header) {
        if (hidden) header.setAttribute('hidden', '');else header.removeAttribute('hidden');
      });
    }
  }, {
    key: "_toggleSiblingsItens",
    value: function _toggleSiblingsItens(item) {
      var li = item.parentNode.parentNode.querySelectorAll(':scope > li');
      li.forEach(function (sibling) {
        sibling.toggleAttribute('hidden');
      });
      item.parentNode.toggleAttribute('hidden');
    }
  }, {
    key: "_showOnlyLastActive",
    value: function _showOnlyLastActive(folder) {
      var actives = folder.querySelectorAll('.item[active]');
      var header = folder.querySelector('.header');
      var hasActive = actives.length > 0;

      this._toggleAllHeaders(true);

      if (hasActive) {
        if (header) header.removeAttribute('hidden');
        actives.forEach(function (active, i, arr) {
          // eslint-disable-next-line no-plusplus
          if (arr.length === ++i) {
            active.removeAttribute('hidden');
          } else {
            active.setAttribute('hidden', '');
          }
        });
      } else {
        this._toggleAllHeaders(false);
      }
    }
  }]);

  return BRMenu;
}();

var menuList = [];

var _iterator = _createForOfIteratorHelper(window.document.querySelectorAll('.br-menu')),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var brMenu = _step.value;
    menuList.push(new BRMenu('br-menu', brMenu));
  } // function itemMenuClick () {
  //   this.setAttribute('linked', '')
  // }

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/* harmony default export */ __webpack_exports__["default"] = (BRMenu);

/***/ }),

/***/ "./src/pug/views/components/menu.pug":
/*!*******************************************!*\
  !*** ./src/pug/views/components/menu.pug ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "components/menu.html");

/***/ }),

/***/ "./src/scss/components/menu.entry.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/menu.entry.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=menu.js.map