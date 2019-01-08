/*Source
 * http://www.typescriptlang.org/play/index.html
 *Compile:
 * $ tsc Snip_2.ts
 *Html file:
 * place this script at the and of the body tag.
 *Run:
 * $ chromium-browser Snip_2.js
 * */

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

class GenericsGreeter<T> {
    greeting: T;
    constructor(message: T) {
        this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
}

//instantiate object
let greeter = new Greeter("world");
let genericsGreeter = 
  new GenericsGreeter<string>("Hello, world");

//html button
let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
  alert(greeter.greet()+"\n"+genericsGreeter.greet());
}

//load button
document.body.appendChild(button);
