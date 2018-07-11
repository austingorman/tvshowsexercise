const $ = require("jquery")

const database = Object.create({}, {
      getShow: {
        value: () => {
          return $.ajax("http://localhost:3000/shows");
        }
      },
      postShow: {
        value: (name, summary, seasons) => {
          // console.log(name, summary, seasons)
          return $.ajax({
            url: "http://localhost:3000/shows",
            method: "POST",
            data: {
              name: name,
              summary: summary,
              seasons: seasons
            }
          })
        }
      },
      editShow: {
        value: (name, summary, seasons, id) => {
          console.log("theid", id);
          return $.ajax({
            url: `http://localhost:3000/shows/${id}`,
            method: "PUT",
            data: {
              name: name,
              summary: summary,
              seasons: seasons
            }
          })
        }
      },
      deleteShow: {
        value: id => {
          return $.ajax({
            url: `http://localhost:3000/shows/${id}`,
            method: "DELETE"
          })
        }
      }
    })

    module.exports = database