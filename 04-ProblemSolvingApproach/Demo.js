"use strict";

// 'Write a function which takes two numbers and returns their sum.'
// 'implement addition function'
// 'are the numbers integers?' 'are they floats?' 'how large are these numbers?' 'are there always two inputs?' 'should our function only work with two numbers?'
function add2(n1, n2) {
    return n1 + n2;
}

// Write a function which takes in a string and returns counts of each character in the string
// case sensitive?
// return an object?
// only letters that are there?
// spaces?
// special characters / numbers

// Examples
// aaaa = {a: 4}
// 'Hi hello' = {h:2, e: 1 ...}
// '' = ?
// null = ? 


function charCount(string) {
    arr = string.toLowerCase().split('');
    return freqCounter(arr);
}

function freqCounter(arr) {
    let freq = {};
    for (let item of arr) {
        if (freq[item] === undefined) {
            freq[item] = 1;
        } else {
            freq[item]++
        }
    }
    return freq;
}

//Write a function which takes in a string and returns counts of each character in the string
// convert input into lowercase and split into characters
// make object
// loop over converted input
// freqCounter patten
// return object we made.

// REMEMBER THE SUPER COOL WAY OF CHECKING IF SOMETHING IS A LETTER BY CHECKING TO SEE IF THAT SOMETHING UPPERCASED IS EQUAL TO IT LOWERCASED.