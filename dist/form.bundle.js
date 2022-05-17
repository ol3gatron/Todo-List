"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["form"],{

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = function() {
  const form = document.createElement("form")

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

  return form
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/form.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxyXG5cclxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIilcclxuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCJcclxuICBwMS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwMSlcclxuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxyXG5cclxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NcIilcclxuICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIlxyXG4gIHAyLmFwcGVuZENoaWxkKGRlc2NMYWJlbClcclxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NcIilcclxuICBkZXNjLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjXCIpXHJcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocDIpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjKVxyXG5cclxuICByZXR1cm4gZm9ybVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9