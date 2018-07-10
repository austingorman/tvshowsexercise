const saveNLoad = require("./saveNloadDatabase")

const inputValues = () => {
  const showName = document.querySelector("#nameInput").value
  const showSummary = document.querySelector("#summaryInput").value
  const showSeasons = document.querySelector("#seasonsInput").value
  saveNLoad.postShow(showName, showSummary, showSeasons)
    .then(response => {
      console.log(response)
    })
}

module.exports = inputValues