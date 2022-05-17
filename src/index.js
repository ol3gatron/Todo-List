import css from "./style.css"
import form from "./components/form.js"

document.body.appendChild(form())

const formDiv = document.querySelector("#form")

const todos = []

const todoFactory = function(title, desc, due, priority) {
 return {title, desc, due, priority}
}

formDiv.addEventListener("submit", function(e) {
  const title = document.querySelector("#title").value
  const desc = document.querySelector("#desc").value
  const due = document.querySelector("#due").value
  const priority = document.querySelector("input[name='priority']:checked").value

  todos.push(todoFactory(title, desc, due, priority))
  console.log(todos)

  e.preventDefault()
})