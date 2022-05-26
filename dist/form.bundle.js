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
  titleLabel.textContent = "Title: "
  p1.appendChild(titleLabel)
  const title = document.createElement("input")
  title.setAttribute("id", "title")
  title.setAttribute("name", "title")
  title.setAttribute("type", "text")
  title.setAttribute("required", " ")
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
  desc.setAttribute("required", " ")
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
  due.setAttribute("required", " ")
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
  priorRadioOne.setAttribute("required", " ")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTaWRlYmFyU3RvcmUoKSB7fVxyXG5cclxuU2lkZWJhclN0b3JlLnByb3RvdHlwZS5nZXRDYXRlZ29yeXMgPSBmdW5jdGlvbigpIHtcclxuICBsZXQgY2F0ZWdvcnlzXHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3J5c1wiKSA9PT0gbnVsbCkge1xyXG4gICAgICBjYXRlZ29yeXMgPSBbXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2F0ZWdvcnlzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3J5c1wiKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkdldCBjYXRlZ29yeXM6IFwiICsgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcnlzKSlcclxuICAgIHJldHVybiBjYXRlZ29yeXNcclxufVxyXG5cclxuY29uc3QgZm9ybSA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxyXG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtXCIpXHJcblxyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gIGNsb3NlQnRuLmNsYXNzTmFtZSA9IFwiY2xvc2VCdG5Gb3JtXCJcclxuICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwi4pyWXCJcclxuICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpXHJcblxyXG4gIGNvbnN0IGNsb3NlQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIGNsb3NlQnRuRGl2LmNsYXNzTmFtZSA9IFwiY2xvc2VCdG5EaXZcIlxyXG4gIGNsb3NlQnRuRGl2LmFwcGVuZENoaWxkKGNsb3NlQnRuKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG5EaXYpXHJcblxyXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKVxyXG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIlxyXG4gIHAxLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpXHJcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpXHJcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcclxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIiBcIilcclxuICBmb3JtLmFwcGVuZENoaWxkKHAxKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXHJcblxyXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY1wiKVxyXG4gIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiXHJcbiAgcDIuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKVxyXG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICBkZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY1wiKVxyXG4gIGRlc2Muc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NcIilcclxuICBkZXNjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXHJcbiAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIiBcIilcclxuICBmb3JtLmFwcGVuZENoaWxkKHAyKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzYylcclxuXHJcbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIGNvbnN0IGR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgZHVlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlXCIpXHJcbiAgZHVlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZTogXCJcclxuICBwMy5hcHBlbmRDaGlsZChkdWVMYWJlbClcclxuICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICBkdWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVcIilcclxuICBkdWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZVwiKVxyXG4gIGR1ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKVxyXG4gIGR1ZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIiBcIilcclxuICBmb3JtLmFwcGVuZENoaWxkKHAzKVxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlKVxyXG5cclxuICBjb25zdCBzZWxlY3RQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBzZWxlY3RQLnRleHRDb250ZW50ID0gXCJDYXRlZ29yeTogXCJcclxuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXHJcbiAgY29uc3Qgc2VsZWN0RGlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gIHNlbGVjdERpcy5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIiBcIilcclxuICBzZWxlY3REaXMuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCIgXCIpXHJcbiAgc2VsZWN0RGlzLnRleHRDb250ZW50ID0gXCJDaG9vc2UgY2F0ZWdvcnlcIlxyXG4gIHNlbGVjdC5hcHBlbmRDaGlsZChzZWxlY3REaXMpXHJcbiAgY29uc3Qgc3RvcmUgPSBuZXcgU2lkZWJhclN0b3JlXHJcbiAgY29uc3QgY2F0ZWdvcnlzID0gc3RvcmUuZ2V0Q2F0ZWdvcnlzKClcclxuICBjYXRlZ29yeXMuZm9yRWFjaChmdW5jdGlvbihjYXRlZ29yeSwgaW5kZXgpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNhdGVnb3J5LnRpdGxlXHJcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgY2F0ZWdvcnkudGl0bGUpXHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxyXG4gIH0pXHJcblxyXG5cclxuICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdFApXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3QpXHJcblxyXG4gIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCBwcmlvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgcHJpb3JMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKVxyXG4gIHByaW9yTGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIlxyXG4gIHA0LmFwcGVuZENoaWxkKHByaW9yTGFiZWwpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwNClcclxuXHJcbiAgY29uc3QgcHJpb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG5cclxuICBjb25zdCBwcmlvclJhZGlvT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgcHJpb3JSYWRpb09uZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JSYWRpb09uZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIilcclxuICBwcmlvclJhZGlvT25lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKVxyXG4gIHByaW9yUmFkaW9PbmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMb3dcIilcclxuICBwcmlvclJhZGlvT25lLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiIFwiKVxyXG4gIGNvbnN0IHByaW9yUmFkaW9PbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIHByaW9yUmFkaW9PbmVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKVxyXG4gIHByaW9yUmFkaW9PbmVMYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCJcclxuICBwcmlvckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvclJhZGlvT25lKVxyXG4gIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yUmFkaW9PbmVMYWJlbClcclxuXHJcbiAgY29uc3QgcHJpb3JSYWRpb1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIHByaW9yUmFkaW9Ud28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eU1lZFwiKVxyXG4gIHByaW9yUmFkaW9Ud28uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JSYWRpb1R3by5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIilcclxuICBwcmlvclJhZGlvVHdvLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTWVkaXVtXCIpXHJcbiAgY29uc3QgcHJpb3JSYWRpb1R3b0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgcHJpb3JSYWRpb1R3b0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5TWVkXCIpXHJcbiAgcHJpb3JSYWRpb1R3b0xhYmVsLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIlxyXG4gIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yUmFkaW9Ud28pXHJcbiAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JSYWRpb1R3b0xhYmVsKVxyXG5cclxuICBjb25zdCBwcmlvclJhZGlvVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICBwcmlvclJhZGlvVGhyZWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eUhpZ2hcIilcclxuICBwcmlvclJhZGlvVGhyZWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpXHJcbiAgcHJpb3JSYWRpb1RocmVlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKVxyXG4gIHByaW9yUmFkaW9UaHJlZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZ2hcIilcclxuICBjb25zdCBwcmlvclJhZGlvVGhyZWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gIHByaW9yUmFkaW9UaHJlZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5SGlnaFwiKVxyXG4gIHByaW9yUmFkaW9UaHJlZUxhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoXCJcclxuICBwcmlvckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvclJhZGlvVGhyZWUpXHJcbiAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JSYWRpb1RocmVlTGFiZWwpXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvckNvbnRhaW5lcilcclxuXHJcblxyXG4gIGNvbnN0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxyXG4gIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSBcInN1Ym1pdEJ0blwiXHJcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0QnRuXCIpXHJcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcclxuICBwNS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwNSlcclxuXHJcbiAgcmV0dXJuIGZvcm1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==