class Set {
  constructor(val) {
    this.storage = [];
    this.length = this.storage.length;
    if (val) {
      this.storage.push(val);
    }
  }
  insert(val) {
    if (!this.storage.includes(val)) {
      this.storage.push(val);
    } else {
      console.log('the set already contains this value; values in a set are unique');
    }
  }
}