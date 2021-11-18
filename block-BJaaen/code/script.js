let player = document.querySelector('.player-icons');
let computer = document.querySelectorAll('.computer-icon');
let playerh2 = document.querySelector('.player-selected');
let computerh2 = document.querySelector('.computer-selected');
let result = document.querySelector('.result');

function play(event) {
    let playerIcon = event.target;
    playerIcon.style.color = 'black';

    let computerIcon = computer[Math.floor(Math.random()*computer.length)];
    computerIcon.style.color = 'black';

     let playerChoice = playerIcon.dataset.text;
     let computerChoice = computerIcon.dataset.text;

     if((playerChoice == 'rock' && computerChoice == 'scissor') || (playerChoice == 'scissor' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'rock')){
        playerh2.append(' - 1 -- '+ playerChoice);
        computerh2.append(' - 0 -- '+ computerChoice);
        result.innerText = 'You Won!'
     }

     else if(playerChoice === computerChoice){
        playerh2.append(' - 0 -- '+ playerChoice);
        computerh2.append(' - 0 -- '+ computerChoice);
        result.innerText = `It's a tie.`
     }

     else{
        playerh2.append(' - 0 -- '+ playerChoice);
        computerh2.append(' - 1 -- '+ computerChoice);
        result.innerText = 'You Lost!'
     }
    }

player.addEventListener('click',play);
