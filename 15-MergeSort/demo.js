"use strict";

// MergeSort

// merging arrays helper function
// [1,10,50] [2,14,99,100]
function merge(arr1, arr2) {
    let longer;
    let shorter;
    let merged = [];
    if (arr1.length >= arr2.length) {
        longer = arr1;
        shorter = arr2;
    } else {
        longer = arr2;
        shorter = arr1;
    }
    let i = 0;
    let j = 0;
    while (j < shorter.length) {
        if (longer[i] <= shorter[j]) {
            merged.push(longer[i]);
            i++;
        } else {
            merged.push(shorter[j]);
            j++;
        }
    }
    while (i < longer.length) {
        merged.push(longer[i]);
        i++;
    }
    return merged;
}

// Works great. A little more explicit with how it handles arrays of different sizes than it needs to be. Could rewrite them as ternarys? 
// Even though the function is big, it is still O(n) time. Not nested for loops or other horrid shit.

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}