const buttonInitial = document.getElementById('btn');
const inputText = document.querySelector("#input-text")

function* getNumber () {
    for(let i = 0; i < Infinity; i++){
        yield i ;
    }
  }
  const number = getNumber ()

buttonInitial.addEventListener('click', () =>{
    const nextNumber = number.next().value
    inputText.innerHTML = nextNumber
});
/*-------------------------------------------------------*/

const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const changeText = document.getElementById('text')
let currentFontSize = 14; 

function* getGeneratorUp (){
    for(let i = 0; i < Infinity; i++){
        currentFontSize += 2;
        yield currentFontSize;
    }
}


function* getGeneratorDown (){
    for(let i = 0; i < Infinity; i++){
        currentFontSize -= 2;
        yield currentFontSize;
    }
}

function setFontSize(fontSize) {
    changeText.style.fontSize = fontSize + 'px';
}

const up = getGeneratorUp()
upButton.addEventListener('click', () =>{
    const buttonUp = up.next().value
    setFontSize(buttonUp);
});

const down = getGeneratorDown()
downButton.addEventListener('click', () =>{
    const buttonDown = down.next().value
    setFontSize(buttonDown);
});