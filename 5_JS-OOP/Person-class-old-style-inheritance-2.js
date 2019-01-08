/*Source:
 * https://developer.mozilla.org
 * /de/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
 *Run:
 * $ node Person-Class.js
 * */

//constructor
function Person(firstName) {
  //attribute
  this.firstName = firstName;
  console.log('Person ' + this.firstName  + ' instantiated');
}

//member functions
Person.prototype.walk = function(){
    console.log("I am walking!");
};
Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

//object instantiation
var person1 = new Person("Alice");
var person2 = new Person("Bob");

//
person1.firstName="Ali(renamed)"
//Show member
console.log('person1 is ' + person1.firstName); // logs "person1 is Alice"
console.log('person2 is ' + person2.firstName); // logs "person2 is Bob"

//call of member function
person1.sayHello(); // logs "Hello, I'm Alice"
person2.sayHello(); // logs "Hello, I'm Bob"

//function code can be assigned to a variable
var helloFunction = person1.sayHello;
helloFunction.call(person1);

// Student constructor   
function Student(firstName, subject) {
  // Set the variables on the parent object Person
  // using Student as a context.
  // This is similar to what other laguanges call 'super'
  Person.call(this, firstName);
  this.subject = subject; // unique to Student
}

Student.prototype = Object.create(Person.prototype); // See note below

//constructor method
//Student.prototype.constructor = Student;

//methods
Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + ". I'm studying "
              + this.subject + ".");
};
Student.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};

//object
var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

//check that instanceof works correctly
console.log(student1 instanceof Person);  // true 
console.log(student1 instanceof Student); // true
