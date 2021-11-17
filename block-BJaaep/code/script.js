let boxOne = document.querySelectorAll('.box1');
let boxTwo = document.querySelector('.boxes2');


function showNumber(b) {
    b.innerText = counter;
    setTimeout(() => {
        b.innerText = '';
    },5000);
    counter++;
}

let counter = 1;

 boxOne.forEach(box => {
    box.addEventListener('click',() => showNumber(box));
    
 });
