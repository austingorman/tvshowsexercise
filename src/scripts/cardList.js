const saveNload = require("./saveNloadDatabase");
const createCard = require("./createCard");
const clear = require("./clearDOM");

const showGetter = () => {
    saveNload.getShow()
      .then(showData => {
        clear("#cardHolder")
        for (let i in showData) {
          // console.log(showData[i].name)
          createCard(showData[i].name, showData[i].summary, showData[i].seasons, showData[i].id);
        }
      })
  }

module.exports = showGetter