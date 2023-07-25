"use strict";

// Frequency Counter - sameFrequency
// Write a function called sameFrequency.Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

// Sample Input:
// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false

function freqCounter(arr) {
    let freq = {};
    for (let item of arr) {
        if (freq[item] === undefined) {
            freq[item] = 1;
        } else {
            freq[item]++;
        }
    }
    return freq;
}

function sameFrequency(n1, n2) {
    if (n1.toString().length !== n2.toString().length) {
        return false;
    }
    n1 = freqCounter(n1.toString().split(''));
    n2 = freqCounter(n2.toString().split(''));

    for (let item in n1) {
        if (n1[item] !== n2[item]) {
            return false;
        }
    }
    return true;
}

// had to look up the toString method. Probably using it twice is less efficient than once. But whatever.