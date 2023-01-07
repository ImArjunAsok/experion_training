function handleSubmit(e){
    e.preventDefault(); //to not reload the page itself
    console.log(e);
    // const email = document.forms['login'].['email'].value;
    const email = document.forms.login.email;
    const password = document.forms.login.password;

    const emailValue = email.value;
    const passwordValue = password.value;

    //Validate password

    const passwordErrorDisplay = password.nextElementSibling;
    if(passwordValue.length < 6) {
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += `<li>Password must be at least 6 characters</li>`
    }
    if(passwordValue.includes(' ')) {
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += `<li>Password must not contain spaces</li>`

    }
    console.log(password);
}