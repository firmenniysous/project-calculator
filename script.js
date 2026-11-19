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
let currentNumber = 0;
let operator = "";
let firstNumber = '';
let secondNumber = '';
let result = 0;

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
        if (firstNumber === '') {
            firstNumber = currentNumber;
        } else {
            secondNumber = currentNumber;
            firstNumber = operate(firstNumber, operator, secondNumber);
        }
        output.textContent = firstNumber;
        operator = e.target.textContent;
        numberOneArr = [];
        console.log(`first: ${firstNumber}`);
        console.log(`second: ${secondNumber}`);
    });
});

let equal = document.getElementById("equal");
equal.addEventListener("click", e => {
    if (operator === "") {
        output.textContent = currentNumber;
    } else {
        secondNumber = currentNumber;
        result = operate(firstNumber, operator, secondNumber);
        firstNumber = result;
        output.textContent = firstNumber;
    }
    console.log(`first: ${firstNumber}`);
    console.log(`second: ${secondNumber}`);
    console.log(`result: ${result}`);
})