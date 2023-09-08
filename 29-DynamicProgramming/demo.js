"use strict";

// stolen from 08-EzRecursion
// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
    if (num <= 2) {
        return 1;
    }
    return fib(num - 1) + fib(num - 2);

}

// this works but isn't very performant. Going from fib(6) to fib(7) is a huge jump, because it involves everything of fib(6) and of fib(5), neither of which 'remember' that fib(6) involves entirely solving fib(5). Very large, very quickly. O(2^n). Bad.

// Memoized Variant
// by filling out memo beforhand, we don't need our base case anymore.
function fib(num, memo = [undefined, 1, 1]) {
    if (memo[num] !== undefined) {
        return memo[num];
    }
    // recursive call
    let result = fib(num - 1, memo) + fib(num - 2, memo);
    // stores the recursive call in our memo to be passed around
    memo[num] = result;
    return result;
}

/// Improves the performance dramatically. Now fib(100) is nearly instant instead of crashing my browser. Could be improved further by storing memo elsewhere so it doesn't need recalculating here.

// Like this:
let fibMemo = { 0: undefined, 1: 1, 2: 1 }

function fib(num) {
    if (fibMemo[num] !== undefined) {
        return fibMemo[num];
    }
    fibMemo[num] = fib(num - 1) + fib(num - 2);
    return fibMemo[num];
}

// Tabulated Variant
// same result, but now works from the bottom up, calculating fib(3) -> fib(4) so on.
function fib(num) {
    if (num <= 2) {
        return 1;
    }
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= num; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[num];
}