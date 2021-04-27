var number = 0;
var numberElement = document.querySelector("#number");

function iLike() {
    number ++;
    numberElement.innerText = number + ' like(s)';
}