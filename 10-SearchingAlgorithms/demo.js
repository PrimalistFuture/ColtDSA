"use strict";

// linear seach 

// func accepts an array and a value. Loop through the arr and check if the current array element is equal to the value. If it is, return the index at which it is found, if the value is never found, return -1.

function linearS(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// binary search

// func accepts an array and a value.
// create a left and right pointer
// while the left pointer is < the right pointer
// Pick a middle item
// If the input value is equal to the middle, return the index
// if the input value is > middle, reassign left = old middle, find new middle
// if the value is < middle, reassign right = old middle, find new middle
// return -1 if never found

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (val > arr[middle]) {
            left = middle + 1;
            // middle = Math.floor((left + right) / 2);
        } else if (val < arr[middle]) {
            right = middle - 1;
            // middle = Math.floor((left + right) / 2);
        } else if (val === arr[middle]) {
            return middle;
        }
    }
    return -1;
}

// Notes: Lots of small mistakes.
// Forgot that I had to do arr[middle] in the if checks.
// better name than middle would be middleIndex or something
// don't need to reassign middle in the if clause because it goes back to the top of the while loop which does that.
// right has to be arr.length -1 if we are doing left <= right
// adding to left and subtracting from right is faster than reassigning them to be middle
// which we have to do if we every want to actually return -1.


// naive string search

// func takes longer string and substring
// loop over longer str
// loop over shorter str
// if the characters don't match, break out of the inner
// if they do match keep going
// if you complete the inner loop and find a match, increment the count of matches
// return count

function naiveStringSearch(longer, sub) {
    let counter = 0;
    for (let i = 0; i < longer.length; i++) {
        for (let j = 0; j < sub.length; j++) {
            if (sub[j] !== longer[i + j]) {
                break;
            }
            if (j === sub.length - 1) {
                counter++;
            }
        }
    }
    return counter;
}

// This tricky bit is on line 69. Using longer[i + j] lets us use the length of the sub string without having to make a variable equal to its length or whatever.