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

  const selectP = document.createElement("p")
  selectP.textContent = "Category: "
  const select = document.createElement("select")
  const selectDis = document.createElement("option")
  selectDis.setAttribute("selected", " ")
  selectDis.setAttribute("disabled", " ")
  selectDis.textContent = "Choose category"
  select.appendChild(selectDis)
  const store = new SidebarStore
  const categorys = store.getCategorys()
  categorys.forEach(function(category, index) {
    const option = document.createElement("option")
    option.textContent = category.title
    option.setAttribute("value", category.title)
    select.appendChild(option)
  })


  form.appendChild(selectP)
  form.appendChild(select)

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
  priorRadioOne.setAttribute("value", "Low")
  const priorRadioOneLabel = document.createElement("label")
  priorRadioOneLabel.setAttribute("for", "priority")
  priorRadioOneLabel.textContent = "Low"
  priorContainer.appendChild(priorRadioOne)
  priorContainer.appendChild(priorRadioOneLabel)

  const priorRadioTwo = document.createElement("input")
  priorRadioTwo.setAttribute("id", "priorityMed")
  priorRadioTwo.setAttribute("name", "priority")
  priorRadioTwo.setAttribute("type", "radio")
  priorRadioTwo.setAttribute("value", "Medium")
  const priorRadioTwoLabel = document.createElement("label")
  priorRadioTwoLabel.setAttribute("for", "priorityMed")
  priorRadioTwoLabel.textContent = "Medium"
  priorContainer.appendChild(priorRadioTwo)
  priorContainer.appendChild(priorRadioTwoLabel)

  const priorRadioThree = document.createElement("input")
  priorRadioThree.setAttribute("id", "priorityHigh")
  priorRadioThree.setAttribute("name", "priority")
  priorRadioThree.setAttribute("type", "radio")
  priorRadioThree.setAttribute("value", "High")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY29tcG9uZW50cy9mb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNpZGViYXJTdG9yZSgpIHt9XHJcblxyXG5TaWRlYmFyU3RvcmUucHJvdG90eXBlLmdldENhdGVnb3J5cyA9IGZ1bmN0aW9uKCkge1xyXG4gIGxldCBjYXRlZ29yeXNcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcnlzXCIpID09PSBudWxsKSB7XHJcbiAgICAgIGNhdGVnb3J5cyA9IFtdXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYXRlZ29yeXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcnlzXCIpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiR2V0IGNhdGVnb3J5czogXCIgKyBKU09OLnN0cmluZ2lmeShjYXRlZ29yeXMpKVxyXG4gICAgcmV0dXJuIGNhdGVnb3J5c1xyXG59XHJcblxyXG5jb25zdCBmb3JtID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXHJcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1cIilcclxuXHJcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpXHJcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiXHJcbiAgcDEuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbClcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIilcclxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIilcclxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocDEpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSlcclxuXHJcbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjXCIpXHJcbiAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCJcclxuICBwMi5hcHBlbmRDaGlsZChkZXNjTGFiZWwpXHJcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIGRlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjXCIpXHJcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY1wiKVxyXG4gIGRlc2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcclxuICBmb3JtLmFwcGVuZENoaWxkKHAyKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzYylcclxuXHJcbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIGNvbnN0IGR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgZHVlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlXCIpXHJcbiAgZHVlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZTogXCJcclxuICBwMy5hcHBlbmRDaGlsZChkdWVMYWJlbClcclxuICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICBkdWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVcIilcclxuICBkdWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZVwiKVxyXG4gIGR1ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocDMpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWUpXHJcblxyXG4gIGNvbnN0IHNlbGVjdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIHNlbGVjdFAudGV4dENvbnRlbnQgPSBcIkNhdGVnb3J5OiBcIlxyXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuICBjb25zdCBzZWxlY3REaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgc2VsZWN0RGlzLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiIFwiKVxyXG4gIHNlbGVjdERpcy5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIiBcIilcclxuICBzZWxlY3REaXMudGV4dENvbnRlbnQgPSBcIkNob29zZSBjYXRlZ29yeVwiXHJcbiAgc2VsZWN0LmFwcGVuZENoaWxkKHNlbGVjdERpcylcclxuICBjb25zdCBzdG9yZSA9IG5ldyBTaWRlYmFyU3RvcmVcclxuICBjb25zdCBjYXRlZ29yeXMgPSBzdG9yZS5nZXRDYXRlZ29yeXMoKVxyXG4gIGNhdGVnb3J5cy5mb3JFYWNoKGZ1bmN0aW9uKGNhdGVnb3J5LCBpbmRleCkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcnkudGl0bGVcclxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBjYXRlZ29yeS50aXRsZSlcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXHJcbiAgfSlcclxuXHJcblxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0UClcclxuICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdClcclxuXHJcbiAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIGNvbnN0IHByaW9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICBwcmlvckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiXHJcbiAgcDQuYXBwZW5kQ2hpbGQocHJpb3JMYWJlbClcclxuICBmb3JtLmFwcGVuZENoaWxkKHA0KVxyXG5cclxuICBjb25zdCBwcmlvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcblxyXG4gIGNvbnN0IHByaW9yUmFkaW9PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICBwcmlvclJhZGlvT25lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIilcclxuICBwcmlvclJhZGlvT25lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKVxyXG4gIHByaW9yUmFkaW9PbmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpXHJcbiAgcHJpb3JSYWRpb09uZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxvd1wiKVxyXG4gIGNvbnN0IHByaW9yUmFkaW9PbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIHByaW9yUmFkaW9PbmVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKVxyXG4gIHByaW9yUmFkaW9PbmVMYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCJcclxuICBwcmlvckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvclJhZGlvT25lKVxyXG4gIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yUmFkaW9PbmVMYWJlbClcclxuXHJcbiAgY29uc3QgcHJpb3JSYWRpb1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIHByaW9yUmFkaW9Ud28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eU1lZFwiKVxyXG4gIHByaW9yUmFkaW9Ud28uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JSYWRpb1R3by5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIilcclxuICBwcmlvclJhZGlvVHdvLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTWVkaXVtXCIpXHJcbiAgY29uc3QgcHJpb3JSYWRpb1R3b0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgcHJpb3JSYWRpb1R3b0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5TWVkXCIpXHJcbiAgcHJpb3JSYWRpb1R3b0xhYmVsLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIlxyXG4gIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yUmFkaW9Ud28pXHJcbiAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JSYWRpb1R3b0xhYmVsKVxyXG5cclxuICBjb25zdCBwcmlvclJhZGlvVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICBwcmlvclJhZGlvVGhyZWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eUhpZ2hcIilcclxuICBwcmlvclJhZGlvVGhyZWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JSYWRpb1RocmVlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKVxyXG4gIHByaW9yUmFkaW9UaHJlZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZ2hcIilcclxuICBjb25zdCBwcmlvclJhZGlvVGhyZWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIHByaW9yUmFkaW9UaHJlZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5SGlnaFwiKVxyXG4gIHByaW9yUmFkaW9UaHJlZUxhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoXCJcclxuICBwcmlvckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvclJhZGlvVGhyZWUpXHJcbiAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JSYWRpb1RocmVlTGFiZWwpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvckNvbnRhaW5lcilcclxuXHJcblxyXG4gIGNvbnN0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxyXG4gIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSBcInN1Ym1pdEJ0blwiXHJcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0QnRuXCIpXHJcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcclxuICBwNS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwNSlcclxuXHJcbiAgcmV0dXJuIGZvcm1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==