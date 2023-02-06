class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (this.front === null) {
            this.front = this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        let val = this.front.value;
        this.front = this.front.next;
        return val;
    }

    print() {
        let holder = this.front;
        while (holder !== null) {
            console.log(holder.value);
            holder = holder.next;
        }
    }
}

let q = new Queue();
q.enqueue(3);
q.enqueue(6);
q.print();
q.dequeue();
q.print();