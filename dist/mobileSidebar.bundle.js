"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["mobileSidebar"],{

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "16f4ff352eb5d01fdf7a68419c6b8193.png");

/***/ }),

/***/ "./src/menu_svg.svg":
/*!**************************!*\
  !*** ./src/menu_svg.svg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a19400c9b7fe657ca7864b425e992ea0.svg");

/***/ }),

/***/ "./src/components/mobileSidebar.js":
/*!*****************************************!*\
  !*** ./src/components/mobileSidebar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu.png */ "./src/menu.png");
/* harmony import */ var _menu_svg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu_svg.svg */ "./src/menu_svg.svg");



const mobileSidebar = function() {
  const sidebar = document.createElement("div")
  sidebar.className = "mobileSidebar"

  const title = document.createElement("h1")
  title.textContent = "Things to do"
  sidebar.appendChild(title)

  const menu = document.createElement("img")
  menu.setAttribute("src", _menu_svg_svg__WEBPACK_IMPORTED_MODULE_1__["default"])
  menu.className = "sidebar-img"
  sidebar.appendChild(menu)

  const sidebarBtn = document.createElement("button")
  sidebarBtn.className = "mobileSidebarBtn"


  return sidebar
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileSidebar);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/mobileSidebar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlU2lkZWJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbEQ7QUFDSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxREFBRztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21lbnUucG5nIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tZW51X3N2Zy5zdmciLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvbW9iaWxlU2lkZWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTZmNGZmMzUyZWI1ZDAxZmRmN2E2ODQxOWM2YjgxOTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImExOTQwMGM5YjdmZTY1N2NhNzg2NGI0MjVlOTkyZWEwLnN2Z1wiOyIsImltcG9ydCBpbWcgZnJvbSBcIi4uL21lbnUucG5nXCJcclxuaW1wb3J0IHN2ZyBmcm9tIFwiLi4vbWVudV9zdmcuc3ZnXCJcclxuXHJcbmNvbnN0IG1vYmlsZVNpZGViYXIgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIHNpZGViYXIuY2xhc3NOYW1lID0gXCJtb2JpbGVTaWRlYmFyXCJcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhpbmdzIHRvIGRvXCJcclxuICBzaWRlYmFyLmFwcGVuZENoaWxkKHRpdGxlKVxyXG5cclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gIG1lbnUuc2V0QXR0cmlidXRlKFwic3JjXCIsIHN2ZylcclxuICBtZW51LmNsYXNzTmFtZSA9IFwic2lkZWJhci1pbWdcIlxyXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobWVudSlcclxuXHJcbiAgY29uc3Qgc2lkZWJhckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICBzaWRlYmFyQnRuLmNsYXNzTmFtZSA9IFwibW9iaWxlU2lkZWJhckJ0blwiXHJcblxyXG5cclxuICByZXR1cm4gc2lkZWJhclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2JpbGVTaWRlYmFyIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9