let boxOne = document.querySelectorAll('.box1');
let boxTwo = document.querySelector('.boxes2');



 boxOne.forEach((box,index) => {
    box.addEventListener('click', (event) => {
        event.target.innerText = index + 1;
        setTimeout(() => {
        event.target.innerText = '';
        },5000);
    });   
 });


 boxTwo.addEventListener('click',(event) => {
    let text = event.target.dataset.text;
    event.target.innerText = text;
        setTimeout(() => {
        event.target.innerText = '';
        },5000);
 })