let input = document.querySelector('input');
let ul = document.querySelector('ul');
let cross = document.querySelector('small');
function handleSubmit(event){
    event.preventDefault();
    if (event.key === "Enter"){
        let movie = event.target.value;
        let li = document.createElement('li');        
        li.classList.add('flex')      
        let span = document.createElement('span');
        span.innerText = movie;
        let check = document.createElement('input');
        check.type = 'checkbox';
        let cross = document.createElement('small');
        cross.innerText = '❌';     
        li.append(check,span,cross);
        ul.append(li);
        event.target.value = '';
        cross.addEventListener('click',()=>{
            cross.parentElement.remove();
        })
    }
}

input.addEventListener('keyup',handleSubmit);
