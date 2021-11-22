let root = document.querySelector('.member');
let houseName = document.querySelector('.houseNames');
let search = document.querySelectorAll('.search');
let input = document.querySelector('input');

got.houses.forEach(house => { 

    let li = document.createElement('li');
    li.classList.add('search');
    li.innerText = house.name;
    li.setAttribute('data-text',house.name);
    houseName.append(li);   
});


function creteUI(data,rootElm){
    data.forEach((person) => {
        let li = document.createElement('li');
        li.classList.add('character');
        let div = document.createElement('div');
        div.classList.add('img-class');
        let img = document.createElement('img');
        img.src = person.image;
        div.append(img);
        let h2 = document.createElement('h2');
        h2.innerText = person.name;
        let p = document.createElement('p');
        p.innerText = person.description;
        let button = document.createElement('button');
        button.innerText = 'Learn More!';
        li.append(div,h2,p,button);
        rootElm.append(li);
    })
}

got.houses.forEach((house) => {
     creteUI(house.people,root);
})

function showSearchResult(event){
    root.innerHTML = '';
    let familyName = event.target.dataset.text
    let arr = [];
    got.houses.forEach(house => {
        if(house.name === familyName)
        house.people.forEach((person) => {
            arr.push(person);
        });
    });  
    creteUI(arr,root)
}

function find(event){
    root.innerHTML = '';
    let arr = [];
    let value = event.target.value;
    got.houses.forEach(house => {
        house.people.forEach((person) => {
            if(person.name.includes(value)){
                arr.push(person);           
            }
        });
    });
    creteUI(arr,root);
}

houseName.addEventListener('click',showSearchResult);

input.addEventListener('keyup',find);