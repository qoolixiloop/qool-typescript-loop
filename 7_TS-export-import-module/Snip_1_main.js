"use strict";
/*Source: https://www.youtube.com/watch?v=k5E2AVpwsko
 * Compile:
 * #-out file.js does not work
 * $ tsc Snip_1_main.ts
 * Run:
 * $ node Snip_1_main.js
 */
exports.__esModule = true;
/*export {Point} or export class Point*/
var Snip_1_1 = require("./Snip_1");
/*export = Point*/
//import Point = require("./Snip_1")
var point = new Snip_1_1.Point(2, 3);
point.draw();
