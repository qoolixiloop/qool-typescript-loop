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
var Student = /** @class */ (function () {
    //implicitly because of public keyword also
    //firstname, middleInitial, lastName
    //constructor
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName =
            firstName + " "
                + middleInitial + " "
                + lastName;
    }
    return Student;
}());
//function uses Person
function greeter(person) {
    return "Hello, "
        + person.firstName + " "
        + person.lastName;
}
//apply interface
//user implements Person becaus it looks like a Person
//no explicit implements clause necessary
var i_user = { firstName: "Jane", lastName: "i_User" };
//document.body.innerHTML = greeter(i_user);
//apply class
var user = new Student("Jane", "M.", "User");
//document.body.innerHTML = greeter(user);
//some document.write()
/*Source:
 * https://www.w3schools.com/jsref/dom_obj_document.asp
 * https://www.w3schools.com/jsref/met_doc_write.asp
 */
document.write("<h1>Hello World!</h1><p>Have a nice day!</p>");
document.writeln(Date());
document.write("<p>" + greeter(i_user) + "</p>");
document.write("<p>" + greeter(user) + "</p>");
