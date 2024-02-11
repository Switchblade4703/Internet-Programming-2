let loopUse = prompt("Please enter anything you wish to be looped!");

const button = document.getElementById('Loopbutton');

button.addEventListener("click", myFunction);

function myFunction() {
    for (let index = 0; index < 6; index++) {
        console.log(loopUse);
    }
    button.style.backgroundColor = "green";
}