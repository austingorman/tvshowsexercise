const addBtn = document.querySelector("#addBtn")

addBtn.addEventListener("click", () => {
  const inputContainer = document.querySelector("#inputs")
  const forms = document.createElement("div")

  const nameInput = document.createElement("input")
  nameInput.className = "nameInput"
  nameInput.placeholder = "Tv Show Name"

  const summaryInput = document.createElement("input")
  summaryInput.className = "summaryInput"
  summaryInput.placeholder = "Plot Summary"

  const seasonsInput = document.createElement("input")
  seasonsInput.className = "seasonsInput"
  seasonsInput.placeholder = "Number of Seasons"

  const submitBtn = document.createElement("button")
  submitBtn.className = "submitBtn"

  forms.appendChild(nameInput)
  forms.appendChild(summaryInput)
  forms.appendChild(seasonsInput)
  forms.appendChild(submitBtn)
  inputContainer.appendChild(forms)
})

// const editBtn = document.querySelector("#editBtn")

// editBtn.addEventListener("click", () => {

// })