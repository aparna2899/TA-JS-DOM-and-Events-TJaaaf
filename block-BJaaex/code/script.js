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

function main(){

let cardsArray = iconsArray.concat(iconsArray);

cardsArray.sort(() => 0.5 - Math.random());

let game = document.querySelector('#game');
let section = document.createElement('section');
section.classList.add('flex');
game.append(section);


let span = document.querySelector('span');

cardsArray.forEach((card,index) => {
    let div = document.createElement('div');
    div.classList.add('card');
    div.dataset.id = card.name; 
    let front = document.createElement('div');
    front.classList.add('front');
    let back = document.createElement('div');
    back.classList.add('back');
    back.style.background = `url(${card.img})`;

    section.append(div);
    div.appendChild(front);
    div.appendChild(back);  
});

let count = 0;
let guess1 = '';
let guess2 = '';
let previous = null;
let delay = 1000;
let moves = 0

function play(event){

    let clicked = event.target.parentNode;
    if (clicked.nodeName === 'SECTION'|| clicked === previous){
        return
      }

    if(count < 2){
        count++;
                    
        clicked.classList.add('selected');
        if(count === 1){
             guess1 = clicked.dataset.id;
            clicked.classList.add('selected');
        }
        else{
             guess2 = clicked.dataset.id;
            clicked.classList.add('selected');
        }
        
        if (guess1 !== '' && guess2 !== ''){
            if(guess1 === guess2){
                setTimeout(match,delay);                
            }                                           
                 setTimeout(reset,delay) 
        }
        previous = clicked;
        moves = moves+1;
    }   
    span.innerText = `Total no. of moves: ${moves}`;
}

function match(){
    let selectedCards = document.querySelectorAll('.selected');
    selectedCards.forEach((a) => {
        a.classList.add('match')
    })
}

function reset(){
     count = 0;
     guess1 = '';
     guess2 = '';
     previous = null;
     let selectedCards = document.querySelectorAll('.selected');
     selectedCards.forEach((card) => {
     card.classList.remove('selected')
  })
}

game.addEventListener('click',play);

}

main();