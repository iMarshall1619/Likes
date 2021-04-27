var number = 9;
var number2 = 12;
var number3 = 9;


function iLike() {
    var numberElement = document.querySelector('#number');
    number ++;
    numberElement.innerText = number + ' like(s)';
}

function iLike2() {
    var numberElement = document.querySelector('#number2');
    number2 ++;
    numberElement.innerText = number2 + ' like(s)';
}

function iLike3() {
    var numberElement = document.querySelector('#number3');
    number3 ++;
    numberElement.innerText = number3 + ' like(s)';
}