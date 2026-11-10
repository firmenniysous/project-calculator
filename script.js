function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let numberOneArr = [];
let firstNumber = 0;
let operator = "";
let numberTwoArr = [];
let secondNumber = 0;

function operate(numOne, operator, numTwo) {
    let result = 0;
    if (operator === "+") {
        result = add(numOne, numTwo);
    } else if (operator === "-") {
        result = subtract(numOne, numTwo);
    } else if (operator === "*") {
        result = multiply(numOne, numTwo);
    } else if (operator === "/") {
        result = divide(numOne, numTwo);
    }
    return result;
}

let body = document.querySelector("body");
let output = document.getElementById("output");
let numberBtn = document.querySelectorAll(".number");
numberBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        numberOneArr.push(e.target.textContent);
        firstNumber = Number(numberOneArr.join(''));
        output.textContent = firstNumber;
    })
});