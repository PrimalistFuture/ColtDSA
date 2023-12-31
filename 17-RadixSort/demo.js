"use strict";

// radix helpers

// getDigit
// takes a num and a place and returns the digit at that place. 

// function getDigit(num, place) {
//     num = num.toString().split('');
//     place = num.length - 1 - place;
//     return parseInt(num[place]);
// }
// My guess. Works for positive numbers where place isn't out of bounds. Below is better.

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


// digitCount
// returns the number of digits in num

// function digitCount(num) {
//     return Math.abs(num).toString().length;
// }
// My instinct was to turn it into a string and check the length. Probably works fine. But something I know about computers is doing math is very easy. Maybe even easier than converting types and shit.

function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits
// given an array of nums, returns the number of digits in the largest numbers in the list

// function mostDigits(nums) {
//     return Math.max(...nums.map(item => digitCount(item)));
// }
// I am a little proud

function mostDigits(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, digitCount(nums[i]))
    }
    return max;
}
// more classic.

// radix conductor
// figure out max number of digits
// loop from 0 up to that max
// for each iteration, create 10 buckets for each digit
// place the items into the right bucket for the given place
// increment place and repeat
function radix(arr) {
    let max = mostDigits(arr);
    for (let i = 0; i < max; i++) {
        // makes an array of 10 subarrays
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }
        // need to spread to lose the individual buckets
        arr = [].concat(...digitBuckets);
    }
    return arr;
}
// I was really not sure how i was gonna create 10 buckets nicely