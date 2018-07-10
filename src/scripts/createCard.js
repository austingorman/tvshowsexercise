const eventHandler = require("./eventHandler")
const saveNLoad = require("./saveNLoadDatabase")

let cardMaker = (name, summary, seasons, id) => {
  let cardContainer = document.querySelector("#cardHolder")

  let card = document.createElement("div")
  card.className = "card"
  card.id = id

  let nameEl = document.createElement("h2")
  nameEl.textContent = name

  let summaryEl = document.createElement("h2")
  summaryEl.textContent = summary

  let seasonsEl = document.createElement("h2")
  seasonsEl.textContent = seasons

  let editButton = document.createElement("button")
  editButton.textContent = "Edit"
  editButton.id = "cardEdit"

// MODULARIZE THIS PART LATER--------------------------------------
// THESE VALUES ARE WROOOOOOOOONG
  editButton.addEventListener("click", () => {
    const editInputContainer = document.querySelector("#edit")

    const editForms = document.createElement("div")

    const nameEditInput = document.createElement("input")
    nameEditInput.placeholder = "Tv Show Name"
    const nameInput = nameEditInput.value

    const summaryEditInput = document.createElement("input")
    summaryEditInput.placeholder = "Plot Summary"
    const summaryInput = summaryEditInput.value

    const seasonsEditInput = document.createElement("input")
    seasonsEditInput.placeholder = "Number of Seasons"
    const seasonsInput = seasonsEditInput.value

    editForms.appendChild(nameEditInput)
    editForms.appendChild(summaryEditInput)
    editForms.appendChild(seasonsEditInput)

    editInputContainer.appendChild(editForms)

    saveNLoad.editShow(nameEditInput, summaryEditInput, seasonsEditInput, event.target.parentNode.id)
  })
// ---------------------------------------------------------------------
  let checkDiv = document.createElement("div");
  checkDiv.setAttribute("class", "checkBox")

  let checkBox = document.createElement("INPUT")
  checkBox.setAttribute("type", "checkbox")
  checkBox.setAttribute("id", "checkbox")
  let doneTag = document.createElement("label");
  doneTag.textContent = "Watched:"

  checkDiv.appendChild(doneTag)
  checkDiv.appendChild(checkBox)

  card.appendChild(nameEl)
  card.appendChild(summaryEl)
  card.appendChild(seasonsEl)
  card.appendChild(editButton)
  card.appendChild(checkDiv)

  cardContainer.appendChild(card)
  return cardContainer
}

module.exports = cardMaker

