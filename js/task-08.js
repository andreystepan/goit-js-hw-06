
const form = document.querySelector('.login-form');


form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
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
    
    if (mail !== '' && password !== '') {
        form.reset()
     }
    
    
    
}