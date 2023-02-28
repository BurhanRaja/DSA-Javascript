class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.front = null;
        this.tail = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.front === null) {
            this.front = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    pop() {
        if (this.front === null) {
            return -1;
        } else {
            let curr = this.front;
            let temp;

            while (curr.next !== null) {
                temp = curr;
                curr = curr.next;
            }
            this.tail = temp;
            this.tail.next = null;
            return temp;
        }
    }

    print() {
        let curr = this.front;
        let stck = "";
        while(curr !== null) {
            stck += curr.value + " ";
            curr = curr.next;
        }

        console.log(stck);
    }
}


let q = new Stack();
q.push(3);
q.push(7);
q.push(1);
q.push(10);
q.print();
q.pop();
q.pop();
q.print();

