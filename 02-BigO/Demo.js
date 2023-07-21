"use strict";


// 6.26.23

// Write a function that accepts a string input and returns a reversed copy

function revString(str) {
  return str.split('').reverse().join('');
}

function revString2(str) {
  let revString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
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
  return n * (n + 1) / 2;
}

// Big O is worst case scenario. The runtime for this then is O(n) because the 5 doesn't matter as the n grows.
function logAtLeast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// Because we can only log a max of 5, n no longer matters. So now we have O(1)
function logAtMost5(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}