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