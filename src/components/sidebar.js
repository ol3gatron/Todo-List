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

export default sidebar