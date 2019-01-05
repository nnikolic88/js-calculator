let buttonSeven = document.querySelector('#button-seven');
let buttonEight = document.querySelector('#button-eight');
let buttonNine = document.querySelector('#button-nine');
let buttonDivide = document.querySelector('#button-divide');
let buttonFive = document.querySelector('#button-five');
let buttonSix = document.querySelector('#button-six');
let buttonFour = document.querySelector('#button-four');
let buttonMultiply = document.querySelector('#button-multiply');
let buttonOne = document.querySelector('#button-one');
let buttonTwo = document.querySelector('#button-two');
let buttonThree = document.querySelector('#button-three');
let buttonSum = document.querySelector('#button-sum');
let buttonSubtract = document.querySelector('#button-subtract');
let buttonDot = document.querySelector('#button-dot');
let buttonZero = document.querySelector('#button-zero');
let display = document.querySelector('#display');
let buttonEqual = document.querySelector('#button-equal');
let buttonReset = document.querySelector('#button-reset');

buttonZero.addEventListener('click', function ($event) {
    display.value += 0;
    display.innerText += 0;
});
buttonOne.addEventListener('click', function ($event) {
    display.innerText += 1;
    display.value += 1;
});
buttonTwo.addEventListener('click', function ($event) {
    display.innerText += 2;
    display.value += 2;
});
buttonThree.addEventListener('click', function ($event) {
    display.innerText += 3;
    display.value += 3;
});
buttonFour.addEventListener('click', function ($event) {
    display.innerText += 4;
    display.value += 4;
});
buttonFive.addEventListener('click', function ($event) {
    display.innerText += 5;
    display.value += 5;
});
buttonSix.addEventListener('click', function ($event) {
    display.innerText += 6;
    display.value += 6;
});
buttonSeven.addEventListener('click', function ($event) {
    display.innerText += 7;
    display.value += 7;
});
buttonEight.addEventListener('click', function ($event) {
    display.innerText += 8;
    display.value += 8;
});
buttonNine.addEventListener('click', function ($event) {
    display.innerText += 9;
    display.value += 9;
});
buttonDot.addEventListener('click', function ($event) {
    if (!(display.value.indexOf('.') > -1)) {
        display.value += '.';
    }
});

//math operations

let value1 = 0;
let operation = '';
let result = 0;
buttonEqual.addEventListener('click', function ($event) {
    switch (operation) {
        case '+':
            result = +display.value + value1;
            break;
        case '-':
            result = value1 - +display.value;
            break;
        case '*':
            result = value1 * +display.value;
            break;
            case '/':
            result = value1 / +display.value;
            break;
        default:
            break;
    }
    display.value = result;
});

function resetDisplay() {
    display.value = '';
}

buttonSum.addEventListener('click', function ($event) {
    value1 = +display.value;
    operation = '+';
    resetDisplay();
});
buttonSubtract.addEventListener('click', function ($event) {
    value1 = +display.value;
    operation = '-';
    resetDisplay();
});
buttonMultiply.addEventListener('click', function ($event) {
    value1 = +display.value;
    operation = '*';
    resetDisplay();
});
buttonDivide.addEventListener('click', function ($event) {
    value1 = +display.value;
    operation = '/';
    resetDisplay();
});
buttonReset.addEventListener('click', function ($event) {
   display.value = '';
   value1 = 0;
   result = 0;
});
