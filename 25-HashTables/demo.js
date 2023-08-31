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

// slightly more sophisticated. Length should really be a largeish prime number
function toddlerHash(key, length) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let val = char.charCodeAt(0) - 96;
        total = (total + val + WEIRD_PRIME) % length;
    }
    return total
}
// Improvements
// handles super long strings better, incorporates a prime number to reduce collisions 



class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    // internal hashing function, returns the index the key will be stored at
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let val = char.charCodeAt(0) - 96;
            total = (total + val + WEIRD_PRIME) % this.keyMap.length;
        }
        return total
    }
    // assigns a key and value to a place on this.keyMap. Allows the insertion of duplicate keys, which is generally no bueno
    set(key, value) {
        let idx = this._hash(key);
        // if there is nothing currently stored at that idx, set the value to be an empty array
        if (!this.keyMap[idx]) {
            this.keyMap[idx] = [];
        }
        // push the key & value at that idx into the array
        this.keyMap[idx].push([key, value]);
    }
    // finds and returns the value for a given key, or undefined if not found
    get(key) {
        let idx = this._hash(key);
        if (this.keyMap[idx]) {
            for (let i = 0; i < this.keyMap[idx].length; i++) {
                if (this.keyMap[idx][i][0] === key) {
                    return this.keyMap[idx][i][1];
                }
            }
        }
        return undefined;
    }
    // retuns an array of all of the unique keys in the hash table
    keys() {
        let keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keys.includes(this.keyMap[i][j][0])) {
                        keys.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keys;
    }

    // returns an array of all of the unique values in the hash table
    values() {
        let values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!values.includes(this.keyMap[i][j][1])) {
                        values.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return values;
    }
}

let ht = new HashTable(5);
ht.set('A', '1');
ht.set('B', '2');
ht.set('C', '3');
ht.set('D', '4');
ht.set('E', '5');
ht.set('F', '6');