/*Source
 * http://www.typescriptlang.org/play/index.html
 *Compile:
 * tsc Snip_3.ts
 *Run:
 * node Snip_3.js
 * */
class Animal {
  //public implicitly adds name as class variable
  constructor(public name: string) { }
  //default = 0
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  //delegates to parent
  constructor(name: string) { super(name); }
  //default = 5
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  //delegates to parent
  constructor(name: string) { super(name); }
  //default = 45
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

//instantiate objects
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

//call member functions
sam.move();
tom.move(34);
