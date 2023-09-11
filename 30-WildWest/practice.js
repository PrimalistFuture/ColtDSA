class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let temp = this.tail;
            this.tail = newNode;
            temp.next = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        let newTail = current;
        // loops until .next is falsey
        while (current.next) {
            // newTail is constantly lagging behind current
            newTail = current;
            current = current.next;
        }
        // once loop ends, we have found the second to last node, which is now our tail
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // ensures head and tail are accurate when popping that results in emtpy list
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) {
            return;
        }
        let oldHead = this.head;
        let newHead = this.head.next;
        this.head = newHead;
        this.length--;
        // ensures head and tail are accurate when shifting that results in emtpy list
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let oldHead = this.head;
            this.head = newNode;
            newNode.next = oldHead;
        }
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter < idx) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(idx, val) {
        if (idx < 0 || idx > this.length) {
            return false;
        }
        // if we wanted to insert at the end. Sneaky ! coerses return of push to a boolean, with second ! flipping it.
        if (idx === this.length) {
            return !!this.push(val);
        }
        // if we wanted to insert at the beginning. Sneaky !!
        if (idx === 0) {
            return !!this.unshift(val);
        }
        // if we wanted to insert in the middle somewhere
        let newNode = new Node(val);
        let previousNode = this.get(idx - 1);
        let temp = previousNode.next;
        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    // doesn't reassign head / tail
    rotate(place) {
        // not sure I get the second part of the or
        if (place === 0 || place >= this.length) {
            return this;
        }
        if (place < 0) {
            place = this.length + place
        }

        let current = this.head;
        let counter = 0
        while (counter < place) {
            // pushes current val to end
            this.push(current.val)
            // removes current from beginning
            this.shift(current.val)
            // reassigns current
            current = current.next
            counter++
        }
        return this;
    }
    set(idx, val) {
        let toBeReplaced = this.get(idx);

        if (!toBeReplaced) {
            return false;
        }
        toBeReplaced.val = val;
        return true;
    }
}

let sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20).push(25);

// linear. Too slow
function countZeroes(arr){
    // add whatever parameters you deem necessary - good luck!!!
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            break;
        }
        counter++;
    }
    return arr.length - counter;
}
// this actually uses divide and conquer, so it is faster
function countZeroes(arr, left=0, right=arr.length){
    // base case or OOB
    if (arr.length === 0 || left===right) {
        return 0;
    } else {
        let center = Math.floor((left+right) / 2);
        if (arr[center] === 0) {
            return right - center + countZeroes(arr,left, center);
        } else {
            return countZeroes(arr,center + 1,right);
        }
    }
}
// Given an array and a val, uses binary search to determine the amount of that val in a sorted array.
function sortedFrequency(arr, val){
    // add whatever parameters you deem necessary - good luck!
    let foundAt = binarySearch(arr, val);
    // console.log(`Binary Search found val at ${foundAt}`);
    let count = 0;
    if (foundAt !== -1) {
        count++;
        // I was doing foundAt++, which was changing foundAt, which mattered because checkleft was then going back down one to the original foundAt.
        let checkRight = foundAt + 1;
        let checkLeft = foundAt - 1;
        // console.log(`checkleft = ${checkLeft}, checkRight = ${checkRight}`)
        while (arr[checkRight] === val) {
            count++
            // console.log(`${arr[checkRight]} is equal to ${val}, and count has increased to ${count}`)
            checkRight++;
        }
        while (arr[checkLeft] === val) {
            count++;
            // console.log(`${arr[checkLeft]} is equal to ${val}, and count has increased to ${count}`)
            checkLeft--;
        }
        return count;
    }
    // could only be -1 at this point
    return foundAt;
}

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (val > arr[middle]) {
            left = middle + 1;
            // middle = Math.floor((left + right) / 2);
        } else if (val < arr[middle]) {
            right = middle - 1;
            // middle = Math.floor((left + right) / 2);
        } else if (val === arr[middle]) {
            return middle;
        }
    }
    return -1;
}
// im trying lol
function findRotatedIndex(arr, val){
    // add whatever parameters you deem necessary - good luck!
    // finds the lowest val in the array
    let start = Math.min(...arr);
    // finds the index of that val
    let startIdx = arr.indexOf(start);
    // console.log('start and startIdx:', start, startIdx);
    // splits the arrays into two, already sorted parts
    let leftArr = arr.slice(0, startIdx)
    let rightArr = arr.slice(startIdx)
    // console.log('two split arrays:',leftArr, rightArr);
    // calls binarysearch on each part
    let checkLeft = binarySearch(leftArr, val);
    let checkRight = binarySearch(rightArr, val);
    // console.log('result of binarysearch on two split arrays:', checkLeft, checkRight);
    if (checkLeft === -1 && checkRight === -1) {
        return -1;
    } else  if (checkLeft > checkRight) {
        return checkLeft;
    } else if (checkRight > checkLeft) {
        return leftArr.length + checkRight;
    }
}