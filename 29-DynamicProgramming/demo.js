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

// this works but isn't very performant. Going from fib(6) to fib(7) is a huge jump, because it involves everything of fib(6) and of fib(5). Very large, very quickly. O(2^n). Bad.


