const charactersButtom = document.querySelectorAll("#characters-button")
const contentInput = document.getElementsByClassName('general-info')[0]
const getPlanetButton = document.querySelectorAll("#planet-button")
const filmContent = document.getElementsByClassName('info-film')[0]
const buttonInput = document.getElementById('button-input')
const input = document.getElementById('input')
function clearContent() {
  contentInput.innerHTML = '';
}
//Base
function getInfoCharacter() {
  fetch('https://swapi.dev/api/films/2/')
    .then(response => response.json())
    .then(data => {
      const characters = data.characters;
      const characterPromises = characters.map(character => fetch(character).then(response => response.json()));
      Promise.all(characterPromises)
        .then(characterData => {
          characterData.forEach(character => {
            getInfoCharacters(character);
          });
        });
    });
}

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

charactersButtom.forEach(button => {
  button.addEventListener("click", () => {
    clearContent();
    getInfoCharacter();
  });
});

function getPlanetInfo() {
  fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(planet => {
      const planets = planet.results;
      const planetPromises = planets.map(planetInfo => fetch(planetInfo.url).then(response => response.json()));
      Promise.all(planetPromises).then(planetData => {
        planetData.forEach(planetCard => {
          getInfoPlanet(planetCard);
        });
      });
    });
}
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
  contentInput.innerHTML += planetCard;
}

getPlanetButton.forEach(button => {
  button.addEventListener("click", () => {
    clearContent();
    getPlanetInfo();
  });
});

//Advance
async function getInformCharacters() {
  const response = await fetch('https://swapi.dev/api/films/');
  const data = await response.json();
  const films = data.results;
  return films;
}

function getInfoChooseFilm({ title, producer, release_date }) {
  const filmCard = `
    <div class="card">
      <div class="info-character">
        <h2 class="card1">${title}</h2>
        <hr>
        <h4 class="card2"> Producer: ${producer}</h4>
        <br>
        <h4 class="card3"> Release: ${release_date}</h4>
      </div>
    </div>
  `;
  contentInput.innerHTML += filmCard;
}

async function getFilm() {
  const value = input.value;
  const films = await getInformCharacters();

  for (let i = 0; i < films.length; i++) {
    if (value == films[i].episode_id) {
      getInfoChooseFilm(films[i]);
      break;
    }
  }
}

buttonInput.addEventListener("click", () => {
  clearContent();
  getFilm();
});
