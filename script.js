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


console.log(operate(4, "-", 1));