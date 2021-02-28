exports.queue = class Queue {
  constructor() {
    this.data = [];
    this.rear = 0;
    this.size = 10;
  }

  enqueue(element) {
    if (this.rear < this.size) {
      this.data[this.rear] = element;
      this.rear = this.rear + 1;
    }
  }

  length() {
    return this.rear;
  }

  isEmpty() {
    return this.rear === 0;
  }

  getFront() {
    if (this.isEmpty() === false) {
      return this.data[0];
    }
  }

  getLast() {
    if (this.isEmpty() === false) {
      return this.data[this.rear - 1];
    }
  }

  dequeue() {
    if (this.isEmpty() === false) {
      this.rear = this.rear - 1;
      return this.data.shift();
    }
  }

  print() {
    return this.data.slice(rear);
  }

  clear() {
    this.data.length = 0;
    this.rear = 0;
  }

  find(element) {
    for (let i = 0; i < this.rear; i++) {
      if (this.data[i] === element) return i;
    }
  }

  remove(element) {
    const index = find(element);
    return array.splice(index, 1);
  }
};
