/*Source:
 * https://developer.mozilla.org
 * /en-US/docs/Web/JavaScript/Reference/Classes/constructor
 */

class Person {
  constructor(name) {
    this.name = name;
    this.planet = "Earth";
    console.log("\nobject " + this.name + " instantiated")
  }
}

class Student extends Person{
  constructor(name, subject){
    super(name);
    this.subject = subject;
    console.log("object " 
      + this.name + " " 
      + this.planet + " "
      + this.subject + " instantiated")
  }
}

var person1 = new Person("Holy");
console.log(person1.name+"\n"+person1.planet);

var student1 = new Student("Poly", "Math");
console.log(student1.name+ "\n" 
  + student1.planet + "\n" 
  + student1.subject + "\n" );

