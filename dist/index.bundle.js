"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-columns: 1fr 8fr;\r\n  background-color: #161616;\r\n  height: 100vh;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 15px;\r\n}\r\n\r\n#form {\r\n  color: #fff;\r\n  background-color: #A33327;\r\n  padding: 30px;\r\n  width: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n}\r\n\r\n#form > input {\r\n  color: #fff;\r\n  background-color: #161616;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 5px;\r\n}\r\n\r\n#form > p {\r\n  margin: 10px 0;\r\n}\r\n\r\ninput[type=\"radio\"] + label {\r\n  margin: 0 10px;\r\n}\r\n\r\n.submitBtn {\r\n  color: #fff;\r\n  background-color: #161616;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 10px 15px;\r\n  width: 100%;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  letter-spacing: 3px;\r\n  cursor: pointer;\r\n  margin-top: 5px;\r\n}\r\n\r\n.submitBtn:hover {\r\n  color: #161616;\r\n  background-color: #fff;\r\n}\r\n\r\n.todo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: #fff;\r\n  background-color: #917164;\r\n  padding: 20px 20px 10px 20px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n  width: 100%;\r\n  max-width: 700px;\r\n  grid-column: 2 / -1;\r\n}\r\n\r\n.todo > .title {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.index {\r\n  display: none;\r\n}\r\n\r\n.closeBtn {\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #C7493A;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 5px;\r\n}\r\n\r\n.closeSideBtn {\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #161616;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 3px;\r\n}\r\n\r\n.todo > .todo-footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  color: #161616;\r\n  margin: 10px 0 0 0;\r\n  font-size: 12px;\r\n}\r\n\r\n.sidebar {\r\n  height: 100%;\r\n  min-width: 210px;\r\n  background-color: #C7493A;\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 4;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n  align-items: center;\r\n}\r\n\r\n.addCategory {\r\n  color: #fff;\r\n  background-color: #161616;\r\n  border: none;\r\n  padding: 10px 15px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  letter-spacing: 3px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  margin-top: 20px;\r\n}\r\n\r\n.addCategory:hover {\r\n  background-color: #fff;\r\n  color: #161616;\r\n}\r\n\r\n.sidebar-title {\r\n  text-transform: uppercase;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  color: #161616;\r\n  border-bottom: 3px solid #161616;\r\n  margin: 10px 0;\r\n}\r\n\r\n.addTodo {\r\n  font-size: 22px;\r\n  background-color: #28a745;\r\n  color: #ffffff;\r\n  position: fixed;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  margin: 0 10px 10px 0;\r\n  border: 2px solid white;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(128, 83, 83, 0.5);\r\n  z-index: 999;\r\n  position: fixed;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  width: 100%;\r\n}\r\n\r\nul > li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 5px 0;\r\n}\r\n\r\nul > li > p{\r\n  color: #ffffff;\r\n  background-color: #161616;\r\n  padding: 5px 20px;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  margin: 0px 5px 0 0;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.allCategoriesP, .todayCategoriesP, .tommorowCategoriesP {\r\n  margin: 0;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,yBAAyB;EACzB,4BAA4B;EAC5B,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,gCAAgC;EAChC,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,SAAS;EACT,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wCAAwC;EACxC,YAAY;EACZ,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,SAAS;AACX","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-columns: 1fr 8fr;\r\n  background-color: #161616;\r\n  height: 100vh;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 15px;\r\n}\r\n\r\n#form {\r\n  color: #fff;\r\n  background-color: #A33327;\r\n  padding: 30px;\r\n  width: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n}\r\n\r\n#form > input {\r\n  color: #fff;\r\n  background-color: #161616;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 5px;\r\n}\r\n\r\n#form > p {\r\n  margin: 10px 0;\r\n}\r\n\r\ninput[type=\"radio\"] + label {\r\n  margin: 0 10px;\r\n}\r\n\r\n.submitBtn {\r\n  color: #fff;\r\n  background-color: #161616;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 10px 15px;\r\n  width: 100%;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  letter-spacing: 3px;\r\n  cursor: pointer;\r\n  margin-top: 5px;\r\n}\r\n\r\n.submitBtn:hover {\r\n  color: #161616;\r\n  background-color: #fff;\r\n}\r\n\r\n.todo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: #fff;\r\n  background-color: #917164;\r\n  padding: 20px 20px 10px 20px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n  width: 100%;\r\n  max-width: 700px;\r\n  grid-column: 2 / -1;\r\n}\r\n\r\n.todo > .title {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.index {\r\n  display: none;\r\n}\r\n\r\n.closeBtn {\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #C7493A;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 5px;\r\n}\r\n\r\n.closeSideBtn {\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #161616;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 3px;\r\n}\r\n\r\n.todo > .todo-footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  color: #161616;\r\n  margin: 10px 0 0 0;\r\n  font-size: 12px;\r\n}\r\n\r\n.sidebar {\r\n  height: 100%;\r\n  min-width: 210px;\r\n  background-color: #C7493A;\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 4;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n  align-items: center;\r\n}\r\n\r\n.addCategory {\r\n  color: #fff;\r\n  background-color: #161616;\r\n  border: none;\r\n  padding: 10px 15px;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  letter-spacing: 3px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  margin-top: 20px;\r\n}\r\n\r\n.addCategory:hover {\r\n  background-color: #fff;\r\n  color: #161616;\r\n}\r\n\r\n.sidebar-title {\r\n  text-transform: uppercase;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  color: #161616;\r\n  border-bottom: 3px solid #161616;\r\n  margin: 10px 0;\r\n}\r\n\r\n.addTodo {\r\n  font-size: 22px;\r\n  background-color: #28a745;\r\n  color: #ffffff;\r\n  position: fixed;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  margin: 0 10px 10px 0;\r\n  border: 2px solid white;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(128, 83, 83, 0.5);\r\n  z-index: 999;\r\n  position: fixed;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  width: 100%;\r\n}\r\n\r\nul > li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 5px 0;\r\n}\r\n\r\nul > li > p{\r\n  color: #ffffff;\r\n  background-color: #161616;\r\n  padding: 5px 20px;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  margin: 0px 5px 0 0;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.allCategoriesP, .todayCategoriesP, .tommorowCategoriesP {\r\n  margin: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/addTodo.js":
/*!***********************************!*\
  !*** ./src/components/addTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addTodo = function() {
  const addTodo = document.createElement("button")
  addTodo.className = "addTodo"
  addTodo.textContent = "+"

  return addTodo
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodo);

/***/ }),

/***/ "./src/components/categoryForm.js":
/*!****************************************!*\
  !*** ./src/components/categoryForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const categoryForm = function() {
  const form = document.createElement("form")
  form.setAttribute("id", "form")
  form.className = "categoryForm"

  const p1 = document.createElement("p")
  const titleLabel = document.createElement("label")
  titleLabel.setAttribute("for", "title")
  titleLabel.textContent = "New Category: "
  p1.appendChild(titleLabel)
  const title = document.createElement("input")
  title.setAttribute("id", "title")
  title.setAttribute("name", "title")
  title.setAttribute("type", "text")
  title.setAttribute("maxlength", 8)
  form.appendChild(p1)
  form.appendChild(title)

  const submitBtn = document.createElement("button")
  submitBtn.textContent = "Add Category"
  submitBtn.className = "submitBtn"
  form.appendChild(submitBtn)

  return form
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryForm);

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = function() {
  const form = document.createElement("form")
  form.setAttribute("id", "form")

  const p1 = document.createElement("p")
  const titleLabel = document.createElement("label")
  titleLabel.setAttribute("for", "title")
  titleLabel.textContent = "Title: "
  p1.appendChild(titleLabel)
  const title = document.createElement("input")
  title.setAttribute("id", "title")
  title.setAttribute("name", "title")
  title.setAttribute("type", "text")
  form.appendChild(p1)
  form.appendChild(title)

  const p2 = document.createElement("p")
  const descLabel = document.createElement("label")
  descLabel.setAttribute("for", "desc")
  descLabel.textContent = "Description: "
  p2.appendChild(descLabel)
  const desc = document.createElement("input")
  desc.setAttribute("id", "desc")
  desc.setAttribute("name", "desc")
  desc.setAttribute("type", "text")
  form.appendChild(p2)
  form.appendChild(desc)

  const p3 = document.createElement("p")
  const dueLabel = document.createElement("label")
  dueLabel.setAttribute("for", "due")
  dueLabel.textContent = "Due: "
  p3.appendChild(dueLabel)
  const due = document.createElement("input")
  due.setAttribute("id", "due")
  due.setAttribute("name", "due")
  due.setAttribute("type", "date")
  form.appendChild(p3)
  form.appendChild(due)

  const p4 = document.createElement("p")
  const priorLabel = document.createElement("label")
  priorLabel.setAttribute("for", "priority")
  priorLabel.textContent = "Priority: "
  p4.appendChild(priorLabel)
  form.appendChild(p4)

  const priorContainer = document.createElement("p")

  const priorRadioOne = document.createElement("input")
  priorRadioOne.setAttribute("id", "priority")
  priorRadioOne.setAttribute("name", "priority")
  priorRadioOne.setAttribute("type", "radio")
  priorRadioOne.setAttribute("value", "low")
  const priorRadioOneLabel = document.createElement("label")
  priorRadioOneLabel.setAttribute("for", "priority")
  priorRadioOneLabel.textContent = "Low"
  priorContainer.appendChild(priorRadioOne)
  priorContainer.appendChild(priorRadioOneLabel)

  const priorRadioTwo = document.createElement("input")
  priorRadioTwo.setAttribute("id", "priorityMed")
  priorRadioTwo.setAttribute("name", "priority")
  priorRadioTwo.setAttribute("type", "radio")
  priorRadioTwo.setAttribute("value", "medium")
  const priorRadioTwoLabel = document.createElement("label")
  priorRadioTwoLabel.setAttribute("for", "priorityMed")
  priorRadioTwoLabel.textContent = "Medium"
  priorContainer.appendChild(priorRadioTwo)
  priorContainer.appendChild(priorRadioTwoLabel)

  const priorRadioThree = document.createElement("input")
  priorRadioThree.setAttribute("id", "priorityHigh")
  priorRadioThree.setAttribute("name", "priority")
  priorRadioThree.setAttribute("type", "radio")
  priorRadioThree.setAttribute("value", "high")
  const priorRadioThreeLabel = document.createElement("label")
  priorRadioThreeLabel.setAttribute("for", "priorityHigh")
  priorRadioThreeLabel.textContent = "High"
  priorContainer.appendChild(priorRadioThree)
  priorContainer.appendChild(priorRadioThreeLabel)
  form.appendChild(priorContainer)


  const p5 = document.createElement("p")
  const submitBtn = document.createElement("button")
  submitBtn.textContent = "Submit"
  submitBtn.className = "submitBtn"
  submitBtn.setAttribute("id", "submitBtn")
  submitBtn.setAttribute("type", "submit")
  p5.appendChild(submitBtn)
  form.appendChild(p5)

  return form
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sidebar = function() {
  const sidebar = document.createElement("div")
  sidebar.className = "sidebar"

  const sidebarTitle = document.createElement("h1")
  sidebarTitle.className = "sidebar-title"
  sidebarTitle.textContent = "TODO'S LIST"
  sidebar.appendChild(sidebarTitle)

  const sidebarList = document.createElement("ul")
  sidebarList.className = "sidebarList"
  sidebar.appendChild(sidebarList)

  const allCategories = document.createElement("li")
  const allCategoriesP = document.createElement("p")
  allCategoriesP.className = "allCategoriesP"
  allCategoriesP.textContent = "All"
  allCategories.appendChild(allCategoriesP)
  sidebarList.appendChild(allCategories)

  const todayCategories = document.createElement("li")
  const todayCategoriesP = document.createElement("p")
  todayCategoriesP.className = "todayCategoriesP"
  todayCategoriesP.textContent = "Today"
  todayCategories.appendChild(todayCategoriesP)
  sidebarList.appendChild(todayCategories)

  const tommorowCategories = document.createElement("li")
  const tommorowCategoriesP = document.createElement("p")
  tommorowCategoriesP.className = "tommorowCategoriesP"
  tommorowCategoriesP.textContent = "Tommorow"
  tommorowCategories.appendChild(tommorowCategoriesP)
  sidebarList.appendChild(tommorowCategories)

  const addCategoryButton = document.createElement("button")
  addCategoryButton.className = "addCategory"
  addCategoryButton.textContent = "Add category"
  sidebar.appendChild(addCategoryButton)

  return sidebar
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form.js */ "./src/components/form.js");
/* harmony import */ var _components_sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar.js */ "./src/components/sidebar.js");
/* harmony import */ var _components_addTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/addTodo */ "./src/components/addTodo.js");
/* harmony import */ var _components_categoryForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/categoryForm */ "./src/components/categoryForm.js");






function TODO() {}

TODO.prototype.addTodoToList = function(todo) {
  const todoItem = document.createElement("div")
  todoItem.className = "todo"

  const title = document.createElement("div")
  title.className = "title"
  todoItem.appendChild(title)

  const titleText = document.createElement("div")
  titleText.className = "titleText"
  titleText.textContent = todo.title
  title.appendChild(titleText)

  const index = document.createElement("p")
  index.className = "index"
  index.textContent = todo.index
  title.appendChild(index)

  const closeBtn = document.createElement("button")
  closeBtn.className = "closeBtn"
  closeBtn.textContent = "X"
  title.appendChild(closeBtn)

  const desc = document.createElement("div")
  desc.className = "desc"
  desc.textContent = todo.desc
  todoItem.appendChild(desc)

  const footer = document.createElement("div")
  footer.className = "todo-footer"

  const prior = document.createElement("div")
  prior.textContent = `Priority: ${todo.priority}`
  footer.appendChild(prior)

  const due = document.createElement("div")
  due.textContent = `Due: ${todo.due}`
  footer.appendChild(due)

  todoItem.appendChild(footer)

  document.querySelector(".main").appendChild(todoItem)
}

TODO.prototype.removeTodo = function(target) {
  target.remove()
}

TODO.prototype.clearForm = function() {
  document.querySelector("#title").value = null
  document.querySelector("#desc").value = null
  document.querySelector("#due").value = null
  document.querySelector("#priority").checked = null
  document.querySelector("#priorityMed").checked = null
  document.querySelector("#priorityHigh").checked = null
}

TODO.prototype.showForm = function() {
  const wrapper = document.createElement("div")
  wrapper.className = "wrapper"
  document.body.appendChild(wrapper)
  wrapper.appendChild((0,_components_form_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
}

function Store() {}

Store.prototype.getTodos = function() {
  let todos
    if(localStorage.getItem("todos") === null) {
      todos = []
    } else {
      todos = JSON.parse(localStorage.getItem("todos"))
    }

    return todos
}

Store.prototype.displayTodos = function() {
  const store = new Store
  const todos = store.getTodos()

  todos.forEach(function(todo) {
    const ui = new TODO
    ui.addTodoToList(todo)
  })
}

Store.prototype.addTodo = function(todo) {
  const store = new Store
  const todos = store.getTodos()

  todos.push(todo)
  console.log("Add todo: " + JSON.stringify(todos))

  localStorage.setItem("todos", JSON.stringify(todos))
}

Store.prototype.removeTodo = function(todoindex) {
  const store = new Store
  const todos = store.getTodos()

  todos.forEach(function(todo, index) {
    if (todo.index == todoindex) {
      todos.splice(index, 1)
    }
  })

  localStorage.setItem("todos", JSON.stringify(todos))
}

const store = new Store
document.addEventListener("DOMContentLoaded", store.displayTodos)


const main = document.createElement("div")
main.className = "main"
document.body.appendChild((0,_components_sidebar_js__WEBPACK_IMPORTED_MODULE_2__["default"])())
document.body.appendChild(main)

main.appendChild((0,_components_addTodo__WEBPACK_IMPORTED_MODULE_3__["default"])())

const todoFactory = function(title, desc, due, priority, index) {
  return {title, desc, due, priority, index}
}

main.addEventListener("click", (e) => {
  const todo = new TODO
  const store = new Store

  if (e.target.className == "closeBtn") {
    console.log(e.target.previousElementSibling.textContent)
    todo.removeTodo(e.target.parentElement.parentElement)
    store.removeTodo(e.target.previousElementSibling.textContent)
  }
})

function getIndex() {
  const store = new Store
  const todos = store.getTodos()

  let todoIndex

  if (todos.length == 0) {
    todoIndex = 0
  } else {
    todoIndex = todos[todos.length - 1].index + 1
  }

  return todoIndex
}

document.body.addEventListener("click", (e) => {
  const todo = new TODO

  if (e.target.className == "addTodo") {
    todo.showForm()

    const formDiv = document.querySelector("#form")

    formDiv.addEventListener("submit", function(e) {
    const todo = new TODO
    const store = new Store

    const todos = store.getTodos

    const title = document.querySelector("#title").value
    const desc = document.querySelector("#desc").value
    const due = document.querySelector("#due").value
    const priority = document.querySelector("input[name='priority']:checked").value

    let index = getIndex()

    const todoItem = todoFactory(title, desc, due, priority, index)

    todo.addTodoToList(todoItem)
    store.addTodo(todoItem)

    console.log(index)

    todo.clearForm()

    formDiv.parentElement.remove()
    formDiv.remove()

    e.preventDefault()
    })
  }
})

function Sidebar() {}

Sidebar.prototype.addCategory = function(category) {
  const sidebarList = document.querySelector(".sidebarList")
  const sidebarLi = document.createElement("li")
  const closeBtn = document.createElement("button")

  const sidebarP = document.createElement("p")
  sidebarP.textContent = category.title
  sidebarLi.appendChild(sidebarP)



  closeBtn.className = "closeSideBtn"
  closeBtn.textContent = "X"
  sidebarLi.setAttribute("index", category.index)
  sidebarLi.appendChild(closeBtn)
  sidebarList.appendChild(sidebarLi)
}

Sidebar.prototype.removeCategory = function(category) {
  category.remove()
  console.log(category)
}

function SidebarStore() {}

SidebarStore.prototype.getCategorys = function() {
  let categorys
    if(localStorage.getItem("categorys") === null) {
      categorys = []
    } else {
      categorys = JSON.parse(localStorage.getItem("categorys"))
    }

    console.log("Get categorys: " + JSON.stringify(categorys))
    return categorys
}

SidebarStore.prototype.displayCategorys = function() {
  const store = new SidebarStore
  const categorys = store.getCategorys()
  console.log("Display categorys: " + JSON.stringify(categorys))

  categorys.forEach(function(category) {
    const sidebarUI = new Sidebar
    sidebarUI.addCategory(category)
  })
}

SidebarStore.prototype.addCategory = function(category) {
  const sidebarStore = new SidebarStore
  const categorys = sidebarStore.getCategorys()

  categorys.push(category)

  localStorage.setItem("categorys", JSON.stringify(categorys))
}

SidebarStore.prototype.removeCategory = function(sideindex) {
  const sidebarStore = new SidebarStore
  const categorys = sidebarStore.getCategorys()

  categorys.forEach(function(category, index) {
    if (category.index == sideindex) {
      categorys.splice(index, 1)
    }
  })

  localStorage.setItem("categorys", JSON.stringify(categorys))
}

function getSideIndex() {
  const sidebarStore = new SidebarStore
  const categorys = sidebarStore.getCategorys()

  let sideIndex

  if (categorys.length == 0) {
    sideIndex = 0
  } else {
    sideIndex = categorys[categorys.length - 1].index + 1
  }

  return sideIndex
}

const sidebarStore = new SidebarStore
document.addEventListener("DOMContentLoaded", sidebarStore.displayCategorys)

const categoryFactory = function(title, index) {
  return {title, index}
}

const sidebarDiv = document.querySelector(".sidebar")
sidebarDiv.addEventListener("click", (e) => {
  if (e.target.className === "addCategory") {
    const wrapper = document.createElement("div")
    wrapper.className = "wrapper"
    document.body.appendChild(wrapper)
    wrapper.appendChild((0,_components_categoryForm__WEBPACK_IMPORTED_MODULE_4__["default"])())
  }

  const categoryFormDiv = document.querySelector(".categoryForm")
  const sidebarUI = new Sidebar
  const sidebarStore = new SidebarStore

  let index = getSideIndex()

  categoryFormDiv.addEventListener("submit", (e) => {
    const title = document.querySelector("#title").value
    let categoryTitle = categoryFactory(title, index)
    sidebarUI.addCategory(categoryTitle)
    sidebarStore.addCategory(categoryTitle)

    e.preventDefault()

    categoryFormDiv.parentElement.remove()
    categoryFormDiv.remove()
  })
})

sidebarDiv.addEventListener("click", (e) => {
  const sidebarUI = new Sidebar
  const sidebarStore = new SidebarStore

  if (e.target.className === "closeSideBtn") {
    sidebarUI.removeCategory(e.target.parentElement)
    sidebarStore.removeCategory(e.target.parentElement.attributes.index.value)
  }
})

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ2hHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDYztBQUNVO0FBQ007QUFDSDtBQUNVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0RBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtFQUFPO0FBQ2pDO0FBQ0E7QUFDQSxpQkFBaUIsK0RBQU87QUFDeEI7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvYWRkVG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeUZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBMzMzMjc7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNmb3JtID4gaW5wdXQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybSA+IHAge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0gKyBsYWJlbCB7XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ0biB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdG46aG92ZXIge1xcclxcbiAgY29sb3I6ICMxNjE2MTY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxNzE2NDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gPiAudGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbmRleCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdG4ge1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzc0OTNBO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZVNpZGVCdG4ge1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvID4gLnRvZG8tZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBjb2xvcjogIzE2MTYxNjtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWluLXdpZHRoOiAyMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDNzQ5M0E7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICBncmlkLXJvdzogMSAvIDQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQ2F0ZWdvcnkge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRDYXRlZ29yeTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMxNjE2MTY7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLXRpdGxlIHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMTYxNjE2O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxNjE2MTY7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRvZG8ge1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCA4MywgODMsIDAuNSk7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnVsID4gbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG51bCA+IGxpID4gcHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcXHJcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBtYXJnaW46IDBweCA1cHggMCAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcblxcclxcbi5hbGxDYXRlZ29yaWVzUCwgLnRvZGF5Q2F0ZWdvcmllc1AsIC50b21tb3Jvd0NhdGVnb3JpZXNQIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOGZyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNmb3JtIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0EzMzMyNztcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0gPiBpbnB1dCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNmb3JtID4gcCB7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSArIGxhYmVsIHtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnRuIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzE2MTYxNjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi50b2RvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE3MTY0O1xcclxcbiAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyA+IC50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZGV4IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ0biB7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDNzQ5M0E7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlU2lkZUJ0biB7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gPiAudG9kby1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGNvbG9yOiAjMTYxNjE2O1xcclxcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtaW4td2lkdGg6IDIxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M3NDkzQTtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXHJcXG4gIGdyaWQtcm93OiAxIC8gNDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRDYXRlZ29yeSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZENhdGVnb3J5OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzE2MTYxNjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItdGl0bGUge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICMxNjE2MTY7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE2MTYxNjtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVG9kbyB7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDgzLCA4MywgMC41KTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxudWwgPiBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbnVsID4gbGkgPiBwe1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xcclxcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIG1hcmdpbjogMHB4IDVweCAwIDA7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbENhdGVnb3JpZXNQLCAudG9kYXlDYXRlZ29yaWVzUCwgLnRvbW1vcm93Q2F0ZWdvcmllc1Age1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFkZFRvZG8gPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gIGFkZFRvZG8uY2xhc3NOYW1lID0gXCJhZGRUb2RvXCJcclxuICBhZGRUb2RvLnRleHRDb250ZW50ID0gXCIrXCJcclxuXHJcbiAgcmV0dXJuIGFkZFRvZG9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkVG9kbyIsImNvbnN0IGNhdGVnb3J5Rm9ybSA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxyXG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtXCIpXHJcbiAgZm9ybS5jbGFzc05hbWUgPSBcImNhdGVnb3J5Rm9ybVwiXHJcblxyXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIk5ldyBDYXRlZ29yeTogXCJcclxuICBwMS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXHJcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIDgpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwMSlcclxuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxyXG5cclxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgQ2F0ZWdvcnlcIlxyXG4gIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSBcInN1Ym1pdEJ0blwiXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXHJcblxyXG4gIHJldHVybiBmb3JtXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3J5Rm9ybSIsImNvbnN0IGZvcm0gPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcclxuICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybVwiKVxyXG5cclxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIilcclxuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCJcclxuICBwMS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwMSlcclxuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxyXG5cclxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NcIilcclxuICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIlxyXG4gIHAyLmFwcGVuZENoaWxkKGRlc2NMYWJlbClcclxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NcIilcclxuICBkZXNjLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjXCIpXHJcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocDIpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjKVxyXG5cclxuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgY29uc3QgZHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICBkdWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVcIilcclxuICBkdWVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlOiBcIlxyXG4gIHAzLmFwcGVuZENoaWxkKGR1ZUxhYmVsKVxyXG4gIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIGR1ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZVwiKVxyXG4gIGR1ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlXCIpXHJcbiAgZHVlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwMylcclxuICBmb3JtLmFwcGVuZENoaWxkKGR1ZSlcclxuXHJcbiAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIGNvbnN0IHByaW9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICBwcmlvckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiXHJcbiAgcDQuYXBwZW5kQ2hpbGQocHJpb3JMYWJlbClcclxuICBmb3JtLmFwcGVuZENoaWxkKHA0KVxyXG5cclxuICBjb25zdCBwcmlvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcblxyXG4gIGNvbnN0IHByaW9yUmFkaW9PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICBwcmlvclJhZGlvT25lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIilcclxuICBwcmlvclJhZGlvT25lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKVxyXG4gIHByaW9yUmFkaW9PbmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpXHJcbiAgcHJpb3JSYWRpb09uZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKVxyXG4gIGNvbnN0IHByaW9yUmFkaW9PbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIHByaW9yUmFkaW9PbmVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKVxyXG4gIHByaW9yUmFkaW9PbmVMYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCJcclxuICBwcmlvckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvclJhZGlvT25lKVxyXG4gIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yUmFkaW9PbmVMYWJlbClcclxuXHJcbiAgY29uc3QgcHJpb3JSYWRpb1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIHByaW9yUmFkaW9Ud28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eU1lZFwiKVxyXG4gIHByaW9yUmFkaW9Ud28uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JSYWRpb1R3by5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIilcclxuICBwcmlvclJhZGlvVHdvLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibWVkaXVtXCIpXHJcbiAgY29uc3QgcHJpb3JSYWRpb1R3b0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgcHJpb3JSYWRpb1R3b0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5TWVkXCIpXHJcbiAgcHJpb3JSYWRpb1R3b0xhYmVsLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIlxyXG4gIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yUmFkaW9Ud28pXHJcbiAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JSYWRpb1R3b0xhYmVsKVxyXG5cclxuICBjb25zdCBwcmlvclJhZGlvVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICBwcmlvclJhZGlvVGhyZWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eUhpZ2hcIilcclxuICBwcmlvclJhZGlvVGhyZWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JSYWRpb1RocmVlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKVxyXG4gIHByaW9yUmFkaW9UaHJlZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhpZ2hcIilcclxuICBjb25zdCBwcmlvclJhZGlvVGhyZWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIHByaW9yUmFkaW9UaHJlZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5SGlnaFwiKVxyXG4gIHByaW9yUmFkaW9UaHJlZUxhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoXCJcclxuICBwcmlvckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvclJhZGlvVGhyZWUpXHJcbiAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JSYWRpb1RocmVlTGFiZWwpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvckNvbnRhaW5lcilcclxuXHJcblxyXG4gIGNvbnN0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxyXG4gIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSBcInN1Ym1pdEJ0blwiXHJcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0QnRuXCIpXHJcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcclxuICBwNS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwNSlcclxuXHJcbiAgcmV0dXJuIGZvcm1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybSIsImNvbnN0IHNpZGViYXIgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIHNpZGViYXIuY2xhc3NOYW1lID0gXCJzaWRlYmFyXCJcclxuXHJcbiAgY29uc3Qgc2lkZWJhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcbiAgc2lkZWJhclRpdGxlLmNsYXNzTmFtZSA9IFwic2lkZWJhci10aXRsZVwiXHJcbiAgc2lkZWJhclRpdGxlLnRleHRDb250ZW50ID0gXCJUT0RPJ1MgTElTVFwiXHJcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyVGl0bGUpXHJcblxyXG4gIGNvbnN0IHNpZGViYXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcbiAgc2lkZWJhckxpc3QuY2xhc3NOYW1lID0gXCJzaWRlYmFyTGlzdFwiXHJcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlzdClcclxuXHJcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxyXG4gIGNvbnN0IGFsbENhdGVnb3JpZXNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBhbGxDYXRlZ29yaWVzUC5jbGFzc05hbWUgPSBcImFsbENhdGVnb3JpZXNQXCJcclxuICBhbGxDYXRlZ29yaWVzUC50ZXh0Q29udGVudCA9IFwiQWxsXCJcclxuICBhbGxDYXRlZ29yaWVzLmFwcGVuZENoaWxkKGFsbENhdGVnb3JpZXNQKVxyXG4gIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKGFsbENhdGVnb3JpZXMpXHJcblxyXG4gIGNvbnN0IHRvZGF5Q2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxyXG4gIGNvbnN0IHRvZGF5Q2F0ZWdvcmllc1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIHRvZGF5Q2F0ZWdvcmllc1AuY2xhc3NOYW1lID0gXCJ0b2RheUNhdGVnb3JpZXNQXCJcclxuICB0b2RheUNhdGVnb3JpZXNQLnRleHRDb250ZW50ID0gXCJUb2RheVwiXHJcbiAgdG9kYXlDYXRlZ29yaWVzLmFwcGVuZENoaWxkKHRvZGF5Q2F0ZWdvcmllc1ApXHJcbiAgc2lkZWJhckxpc3QuYXBwZW5kQ2hpbGQodG9kYXlDYXRlZ29yaWVzKVxyXG5cclxuICBjb25zdCB0b21tb3Jvd0NhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuICBjb25zdCB0b21tb3Jvd0NhdGVnb3JpZXNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICB0b21tb3Jvd0NhdGVnb3JpZXNQLmNsYXNzTmFtZSA9IFwidG9tbW9yb3dDYXRlZ29yaWVzUFwiXHJcbiAgdG9tbW9yb3dDYXRlZ29yaWVzUC50ZXh0Q29udGVudCA9IFwiVG9tbW9yb3dcIlxyXG4gIHRvbW1vcm93Q2F0ZWdvcmllcy5hcHBlbmRDaGlsZCh0b21tb3Jvd0NhdGVnb3JpZXNQKVxyXG4gIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKHRvbW1vcm93Q2F0ZWdvcmllcylcclxuXHJcbiAgY29uc3QgYWRkQ2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgYWRkQ2F0ZWdvcnlCdXR0b24uY2xhc3NOYW1lID0gXCJhZGRDYXRlZ29yeVwiXHJcbiAgYWRkQ2F0ZWdvcnlCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBjYXRlZ29yeVwiXHJcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRDYXRlZ29yeUJ1dHRvbilcclxuXHJcbiAgcmV0dXJuIHNpZGViYXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhciIsImltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IGZvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtLmpzXCJcclxuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlYmFyLmpzXCJcclxuaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vY29tcG9uZW50cy9hZGRUb2RvXCJcclxuaW1wb3J0IGNhdGVnb3J5Rm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL2NhdGVnb3J5Rm9ybVwiXHJcblxyXG5mdW5jdGlvbiBUT0RPKCkge31cclxuXHJcblRPRE8ucHJvdG90eXBlLmFkZFRvZG9Ub0xpc3QgPSBmdW5jdGlvbih0b2RvKSB7XHJcbiAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgdG9kb0l0ZW0uY2xhc3NOYW1lID0gXCJ0b2RvXCJcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiXHJcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpXHJcblxyXG4gIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICB0aXRsZVRleHQuY2xhc3NOYW1lID0gXCJ0aXRsZVRleHRcIlxyXG4gIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGVcclxuICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpXHJcblxyXG4gIGNvbnN0IGluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBpbmRleC5jbGFzc05hbWUgPSBcImluZGV4XCJcclxuICBpbmRleC50ZXh0Q29udGVudCA9IHRvZG8uaW5kZXhcclxuICB0aXRsZS5hcHBlbmRDaGlsZChpbmRleClcclxuXHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgY2xvc2VCdG4uY2xhc3NOYW1lID0gXCJjbG9zZUJ0blwiXHJcbiAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIlhcIlxyXG4gIHRpdGxlLmFwcGVuZENoaWxkKGNsb3NlQnRuKVxyXG5cclxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIGRlc2MuY2xhc3NOYW1lID0gXCJkZXNjXCJcclxuICBkZXNjLnRleHRDb250ZW50ID0gdG9kby5kZXNjXHJcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZGVzYylcclxuXHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIGZvb3Rlci5jbGFzc05hbWUgPSBcInRvZG8tZm9vdGVyXCJcclxuXHJcbiAgY29uc3QgcHJpb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgcHJpb3IudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dG9kby5wcmlvcml0eX1gXHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHByaW9yKVxyXG5cclxuICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgZHVlLnRleHRDb250ZW50ID0gYER1ZTogJHt0b2RvLmR1ZX1gXHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGR1ZSlcclxuXHJcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZm9vdGVyKVxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pXHJcbn1cclxuXHJcblRPRE8ucHJvdG90eXBlLnJlbW92ZVRvZG8gPSBmdW5jdGlvbih0YXJnZXQpIHtcclxuICB0YXJnZXQucmVtb3ZlKClcclxufVxyXG5cclxuVE9ETy5wcm90b3R5cGUuY2xlYXJGb3JtID0gZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZSA9IG51bGxcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NcIikudmFsdWUgPSBudWxsXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVcIikudmFsdWUgPSBudWxsXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS5jaGVja2VkID0gbnVsbFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlNZWRcIikuY2hlY2tlZCA9IG51bGxcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5SGlnaFwiKS5jaGVja2VkID0gbnVsbFxyXG59XHJcblxyXG5UT0RPLnByb3RvdHlwZS5zaG93Rm9ybSA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgd3JhcHBlci5jbGFzc05hbWUgPSBcIndyYXBwZXJcIlxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcilcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGZvcm0oKSlcclxufVxyXG5cclxuZnVuY3Rpb24gU3RvcmUoKSB7fVxyXG5cclxuU3RvcmUucHJvdG90eXBlLmdldFRvZG9zID0gZnVuY3Rpb24oKSB7XHJcbiAgbGV0IHRvZG9zXHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpID09PSBudWxsKSB7XHJcbiAgICAgIHRvZG9zID0gW11cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2Rvc1xyXG59XHJcblxyXG5TdG9yZS5wcm90b3R5cGUuZGlzcGxheVRvZG9zID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmVcclxuICBjb25zdCB0b2RvcyA9IHN0b3JlLmdldFRvZG9zKClcclxuXHJcbiAgdG9kb3MuZm9yRWFjaChmdW5jdGlvbih0b2RvKSB7XHJcbiAgICBjb25zdCB1aSA9IG5ldyBUT0RPXHJcbiAgICB1aS5hZGRUb2RvVG9MaXN0KHRvZG8pXHJcbiAgfSlcclxufVxyXG5cclxuU3RvcmUucHJvdG90eXBlLmFkZFRvZG8gPSBmdW5jdGlvbih0b2RvKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmVcclxuICBjb25zdCB0b2RvcyA9IHN0b3JlLmdldFRvZG9zKClcclxuXHJcbiAgdG9kb3MucHVzaCh0b2RvKVxyXG4gIGNvbnNvbGUubG9nKFwiQWRkIHRvZG86IFwiICsgSlNPTi5zdHJpbmdpZnkodG9kb3MpKVxyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcclxufVxyXG5cclxuU3RvcmUucHJvdG90eXBlLnJlbW92ZVRvZG8gPSBmdW5jdGlvbih0b2RvaW5kZXgpIHtcclxuICBjb25zdCBzdG9yZSA9IG5ldyBTdG9yZVxyXG4gIGNvbnN0IHRvZG9zID0gc3RvcmUuZ2V0VG9kb3MoKVxyXG5cclxuICB0b2Rvcy5mb3JFYWNoKGZ1bmN0aW9uKHRvZG8sIGluZGV4KSB7XHJcbiAgICBpZiAodG9kby5pbmRleCA9PSB0b2RvaW5kZXgpIHtcclxuICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKVxyXG59XHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBzdG9yZS5kaXNwbGF5VG9kb3MpXHJcblxyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxubWFpbi5jbGFzc05hbWUgPSBcIm1haW5cIlxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpZGViYXIoKSlcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKVxyXG5cclxubWFpbi5hcHBlbmRDaGlsZChhZGRUb2RvKCkpXHJcblxyXG5jb25zdCB0b2RvRmFjdG9yeSA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBpbmRleCkge1xyXG4gIHJldHVybiB7dGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIGluZGV4fVxyXG59XHJcblxyXG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGNvbnN0IHRvZG8gPSBuZXcgVE9ET1xyXG4gIGNvbnN0IHN0b3JlID0gbmV3IFN0b3JlXHJcblxyXG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJjbG9zZUJ0blwiKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50KVxyXG4gICAgdG9kby5yZW1vdmVUb2RvKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudClcclxuICAgIHN0b3JlLnJlbW92ZVRvZG8oZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudClcclxuICB9XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBnZXRJbmRleCgpIHtcclxuICBjb25zdCBzdG9yZSA9IG5ldyBTdG9yZVxyXG4gIGNvbnN0IHRvZG9zID0gc3RvcmUuZ2V0VG9kb3MoKVxyXG5cclxuICBsZXQgdG9kb0luZGV4XHJcblxyXG4gIGlmICh0b2Rvcy5sZW5ndGggPT0gMCkge1xyXG4gICAgdG9kb0luZGV4ID0gMFxyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2RvSW5kZXggPSB0b2Rvc1t0b2Rvcy5sZW5ndGggLSAxXS5pbmRleCArIDFcclxuICB9XHJcblxyXG4gIHJldHVybiB0b2RvSW5kZXhcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBjb25zdCB0b2RvID0gbmV3IFRPRE9cclxuXHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImFkZFRvZG9cIikge1xyXG4gICAgdG9kby5zaG93Rm9ybSgpXHJcblxyXG4gICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKVxyXG5cclxuICAgIGZvcm1EaXYuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBjb25zdCB0b2RvID0gbmV3IFRPRE9cclxuICAgIGNvbnN0IHN0b3JlID0gbmV3IFN0b3JlXHJcblxyXG4gICAgY29uc3QgdG9kb3MgPSBzdG9yZS5nZXRUb2Rvc1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZVxyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY1wiKS52YWx1ZVxyXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVcIikudmFsdWVcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS52YWx1ZVxyXG5cclxuICAgIGxldCBpbmRleCA9IGdldEluZGV4KClcclxuXHJcbiAgICBjb25zdCB0b2RvSXRlbSA9IHRvZG9GYWN0b3J5KHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBpbmRleClcclxuXHJcbiAgICB0b2RvLmFkZFRvZG9Ub0xpc3QodG9kb0l0ZW0pXHJcbiAgICBzdG9yZS5hZGRUb2RvKHRvZG9JdGVtKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG5cclxuICAgIHRvZG8uY2xlYXJGb3JtKClcclxuXHJcbiAgICBmb3JtRGl2LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgIGZvcm1EaXYucmVtb3ZlKClcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG5cclxuZnVuY3Rpb24gU2lkZWJhcigpIHt9XHJcblxyXG5TaWRlYmFyLnByb3RvdHlwZS5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgY29uc3Qgc2lkZWJhckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJMaXN0XCIpXHJcbiAgY29uc3Qgc2lkZWJhckxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcblxyXG4gIGNvbnN0IHNpZGViYXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBzaWRlYmFyUC50ZXh0Q29udGVudCA9IGNhdGVnb3J5LnRpdGxlXHJcbiAgc2lkZWJhckxpLmFwcGVuZENoaWxkKHNpZGViYXJQKVxyXG5cclxuXHJcblxyXG4gIGNsb3NlQnRuLmNsYXNzTmFtZSA9IFwiY2xvc2VTaWRlQnRuXCJcclxuICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiXHJcbiAgc2lkZWJhckxpLnNldEF0dHJpYnV0ZShcImluZGV4XCIsIGNhdGVnb3J5LmluZGV4KVxyXG4gIHNpZGViYXJMaS5hcHBlbmRDaGlsZChjbG9zZUJ0bilcclxuICBzaWRlYmFyTGlzdC5hcHBlbmRDaGlsZChzaWRlYmFyTGkpXHJcbn1cclxuXHJcblNpZGViYXIucHJvdG90eXBlLnJlbW92ZUNhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcclxuICBjYXRlZ29yeS5yZW1vdmUoKVxyXG4gIGNvbnNvbGUubG9nKGNhdGVnb3J5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyU3RvcmUoKSB7fVxyXG5cclxuU2lkZWJhclN0b3JlLnByb3RvdHlwZS5nZXRDYXRlZ29yeXMgPSBmdW5jdGlvbigpIHtcclxuICBsZXQgY2F0ZWdvcnlzXHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3J5c1wiKSA9PT0gbnVsbCkge1xyXG4gICAgICBjYXRlZ29yeXMgPSBbXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2F0ZWdvcnlzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3J5c1wiKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkdldCBjYXRlZ29yeXM6IFwiICsgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcnlzKSlcclxuICAgIHJldHVybiBjYXRlZ29yeXNcclxufVxyXG5cclxuU2lkZWJhclN0b3JlLnByb3RvdHlwZS5kaXNwbGF5Q2F0ZWdvcnlzID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSBuZXcgU2lkZWJhclN0b3JlXHJcbiAgY29uc3QgY2F0ZWdvcnlzID0gc3RvcmUuZ2V0Q2F0ZWdvcnlzKClcclxuICBjb25zb2xlLmxvZyhcIkRpc3BsYXkgY2F0ZWdvcnlzOiBcIiArIEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5cykpXHJcblxyXG4gIGNhdGVnb3J5cy5mb3JFYWNoKGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICBjb25zdCBzaWRlYmFyVUkgPSBuZXcgU2lkZWJhclxyXG4gICAgc2lkZWJhclVJLmFkZENhdGVnb3J5KGNhdGVnb3J5KVxyXG4gIH0pXHJcbn1cclxuXHJcblNpZGViYXJTdG9yZS5wcm90b3R5cGUuYWRkQ2F0ZWdvcnkgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xyXG4gIGNvbnN0IHNpZGViYXJTdG9yZSA9IG5ldyBTaWRlYmFyU3RvcmVcclxuICBjb25zdCBjYXRlZ29yeXMgPSBzaWRlYmFyU3RvcmUuZ2V0Q2F0ZWdvcnlzKClcclxuXHJcbiAgY2F0ZWdvcnlzLnB1c2goY2F0ZWdvcnkpXHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcnlzXCIsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5cykpXHJcbn1cclxuXHJcblNpZGViYXJTdG9yZS5wcm90b3R5cGUucmVtb3ZlQ2F0ZWdvcnkgPSBmdW5jdGlvbihzaWRlaW5kZXgpIHtcclxuICBjb25zdCBzaWRlYmFyU3RvcmUgPSBuZXcgU2lkZWJhclN0b3JlXHJcbiAgY29uc3QgY2F0ZWdvcnlzID0gc2lkZWJhclN0b3JlLmdldENhdGVnb3J5cygpXHJcblxyXG4gIGNhdGVnb3J5cy5mb3JFYWNoKGZ1bmN0aW9uKGNhdGVnb3J5LCBpbmRleCkge1xyXG4gICAgaWYgKGNhdGVnb3J5LmluZGV4ID09IHNpZGVpbmRleCkge1xyXG4gICAgICBjYXRlZ29yeXMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcnlzXCIsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5cykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNpZGVJbmRleCgpIHtcclxuICBjb25zdCBzaWRlYmFyU3RvcmUgPSBuZXcgU2lkZWJhclN0b3JlXHJcbiAgY29uc3QgY2F0ZWdvcnlzID0gc2lkZWJhclN0b3JlLmdldENhdGVnb3J5cygpXHJcblxyXG4gIGxldCBzaWRlSW5kZXhcclxuXHJcbiAgaWYgKGNhdGVnb3J5cy5sZW5ndGggPT0gMCkge1xyXG4gICAgc2lkZUluZGV4ID0gMFxyXG4gIH0gZWxzZSB7XHJcbiAgICBzaWRlSW5kZXggPSBjYXRlZ29yeXNbY2F0ZWdvcnlzLmxlbmd0aCAtIDFdLmluZGV4ICsgMVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZGVJbmRleFxyXG59XHJcblxyXG5jb25zdCBzaWRlYmFyU3RvcmUgPSBuZXcgU2lkZWJhclN0b3JlXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHNpZGViYXJTdG9yZS5kaXNwbGF5Q2F0ZWdvcnlzKVxyXG5cclxuY29uc3QgY2F0ZWdvcnlGYWN0b3J5ID0gZnVuY3Rpb24odGl0bGUsIGluZGV4KSB7XHJcbiAgcmV0dXJuIHt0aXRsZSwgaW5kZXh9XHJcbn1cclxuXHJcbmNvbnN0IHNpZGViYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIilcclxuc2lkZWJhckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImFkZENhdGVnb3J5XCIpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IFwid3JhcHBlclwiXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhdGVnb3J5Rm9ybSgpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlGb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yeUZvcm1cIilcclxuICBjb25zdCBzaWRlYmFyVUkgPSBuZXcgU2lkZWJhclxyXG4gIGNvbnN0IHNpZGViYXJTdG9yZSA9IG5ldyBTaWRlYmFyU3RvcmVcclxuXHJcbiAgbGV0IGluZGV4ID0gZ2V0U2lkZUluZGV4KClcclxuXHJcbiAgY2F0ZWdvcnlGb3JtRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZVxyXG4gICAgbGV0IGNhdGVnb3J5VGl0bGUgPSBjYXRlZ29yeUZhY3RvcnkodGl0bGUsIGluZGV4KVxyXG4gICAgc2lkZWJhclVJLmFkZENhdGVnb3J5KGNhdGVnb3J5VGl0bGUpXHJcbiAgICBzaWRlYmFyU3RvcmUuYWRkQ2F0ZWdvcnkoY2F0ZWdvcnlUaXRsZSlcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBjYXRlZ29yeUZvcm1EaXYucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgY2F0ZWdvcnlGb3JtRGl2LnJlbW92ZSgpXHJcbiAgfSlcclxufSlcclxuXHJcbnNpZGViYXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgY29uc3Qgc2lkZWJhclVJID0gbmV3IFNpZGViYXJcclxuICBjb25zdCBzaWRlYmFyU3RvcmUgPSBuZXcgU2lkZWJhclN0b3JlXHJcblxyXG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiY2xvc2VTaWRlQnRuXCIpIHtcclxuICAgIHNpZGViYXJVSS5yZW1vdmVDYXRlZ29yeShlLnRhcmdldC5wYXJlbnRFbGVtZW50KVxyXG4gICAgc2lkZWJhclN0b3JlLnJlbW92ZUNhdGVnb3J5KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlcy5pbmRleC52YWx1ZSlcclxuICB9XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9