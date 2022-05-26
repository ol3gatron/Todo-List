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

  const closeBtn = document.createElement("button")
  closeBtn.className = "closeBtnForm"
  closeBtn.textContent = "✖"
  closeBtn.setAttribute("type", "button")

  const closeBtnDiv = document.createElement("div")
  closeBtnDiv.className = "closeBtnDiv"
  closeBtnDiv.appendChild(closeBtn)
  form.appendChild(closeBtnDiv)

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
  title.setAttribute("required", " ")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnlGb3JtLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5Rm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXRlZ29yeUZvcm0gPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcclxuICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybVwiKVxyXG4gIGZvcm0uY2xhc3NOYW1lID0gXCJjYXRlZ29yeUZvcm1cIlxyXG5cclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICBjbG9zZUJ0bi5jbGFzc05hbWUgPSBcImNsb3NlQnRuRm9ybVwiXHJcbiAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIuKcllwiXHJcbiAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKVxyXG5cclxuICBjb25zdCBjbG9zZUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBjbG9zZUJ0bkRpdi5jbGFzc05hbWUgPSBcImNsb3NlQnRuRGl2XCJcclxuICBjbG9zZUJ0bkRpdi5hcHBlbmRDaGlsZChjbG9zZUJ0bilcclxuICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuRGl2KVxyXG5cclxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIilcclxuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgQ2F0ZWdvcnk6IFwiXHJcbiAgcDEuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbClcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIilcclxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIilcclxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCAxNSlcclxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIiBcIilcclxuICBmb3JtLmFwcGVuZENoaWxkKHAxKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBDYXRlZ29yeVwiXHJcbiAgc3VibWl0QnRuLmNsYXNzTmFtZSA9IFwic3VibWl0QnRuXCJcclxuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcclxuXHJcbiAgcmV0dXJuIGZvcm1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcnlGb3JtIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9