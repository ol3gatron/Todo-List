import img from "../menu.png"
import svg from "../menu_svg.svg"

const mobileSidebar = function() {
  const sidebar = document.createElement("div")
  sidebar.className = "mobileSidebar"

  const title = document.createElement("h1")
  title.textContent = "Things to do"
  sidebar.appendChild(title)

  const menu = document.createElement("img")
  menu.setAttribute("src", svg)
  menu.className = "sidebar-img"
  sidebar.appendChild(menu)

  const sidebarBtn = document.createElement("button")
  sidebarBtn.className = "mobileSidebarBtn"


  return sidebar
}

export default mobileSidebar