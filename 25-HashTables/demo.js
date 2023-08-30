"use strict";

// Hash function
// given a string key, and a length, it will map that key to a number less than that length.
function babyHash(key, length) {
    let total = 0;
    for (let char of key) {
        let val = char.charCodeAt(0) - 96;
        total = (total + val) % length
    }
    return total;
}
// Limitations:
// Only hashes strings, not constant time due to looping through key, collides often
