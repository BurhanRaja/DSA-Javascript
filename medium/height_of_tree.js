class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insertRec(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertRec(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertRec(root.right, newNode);
      }
    }
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root == null) {
      this.root = newNode;
    } else {
        this.insertRec(this.root, newNode);
    }
  }

  inOrderRec(root) {
    if (root !== null) {
      this.inOrderRec(root.left);
      console.log(root.value);
      this.inOrderRec(root.right);
    }
  }

  inOrder() {
    this.inOrderRec(this.root);
  }
}

function height(root) {
    if (root === null) {
        return 1;
    } else {
        let lDepth = height(root.left);
        let rDepth = height(root.right);

        if (lDepth > rDepth) {
            return lDepth+1;
        } else {
            return rDepth+1;
        }
    }
}

let t = new BST();

t.insert(3);
t.insert(6);
t.insert(1);
t.insert(7);
t.insert(9);

t.inOrder();

console.log(height(t.root));

