"use strict";

// built in .sort()

function numberCompare(num1, num2) {
    return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
//[4, 6, 10, 15]

function compareByLen(str1, str2) {
    return str2.length - str1.length;
}

['Vaughn', 'Is', 'A', 'Clown', 'Cute'].sort(compareByLen);
// ['Vaughn', 'Clown', 'Cute', 'Is', 'A']


// BubbleSort

// swapper
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// another uglier swapper func
let uglySwap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
// i can't stand this syntax

// bubble pseudo
// Start looping from beginning with a variable called i to the end of the array
// Start an inner loop with a variable called j from the beginning until the end of the array 
// if arr[j] > arr[j+1], swap them

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// works but lots of small problems. Checks the numbers at the end more than it has to, because they will always be sorted. 

function moreOptimizedBS(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                // let temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// with short curcuit

function evenMoreOptimizedBS(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}