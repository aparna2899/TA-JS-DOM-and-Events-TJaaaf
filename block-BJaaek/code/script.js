let box1 = document.querySelector('.first');
let box2 = document.querySelector('.second');

function changeBgColor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

box1.addEventListener('click',function(){
    box1.style.background = changeBgColor();
});
box2.addEventListener('mousemove',function(){
    box2.style.background = changeBgColor();
});