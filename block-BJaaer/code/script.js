let form = document.querySelector('.container');
let userInfo = {};
let info = document.querySelector('.info').children;

function handleSubmit(event) {
     event.preventDefault();
     form.style.display = 'none';
     document.querySelector('.info').style.background = 'white';
    info[0].innerText = 'Hello ' + form.elements[0].value;
    info[1].innerText = 'Email: '+ form.elements[1].value;
    info[2].innerText = 'You love: '+ form.elements[2].value;
    info[3].innerText = 'Color: ' + form.elements[3].value;
    info[4].innerText= 'Rating: ' + form.elements[4].value;
    info[5].innerText = 'Book Genre: ' +  form.elements[5].value;
    if(!form.elements[6].checked)
    info[6].innerText = '👉🏻 You agreed to terms and conditions';
}

form.addEventListener('submit',handleSubmit);