/*Source: https://www.youtube.com/watch?v=k5E2AVpwsko
 * Compile: 
 * #-out file.js does not work
 * $ tsc Snip_1_main.ts 
 * Run: 
 * $ node Snip_1_main.js
 */

/*export {Point} or export class Point*/
import {Point} from "./Snip_1"

/*export = Point*/
//import Point = require("./Snip_1")

let point:Point = new Point(2,3)
point.draw()
