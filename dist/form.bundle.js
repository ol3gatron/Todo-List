"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["form"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/form.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXHJcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1cIilcclxuXHJcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpXHJcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiXHJcbiAgcDEuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbClcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIilcclxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIilcclxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocDEpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSlcclxuXHJcbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjXCIpXHJcbiAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCJcclxuICBwMi5hcHBlbmRDaGlsZChkZXNjTGFiZWwpXHJcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIGRlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjXCIpXHJcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY1wiKVxyXG4gIGRlc2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcclxuICBmb3JtLmFwcGVuZENoaWxkKHAyKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzYylcclxuXHJcbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIGNvbnN0IGR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgZHVlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlXCIpXHJcbiAgZHVlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZTogXCJcclxuICBwMy5hcHBlbmRDaGlsZChkdWVMYWJlbClcclxuICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICBkdWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVcIilcclxuICBkdWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZVwiKVxyXG4gIGR1ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocDMpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWUpXHJcblxyXG4gIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCBwcmlvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgcHJpb3JMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKVxyXG4gIHByaW9yTGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIlxyXG4gIHA0LmFwcGVuZENoaWxkKHByaW9yTGFiZWwpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwNClcclxuXHJcbiAgY29uc3QgcHJpb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG5cclxuICBjb25zdCBwcmlvclJhZGlvT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgcHJpb3JSYWRpb09uZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JSYWRpb09uZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIilcclxuICBwcmlvclJhZGlvT25lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKVxyXG4gIHByaW9yUmFkaW9PbmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsb3dcIilcclxuICBjb25zdCBwcmlvclJhZGlvT25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICBwcmlvclJhZGlvT25lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIilcclxuICBwcmlvclJhZGlvT25lTGFiZWwudGV4dENvbnRlbnQgPSBcIkxvd1wiXHJcbiAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JSYWRpb09uZSlcclxuICBwcmlvckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvclJhZGlvT25lTGFiZWwpXHJcblxyXG4gIGNvbnN0IHByaW9yUmFkaW9Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICBwcmlvclJhZGlvVHdvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlNZWRcIilcclxuICBwcmlvclJhZGlvVHdvLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKVxyXG4gIHByaW9yUmFkaW9Ud28uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpXHJcbiAgcHJpb3JSYWRpb1R3by5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1lZGl1bVwiKVxyXG4gIGNvbnN0IHByaW9yUmFkaW9Ud29MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIHByaW9yUmFkaW9Ud29MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eU1lZFwiKVxyXG4gIHByaW9yUmFkaW9Ud29MYWJlbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCJcclxuICBwcmlvckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvclJhZGlvVHdvKVxyXG4gIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yUmFkaW9Ud29MYWJlbClcclxuXHJcbiAgY29uc3QgcHJpb3JSYWRpb1RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgcHJpb3JSYWRpb1RocmVlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlIaWdoXCIpXHJcbiAgcHJpb3JSYWRpb1RocmVlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKVxyXG4gIHByaW9yUmFkaW9UaHJlZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIilcclxuICBwcmlvclJhZGlvVGhyZWUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJoaWdoXCIpXHJcbiAgY29uc3QgcHJpb3JSYWRpb1RocmVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICBwcmlvclJhZGlvVGhyZWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eUhpZ2hcIilcclxuICBwcmlvclJhZGlvVGhyZWVMYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiXHJcbiAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JSYWRpb1RocmVlKVxyXG4gIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yUmFkaW9UaHJlZUxhYmVsKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JDb250YWluZXIpXHJcblxyXG5cclxuICBjb25zdCBwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCJcclxuICBzdWJtaXRCdG4uY2xhc3NOYW1lID0gXCJzdWJtaXRCdG5cIlxyXG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdEJ0blwiKVxyXG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXHJcbiAgcDUuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocDUpXHJcblxyXG4gIHJldHVybiBmb3JtXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=