class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.bottom = null;
    this.top = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.top === null) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    return this;
  }
  pop() {
    let popNode = null;
    if (this.top === null) {
      throw Error("Stack is Empty.");
    } else {
      popNode = this.top;
      this.top = this.top.next;
    }
    return this;
  }

  peek() {
    return this.top;
  }
}
