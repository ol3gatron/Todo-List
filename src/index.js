import css from "./style.css"
import form from "./components/form.js"
import sidebar from "./components/sidebar.js"
import addTodo from "./components/addTodo"
import categoryForm from "./components/categoryForm"
import moment from "moment"

function TODO() {}

TODO.prototype.addTodoToList = function(todo) {
  const todoItem = document.createElement("div")
  todoItem.className = "todo"

  const title = document.createElement("div")
  title.className = "title"
  todoItem.appendChild(title)

  const titleText = document.createElement("div")
  titleText.className = "titleText"
  titleText.textContent = todo.title
  title.appendChild(titleText)

  const index = document.createElement("p")
  index.className = "index"
  index.textContent = todo.index
  title.appendChild(index)

  const closeBtn = document.createElement("button")
  closeBtn.className = "closeBtn"
  closeBtn.textContent = "X"
  title.appendChild(closeBtn)

  const desc = document.createElement("div")
  desc.className = "desc"
  desc.textContent = todo.desc
  todoItem.appendChild(desc)

  const footer = document.createElement("div")
  footer.className = "todo-footer"

  const prior = document.createElement("div")
  prior.textContent = `Priority: ${todo.priority}`
  footer.appendChild(prior)

  const due = document.createElement("div")
  due.textContent = `Due: ${todo.due}`
  footer.appendChild(due)

  todoItem.appendChild(footer)

  const category = document.createElement("div")
  category.textContent = `Category: ${todo.category}`
  category.className = "todoCategory"
  todoItem.appendChild(category)

  document.querySelector(".main").appendChild(todoItem)
}

TODO.prototype.removeTodo = function(target) {
  target.remove()
}

TODO.prototype.clearForm = function() {
  document.querySelector("#title").value = null
  document.querySelector("#desc").value = null
  document.querySelector("#due").value = null
  document.querySelector("#priority").checked = null
  document.querySelector("#priorityMed").checked = null
  document.querySelector("#priorityHigh").checked = null
}

TODO.prototype.showForm = function() {
  const wrapper = document.createElement("div")
  wrapper.className = "wrapper"
  document.body.appendChild(wrapper)
  wrapper.appendChild(form())
}

function Store() {}

Store.prototype.getTodos = function() {
  let todos
    if(localStorage.getItem("todos") === null) {
      todos = []
    } else {
      todos = JSON.parse(localStorage.getItem("todos"))
    }

    return todos
}

Store.prototype.displayTodos = function() {
  const store = new Store
  const todos = store.getTodos()

  todos.forEach(function(todo) {
    const ui = new TODO
    ui.addTodoToList(todo)
  })
}

Store.prototype.displayFilteredTodos = function(filteredArr) {
  filteredArr.forEach(function(todo) {
    const ui = new TODO
    ui.addTodoToList(todo)
  })
}

Store.prototype.addTodo = function(todo) {
  const store = new Store
  const todos = store.getTodos()

  todos.push(todo)
  console.log("Add todo: " + JSON.stringify(todos))

  localStorage.setItem("todos", JSON.stringify(todos))
}

Store.prototype.removeTodo = function(todoindex) {
  const store = new Store
  const todos = store.getTodos()

  todos.forEach(function(todo, index) {
    if (todo.index == todoindex) {
      todos.splice(index, 1)
    }
  })

  localStorage.setItem("todos", JSON.stringify(todos))
}

const store = new Store
document.addEventListener("DOMContentLoaded", store.displayTodos)


const main = document.createElement("div")
main.className = "main"
document.body.appendChild(sidebar())
document.body.appendChild(main)

main.appendChild(addTodo())

const todoFactory = function(title, desc, due, priority, index, category) {
  return {title, desc, due, priority, index, category}
}

main.addEventListener("click", (e) => {
  const todo = new TODO
  const store = new Store

  if (e.target.className == "closeBtn") {
    console.log(e.target.previousElementSibling.textContent)
    todo.removeTodo(e.target.parentElement.parentElement)
    store.removeTodo(e.target.previousElementSibling.textContent)
  }
})

function getIndex() {
  const store = new Store
  const todos = store.getTodos()

  let todoIndex

  if (todos.length == 0) {
    todoIndex = 0
  } else {
    todoIndex = todos[todos.length - 1].index + 1
  }

  return todoIndex
}

document.body.addEventListener("click", (e) => {
  const todo = new TODO

  if (e.target.className == "addTodo") {
    todo.showForm()

    const formDiv = document.querySelector("#form")

    formDiv.addEventListener("submit", function(e) {
    const todo = new TODO
    const store = new Store

    const todos = store.getTodos

    const title = document.querySelector("#title").value
    const desc = document.querySelector("#desc").value
    const due = document.querySelector("#due").value
    const priority = document.querySelector("input[name='priority']:checked").value
    const category = document.querySelector("select").value

    let index = getIndex()

    const todoItem = todoFactory(title, desc, due, priority, index, category)
    console.log(todoItem)

    todo.addTodoToList(todoItem)
    store.addTodo(todoItem)

    console.log(index)

    todo.clearForm()

    formDiv.parentElement.remove()
    formDiv.remove()

    e.preventDefault()
    })
  }
})

function Sidebar() {}

Sidebar.prototype.addCategory = function(category) {
  const sidebarList = document.querySelector(".sidebarList")
  const sidebarLi = document.createElement("li")
  const closeBtn = document.createElement("button")

  const sidebarP = document.createElement("p")
  sidebarP.textContent = category.title
  sidebarP.className = "sidebar-category"
  sidebarLi.appendChild(sidebarP)



  closeBtn.className = "closeSideBtn"
  closeBtn.textContent = "X"
  sidebarLi.setAttribute("index", category.index)
  sidebarLi.appendChild(closeBtn)
  sidebarList.appendChild(sidebarLi)
}

Sidebar.prototype.removeCategory = function(category) {
  category.remove()
  console.log(category)
}

function SidebarStore() {}

SidebarStore.prototype.getCategorys = function() {
  let categorys
    if(localStorage.getItem("categorys") === null) {
      categorys = []
    } else {
      categorys = JSON.parse(localStorage.getItem("categorys"))
    }

    return categorys
}

SidebarStore.prototype.displayCategorys = function() {
  const store = new SidebarStore
  const categorys = store.getCategorys()

  categorys.forEach(function(category) {
    const sidebarUI = new Sidebar
    sidebarUI.addCategory(category)
  })
}

SidebarStore.prototype.addCategory = function(category) {
  const sidebarStore = new SidebarStore
  const categorys = sidebarStore.getCategorys()

  categorys.push(category)

  localStorage.setItem("categorys", JSON.stringify(categorys))
}

SidebarStore.prototype.removeCategory = function(sideindex) {
  const sidebarStore = new SidebarStore
  const categorys = sidebarStore.getCategorys()

  categorys.forEach(function(category, index) {
    if (category.index == sideindex) {
      categorys.splice(index, 1)
    }
  })

  localStorage.setItem("categorys", JSON.stringify(categorys))
}

function getSideIndex() {
  const sidebarStore = new SidebarStore
  const categorys = sidebarStore.getCategorys()

  let sideIndex

  if (categorys.length == 0) {
    sideIndex = 0
  } else {
    sideIndex = categorys[categorys.length - 1].index + 1
  }

  return sideIndex
}

const sidebarStore = new SidebarStore
document.addEventListener("DOMContentLoaded", sidebarStore.displayCategorys)

const categoryFactory = function(title, index) {
  return {title, index}
}

const sidebarDiv = document.querySelector(".sidebar")
sidebarDiv.addEventListener("click", (e) => {
  if (e.target.className === "addCategory") {
    const wrapper = document.createElement("div")
    wrapper.className = "wrapper"
    document.body.appendChild(wrapper)
    wrapper.appendChild(categoryForm())
  }

  const categoryFormDiv = document.querySelector(".categoryForm")
  const sidebarUI = new Sidebar
  const sidebarStore = new SidebarStore

  let index = getSideIndex()

  categoryFormDiv.addEventListener("submit", (e) => {
    const title = document.querySelector("#title").value
    let categoryTitle = categoryFactory(title, index)
    sidebarUI.addCategory(categoryTitle)
    sidebarStore.addCategory(categoryTitle)

    e.preventDefault()

    categoryFormDiv.parentElement.remove()
    categoryFormDiv.remove()
  })
})

sidebarDiv.addEventListener("click", (e) => {
  const sidebarUI = new Sidebar
  const sidebarStore = new SidebarStore

  if (e.target.className === "closeSideBtn") {
    sidebarUI.removeCategory(e.target.parentElement)
    sidebarStore.removeCategory(e.target.parentElement.attributes.index.value)
  }
})

const filter = function(filterKey, filterWord) {
  const store = new Store
  const todos = store.getTodos()

  const filtered = todos.filter(todo => todo[filterKey] === filterWord)
  return filtered
}

sidebarDiv.addEventListener("click", (e) => {
  if (e.target.className === "sidebar-category") {
    const filtered = filter("category", e.target.textContent)
    console.log(filtered)

    const allTodos = document.querySelectorAll(".todo")
    allTodos.forEach(function(todo) {
      todo.remove()
    })

    const store = new Store
    store.displayFilteredTodos(filtered)
  }
})

sidebarDiv.addEventListener("click", (e) => {
  const store = new Store

  if (e.target.className === "allCategoriesP") {
    const allTodos = document.querySelectorAll(".todo")
    allTodos.forEach(function(todo) {
      todo.remove()
    })

    store.displayTodos()
  }
})

sidebarDiv.addEventListener("click", (e) => {
  if (e.target.className === "todayCategoriesP") {
    const today = new Date();
    const todaysDate = today.getFullYear()+"-"+"0"+(today.getMonth()+1)+"-"+today.getDate();
    console.log(todaysDate)

    const filtered = filter("due", todaysDate)
    const allTodos = document.querySelectorAll(".todo")
    allTodos.forEach(function(todo) {
      todo.remove()
    })

    const store = new Store
    store.displayFilteredTodos(filtered)
  }
})

function getThisWeekDates() {
  const weekDates= [];

  for (let i = 1; i <= 7; i++) {
    weekDates.push(moment().day(i));
  }

  return weekDates;
}


sidebarDiv.addEventListener("click", (e) => {
  const store = new Store
  const todos = store.getTodos()
  const thisWeekDates = getThisWeekDates()
  const thisWeekDatesFormated = []
  const arrar = []


  if (e.target.className === "weekCategoriesP") {
    thisWeekDates.forEach(function(date) {
      thisWeekDatesFormated.push(date.format("YYYY-MM-DD"))
    })

    todos.forEach(function(todo) {
      for (let i = 0; thisWeekDatesFormated.length > i; i++) {
        if (todo.due === thisWeekDatesFormated[i]) {
          arrar.push(todo)
        }
      }
    })

    const allTodos = document.querySelectorAll(".todo")
    allTodos.forEach(function(todo) {
      todo.remove()
    })

    store.displayFilteredTodos(arrar)


    console.log(arrar)
    console.log(thisWeekDatesFormated)
  }
})
