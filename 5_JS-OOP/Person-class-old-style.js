function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log("1");
}

// Definiere ein Objekt
var you = new Person('You', 24);
console.log(you.name+ " " + you.age);
