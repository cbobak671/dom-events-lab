/*-------------------------------- User Stories --------------------------------*/

// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1 = "";
let num2 = "";
let firstValue = true;
let secondValue = true;
let operation = "";
let isOperator = false;
let operator = { add: "+", divide: "/", multiply: "*", divide: "/" };

/*------------------------ Cached Element References ------------------------*/
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.getElementById("equals-btn");
const clearButton = document.getElementById("clear-btn");
const displayResult = document.getElementById("output");
const displayForm = document.getElementById("display-window");

const handleOperatorButtons = (operator) => {
  operator = operator.target.id;
  firstValue = false;
};

const handleNumberClicks = (numberButton) => {
  numberButton = number.target.id;
};

/*----------------------------- Event Listeners -----------------------------*/

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", (numberButton) => {
    if (firstValue) {
      num1 = num1 + numberButton.target.innerText;
      displayResult.value = num1;
    } else {
      num2 = num2 + numberButton.target.innerText;
      displayResult.value = num2;
    }
    console.log(numberButton.target.innerText);
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (operatorButton) => {
    firstValue = false;
    operation = operatorButton.target.innerText;
    console.log(operatorButton.target.innerText);
  });
});

equalsButton.addEventListener("click", (equalsButton) => {
  secondValue = false;
  if ((secondValue = false) && operatorButton.id == "add-button") {
    result = add();
    return add(num1, num2);
    displayResult.value = equalsButton.target.innerText;
  }
  console.log(result);
});

clearButton.addEventListener("click", (clearButton) => {
  displayResult.value = 0;
});

const inputNumber = (number) => {
  const screenNumber = displayResult.innerHTML;
  if (screenNumber.length < 16)
    displayResult.innerHTML = parseInt(screenNumber + number).toString();
};

/*-------------------------------- Functions --------------------------------*/

let add = {
  operatorButtonValue: "+",
  add(number1, number2) {
    const sum = number1 + number2;
    return sum;
  },
};

let subtract = {
  operatorButtonValue: "-",
  subtract(number1, number2) {
    const difference = number1 - number2;
    return difference;
  },
};

let multiply = {
  operatorButtonValue: "*",
  multiply(number1, number2) {
    const product = number1 * number2;
    return product;
  },
};

let divide = {
  operatorButtonValue: "/",
  divide(number1, number2) {
    const quotient = number1 / number2;
    return quotient;
  },
};

function calculate(operator, number1, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      return divide(number1, number2);
  }
  let result = result(calculate);
}
