"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["sidebar"],{

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

  const weekCategories = document.createElement("li")
  const weekCategoriesP = document.createElement("p")
  weekCategoriesP.className = "weekCategoriesP"
  weekCategoriesP.textContent = "This Week"
  weekCategories.appendChild(weekCategoriesP)
  sidebarList.appendChild(weekCategories)

  const addCategoryButton = document.createElement("button")
  addCategoryButton.className = "addCategory"
  addCategoryButton.textContent = "Add category"
  sidebar.appendChild(addCategoryButton)

  return sidebar
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/sidebar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaWRlYmFyID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBzaWRlYmFyLmNsYXNzTmFtZSA9IFwic2lkZWJhclwiXHJcblxyXG4gIGNvbnN0IHNpZGViYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG4gIHNpZGViYXJUaXRsZS5jbGFzc05hbWUgPSBcInNpZGViYXItdGl0bGVcIlxyXG4gIHNpZGViYXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVE9ETydTIExJU1RcIlxyXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhclRpdGxlKVxyXG5cclxuICBjb25zdCBzaWRlYmFyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxyXG4gIHNpZGViYXJMaXN0LmNsYXNzTmFtZSA9IFwic2lkZWJhckxpc3RcIlxyXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckxpc3QpXHJcblxyXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuICBjb25zdCBhbGxDYXRlZ29yaWVzUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgYWxsQ2F0ZWdvcmllc1AuY2xhc3NOYW1lID0gXCJhbGxDYXRlZ29yaWVzUFwiXHJcbiAgYWxsQ2F0ZWdvcmllc1AudGV4dENvbnRlbnQgPSBcIkFsbFwiXHJcbiAgYWxsQ2F0ZWdvcmllcy5hcHBlbmRDaGlsZChhbGxDYXRlZ29yaWVzUClcclxuICBzaWRlYmFyTGlzdC5hcHBlbmRDaGlsZChhbGxDYXRlZ29yaWVzKVxyXG5cclxuICBjb25zdCB0b2RheUNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuICBjb25zdCB0b2RheUNhdGVnb3JpZXNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICB0b2RheUNhdGVnb3JpZXNQLmNsYXNzTmFtZSA9IFwidG9kYXlDYXRlZ29yaWVzUFwiXHJcbiAgdG9kYXlDYXRlZ29yaWVzUC50ZXh0Q29udGVudCA9IFwiVG9kYXlcIlxyXG4gIHRvZGF5Q2F0ZWdvcmllcy5hcHBlbmRDaGlsZCh0b2RheUNhdGVnb3JpZXNQKVxyXG4gIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKHRvZGF5Q2F0ZWdvcmllcylcclxuXHJcbiAgY29uc3Qgd2Vla0NhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuICBjb25zdCB3ZWVrQ2F0ZWdvcmllc1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIHdlZWtDYXRlZ29yaWVzUC5jbGFzc05hbWUgPSBcIndlZWtDYXRlZ29yaWVzUFwiXHJcbiAgd2Vla0NhdGVnb3JpZXNQLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIlxyXG4gIHdlZWtDYXRlZ29yaWVzLmFwcGVuZENoaWxkKHdlZWtDYXRlZ29yaWVzUClcclxuICBzaWRlYmFyTGlzdC5hcHBlbmRDaGlsZCh3ZWVrQ2F0ZWdvcmllcylcclxuXHJcbiAgY29uc3QgYWRkQ2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgYWRkQ2F0ZWdvcnlCdXR0b24uY2xhc3NOYW1lID0gXCJhZGRDYXRlZ29yeVwiXHJcbiAgYWRkQ2F0ZWdvcnlCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBjYXRlZ29yeVwiXHJcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRDYXRlZ29yeUJ1dHRvbilcclxuXHJcbiAgcmV0dXJuIHNpZGViYXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhciJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==