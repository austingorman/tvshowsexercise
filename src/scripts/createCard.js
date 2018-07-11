const eventHandler = require("./eventHandler")
const clear = require("./clearDOM")
const saveNLoad = require("./saveNLoadDatabase")


let cardMaker = (name, summary, seasons, id) => {
  let cardContainer = document.querySelector("#cardHolder")

  let card = document.createElement("div")
  card.className = "card"
  card.id = id

  const nameTag = document.createElement("h5")
  nameTag.textContent = "Show Name"
  let nameEl = document.createElement("h2")
  nameEl.textContent = name
  nameEl.className = "nameButton"


  const summaryTag = document.createElement("h5")
  summaryTag.textContent = "Plot Summary"
  let summaryEl = document.createElement("h2")
  summaryEl.textContent = summary


  // const seasonsDiv = document.createElement("div")
  const seasonsTag = document.createElement("h5")
  seasonsTag.textContent = "Number of Seasons"
  let seasonsEl = document.createElement("h2")
  seasonsEl.textContent = seasons

  card.appendChild(nameTag)
  card.appendChild(nameEl)
  card.appendChild(summaryTag)
  card.appendChild(summaryEl)
  card.appendChild(seasonsTag)
  card.appendChild(seasonsEl)

  // const editButton = document.querySelector("#nameButton")

  // MODULARIZE THIS PART LATER--------------------------------------
  // THESE VALUES ARE WROOOOOOOOONG
  nameEl.addEventListener("click", () => {
    console.log("parentNode", event.target.parentNode);
    let theTarget = event.target.parentNode.id
    const editInputContainer = document.querySelector("#edit")

    const editForms = document.createElement("div")
    editForms.id = "editContainer"

    const nameEditInput = document.createElement("input")
    nameEditInput.placeholder = "Tv Show Name"

    const summaryEditInput = document.createElement("input")
    summaryEditInput.placeholder = "Plot Summary"

    const seasonsEditInput = document.createElement("input")
    seasonsEditInput.id = "seasonsInputs"
    seasonsEditInput.placeholder = "Number of Seasons"
    // Execute a function when the user releases a key on the keyboard
    seasonsEditInput.addEventListener("keyup", function (event) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Trigger the button element with a click
        // console.log("id", event.target.parentNode.id);
         saveNLoad.editShow(nameEditInput.value, summaryEditInput.value, seasonsEditInput.value, theTarget)
          .then(response => {
            console.log(response)
            clear("#cardHolder")
            clear("#editContainer")

            const cardList = require("./cardList")
            cardList()
          })
      }
    });

    editForms.appendChild(nameEditInput)
    editForms.appendChild(summaryEditInput)
    editForms.appendChild(seasonsEditInput)

    editInputContainer.appendChild(editForms)

  })
  // ---------------------------------------------------------------------
  let checkDiv = document.createElement("div");
  checkDiv.setAttribute("class", "checkBox")

  let checkBox = document.createElement("INPUT")
  checkBox.setAttribute("type", "checkbox")
  checkBox.setAttribute("id", "checkbox")
  let doneTag = document.createElement("label");
  doneTag.className = "watched"
  doneTag.textContent = "Watched:"

  checkDiv.appendChild(doneTag)
  checkDiv.appendChild(checkBox)

  // card.appendChild(editButton)
  card.appendChild(checkDiv)

  cardContainer.appendChild(card)
  return cardContainer
}

module.exports = cardMaker