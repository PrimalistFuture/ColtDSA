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