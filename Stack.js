class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    // methods to implement:

    // push()
    // pop()
    // peek()
    // isEmpty()
    // clear()
    // print()

    push(value) {
        if (this.size === 0) {
            this.root = new Node(value);
        } else {
            const temp = this.root;
            this.root = new Node(value);
            this.root.next = temp;
        }
        this.size++;
        return this;
    }

    pop() {
        const temp = this.root;
        if (temp && temp.next) {
          this.root = temp.next;
        } else {
          this.root = null;
        }
        if (this.size > 0) {
          this.size--;
        }
        return temp ? temp.value : temp;
    }

    peek() {
        return this.root ? this.root.value : this.root;
    }

    isEmpty() {
        return this.size === 0;
    }

    clear() {
        this.root = null;
        this.size = 0;
    }

    print(root = this.root) {
        if (root.value) {
          console.log(root.value);
          if (root.next) {
            this.print(root.next);
          }
        }
    }
}

// Example usage:

// const stack = new Stack();

// console.log('isEmpty: ' + stack.isEmpty());

// stack.push(23);
// stack.push(47);
// stack.push(95);

// console.log('pop: ' + stack.pop());
// console.log('pop: ' + stack.pop());
// console.log('pop: ' + stack.pop());
// console.log('pop: ' + stack.pop());

// [49,27,63,18,11].forEach(num => stack.push(num));

// console.log('peek: ' + stack.peek());
// console.log('size: ' + stack.size);
// console.log('isEmpty: ' + stack.isEmpty());

// console.log('\n' + JSON.stringify(stack, null, 2));

// stack.clear();

// console.log('\ncleared:\n\n' + JSON.stringify(stack, null, 2));
