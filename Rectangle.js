class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  area() {
    return this.w * this.h;
  }
}

class Square extends Rectangle {
  constructor(w) {
    super();
    this.w = w;
    this.h = w;
  }
}

// let rectangle = new Rectangle(3, 4);
// let square = new Square(3);

// rectangle.area() => 12
// square.area() => 9