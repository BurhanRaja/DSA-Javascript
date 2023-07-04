class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }

    return this;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      let newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    return this;
  }

  insert(value, index) {
    if (index < 0) {
      throw Error("Index cannot be less than zero.");
    }
    if (index === 0) {
      this.prepend(value);
    }
    let curr = this.head.next;
    const newNode = new Node(value);
    let prevNode = this.head;
    let count = 1;

    while (curr.next !== null) {
      if (count === index) {
        break;
      }
      prevNode = curr;
      curr = curr.next;
      count++;
    }

    if (curr !== null) {
      newNode.next = curr;
      prevNode.next = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = this.tail.next;
      } else {
        this.head = newNode;
        this.tail = newNode;
      }
    }

    return this;
  }

  delete(value) {
    let deleteNode = null;

    if (this.head.value === value) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let curr = this.head;

    if (curr !== null) {

      while (curr !== null) {
        if (curr.next.value == value) {
          deleteNode = curr.next;
          curr.next = curr.next.next;
        }
        curr = curr.next;
      }
    }

    // if (this.tail.value === value) {
    //   this.tail = curr;
    // }

    return deleteNode;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let curr = this.head;

    while (curr.next !== null) {
      if (curr.value === value) {
        return curr;
      }
      curr = curr.next;
    }

    return null;
  }

  toArray() {
    let nodes = [];
    let curr = this.head;
    while (curr !== null) {
      nodes.push(curr.value);
      curr = curr.next;
    }
    return nodes;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;

    while (curr) {
      next = curr.next;
      // Point current next node to previous node
      curr.next = prev;
      // assign Previous node to curr node
      prev = curr;
      curr = next;
    }

    this.tail = this.head;
    this.head = prev;

    return this;
  }
}

const linkedList = new LinkedList();

linkedList.append(12);
linkedList.append(17);
linkedList.prepend(10);

linkedList.insert(15, 2);

let findData = linkedList.find(15);
console.log(findData);

linkedList.delete(17);

let reverseLinkedList = linkedList.reverse();

let arr = linkedList.toArray();
console.log(arr);
