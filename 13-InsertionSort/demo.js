"use strict";


function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// Insertion Sort

// pseudo
// Pick the second element.
// Compare the second element with the one before it and swap if necessary
// If the next element is in the incorrect order, iterate through the sorted portion, place the element in the correct place
// repeat
// [10,5,2,1,3]
// j = 0
// item = 
// i = 2
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let item = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > item; j--) {
            arr[j + 1] = arr[j];
            if (arr[i] !== item) {
                arr[j] = item;
            }
        }
        // arr[j + 1] = item;
    }
    return arr;
}
// Notes:
// I had the line on line 30, but that doesn't work because at that point, j no longer exists. Had to build it into the j loop. Less efficient because we ask that question more than we need to.
// because the j loop itself has this short curcuit, we know that if we are in the loop, we can reassign.
