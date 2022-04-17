const inputRange = document.querySelector('#font-size-control');
const nameOutputTextEl = document.querySelector('#text');

inputRange.addEventListener('input', handleInputRange);

function handleInputRange(event) {
    nameOutputTextEl.style.fontSize = event.currentTarget.value + "px";
 
}

