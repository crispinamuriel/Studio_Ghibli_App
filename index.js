document.addEventListener("DOMContentLoaded", () => {

  let selected = document.querySelector(".select")
  let selectedDiv = document.querySelector(".selectDiv")


  axios.get('https://ghibliapi.herokuapp.com/films')
    .then(function(response) {
      let responseArray = response.data
      let emptyDiv = document.querySelector(".divWithTitle");
      responseArray.forEach(function(element) {
        let option = document.createElement("option");
        selected.appendChild(option)
        option.innerText = element.title

        let select = document.querySelector('select');
        select.addEventListener('change', function() {
          if (select.value == element.title) {
            let h3 = document.createElement("h3")
            let p1 = document.createElement("p")
            let p2 = document.createElement("p")
            h3.innerText = element.title
            p1.innerText = element.release_date
            p2.innerText = element.description
            while (emptyDiv.firstChild) {
              emptyDiv.removeChild(emptyDiv.firstChild)
            }
            emptyDiv.appendChild(h3)
            emptyDiv.appendChild(p1)
            emptyDiv.appendChild(p2)
          }
        })
      })
    })
})
