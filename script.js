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
let result = '';

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
        }
        if (firstNumber !== '' && secondNumber !== '') {
            result = operate(firstNumber, operator, secondNumber);
            firstNumber = result;
            secondNumber = '';
            operator = '';
        }
        output.textContent = firstNumber;
        operator = e.target.textContent;
        numberOneArr = [];
        console.log(`first: ${firstNumber}`);
        console.log(`operator: ${operator}`);
        console.log(`second: ${secondNumber}`);
        console.log(`result: ${result}`);
        console.log(`current number: ${currentNumber}`);
    });
});

let equal = document.getElementById("equal");
equal.addEventListener("click", e => {
    if (operator === "") {
        output.textContent = currentNumber;
    } else {
        secondNumber = currentNumber;
    }
    if (result === '') {
        result = operate(firstNumber, operator, secondNumber);
    } else {
        firstNumber = result;
        result = operate(result, operator, currentNumber);
    }
    output.textContent = result;
        console.log(`first: ${firstNumber}`);
        console.log(`operator: ${operator}`);
        console.log(`second: ${secondNumber}`);
        console.log(`result: ${result}`);
        console.log(`current number: ${currentNumber}`);
})