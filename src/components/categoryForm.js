const categoryForm = function() {
  const form = document.createElement("form")
  form.setAttribute("id", "form")
  form.className = "categoryForm"

  const closeBtn = document.createElement("button")
  closeBtn.className = "closeBtnForm"
  closeBtn.textContent = "X"
  closeBtn.setAttribute("type", "button")

  const closeBtnDiv = document.createElement("div")
  closeBtnDiv.className = "closeBtnDiv"
  closeBtnDiv.appendChild(closeBtn)
  form.appendChild(closeBtnDiv)

  const p1 = document.createElement("p")
  const titleLabel = document.createElement("label")
  titleLabel.setAttribute("for", "title")
  titleLabel.textContent = "New Category: "
  p1.appendChild(titleLabel)
  const title = document.createElement("input")
  title.setAttribute("id", "title")
  title.setAttribute("name", "title")
  title.setAttribute("type", "text")
  title.setAttribute("maxlength", 15)
  title.setAttribute("required", " ")
  form.appendChild(p1)
  form.appendChild(title)

  const submitBtn = document.createElement("button")
  submitBtn.textContent = "Add Category"
  submitBtn.className = "submitBtn"
  form.appendChild(submitBtn)

  return form
}

export default categoryForm