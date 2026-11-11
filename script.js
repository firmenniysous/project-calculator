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
let storeUsersNumbersArray = [];
let currentNumber = 0;
let operator = "";

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
let numbersBtn = document.querySelectorAll(".number");
numbersBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        numberOneArr.push(e.target.textContent);
        currentNumber = Number(numberOneArr.join(''));
        output.textContent = currentNumber;
    })
});

let operators = document.querySelectorAll(".operator");
operators.forEach(btn => {
    btn.addEventListener ("click", e => {
        operator = e.target.textContent;
        storeUsersNumbersArray.push(currentNumber);
        numberOneArr = [];
        output.textContent = currentNumber;
        console.log(storeUsersNumbersArray);
    })
});

let equal = document.getElementById("equal");
equal.addEventListener("click", e => {
    storeUsersNumbersArray.push(currentNumber);
    let firstNumber = storeUsersNumbersArray[0];
    let secondNumber = storeUsersNumbersArray[1];
    let result = operate(firstNumber, operator, secondNumber);
    output.textContent = result;
})