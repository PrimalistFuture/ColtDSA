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

// had to look up the toString method. Probably using it twice is less efficient than once. But whatever that is an easy fix.


// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(args) {
    let array = [...arguments];

    let freq = freqCounter(array);

    for (let item in freq) {
        if (freq[item] > 1) {
            return true;
        }
    }
    return false;
}

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

// I had to look up this way on line 62 to get all the arguments. I thought I had to turn the arguments into an array because my freqCounter demands an array. But the arguments keyword itself is an object so I could have just interated through that to make a frequency object and then check it.

// Bonus:
// Time - O(n log n)
// Space - O(1)

// Two pointers
function areThereDuplicates(...args) {
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

// Using a set
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}


// Multiple Pointers - averagePair
// Write a function called averagePair.Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

// Sample Input:
// averagePair([1, 2, 3], 2.5) // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
// averagePair([], 4) // false

function averagePair(arr, targetAvg) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] === targetAvg * 2) {
            return true;
        } else if (arr[left] + arr[right] > targetAvg * 2) {
            right--;
        } else if (arr[left] + arr[right] < targetAvg * 2) {
            left++;
        }
    }
    return false;
}

// really should just save arr[left] + arr[right] === targetAvg * 2 to a variable.


// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

//     Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
    let index = 0;

    for (let i = 0; i < str2.length; i++) {
        console.log(str1[index], str2[i])
        if (str2[i] === str1[index]) {
            index++;
        }
    }
    return index === str1.length;
}