var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Source
 * http://www.typescriptlang.org/play/index.html
 *Compile:
 * tsc Snip_3.ts
 *Run:
 * node Snip_3.js
 * */
var Animal = /** @class */ (function () {
    //public implicitly adds name as class variable
    function Animal(name) {
        this.name = name;
    }
    //default = 0
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    //delegates to parent
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    //default = 5
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    //delegates to parent
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    //default = 45
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
//instantiate objects
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
//call member functions
sam.move();
tom.move(34);
