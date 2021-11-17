const myButton = document.querySelector('button');
const myImage = document.querySelector('#image')
const images = ['images/camel-one.jpeg', 'images/camel-two.jpeg', 'images/camel-three.jpeg', 'images/camel-four.jpeg','images/camel-five.jpeg'];

let randomValues = [];

myButton.addEventListener('click', changeImage);

function changeImage() {
    if (randomValues.length === 0){
        for(let i = 0; i < images.length; i++)
        {
        randomValues.push(i);
        }
    }

    let randomIndex = Math.floor(Math.random() * randomValues.length);
    let indexFromMyarray = randomValues[randomIndex];
    randomValues.splice(randomIndex, 1);

    document.getElementById("image").src=images[indexFromMyarray];
}


