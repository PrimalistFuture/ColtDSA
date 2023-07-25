"use strict";


// Freq Counters
// Write a function called same, which accepts two arrays. The func should return true if every value in the array has its corresponding value squared in the second array. The freq of values must be the same.

// [1,2,3,4] [1,4,9,16] true
// [1,1,2,3] [1,1,4,4] false
// [1,1,1,1] [1,1,1,1] true

// Don't forget that because the freqCounter is an obj, I need to use for...in.

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let freq1 = freqCounter(arr1);
    let freq2 = freqCounter(arr2);

    for (let item in freq1) {
        if (freq1[item] !== freq2[item ** 2]) {
            return false;
        }
    }
    return true;
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


// Given two strings, write a func to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another. cinema -> iceman.

// cinema, iceman = true
// cat, tac = true
// smart, dumb = false

/** Uses freqCounter from above */
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let freq1 = freqCounter(str1);
    let freq2 = freqCounter(str2);

    for (let char in freq1) {
        if (freq1[char] !== freq2[char]) {
            return false;
        }
    }
    return true;
}

// Multiple Pointers

// Write a func called sumZero which accepts a sorted array of integers. The func should find the first pair where the sum = 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Because the array is sorted we can have an efficient solution - otherwise we would be out of luck. Definitely could do nested loops for O(n^2).

// [-3,-2,-1,0,1,2,3] [-3,3]
// [-3,-2,-1,0,1,2] [-2, 2]
// [-1,0,1,2,3] [-1,1]
// [-2,0,1,3] undefined
// [1,2,3] undefined

function sumZero(sortedArr) {
    let left = 0;
    let right = sortedArr.length - 1
    while (left < right) {
        if (sortedArr[left] + sortedArr[right] === 0) {
            return [sortedArr[left], sortedArr[right]];
        } else if (sortedArr[left] + sortedArr[right] > 0) {
            right--;
        } else if (sortedArr[left] + sortedArr[right] < 0) {
            left++;
        }
    }
}

// This was hard for me. I should have got that it was a while loop. But I always get a bit turned around with multiple pointer patterns. Because the loop will end when left < right, we don't need to return undefined, the func will just give that to us if there is nothing else to return.

// Write a func called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array.

// [1] 1
// [1,1] 1
// [1,1,1,1,1,2] 2
// [1,2,3,4,5,6] 6
// [] 0
// [-2,-1,-1,0,1] 4

function countUniqueValues(sortedArr) {
    let left = 0;
    let right = 1;
    let uniques = 0;
    if (sortedArr.length > 0) {
        uniques++;
    }
    while (right < sortedArr.length) {
        if (sortedArr[left] === sortedArr[right]) {
            left++;
            right++;
        } else if (sortedArr[left] !== sortedArr[right]) {
            uniques++;
            left++;
            right++;
        }
    }
    return uniques;
}

// another solution:

function countUniqueValues(sortedArr) {
    if (sortedArr.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < sortedArr.length; j++) {
        if (sortedArr[i] !== sortedArr[j]) {
            i++;
            sortedArr[i] = sortedArr[j]
        }
    }
    return ++i;
}

// Sliding Window Pattern

// Write a func called maxSubarraySum which accepts an array of integers and a number called n. The func should calculate the maximum sum of n consecutive elements in the array.

// [1,2,3,4], 2 = 7
// [1,1,1,2,2,3,6,1,1,3], 4 = 13
// [], 2 = null

function maxSubarraySum(arr, n) {
    if (n > arr.length) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        console.log(arr[i - n])
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// still a little fuzzy on line 158. I know what it does: it takes the tempSum and subtracts the first item that it was composed of and adds on the next item. Line 159 then compares the tempSum with maxSum.
// But its just a bit unfamiliar


// Divide and Conquer

// Given a sorted array of integers, write a func called search that accepts a value and returns the index where the value passed to the func is located. If the value is not found, return -1.

// [1,2,3,4,5,6], 4 // 3
// [1,2,3,4,5,6], 6 // 5
// [1,2,3,4,5,6], 11 // -1

function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        if (arr[middle] < val) {
            min = middle + 1;
        }
        else if (arr[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}