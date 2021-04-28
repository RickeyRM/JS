const string = "Привет! Как дела?";
const a = ['а','е','о','э','я','и','ю','ё'];

// function getVowels (stringFilter){

//     let b = '';

//     for(let i = 0; i<stringFilter.length; i++){
//         const c = stringFilter[i].toLowerCase();
//         if(a.includes(c)){
//             b += c;
//         }
//     }
//     return b;
// }
    function getVowels (stringFilter, check){

        const splitString = stringFilter.split('');
        let result = '';

        splitString.forEach(item =>{
            check.forEach(checkItem =>{
                if (checkItem === item.toLowerCase()){
                    result += item;
                }
            });
        });

        return result;
    }


console.log(getVowels(string, a));
//////////////////////////////////////////////////////////////////////
const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];


function getWorthyWorkers (getWorkers){

    const newMsassive = [];

    for(let i = 0; i < getWorkers.length; i++){
        const currentWorker = getWorkers[i];
        if(currentWorker.salary > 1000){
            newMsassive.push(currentWorker.name);
        }
    }

    return newMsassive;
}

console.log(getWorthyWorkers(workers));
//////////////////////////////////////////////////////////////////////
const path = "/users/download/index.html"
const html = '.html';

const isHtml = path => path.slice(-5) === html;

console.log(isHtml(path));
//////////////////////////////////////////////////////////////////////
const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => mixedArray.filter(i => i % 2 === 0)
    
console.log(isEven(mixedArray));
//////////////////////////////////////////////////////////////////////
const items = document.querySelector('.items');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

const itemWidth = document.querySelectorAll('.item');

const itemsWidth = document.querySelector('.items').offsetWidth;

const step = document.querySelector('.item').offsetWidth;

const realWidth = itemWidth.length * step - itemsWidth;
console.log(realWidth);
let currentRight = 0;


rightBtn.addEventListener('click', e =>{
    e.preventDefault();
  
    if(currentRight < realWidth){
        currentRight += step;
        items.style.right = `${currentRight}px`;
        console.log(currentRight);
    } else{
        currentRight = 0;
        items.style.right = `${currentRight}px`;
    }
    
});

leftBtn.addEventListener('click', e =>{
    e.preventDefault();

    if(currentRight < realWidth && currentRight !== 0){
        currentRight -= step;
        items.style.right = `${currentRight}px`;
    }
    
});
//////////////////////////////////////////////////////////////////////
const btn = document.querySelector('.button');

btn.addEventListener('click', () =>{

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const container = document.createElement('div');
    container.classList.add('container');
    const content = document.createElement('div');
    const close = document.createElement('div');
    content.classList.add('content');
    close.classList.add('close');
    content.innerText = 'Hello world';
    close.innerText = 'Х';

    document.body.appendChild(overlay);
    overlay.appendChild(container);
    container.appendChild(content);
    container.appendChild(close);

    document.querySelector('.close').onclick = function(){
        document.body.removeChild(overlay);
    };
    document.querySelector('.overlay').onclick = function(){
        document.body.removeChild(overlay);
    };
});