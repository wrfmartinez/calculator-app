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