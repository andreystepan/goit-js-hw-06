
const form = document.querySelector('.login-form');
const formInputs = document.querySelectorAll('input');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const array = [];
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        Email: mail,
        Password: password
    };

    for  (const formInput of formInputs) {
            if (formInput.value === '') {
                alert('все поля должны быть заполнены');
                
                break;
            }
            else  {
                array.push(formInput);
            }
 
    }
     if (array.length === formInputs.length) {
                console.log(formData);
     }
    
    form.reset()
    
    
}