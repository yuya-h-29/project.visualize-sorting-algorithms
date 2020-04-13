class Heap {
  constructor() {
    this.array = [];
    this.left = undefined;
    this.right = undefined;
    this.size = 0;
    this.childIdx = 0;
    // this.parentIdx = Math.floor((this.childIdx - 1) / 2);
    this.leftChildIdx = this.parentIdx * 2 + 1;
    this.rightChildIdx = this.left + 1;
    // let lastPosition = 0;
  }

  insert(value) {
    // console.log(this.array, value);
    this.array[this.size] = value;
    this.size++;
    this.heapifyUp();
    // console.log(
    //   "this is the current values in the array",
    //   this.array,
    //   this.size
    // );
  }

  heapifyUp() {
    let index = this.size - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (index >= 0 && this.array[index] < this.array[parentIdx]) {
      this.swapValue(parentIdx, index);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  } // parent node exists and while parent value is bigger than its child, use swapValue() and change value;
  swapValue(index1, index2) {
    let parentNode = this.array[index2];
    this.array[index2] = this.array[index1];
    this.array[index1] = parentNode;
  }

  remove() {
    if (this.size !== 0) {
      // console.log("SSSSSSSS", this.array);
      let item = this.array[0];
      this.array[0] = this.array[this.size - 1];
      this.size--;
      this.heapifyDown();
      this.array.pop();
      // console.log("RRRRRR", this.array.length, this.array);
      return item;
    }
  }

  heapifyDown() {
    let index = 0;
    // let leftChildIdx = index * 2 + 1;
    // let rightChildIdx = leftChildIdx + 1;
    const getLeftChildIndex = (parent) => {
      return 2 * parent + 1;
    };
    const getRightChlidIndex = (parent) => {
      return 2 * parent + 2;
    };
    // const hasLeftChild = (index) => {
    //   if (index < this.size) {
    //     return true;
    //   }
    // };
    const hasRightChild = (index) => {
      if (index < this.size) {
        return true;
      }
    };
    while (index < this.size) {
      this.childIdx = getLeftChildIndex(index);
      if (
        hasRightChild(getRightChlidIndex(index)) &&
        this.array[getRightChlidIndex(index)] <
          this.array[getLeftChildIndex(index)]
      ) {
        this.childIdx = getRightChlidIndex(index);
      }
      if (this.array[index] < this.array[this.childIdx]) {
        break;
      } else {
        this.swapValue(index, this.childIdx);
      }
      index = this.childIdx;
    }
  }

  sort() {
    console.log("sort!");
  }

  returnValue(value) {
    return value;
  }
}

module.exports = Heap;

// Heap Sort: Heap Sort uses Binary Heap to sort an array in O(nLogn) time.
// Priority Queue: Priority queues can be efficiently implemented using Binary Heap because it supports insert(), delete() and extractmax(), decreaseKey() operations in O(logn) time.
// Graph Algorithms: The priority queues are especially used in Graph Algorithms like Dijkstra’s Shortest Path and Prim’s Minimum Spanning Tree.

//add
//remove the root
