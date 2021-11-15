let boxes = document.querySelector('.boxes');

function changeBgColor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

for(let i = 0; i <= 500; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.width = '4rem';
    box.style.height = '4rem';    
    box.style.border = '1px solid black';  
    let span = document.createElement('span');
    span.classList.add('number');
    box.append(span);
    boxes.append(box);
}

let boxcollection = document.querySelectorAll('.box');
let numbers = document.querySelectorAll('.number')

  boxes.addEventListener('mousemove',function(){
    boxcollection.forEach(box => {
          box.style.background = changeBgColor();           
      });  
      numbers.forEach(box => {
        var random = Math.floor(Math.random()*999) ;
          box.innerText = random;
      });   
      })


