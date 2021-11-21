function main(){

let input = document.querySelector('input');
let root = document.querySelector('ul');

let allToDo = JSON.parse(localStorage.getItem('todos')) || [];

function handleInput(event){
    let value = event.target.value;
    if(event.keyCode === 13 && value !== ''){
        let todo = {
            name: value,
            isDone: false
        };
        allToDo.push(todo);
        event.target.value = '';
        creteUI(allToDo,root);
    }
    localStorage.setItem('todos',JSON.stringify(allToDo));
}

function handleDelete(event){
    let id = event.target.dataset.id;
    allToDo.splice(id,1);
    localStorage.setItem('todos',JSON.stringify(allToDo));
    creteUI(allToDo,root);
}

function handleToggle(event){
    let id = event.target.dataset.id;
    allToDo[id].isDone = !allToDo[id].isDone;
    localStorage.setItem('todos',JSON.stringify(allToDo));
    creteUI(allToDo,root);
}

function showAllTodo(){
    creteUI(allToDo,root);
}

function showActive(){
    let activeArray = [];
    allToDo.forEach(todo => {
        if(!todo.isDone){
           activeArray.push(todo);
           creteUI(activeArray,root)
        }
    });
}

function showCompleted(){
    let completedArray = [];
    allToDo.forEach(todo => {
        if(todo.isDone){
           completedArray.push(todo);
           creteUI(completedArray,root)
        }
    });
}

function clearCompleted(){
    allToDo.forEach((todo,index,array) => {
        if(todo.isDone){
           array.splice(index,1)
        }       
    });
    localStorage.setItem('todos',JSON.stringify(allToDo));
        creteUI(allToDo,root);
}

function creteUI(data,rootElm){
    rootElm.innerHTML = '';
    data.forEach((todo,index) => {
        let li = document.createElement('li');
        li.classList.add('flex')
        let input = document.createElement('input');
        input.type ='checkbox';
        input.addEventListener('input',handleToggle);
        input.setAttribute('data-id',index);
        input.checked = todo.isDone;
        let p = document.createElement('p');
        p.innerText = todo.name;
        let span = document.createElement('span');
        span.innerText = '❌';
        span.setAttribute('data-id',index);
        span.addEventListener('click',handleDelete);
        let all = document.querySelector('#all');
        all.addEventListener('click',showAllTodo);
        let active = document.querySelector('#active');
        active.addEventListener('click',showActive);
        let completed = document.querySelector('#completed');
        completed.addEventListener('click',showCompleted);
        let clear = document.querySelector('#clear');
        clear.addEventListener('click',clearCompleted);
        li.append(input,p,span);
        rootElm.append(li);
    });
}

creteUI(allToDo,root);

input.addEventListener('keyup',handleInput);
}

main();