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
        this.root = new Node();
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