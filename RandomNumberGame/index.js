
const PLAY_btn = document.querySelector('.gameform');
PLAY_btn.addEventListener('submit',GuessNumberSubmit);

const RESULT_DIV = document.querySelector('#result_div');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const RESULT_MENT = document.querySelector('.result_ment');

function GuessNumberSubmit(even){
    even.preventDefault();
    const GuessRange = document.querySelector('#guess_range').value;
    const Result = document.querySelector('#result_number').value;
   
    const G = Math.ceil(Math.random()*parseInt(GuessRange));
    const R = parseInt(Result);
    
    RESULT_DIV.classList.remove('hidden');

    if(R==G){
        num1.innerHTML = Result;
        num2.innerHTML = Math.ceil(Math.random()*parseInt(GuessRange));
        RESULT_MENT.innerHTML = 'You won!';
    }else{
        num1.innerHTML = Result;
        num2.innerHTML = Math.ceil(Math.random()*parseInt(GuessRange));
        RESULT_MENT.innerHTML = 'You Lost!';
    }
    console.log('num1값'+num1,'num2값'+num2)
}







