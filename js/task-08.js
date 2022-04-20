
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

    if (mail === '' || password ==='') {
                    alert('все поля должны быть заполнены');
                    
                
    }
    else {
        console.log(formData);
            
     }
    
    
    form.reset()
    
    
}