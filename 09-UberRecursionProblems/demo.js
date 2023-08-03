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

function flatten(arrOfArr) {
  let newArr = [];

  for (let i = 0; i < arrOfArr.length; i++) {
    if (Array.isArray(arrOfArr[i])) {
      newArr = newArr.concat(flatten(arrOfArr[i]))
    } else {
      newArr.push(arrOfArr[i])
    }
  }
  return newArr;
}

// Had to look this one up, but I was definitely on the right track. The problem I had was that I didn't know how to go 'deeper' once I hit an array. Normally I would just use a loop, but for some reason that didn't seem like something I could do with recursion. Even though it makes sense because if I hit an array, I need to loop through the items of that array.


// capitalizeFirst
// Write a recursive function called capitalizeFirst.Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
  // base case
  // returns arr of the first (and only) item left in the array with the first char capitalized and the others copied and added to it.
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }
  // saves the recursive slicing of the input arr to a variable
  let cut = capitalizeFirst(arr.slice(0, -1));
  // saves the slicing of the last item, with the first char capitalized and the remaining chars copied and added to it, to a variable
  let newStr = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1);
  // because the base case created an array, we can push the newStr into it.
  cut.push(newStr);

  return cut;
}

// My first instinct was to go backwards, but I was thinking of more of a loop than a slice. Remember this works and gives us the same words in the same order because of the stack.


// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: 'car' }
// };

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

function nestedEvenSum(obj, sum = 0) {
  for (let item in obj) {
    if (obj[item] % 2 === 0) {
      sum += obj[item]
    } else if (typeof obj[item] === 'object') {
      sum += nestedEvenSum(obj[item])
    }
  }
  return sum;
}

// I was very close on this one. I needed to remember to pass in the sum obj as a default into nestedEvenSum. I knew I couldn't make it in the func without it overwriting itself.


// capitalizeWords
// Write a recursive function called capitalizeWords.Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let remain = capitalizeWords(arr.slice(0, -1))
  remain.push(arr.slice(arr.length - 1)[0].toUpperCase())
  return remain
}

// Yeah I don't really get this one. Very similar to the one two above this, but I am not sure I get that one either.


// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.Recursion would be a great way to solve this!
// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66
//     }
//   }
// }

function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// I was on the right track here too. But I need to get more comfortable making new variables. I am not 100% sure why newObj is not getting overwriten when the func calls stringifyNumbers. Everything else makes sense.



// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
// const obj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz"
//           }
//         }
//       }
//     }
//   }
// }

function collectStrings(obj) {
  let onlyStrings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      onlyStrings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      onlyStrings = onlyStrings.concat(collectStrings(obj[key]));
    }
  }
  return onlyStrings;
}

// I knew this one, but made a silly mistake at the end by not concating onlyStrings with everything it was + everything it will be.