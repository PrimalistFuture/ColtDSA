"use strict";

// swapper
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// pivot helper
// pseudo
// accepts arr, starting index and an end index, defaulting to 0 and arr.length -1
// pick the pivot from the start of the array
// Store the current pivot index in a variable to keep track of where it will end up.
// loop through the array, if the pivot is greater than the current element, increment the pivot index variable then swap the current element with the element at the pivot index.
// swap the starting element (pivot) with the pivot index.
// return the pivot index so that when we start recursively looking at smaller arrays, we have start point or an end point.

function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivot = arr[0];
    let swapIdx = startIdx;
    for (let i = startIdx + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, i, swapIdx);
        }
    }
    swap(arr, startIdx, swapIdx);
    // console.log(arr);
    return swapIdx;
}

// wrote a functioning version of this on my own, but some small optimizations were needed.
// start the for loop at startIdx + 1, because we don't need to look at the value we are comparing.

// QuickSort
// Calls the helper pivot func on the full array
// then call quickSort on the left and right of the pivot
// base case: subarray has less than two elements

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIdx - 1);
        // right
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

// I would not have had this base case without some help. 