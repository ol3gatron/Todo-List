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


const main = document.createElement("div")
main.className = "main"
document.body.appendChild(sidebar())
document.body.appendChild(main)

// main.appendChild(form())
main.appendChild(addTodo())

const todos = []
const todoFactory = function(title, desc, due, priority, index) {
  return {title, desc, due, priority, index}
}

// formDiv.addEventListener("submit", function(e) {
//   const todo = new TODO

//   const title = document.querySelector("#title").value
//   const desc = document.querySelector("#desc").value
//   const due = document.querySelector("#due").value
//   const priority = document.querySelector("input[name='priority']:checked").value

//   todo.addTodoToList(todoFactory(title, desc, due, priority))
//   todos.push(todoFactory(title, desc, due, priority))
//   todo.clearForm()
//   console.log(todos)

//   e.preventDefault()
// })

main.addEventListener("click", (e) => {
  const todo = new TODO

  if (e.target.className == "closeBtn") {
    todo.removeTodo(e.target.parentElement.parentElement)
  }
})

let index = 1;

document.body.addEventListener("click", (e) => {
  const todo = new TODO

  if (e.target.className == "addTodo") {
    todo.showForm()

    const formDiv = document.querySelector("#form")

    formDiv.addEventListener("submit", function(e) {
    const todo = new TODO

    const title = document.querySelector("#title").value
    const desc = document.querySelector("#desc").value
    const due = document.querySelector("#due").value
    const priority = document.querySelector("input[name='priority']:checked").value

    const todoItem = todoFactory(title, desc, due, priority, index)

    todo.addTodoToList(todoItem)
    todos.push(todoItem)
    index++;
    todo.clearForm()
    console.log(todos)

    formDiv.parentElement.remove()
    formDiv.remove()

    e.preventDefault()
    })
  }


})