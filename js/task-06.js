const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur',handleInputText)

function handleInputText(even) {
    console.log(even.currentTarget.value.length)
    console.log(inputText.getAttribute('data-length'))
    if (even.currentTarget.value.length > inputText.getAttribute('data-length')) {

        inputText.classList.add('invalid')
        inputText.classList.remove('valid')
    }
    else 
        
        inputText.classList.remove('invalid')
        inputText.classList.add('valid')
}