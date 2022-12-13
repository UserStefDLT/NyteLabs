'use strict'

/* ───── ───── Classes ───── ───── */

/* from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes */
/* ───── ───── ───── ───── ───── */

/* ───── Class Declaration ───── */
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
/* ───── ───── ───── */


/* ───── Class Expressions ───── */
// unnamed
let Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name);
// output: "Rectangle"
  
// named
Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name);
// output: "Rectangle2"
/* ───── ───── ───── */


/* ───── Methods ───── */
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}
  
const square = new Rectangle(10, 10);

console.log(square.area); // 100
/* ───── ───── ───── */


/* ───── Generator Methods ───── */
class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }
    // Method
    *getSides() {
        for (const side of this.sides) {
            yield side;
        }
    }
}

const pentagon = new Polygon(1,2,3,4,5);

console.log([...pentagon.getSides()]); // [1,2,3,4,5]
/* ───── ───── ───── */


/* ───── Static methods and properties ───── */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
  
    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
}
  
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
/* ───── ───── ───── */


/* ───── Title ───── */


/* ───── ───── ───── */