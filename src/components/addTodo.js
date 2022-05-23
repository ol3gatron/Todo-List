const addTodo = function() {
  const addTodo = document.createElement("button")
  addTodo.className = "addTodo"
  addTodo.textContent = "+"

  return addTodo
}

export default addTodo