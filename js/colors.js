//console.log("hello from script")
const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ['red', 'green', 'blue', 'yellow'];
//console.log(myButton);
let randomValues = [];

//template literals
let name = 'Micheal Jackson';

console.log(`Hello, ${name}`);

myButton.addEventListener('click', changeColor);

function changeColor(){
    if (randomValues.length === 0){
        for(let i = 0; i < colors.length; i++)
        {
        randomValues.push(i);
        }
    }

    let randomIndex = Math.floor(Math.random() * randomValues.length);
    let indexFromMyarray = randomValues[randomIndex];
    randomValues.splice(randomIndex, 1);
    console.log(randomValues);
    myBox.style.backgroundColor = colors[indexFromMyarray];
}