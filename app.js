/*
[x] As a user, I want to be able to select numbers so that I can perform operations with them.
[x] As a user, I want to be able to add two numbers together.
[x] As a user, I want to be able to subtract one number from another.
[x] As a user, I want to be able to multiply two numbers together.
[x] As a user, I want to be able to divide one number by another.
[x] As a user, I want to be able to see the output of the mathematical operation.
[x] As a user, I want to be able to clear all operations and start from 0.
/*

/*------------------------------ Constants ------------------------------*/
const numbers = document.querySelectorAll('.button');

/*------------------------------ Variables ------------------------------*/
let display = document.querySelector('.display');
let numberState = '';
storedNumbers = {
  storedNumbersToAdd: [],
  storedNumbersToSubtract: [],
  storedNumbersToMultiply: [],
  storedNumbersToDivide: []
}

/*------------------------------ Functions ------------------------------*/
const add = (arrOfNums) => {
  let sum = 0;

  for (let num = 0; num < arrOfNums.length; num++) {
    sum += arrOfNums[num];
  }

  return sum;
}

const subtract = (arrOfNums) => {
  let difference = arrOfNums[0];

  for (let num = 1; num < arrOfNums.length; num++) {
    difference -= arrOfNums[num];
  }

  return difference;
}

const multiply = (arrOfNums) => {
  let product = 1;

  for (let num = 0; num < arrOfNums.length; num++) {
    product *= arrOfNums[num];
  }

  return product;
}

const divide = (arrOfNums) => {
  let quotient = arrOfNums[0];

  for (let num = 1; num < arrOfNums.length; num++) {
    quotient /= arrOfNums[num];
  }

  return quotient;
}

const displayAddition = () => {
  display.textContent = add(storedNumbers.storedNumbersToAdd);
}

const displaySubraction = () => {
  display.textContent = subtract(storedNumbers.storedNumbersToSubtract);
}

const displayMultiplication = () => {
  display.textContent = multiply(storedNumbers.storedNumbersToMultiply);
}

const displayDivison = () => {
  display.textContent = divide(storedNumbers.storedNumbersToDivide);
}

/*--------------------------- Event Listeners ---------------------------*/
for (number of numbers) {
  number.addEventListener('click', (event) => {
     // Clears the state of the calculator and resets to 0
     if (event.target.textContent === 'C') {
      numberState = '';
      display.textContent = Number('0');
      storedNumbers.storedNumbersToAdd = [];
      storedNumbers.storedNumbersToSubtract = [];
      storedNumbers.storedNumbersToMultiply = []
      storedNumbers.storedNumbersToDivide = []
    }

    // ADDITION EVENT LISTENER
    if (event.target.textContent === '+') {
      storedNumbers.storedNumbersToAdd.push(Number(numberState));
      display.textContent = Number('0');
      numberState = '';
    }

    // SUBTRACTION EVENT LISTENER
    if (event.target.textContent === '-') {
      storedNumbers.storedNumbersToSubtract.push(Number(numberState));
      display.textContent = Number('0');
      numberState = '';
    }

    // MULTIPLICATION EVENT LISTENER
    if (event.target.textContent === '*') {
      storedNumbers.storedNumbersToMultiply.push(Number(numberState));
      display.textContent = Number('0');
      numberState = '';
    }

    // DIVISION EVENT LISTENER
    if (event.target.textContent === '/') {
      storedNumbers.storedNumbersToDivide.push(Number(numberState));
      display.textContent = Number('0');
      numberState = '';
    }

    // EQUALS EVENT LISTENER
    if (event.target.textContent === '=') {
      if (storedNumbers.storedNumbersToAdd.length > 0) {
        displayAddition();
      } else if (storedNumbers.storedNumbersToSubtract.length > 0) {
        displaySubraction();
      } else if (storedNumbers.storedNumbersToMultiply.length > 0) {
        displayMultiplication();
      } else if (storedNumbers.storedNumbersToDivide.length > 0) {
        displayDivison();
      }
    }

    // Displays operations
    for (let i = 0; i <= 9; i++) {
      if (Number(event.target.textContent) === i) {
        numberState += i;
        display.textContent = numberState;
      }
    }
  })
}
