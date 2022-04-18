const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASS = 'hidden';

function onLoginSubmit(event){
    
    event.preventDefault(); //HTML 기본 속성 작동하지 않도록 막기
    const username = loginInput.value;
    localStorage.setItem("username",username);
    loginForm.classList.add(HIDDEN_CLASS)
    greeting.innerHTML=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}
loginForm.addEventListener('submit',onLoginSubmit);
