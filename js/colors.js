//console.log("hello from script")
const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ['red', 'green', 'blue', 'yellow'];
//console.log(myButton);
let rndLast = null;
myButton.addEventListener('click', changeColor);

function changeColor(){
    let rnd = Math.floor(Math.random() * colors.length);
    if (rndLast === rnd) {
        colors.splice(rnd, )
    }
    console.log(rnd)
    myBox.style.backgroundColor = colors[rnd];
    rndLast = rnd;
}