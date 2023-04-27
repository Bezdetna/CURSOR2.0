const getFilmButtom = document.querySelectorAll("#film-button");

getFilmButtom.forEach((el) => {
  const onClick = () => {
    getFilmInform();
    el.removeEventListener('click', onClick);
  };
  el.addEventListener("click", onClick);
});

function getFilmInform () {
  fetch(`https://swapi.dev/api/films/`)
  .then(response => response.json())
  .then((film) => {
    film
  })
}

const getCharactersButtom = document.querySelectorAll("#characters-button")
function getInfoCharacters({name, birth_year, gender}) {
  const characterCard =  `
    <div class="card-character">
      <div class="info-character">
        <h3 class="card-name">${name}</h3>
        <h4 class="card-year">${birth_year}</h4>
        <h4 class="card-gender">${gender}</h4>
      </div>
    </div>
  `;
  document.getElementsByClassName('general-info')[0].innerHTML += characterCard;
}
getCharactersButtom.forEach((el) => {
  const onClick = () => {
    getInfoCharacter ();
    el.removeEventListener('click', onClick);
  };
  el.addEventListener("click", onClick);
  }
)
function getInfoCharacter (){     
  fetch('https://swapi.dev/api/films/2/')
  .then(response => {
    return response.json()})
  .then(data => {
    const characters = data.characters;
    characters.forEach(character => {
      fetch(character)
        .then(response => response.json())
        .then(characterData => {
          getInfoCharacters(characterData)
        });
    });
  });}




// const getPlanetButtom = document.getElementById("planet-button")


// getPlanetButtom.addEventListener('click', (e) => {
//   fetch("https://swapi.dev/api/planets/1/")
//   .then(response => console.log(response.json()))
//   .then(planet => console.log(planet)
// )})



// const input = document.getElementById('input')
// const buttonInput = document.getElementById('button-input')
// let contentInput = ""

// input.addEventListener('input', (e => {
//   contentInput = e.target.value
// }))


// buttonInput.addEventListener('click', sendPost)
// function sendPost (){
//   fetch("https://swapi.dev/api/planets/", {
//     method: 'POST',
//     body: JSON.stringify({
//       title: contentInput,
//       userID: 1,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     }
// })}




