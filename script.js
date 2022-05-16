const form = document.querySelector("#form")

const todoFactory = function(title, desc, due, priority) {
 return {title, desc, due, priority}
}

form.addEventListener("submit", function(e) {
  const title = document.querySelector("#title").value
  const desc = document.querySelector("#desc").value
  const due = document.querySelector("#due").value
  const priority = document.querySelector("input[name='priority']:checked").value



  console.log(todoFactory(title, desc, due, priority))

  e.preventDefault()
})