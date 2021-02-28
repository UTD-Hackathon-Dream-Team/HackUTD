module.exports = class Queue {
  constructor() {
    this.data = [];
  }

  length() {
    return this.data.length;
  }

  peek() {
    return this.data[0];
  }

  enqueue(element) {
    if (this.find(element) !== -1) return false;
    this.data.push(element);
    return true;
  }

  dequeue() {
    if (this.data.length !== 0) this.data.shift();
  }

  print() {
    let res = "";
    for (let i = 0; i < this.data.length; i++) {
      res += i + 1 + ": " + this.data[i] + "\n";
    }
    return res;
  }

  clear() {
    this.data = [];
  }

  find(element) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === element) return i;
    }
    return -1;
  }

  remove(element) {
    const index = this.find(element);
    if (index === -1) return false;
    this.data.splice(index, 1);
    return true;
  }
};
