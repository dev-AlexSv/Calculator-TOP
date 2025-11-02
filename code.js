function add(num1, num2) {
    return (num1) + (num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
           
    }
}


const digits = document.querySelector(".digits");
const actions = document.querySelector(".actions");
let displayInput = document.querySelector(".display-input")
let displayResult = document.querySelector(".display-result")

let isSecondNumber = false;
let num1 = "";
let num2 = "";
let result = "";
let operator = "";

digits.addEventListener('click', (event) => {
    if (event.target.parentNode === digits) {
        const digit = event.target.textContent;
        displayInput.textContent += digit;

        if (isSecondNumber) {
            num2 += digit;
        } else {
            num1 += digit;
        }
    }
});


actions.addEventListener('click', (event) => {
    if (event.target.parentNode === actions) {
        const action = event.target.textContent;

        if (action === "=") {
            if (num1 && num2 && operator) {
                result = operate(num1, num2, operator);
                displayResult.textContent = result;
                num1 = result.toString();
                num2 = "";
                operator = "";
                isSecondNumber = false;
            }
        } else if (action === "C") {
            displayInput.textContent = "";
            displayResult.textContent = "";
            num1 = "";
            num2 = "";
            operator = "";
            isSecondNumber = false;
        } else {

            if (num1 && num2 && operator) {
                result = operate(num1, num2, operator);
                displayResult.textContent = result;
                num1 = result.toString();
                num2 = "";
            }

            displayInput.textContent += action;
            operator = action;
            isSecondNumber = true;
        }
    }
});
