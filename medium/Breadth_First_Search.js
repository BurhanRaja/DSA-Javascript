let graph = new Array();
let size = 9;

for (let i = 0; i < size; i++) {
    graph.push([]);
}

function addEdge(u, v) {
    graph[u].push(v);
    graph[v].push(u);
}


addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 2);
// 
addEdge(3, 4);
//
addEdge(5, 6);
addEdge(5, 7);
addEdge(7, 8);

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
}

function bsf(graph, start) {
    let visited = [];
    let q = new Queue();
    
    q.enqueue(start);
    visited[start] = true;

    while (!q.isEmpty()) {
        let curr = q.dequeue();
        console.log(curr + " ");

        let adj = graph[curr];
        for (let i = 0; i < adj.length; i++) {
            if (visited[adj[i]] === false) {
                visited[adj[i]] = true;
                q.enqueue(adj[i]);
            }
        }
    }
}

bsf(graph, 0);