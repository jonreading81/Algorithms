class Lazy {

  constructor() {
    this.stackTasks = [];
    this.test = {};
  }
  add(fn, ...args) {
    this.stackTasks.push(fn.bind(this, ...args));
    return this;
  }

  evaluate(arrValues) {
    return arrValues.map(val => this.stackTasks.reduce((sum, fn) => fn(sum), val));
  }
}

export default Lazy;
