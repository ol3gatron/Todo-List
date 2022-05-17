import css from "./style.css"
import form from "./components/form.js"
import sidebar from "./components/sidebar.js"

function UI() {}

UI.prototype.addTodoToList = function(todo) {
  const todoItem = document.createElement("div")
  todoItem.className = "todo"

  const title = document.createElement("div")
  title.className = "title"
  title.textContent = todo.title
  todoItem.appendChild(title)

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
  due.textContent = todo.due
  footer.appendChild(due)

  todoItem.appendChild(footer)

  document.body.appendChild(todoItem)
}

document.body.appendChild(sidebar())
document.body.appendChild(form())

const formDiv = document.querySelector("#form")

const todos = []

const todoFactory = function(title, desc, due, priority) {
 return {title, desc, due, priority}
}

formDiv.addEventListener("submit", function(e) {
  const ui = new UI

  const title = document.querySelector("#title").value
  const desc = document.querySelector("#desc").value
  const due = document.querySelector("#due").value
  const priority = document.querySelector("input[name='priority']:checked").value

  ui.addTodoToList(todoFactory(title, desc, due, priority))

  todos.push(todoFactory(title, desc, due, priority))
  console.log(todos)

  e.preventDefault()
})