const clear = require("./clearDOM")
const formVals = require("./getFormValues")
const saveNLoad = require("./saveNLoadDatabase")

const addBtn = document.querySelector("#addBtn")

addBtn.addEventListener("click", () => {
  const inputContainer = document.querySelector("#inputs")
  const forms = document.createElement("div")

  const nameInput = document.createElement("input")
  nameInput.id = "nameInput"
  nameInput.placeholder = "Tv Show Name"

  const summaryInput = document.createElement("input")
  summaryInput.id = "summaryInput"
  summaryInput.placeholder = "Plot Summary"

  const seasonsInput = document.createElement("input")
  seasonsInput.id = "seasonsInput"
  seasonsInput.placeholder = "Number of Seasons"

  forms.appendChild(nameInput)
  forms.appendChild(summaryInput)
  forms.appendChild(seasonsInput)

  const submitBtn = document.createElement("button")
  submitBtn.textContent = "Submit"

  submitBtn.addEventListener("click", () => {
    const cardList = require("./cardList")
    formVals()
    clear("#inputs")
    cardList()
  })

  forms.appendChild(submitBtn)
  inputContainer.appendChild(forms)

})





// const submitButton = document.querySelector("#submitBtn")

// const editBtn = document.querySelector("#editBtn")

// editBtn.addEventListener("click", () => {

// })