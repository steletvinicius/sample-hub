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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components/upload.entry.js");
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

/***/ "./src/js/components/upload.entry.js":
/*!*******************************************!*\
  !*** ./src/js/components/upload.entry.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pug_views_components_upload_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pug/views/components/upload.pug */ "./src/pug/views/components/upload.pug");
/* harmony import */ var _scss_components_upload_entry_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scss/components/upload.entry.scss */ "./src/scss/components/upload.entry.scss");
/* harmony import */ var _scss_components_upload_entry_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_upload_entry_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload */ "./src/js/components/upload.js");




/***/ }),

/***/ "./src/js/components/upload.js":
/*!*************************************!*\
  !*** ./src/js/components/upload.js ***!
  \*************************************/
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

var BRUpload = /*#__PURE__*/function () {
  /**
   *
   * @param {*} name nome do componente
   * @param {*} component componente
   * @param {*} uploadFiles  promisse de status do upload
   */
  function BRUpload(name, component, uploadFiles) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BRUpload);

    this.name = name;
    this.component = component;
    this._inputElement = this.component.querySelector('.upload-input');
    this._fileList = this.component.querySelector('.upload-list');
    this._btnUpload = this.component.querySelector('.upload-button');
    this._fileArray = [];
    this._uploadFiles = uploadFiles;

    this._setBehavior();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BRUpload, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      this.component.addEventListener('dragenter', function (event) {
        _this._drag(event);
      }, false);
      this.component.addEventListener('dragover', function (event) {
        _this._drag(event);
      }, false);
      this.component.addEventListener('dragleave', function (event) {
        _this._onDragEnd(event);
      }, false);
      this.component.addEventListener('dragend', function (event) {
        _this._onDragEnd(event);
      }, false);
      this.component.addEventListener('drop', function (event) {
        _this._drop(event);
      }, false);

      if (this._btnUpload) {
        this._btnUpload.addEventListener('click', function (event) {
          _this._clickUpload();
        }, false);
      }

      if (this._inputElement) {
        this._fileArray = Array.from(this._inputElement.files);

        this._inputElement.addEventListener('change', function (event) {
          _this._handleFiles(event);
        }, false);
      }
    }
  }, {
    key: "_clickUpload",
    value: function _clickUpload() {
      this._inputElement.click();
    }
  }, {
    key: "_drag",
    value: function _drag(event) {
      event.stopPropagation();
      event.preventDefault();

      this._btnUpload.classList.add('bg-support-01'); // text-secondary-01


      this._btnUpload.classList.add('text-secondary-01');
    }
  }, {
    key: "_drop",
    value: function _drop(event) {
      event.stopPropagation();
      event.preventDefault();
      this._btnUpload.className = this._btnUpload.className.replace(/\bbg-support-01\b/g, '');
      this._btnUpload.className = this._btnUpload.className.replace(/\btext-secondary-01\b/g, '');
      var dt = event.dataTransfer;
      var files = dt.files;

      this._handleFiles(files);
    }
  }, {
    key: "_onDragEnd",
    value: function _onDragEnd(event) {
      event.stopPropagation();
      event.preventDefault();
      this._btnUpload.className = this._btnUpload.className.replace(/\bbg-support-01\b/g, '');
      this._btnUpload.className = this._btnUpload.className.replace(/\btext-secondary-01\b/g, '');
    }
  }, {
    key: "_handleFiles",
    value: function _handleFiles(files) {
      var newFiles = !files.length ? Array.from(this._inputElement.files) : Array.from(files);
      this._fileArray = this._fileArray.concat(newFiles);

      this._updateFileList();
    }
  }, {
    key: "_updateFileList",
    value: function _updateFileList() {
      var _this2 = this;

      if (!this._fileArray.length) {
        this._fileList.innerHTML = '';
        this._info.style.display = '';
      } else {
        this._fileList.innerHTML = '';

        var _loop = function _loop(i) {
          if ('nowait' in _this2._fileArray[i]) {
            if (_this2._fileArray[i].nowait) {
              _this2._renderItem(i);
            }
          } else {
            var loading = document.createElement('div');
            loading.setAttribute('sm', '');
            loading.classList.add('my-3');
            loading.setAttribute('loading', '');

            _this2._fileList.appendChild(loading);

            if (_this2._uploadFiles()) {
              _this2._uploadFiles().then(function () {
                _this2._fileArray[i].nowait = true;

                _this2._updateFileList();
              });
            }
          }
        };

        for (var i = 0; i < this._fileArray.length; i++) {
          _loop(i);
        }
      }
    }
  }, {
    key: "_renderItem",
    value: function _renderItem(position) {
      var _this3 = this;

      var li = document.createElement('div');
      li.className = 'item';

      this._fileList.appendChild(li);

      li.innerHTML = '';
      var name = document.createElement('div');
      name.className = 'name';
      li.appendChild(name);

      this._fileList.appendChild(li);

      var info = document.createElement('div');
      info.className = 'content';
      info.innerHTML = this._fileArray[position].name;
      li.appendChild(info);
      var del = document.createElement('div');
      del.className = 'support';
      var btndel = document.createElement('button');
      var spanSize = document.createElement('span');
      spanSize.className = 'mr-1';
      spanSize.innerHTML = this._calcSize(this._fileArray[position].size);
      del.appendChild(spanSize);
      btndel.className = 'br-button';
      btndel.type = 'button';
      btndel.setAttribute('circle', '');
      btndel.addEventListener('click', function (event) {
        _this3._removeFile(position, event);
      }, false);
      var img = document.createElement('i');
      img.className = 'fa fa-trash';
      btndel.appendChild(img);
      del.appendChild(btndel);
      li.appendChild(del);
      this._fileArray[position].nowait = true;
    }
  }, {
    key: "_calcSize",
    value: function _calcSize(nBytes) {
      var sOutput = '';

      for (var aMultiples = ['KB', 'MB', 'GB', 'TB'], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        sOutput = "".concat(nApprox.toFixed(2), " ").concat(aMultiples[nMultiple]);
      }

      return sOutput;
    }
  }, {
    key: "_removeFile",
    value: function _removeFile(index, event) {
      event.stopPropagation();
      event.preventDefault();

      this._fileArray.splice(index, 1);

      this._updateFileList();
    }
  }]);

  return BRUpload;
}();

var uploadList = [];

function uploadTimeout() {
  return new Promise(function (resolve) {
    // Colocar aqui um upload para o servidor e retirar o timeout
    return setTimeout(resolve, 3000);
  });
}

var _iterator = _createForOfIteratorHelper(window.document.querySelectorAll('.br-upload')),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var brUpload = _step.value;
    uploadList.push(new BRUpload('br-upload', brUpload, uploadTimeout));
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/* harmony default export */ __webpack_exports__["default"] = (BRUpload);

/***/ }),

/***/ "./src/pug/views/components/upload.pug":
/*!*********************************************!*\
  !*** ./src/pug/views/components/upload.pug ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "components/upload.html");

/***/ }),

/***/ "./src/scss/components/upload.entry.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/upload.entry.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=upload.js.map