class Heap {
  constructor(c) {
    this.arr = [];
    this.cap = c;
  }

  //   [4, 5, 6, 8, 10, 11, 15]
  insert(val) {
    if (this.arr.length < c) {
      this.arr.push(val);

      //   To make it min heap
      for (
        let i = this.arr.length - 1;
        this.arr[this.parent(i)] > this.arr[i];
        i = this.parent(i)
      ) {
        this.swap(this.arr, this.parent(i), i);
      }
    } else {
      return "Capacity Reached";
    }
  }

  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return (i - 1) / 2;
  }

  swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  //   Min Heapify
  heapify(i) {
    let leftVal = this.left(i);
    let rightVal = this.right(i);
    let smallVal = i;

    if (leftVal < this.arr.length && this.arr[leftVal] < this.arr[i]) {
      smallVal = leftVal;
    }

    if (rightVal < this.arr.length && this.arr[rightVal] < this.arr[smallVal]) {
      smallVal = rightVal;
    }

    if (smallVal !== i) {
      this.heapify(smallVal);
    }
  }
}
