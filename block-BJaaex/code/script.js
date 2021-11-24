let iconsArray = [
    {
        name: '01',
        img: './assets/icontexto_emoticons_01.png',
    },
    {
        name : '02',
        img: './assets/icontexto_emoticons_06.png'
    },
    {
        name : '03',
        img: './assets/icontexto_emoticons_07.png'
    },
    {
        name : '04',
        img: './assets/icontexto_emoticons_09.png'
    },
    {
        name : '05',
        img: './assets/icontexto_emoticons_10.png'
    },
    {
        name : '06',
        img: './assets/icontexto_emoticons_11.png'
    },
    {
        name : '07',
        img: './assets/icontexto_emoticons_14.png'
    },
    {
        name : '08',
        img: './assets/make_fun.png'
    },
    
];

let cardsArray = iconsArray.concat(iconsArray);

cardsArray.sort(() => 0.5 - Math.random());

let game = document.querySelector('#game');
let section = document.createElement('section');
section.classList.add('flex');
game.append(section);


cardsArray.forEach((card,index) => {
    let div = document.createElement('div');
    div.classList.add('card');
    div.dataset.id = card.name; 
    div.style.background = `url(${card.img})`;
    let front = document.createElement('div');
    front.classList.add('front')
    div.append(front)
    section.append(div);
});

let front = document.querySelectorAll('.front');
let count = 0;
let guess1 = '';
let guess2 = '';
let delay = 1000;

function play(event){
    if(count < 2){
        count++;
        
        let clicked = event.target.parentNode;
       
        if (clicked.nodeName === 'SECTION'){
            return
          }
        clicked.classList.add('selected');
        if(count === 1){
             guess1 = clicked.dataset.id;
             clicked.removeChild(clicked.childNodes[0]);
            clicked.classList.add('selected');
        }
        else{
             guess2 = clicked.dataset.id;
             clicked.removeChild(clicked.childNodes[0]);
            clicked.classList.add('selected');
        }
        
        if (guess1 !== '' && guess2 !== ''){
            if(guess1 === guess2){
                setTimeout(match,delay);
                setTimeout(reset,delay);
                
            }           
            else {                     
               setTimeout(addFront1,delay)
               function addFront2(){   
                let front =  document.createElement('div');
                front.classList.add('front');  
                clicked.append(front);               
                }
               setTimeout(addFront2,delay)
                 setTimeout(reset,delay) 
            }
        }
    }
}

function match(){
    let selectedCards = document.querySelectorAll('.selected');
    selectedCards.forEach((a) => {
        a.classList.add('match')
    })
}

function addFront1(){
    let previous = document.querySelector(`[data-id='${guess1}']`);  
    let front =  document.createElement('div');
    front.classList.add('front');  
    previous.append(front);      
    
}



function reset(){
     count = 0;
     guess1 = '';
     guess2 = '';
     let selectedCards = document.querySelectorAll('.selected');
     selectedCards.forEach((card) => {
     card.classList.remove('selected')
  })
}

game.addEventListener('click',play);

