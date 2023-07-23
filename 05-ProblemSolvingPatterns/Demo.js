"use strict";

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