// simple example of es6 classes and psuedoclassical inheritance

/**
* @constructor
* @param {number} w
* @param {number} h
*/

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  area() {
    return this.w * this.h;
  }
}

/**
* @constructor
* @param {number} w
* @param {number} h
*/

class Square extends Rectangle {
  constructor(w) {
    super();
    this.w = w;
    this.h = w;
  }
}