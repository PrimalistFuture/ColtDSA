"use strict";

// call stack
// notice that our conductor function wakeUp will call the other functions, who themselves must fully complete before the console.log on 23 will run.

function takeShower() {
  return "Showering!"
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Okay, ready to go to work");
}

wakeUp();

// first recursive func
// can obviously be done w/o recursion.
function countDown(num) {
  // base case
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

// more

function sumRange(num) {
  // base case
  if (num === 1) {
    return 1;
  }

  return num + sumRange(num - 1);
}

sumRange(3)
// return 3 + sumRange(2)
// return 2 + sumRange(1)
// return 1
// 6 


function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

factorial(5)


// helper method recursion
// result needs to be stored outside of the recursive part of the function so that it is not reset with every invocation. So we will wrap this in another function.
function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 === 1) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)
  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);


// pure recursion

function collectOdds(arr) {
  // this is the bit that is far trickier than it looks. The results variable is created everytime, but it is concated with all other results variables.
  let results = [];

  if (arr.length === 0) {
    return results;
  }
  if (arr[0] % 2 === 1) {
    results.push(arr[0]);
  }
  results = results.concat(collectOdds(arr.slice(1)))
  return results;
}

// collectOdds([1,2,3,4,5])
  // [1].concat(collectOdds([2,3,4,5]))
    // [].concat(collectOdds([3,4,5]))
      // [3].concat(collectOdds([4,5]))
        // [].concat(collectOdds([5]))
          // [5].concat(collectOdds([]))
