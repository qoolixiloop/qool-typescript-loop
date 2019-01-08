/*Source:
 * https://stackoverflow.com/questions/14545210/why-prototype-is-undefined
 * */

// Very basic helper to extend prototypes of objects
// I'm attaching this method to the Function prototype
// so it'll be available for every function
Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
}

// Person constructor
function Person(name, age, sex) {
  // Common to all Persons
  this.name = name;
  this.age = age;
  this.sex = sex;
}

Person.prototype = {
  // common to all Persons
  say: function(words) {
    return this.name +'says: '+ words;
  }
};

// Student constructor   
function Student(name, age, sex, school) {
  // Set the variables on the parent object Person
  // using Student as a context.
  // This is similar to what other laguanges call 'super'
  Person.call(this, name, age, sex);
  this.school = school; // unique to Student
}

Student.inherits(Person); // inherit the prototype of Person

var mike = new Student('Mike', 25, 'male', 'Downtown'); // create new student

console.log(mike.say('hello world')); //=> "Mike says: hello world"
