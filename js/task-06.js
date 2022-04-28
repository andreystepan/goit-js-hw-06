const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur',handleInputText)

function handleInputText(even) {
    if (even.currentTarget.value.length != inputText.getAttribute('data-length')) {

        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    }
    else {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    }
        
        
}