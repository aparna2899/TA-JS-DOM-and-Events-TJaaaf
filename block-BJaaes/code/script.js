let form = document.querySelector('form');

let usernameError = '', nameError = '', emailError ='', phoneError = '', passwordError = '';

function doesContainNumber(str) {
    return str.split('').some(e => Number(e));
}

function checkPhoneNumber(str){
    return str.split('').some(e => String(e));
}

function checkEmail(str){
 return str.split('').some(e => e === '@')
}

function handleSubmit(event) {
    event.preventDefault();
    let usernameElm = event.target.elements.username;
    let nameElm = event.target.elements.name;
    let emailElm = event.target.elements.email;
    let phoneElm = event.target.elements.phone;
    let passwordElm = event.target.elements.password;
    let confirmpasswordElm = event.target.elements.confirmpassword;

    if(usernameElm.value.length < 4){
        usernameError = `Username can't be less than 4 characters`;
        usernameElm.classList.add('error');
        usernameElm.nextElementSibling.innerText = usernameError;
    }
    else if(doesContainNumber(nameElm.value))
    {
        nameError = `You can't use number in the name field`;
        nameElm.classList.add('error');
        nameElm.nextElementSibling.innerText = nameError;
    }
     if(!checkEmail(emailElm.value))
    {
        emailError = `Not a valid email`;
        emailElm.classList.add('error')
        emailElm.nextElementSibling.innerText = emailError;
    }
     if(checkPhoneNumber(phoneElm.value))
    {
        phoneError = `Phone number can only contain numbers`;
        phoneElm.classList.add('error');
        phoneElm.nextElementSibling.innerText = phoneError;
    }
     if(passwordElm.value !== confirmpasswordElm.value)
    {
        passwordError = `Password doesn't match`;
        confirmpasswordElm.classList.add('error');
        confirmpasswordElm.nextElementSibling.innerText = passwordError;
    }
    else{
        usernameError = '', nameError = '', emailError ='', phoneError = '', passwordError = '';
        usernameElm.classList.add('success');
        nameElm.classList.add('success');
        phoneElm.classList.add('success');
        emailElm.classList.add('success');
        passwordElm.classList.add('success');
        confirmpasswordElm.classList.add('success');
    }
}

form.addEventListener('submit',handleSubmit);