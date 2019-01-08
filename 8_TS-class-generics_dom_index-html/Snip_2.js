/*Source
 * http://www.typescriptlang.org/play/index.html
 *Compile:
 * $ tsc Snip_2.ts
 *Html file:
 * place this script at the and of the body tag.
 *Run:
 * $ chromium-browser Snip_2.js
 * */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var GenericsGreeter = /** @class */ (function () {
    function GenericsGreeter(message) {
        this.greeting = message;
    }
    GenericsGreeter.prototype.greet = function () {
        return this.greeting;
    };
    return GenericsGreeter;
}());
//instantiate object
var greeter = new Greeter("world");
var genericsGreeter = new GenericsGreeter("Hello, world");
//html button
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet() + "\n" + genericsGreeter.greet());
};
//load button
document.body.appendChild(button);
