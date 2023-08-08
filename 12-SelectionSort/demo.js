"use strict";

// swapper
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// Selection Sort Pseudo
// Store the first element as the smallest value you've seen so far.
// Compare that item to the next item in the array until you find a smaller number, and save that position.
// If the minimum is not the index we began with, swap the two values.
// Repeat.

// [10,1,5,3,4]
// i = 0
// min = 1;
// j = 1
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            swap(arr, minIdx, i)
        }
    }
    return arr;
}

// Couple small mistakes here:
// I had minIdx saved as min which created some confusion as to whether I cared about the index or the value
// Something about saving the lowest as the index didn't click with me at all despite the pseudo. I probably could do this with indexOf(min) or something, but indexOf() has its own time complexity.
// I was initially looping through the entire array with j starting at 1, but that would do so everytime. Starting at i + 1 ensures I don't look at items I know are already sorted.