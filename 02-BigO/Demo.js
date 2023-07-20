"use strict";


// 6.26.23

// Write a function that accepts a string input and returns a reversed copy

function revString(str) {
  return str.split('').reverse().join('');
}

function revString2(str) {
  let revString = '';
  for (let i = str.length-1; i >= 0; i--) {
    revString+=str[i];
  }
  return revString;
}

// Write a function that calculates the sum of all numbers from 1 up to and including n

//O(n)
function addToN(n) {
  let sum = 0;
  let counter = n;
  while (counter > 0) {
    sum += counter;
    counter--;
  }
  return sum;
}

function addToN2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Below is wayyyyy faster because for even small values of n, the first solution has to do more operations. Whereas below is alway just 3 - multiply, add, divide.
//O(1)
function addToN3(n) {
  return n * (n+1) / 2;
}