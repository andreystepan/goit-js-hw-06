const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');



nameInput.addEventListener('input', handleInputChanche)


function handleInputChanche (even) {
    if (even.currentTarget.value !== "") {
        nameOutput.textContent = even.currentTarget.value;  
    }
    else
     nameOutput.textContent = "Anonymous";
    
}






