/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

/*Source:
 * https://www.typescriptlang.org/docs/handbook/namespaces.html
 *Remarks:
 * On the link below they seem to say, 
 * ///<reference syntax should only be used for .d.ts files.
 * https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html
 * But the example here does the exact opposite.
 *Compile:
 * $ tsc -outfile test.js Test.ts
 *Run on console: 
 * $ node test.js
 *Run in browser:
 * $ chromium-browser index.html
 *Check in browser's developer tool console
 * F12, or Ctrl-Shift-c, or Ctrl-Shift-i, or via menu
 * */

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
}
