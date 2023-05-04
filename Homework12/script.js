const сharactersButtom = document.querySelectorAll("#characters-button")
const input = document.getElementById('input')
const buttonInput = document.querySelectorAll('#button-input')
let contentInput = document.getElementsByClassName('general-info')[0]


function getInfoCharacter() {
  fetch('https://swapi.dev/api/films/2/')
    .then(response => {
      return response.json()
    })
    .then(data => {
      const characters = data.characters;
      characters.forEach(character => {
        fetch(character)
          .then(response => {
            return response.json()
          })
          .then(characterData => {
            getInfoCharacters(characterData)
          });
      });
    });
}
сharactersButtom.forEach((el) => {
  const onClick = () => {
    contentInput.innerHTML = '';
    getInfoCharacter();
    el.removeEventListener('click', onClick);
  }

  el.addEventListener("click", onClick);
});
function getInfoCharacters({ name, birth_year, gender }) {
  const characterCard = `
      <div class="card">
        <div class="info">
          <h3 class="card1">${name}</h3>
          <h4 class="card2">${birth_year}</h4>
          <h4 class="card3">${gender}</h4>
        </div>
      </div>
    `;
  contentInput.innerHTML += characterCard;
}

//-PLANET-//////////////////
function getPlanetInfo() {
  fetch(`https://swapi.dev/api/planets/`)
    .then(response => {
      return response.json()
    })
    .then(planet => {
      const aboutPlanet = planet.results;
      aboutPlanet.forEach(planetsInfo => {
        fetch(planetsInfo.url)
          .then(response => {
            return response.json()
          })
          .then(planetCard => {
            getInfoPlanet(planetCard)
          })
      })
    }
    )
}
const getPlanetButton = document.querySelectorAll("#planet-button")
function getInfoPlanet({ name, climate, diameter }) {
  const planetCard = `
      <div class="card">
        <div class="info-character">
          <h3 class="card1">${name}</h3>
          <h4 class="card2">${climate}</h4>
          <h4 class="card3">${diameter}</h4>
        </div>
      </div>
    `;
  document.getElementsByClassName('general-info')[0].innerHTML += planetCard;
}
getPlanetButton.forEach((el) => {
  const onClick = () => {
    contentInput.innerHTML = '';
    getPlanetInfo();
    el.removeEventListener('click', onClick);
  };
  el.addEventListener("click", onClick);
}
)


