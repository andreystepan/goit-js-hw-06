const btnEl = document.querySelector('.change-color');
const body = document.querySelector('body');
const nameOutputTextEl = document.querySelector('.color')

btnEl.addEventListener('click', handleBodyBackgrounColor);


function handleBodyBackgrounColor(getRandomHexColor) {
  const colorText =  getRandomHexColor();
  body.style.backgroundColor = colorText;
   nameOutputTextEl.textContent = colorText;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
}

}



