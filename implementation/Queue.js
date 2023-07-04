class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  dequeue() {
    if (this.head !== null) {
      return null;
    } else {
      let curr = this.head.next;
      this.head = curr;
    }
  }

  peek() {
    return this.head;
  }
}
