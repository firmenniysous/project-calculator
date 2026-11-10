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

let numberOne = [];
let operator;
let numberTwo = [];

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
        numberOne.push(e.target.textContent);
        let first = Number(numberOne.join(''));
        output.textContent = first;
    })
});
