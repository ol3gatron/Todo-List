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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb21wb25lbnRzL2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxyXG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtXCIpXHJcblxyXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIlxyXG4gIHAxLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpXHJcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpXHJcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcclxuICBmb3JtLmFwcGVuZENoaWxkKHAxKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXHJcblxyXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY1wiKVxyXG4gIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiXHJcbiAgcDIuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKVxyXG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICBkZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY1wiKVxyXG4gIGRlc2Muc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NcIilcclxuICBkZXNjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwMilcclxuICBmb3JtLmFwcGVuZENoaWxkKGRlc2MpXHJcblxyXG4gIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCBkdWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIGR1ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZVwiKVxyXG4gIGR1ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWU6IFwiXHJcbiAgcDMuYXBwZW5kQ2hpbGQoZHVlTGFiZWwpXHJcbiAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgZHVlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlXCIpXHJcbiAgZHVlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWVcIilcclxuICBkdWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIilcclxuICBmb3JtLmFwcGVuZENoaWxkKHAzKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlKVxyXG5cclxuICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgY29uc3QgcHJpb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIHByaW9yTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIilcclxuICBwcmlvckxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCJcclxuICBwNC5hcHBlbmRDaGlsZChwcmlvckxhYmVsKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocDQpXHJcblxyXG4gIGNvbnN0IHByaW9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuXHJcbiAgY29uc3QgcHJpb3JSYWRpb09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIHByaW9yUmFkaW9PbmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKVxyXG4gIHByaW9yUmFkaW9PbmUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JSYWRpb09uZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIilcclxuICBwcmlvclJhZGlvT25lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibG93XCIpXHJcbiAgY29uc3QgcHJpb3JSYWRpb09uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgcHJpb3JSYWRpb09uZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JSYWRpb09uZUxhYmVsLnRleHRDb250ZW50ID0gXCJMb3dcIlxyXG4gIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yUmFkaW9PbmUpXHJcbiAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JSYWRpb09uZUxhYmVsKVxyXG5cclxuICBjb25zdCBwcmlvclJhZGlvVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgcHJpb3JSYWRpb1R3by5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5TWVkXCIpXHJcbiAgcHJpb3JSYWRpb1R3by5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIilcclxuICBwcmlvclJhZGlvVHdvLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKVxyXG4gIHByaW9yUmFkaW9Ud28uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtZWRpdW1cIilcclxuICBjb25zdCBwcmlvclJhZGlvVHdvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICBwcmlvclJhZGlvVHdvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlNZWRcIilcclxuICBwcmlvclJhZGlvVHdvTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiXHJcbiAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JSYWRpb1R3bylcclxuICBwcmlvckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvclJhZGlvVHdvTGFiZWwpXHJcblxyXG4gIGNvbnN0IHByaW9yUmFkaW9UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIHByaW9yUmFkaW9UaHJlZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5SGlnaFwiKVxyXG4gIHByaW9yUmFkaW9UaHJlZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIilcclxuICBwcmlvclJhZGlvVGhyZWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpXHJcbiAgcHJpb3JSYWRpb1RocmVlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKVxyXG4gIGNvbnN0IHByaW9yUmFkaW9UaHJlZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgcHJpb3JSYWRpb1RocmVlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlIaWdoXCIpXHJcbiAgcHJpb3JSYWRpb1RocmVlTGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2hcIlxyXG4gIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yUmFkaW9UaHJlZSlcclxuICBwcmlvckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvclJhZGlvVGhyZWVMYWJlbClcclxuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yQ29udGFpbmVyKVxyXG5cclxuXHJcbiAgY29uc3QgcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiXHJcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0QnRuXCIpXHJcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcclxuICBwNS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwNSlcclxuXHJcbiAgcmV0dXJuIGZvcm1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==