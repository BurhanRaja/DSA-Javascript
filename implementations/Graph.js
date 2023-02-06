class Graph {
  constructor() {
    this.adjList = new Map();
  }

  #addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    if (this.adjList.has(v)) {
      this.adjList.get(v).push(w);
    } else {
      this.#addVertex(v);
      this.adjList.get(v).push(w);
    }

    if (this.adjList.has(w)) {
      this.adjList.get(w).push(v);
    } else {
      this.#addVertex(w);
      this.adjList.get(w).push(v);
    }
  }

  print() {
    let keys = this.adjList.keys();
    for (let key of keys) {
      let values = this.adjList.get(key);
      let conc = "";
      values.forEach((val) => {
        conc += val + " ";
      });
      console.log(key + " -> " + conc);
    }
  }
}

let g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

g.print();


// A -> B D E
// B -> A C
// D -> A E
// E -> A D F C
// C -> B E F
// F -> E C