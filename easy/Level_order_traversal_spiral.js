// DEQUE
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.tail = null;
    this.size = 0;
  }

  add(val) {
    let newNode = new Node(val);
    if (this.front === null) {
      this.front = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  rmvFront() {
    let temp = this.front;
    this.front = this.front.next;
    if (this.front === null) {
        this.tail = null;
    }
    this.size--;
    return temp.value;
  }

  rmvBack() {
    if (!this.front) {
      return -1;
    }
    let curr = this.front;
    let newTail = curr;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size--;

    if (this.isEmpty()) {
      this.front = null;
      this.tail = null;
    }
    return curr.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let holder = this.front;
    while (holder !== null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }

  getSize() {
    return this.size;
  }
}

function spiralTraverse(root) {
  if (root === null) {
    return -1;
  }

  let dq = new Deque();
  let checkLevel = 1;

  dq.add(root);

  while (!dq.isEmpty()) {
    let count = dq.getSize();
    for (let i = 0; i < count; i++) {
      let currNode;
      if (checkLevel % 2 !== 0) {
        currNode = dq.rmvBack();
        console.log(currNode.value);
      } else {
        currNode = dq.rmvFront();
        console.log(currNode.value);
      }

      if (currNode.left !== null) {
        dq.add(currNode.left);
      }
      if (currNode.right !== null) {
        dq.add(currNode.right);
      }
    }
    checkLevel++;
  }
}

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(7);
root.left.right = new TreeNode(6);

root.right.left = new TreeNode(5);
root.right.right = new TreeNode(4);

spiralTraverse(root);
