const section = document.createElement('section');
      section.classList.add('allCube');
      document.body.appendChild(section);
      section.style.cssText = 'display: grid; grid-template-columns: repeat(5, 50px); grid-template-row: repeat(5, 50px);'

function getRandomColorRGB() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
      }

function generateBlocks(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
            div.style.cssText = 'width: 50px; height: 50px;'
            div.style.backgroundColor = getRandomColorRGB();
            section.appendChild(div);
    }
  }
function generateBlocksInterval() {
    const divs = document.querySelectorAll('div');
    divs.forEach((div) => {
      div.style.backgroundColor = getRandomColorRGB();
    });
  }
setInterval(generateBlocksInterval, 1000);
generateBlocks(25);