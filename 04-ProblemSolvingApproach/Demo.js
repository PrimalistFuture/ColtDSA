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

// Now checking for alphanumeric. 
// Maybe could have been /w/ for the regex.
// Could have a been a for ... of loop
// obj[char] = ++obj[char] || 1 could replace our main if else
// could replace the regex with charCodeAt() and check if it is a valid character code.

function charCount(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}