let cardMaker = (name, summary, seasons) => {
  let cardContainer = document.getElementById("cardHolder")

  let card = document.createElement("div")

  let nameEl = document.createElement("h2")
  nameEl.textContent = name

  let summaryEl = document.createElement("h2")
  summaryEl.textContent = summary

  let seasonsEl = document.createElement("h2")
  seasonsEl.textContent = seasons

  let editButton = document.createElement("button")
  editButton.textContent = "Edit"
  editButton.className = "cardEdit"

  let checkDiv = document.createElement("div");
  checkDiv.setAttribute("class", "checkBox")

  let checkBox = document.createElement("INPUT")
  checkBox.setAttribute("type", "checkbox")
  checkBox.setAttribute("id", "checkbox")
  let doneTag = document.createElement("label");
  doneTag.textContent = "Remove Show:"

  checkDiv.appendChild(doneTag)
  checkDiv.appendChild(checkBox)

  card.appendChild(nameEl)
  card.appendChild(summaryEl)
  card.appendChild(seasonsEl)
  card.appendChild(editButton)
  card.appendChild(checkDiv)
}

