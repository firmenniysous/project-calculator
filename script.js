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

const output = document.getElementById("output");
const numbersBtn = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
const eraseLast = document.getElementById("erase-last");

numbersBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        if (firstNumber !== '' 
            && secondNumber !== ''
            && currentNumber !== 0) {
                firstNumber = '';
                secondNumber = '';
                result = '';
                currentNumber = 0;
                numberOneArr = [];
            }
        numberOneArr.push(e.target.textContent);
        currentNumber = Number(numberOneArr.join(''));
        output.textContent = currentNumber;
    })
});

operators.forEach(btn => {
    btn.addEventListener ("click", e => {
        if (firstNumber === '') {
            firstNumber = currentNumber;
        } else {
            secondNumber = currentNumber;
        }
        if (firstNumber !== '' && secondNumber !== '') {
            result = '';
            firstNumber = operate(firstNumber, operator, secondNumber);
            secondNumber = '';
            operator = '';
        }
        currentNumber = '';
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


equal.addEventListener("click", () => {
    if (firstNumber === ''
        && secondNumber === ''
    ) {
        output.textContent = currentNumber;
    } else if (firstNumber !== ''
        && secondNumber === ''
    ) {
        secondNumber = currentNumber;
    } if (firstNumber !== ''
        && secondNumber !== ''
    ) {
        if (result === '') {
        result = operate(firstNumber, operator, secondNumber);
        output.textContent = result;
        } else {
        firstNumber = result;
        result = operate(result, operator, secondNumber);
        output.textContent = result;
        }
    }
        console.log(`first: ${firstNumber}`);
        console.log(`operator: ${operator}`);
        console.log(`second: ${secondNumber}`);
        console.log(`result: ${result}`);
        console.log(`current number: ${currentNumber}`);
});

eraseLast.addEventListener("click", () => {
    numberOneArr = String(output.textContent).split('');
    numberOneArr.pop();
    currentNumber = Number(numberOneArr.join(""));
    output.textContent = currentNumber;
    if (firstNumber !== ''
        && secondNumber !== ''
        && operator !== ''
        && result !== ''
    ) {
        firstNumber = currentNumber;
        secondNumber = '';
        operator = '';
        result = '';
        currentNumber = '';
    }
    console.log(`first: ${firstNumber}`);
    console.log(`operator: ${operator}`);
    console.log(`second: ${secondNumber}`);
    console.log(`result: ${result}`);
    console.log(`current number: ${currentNumber}`);
})