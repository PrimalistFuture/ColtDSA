'use strict';


// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  if (str.length === 0) {
    return '';
  }
  return str[str.length - 1] + reverse(str.slice(0, -1))
}

// I thought I had a good idea on this one, and I did, but I forgot how slice works. Originally I was doing reverse(str.slice(-1)), but this just returns the last item. What I needed to do was slice(0,-1), which will return the entire string minus the last letter.


// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  if (str.length === 0) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1))
}

// sick. I was originally returning false on the first base case before realizing, before running any tests, that it should be true if we get to an empty string.


// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, cb) {
  if (arr.length === 0) {
    return false;
  }
  let first = [arr[0]].map(cb);
  if (first[0]) {
    return true;
  }
  return someRecursive(arr.slice(1), cb)
}

// Lots of cool things I had to think a lot about here.
// First: we could not use the cb on just the first item of the array because map has to be used on an array, so we put it into an array.
// Second, I really wasn't sure how map would handle the cb. Defining isOdd outside the func let me not have to redefine it inside the func if it didn't already exist.
// I'm a little proud.


// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]