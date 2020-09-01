// Queue class
class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }
  printQueue() {
    let toString = "";
    for (let i = 0; i < this.items.length; i++) {
      toString += this.items[i] + " ";
    }
    return toString;
  }
}
