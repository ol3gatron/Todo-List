import css from "./style.css"
import form from "./components/form.js"
import sidebar from "./components/sidebar.js"
import addTodo from "./components/addTodo"

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

const todoFactory = function(title, desc, due, priority, index) {
  return {title, desc, due, priority, index}
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

    let index = getIndex()

    const todoItem = todoFactory(title, desc, due, priority, index)

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