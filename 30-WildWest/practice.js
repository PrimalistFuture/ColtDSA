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
}

let sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20);