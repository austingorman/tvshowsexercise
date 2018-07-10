const database = Object.create({}, {
      getShow: {
        value: () => {
          return $.ajax("http://localhost:3000/shows");
        }
      },
      postShow: {
        value: (name, summary, seasons) => {
          return $.ajax({
            url: "http://localhost:3000/shows",
            method: "POST",
            data: {
              name: name,
              summary: email,
              seasons: password
            }
          })
        }
      },
      editShow: {
        value: (name, summary, seasons) => {
          return $.ajax({
            url: "http://localhost:3000/shows",
            method: "PUT",
            data: {
              name: name,
              summary: date,
              seasons: location
            }
          })
        }
      },
      deleteShow: {
        value: id => {
          // console.log(id)
          return $.ajax({
            url: `http://localhost:3000/shows/${id}`,
            method: "DELETE"
          })
        }
      }
    })