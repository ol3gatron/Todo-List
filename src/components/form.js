const form = function() {
  const form = document.createElement("form")
  form.setAttribute("id", "form")

  const p1 = document.createElement("p")
  const titleLabel = document.createElement("label")
  titleLabel.setAttribute("for", "title")
  titleLabel.textContent = "Title: "
  p1.appendChild(titleLabel)
  const title = document.createElement("input")
  title.setAttribute("id", "title")
  title.setAttribute("name", "title")
  title.setAttribute("type", "text")
  form.appendChild(p1)
  form.appendChild(title)

  const p2 = document.createElement("p")
  const descLabel = document.createElement("label")
  descLabel.setAttribute("for", "desc")
  descLabel.textContent = "Description: "
  p2.appendChild(descLabel)
  const desc = document.createElement("input")
  desc.setAttribute("id", "desc")
  desc.setAttribute("name", "desc")
  desc.setAttribute("type", "text")
  form.appendChild(p2)
  form.appendChild(desc)

  const p3 = document.createElement("p")
  const dueLabel = document.createElement("label")
  dueLabel.setAttribute("for", "due")
  dueLabel.textContent = "Due: "
  p3.appendChild(dueLabel)
  const due = document.createElement("input")
  due.setAttribute("id", "due")
  due.setAttribute("name", "due")
  due.setAttribute("type", "date")
  form.appendChild(p3)
  form.appendChild(due)

  const p4 = document.createElement("p")
  const priorLabel = document.createElement("label")
  priorLabel.setAttribute("for", "priority")
  priorLabel.textContent = "Priority: "
  p4.appendChild(priorLabel)
  form.appendChild(p4)

  const priorContainer = document.createElement("p")

  const priorRadioOne = document.createElement("input")
  priorRadioOne.setAttribute("id", "priority")
  priorRadioOne.setAttribute("name", "priority")
  priorRadioOne.setAttribute("type", "radio")
  priorRadioOne.setAttribute("value", "low")
  const priorRadioOneLabel = document.createElement("label")
  priorRadioOneLabel.setAttribute("for", "priority")
  priorRadioOneLabel.textContent = "Low"
  priorContainer.appendChild(priorRadioOne)
  priorContainer.appendChild(priorRadioOneLabel)

  const priorRadioTwo = document.createElement("input")
  priorRadioTwo.setAttribute("id", "priorityMed")
  priorRadioTwo.setAttribute("name", "priority")
  priorRadioTwo.setAttribute("type", "radio")
  priorRadioTwo.setAttribute("value", "med")
  const priorRadioTwoLabel = document.createElement("label")
  priorRadioTwoLabel.setAttribute("for", "priorityMed")
  priorRadioTwoLabel.textContent = "Medium"
  priorContainer.appendChild(priorRadioTwo)
  priorContainer.appendChild(priorRadioTwoLabel)

  const priorRadioThree = document.createElement("input")
  priorRadioThree.setAttribute("id", "priorityHigh")
  priorRadioThree.setAttribute("name", "priority")
  priorRadioThree.setAttribute("type", "radio")
  priorRadioThree.setAttribute("value", "high")
  const priorRadioThreeLabel = document.createElement("label")
  priorRadioThreeLabel.setAttribute("for", "priorityHigh")
  priorRadioThreeLabel.textContent = "High"
  priorContainer.appendChild(priorRadioThree)
  priorContainer.appendChild(priorRadioThreeLabel)
  form.appendChild(priorContainer)


  const p5 = document.createElement("p")
  const submitBtn = document.createElement("button")
  submitBtn.textContent = "Submit"
  submitBtn.setAttribute("id", "submitBtn")
  submitBtn.setAttribute("type", "submit")
  p5.appendChild(submitBtn)
  form.appendChild(p5)

  return form
}

export default form