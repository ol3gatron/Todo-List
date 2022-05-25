"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["categoryForm"],{

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
  title.setAttribute("maxlength", 15)
  form.appendChild(p1)
  form.appendChild(title)

  const submitBtn = document.createElement("button")
  submitBtn.textContent = "Add Category"
  submitBtn.className = "submitBtn"
  form.appendChild(submitBtn)

  return form
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryForm);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/categoryForm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnlGb3JtLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhdGVnb3J5Rm9ybSA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxyXG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtXCIpXHJcbiAgZm9ybS5jbGFzc05hbWUgPSBcImNhdGVnb3J5Rm9ybVwiXHJcblxyXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIk5ldyBDYXRlZ29yeTogXCJcclxuICBwMS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXHJcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIDE1KVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocDEpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSlcclxuXHJcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIENhdGVnb3J5XCJcclxuICBzdWJtaXRCdG4uY2xhc3NOYW1lID0gXCJzdWJtaXRCdG5cIlxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxyXG5cclxuICByZXR1cm4gZm9ybVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRlZ29yeUZvcm0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=