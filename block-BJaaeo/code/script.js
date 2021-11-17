let inputs = document.querySelectorAll('button');
let display = document.querySelector('.answer');


inputs.forEach((input)=>{
    input.addEventListener('click',calculate);
});

 let exp = '';
 let answer;
function calculate(event) {
    let value = event.target.dataset.text;      
     if (value == '='){
         answer = eval(exp);
         display.innerText = answer;
     }
     else if(value == 'C'){
        answer = exp = '';
        display.innerText = answer;
     }
     else{
        exp += value;
        display.innerText = exp;
     }
}
