/*Source:
 * http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
 *Compile:
 * $ tsc greeter.ts
 *Run in browser
 * $ chromium-browser greeter.html
 * */

//Student class stores fullName AND
//firstName, middleInitial, lastName implicitly because of
//the public keyword in the constructor!
class Student {
  
  //member variables
  fullName: string;
  //implicitly because of public keyword also
  //firstname, middleInitial, lastName
  
  //constructor
  constructor(public firstName: string, 
    public middleInitial: string, 
    public lastName: string) {
    this.fullName = 
      firstName + " " 
      + middleInitial + " " 
      + lastName;
    }
}

//Person interface to store firsName and lastName
interface Person {
    firstName: string;
    lastName: string;
}

//function uses Person
function greeter(person : Person) {
  return "Hello, " 
    + person.firstName + " " 
    + person.lastName;
}

//apply interface
//user implements Person becaus it looks like a Person
//no explicit implements clause necessary
let i_user = { firstName: "Jane", lastName: "i_User" };
//document.body.innerHTML = greeter(i_user);

//apply class
let user = new Student("Jane", "M.", "User");
//document.body.innerHTML = greeter(user);

//some document.write()
/*Source:
 * https://www.w3schools.com/jsref/dom_obj_document.asp
 * https://www.w3schools.com/jsref/met_doc_write.asp
 */
document.write("<h1>Hello World!</h1><p>Have a nice day!</p>");
document.writeln(Date());
document.write("<p>"+greeter(i_user)+"</p>")
document.write("<p>"+greeter(user)+"</p>")

