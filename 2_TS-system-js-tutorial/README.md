Source:
https://david-barreto.com/how-to-use-typescript-with-systemjs/

How to Use Typescript with SystemJS

Now that Angular 2 is out and given the importance of Typescript in the Angular 2 ecosystem, it’s time to understand how to create a proper building system for our projects.

If you see any Angular 2 code example out there, you’re going to see an extensive use of the  import statement to load modules into our code like in the example below:
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { }
1
2
3
4
5
6
7
	
import {Component} from 'angular2/core';
 
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { }

This code example is extracted from the Angular 2 website. It doesn’t really matter what this code does, what matters is that in the very first line they are importing the class Component  to use it in the code. So the first question that comes to my mind is: can we run this code directly in our browsers without any building process? The answer is Yes, we can if we use SystemJS.
SystemJS

Lets start this example code by creating a folder for our test project that we are going to call systemjs.
$ mkdir systemjs
$ cd systemjs
1
2
	
$ mkdir systemjs
$ cd systemjs

Our next step is to create two simple files that we are going to call main.ts and person.ts.
person.ts
export class Person {
  public name: string = 'David';
}
1
2
3
	
export class Person {
  public name: string = 'David';
}

In person.ts we are just defining a simple class using the ES6 syntax that we are going to be using in main.ts.
main.ts
import {Person} from './person.ts';

let person = new Person();
console.log(person.name);
1
2
3
4
	
import {Person} from './person.ts';
 
let person = new Person();
console.log(person.name);

As we said before, in order for our import statements to work, we are going to need SystemJS. We can obtain this library from npm, but before doing that, we need to create a package.json file with default values to create a list with all of our project’s dependencies.
$ npm init --force
1
	
$ npm init --force

Now, we are ready to download SystemJS.
$ npm install systemjs --save
1
	
$ npm install systemjs --save

Because SystemJS is going to handle all of the dependencies of our code, every time that one of our files import a class, a function, a variable etc., from another file, SystemJS is going to do a call to the server to get that dependency.

In our case, main.js is importing a class from person.js, so SystemJS before serving the file main.js is going to do a XHR call to the server to get person.js first. It’s now obvious that we are going to need a web server for our app, and in this case we are going to be using the npm package lite-server.
$ npm install lite-server --save
1
	
$ npm install lite-server --save

After installing the package, we can start the web server.
$ lite-server
> zsh: command not found: lite-server
1
2
	
$ lite-server
> zsh: command not found: lite-server

What happened? Turns out that when trying to invoke the lite-server package like that, our system is trying to lookup the PATH variable where all of our executable files live but in our case, the lite-server package lives inside of our own node_modules folder which is not by default in the PATH. We can fix that by creating a “script” inside package.json, that way, node is going to add by default our node_modules folder in the PATH and it’s going to be able to find the appropriate package.
package.json
{
  "name": "systemjs",
  "version": "1.0.0",
  "description": "",
  "dependencies": {
    "lite-server": "^2.1.0",
    "systemjs": "^0.19.22",
  },
  "scripts": {
    "dev": "lite-server"
  },
  "author": "",
  "license": "ISC"
}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
	
{
  "name": "systemjs",
  "version": "1.0.0",
  "description": "",
  "dependencies": {
    "lite-server": "^2.1.0",
    "systemjs": "^0.19.22",
  },
  "scripts": {
    "dev": "lite-server"
  },
  "author": "",
  "license": "ISC"
}

Now we can run the server with the command
$ npm run dev
1
	
$ npm run dev

Loading the Dependencies in the Browser

With our dependencies in place, let’s move on and create our index.html file.
index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SystemJS</title>
  <script src="node_modules/systemjs/dist/system.js"></script>
  <script>
    System.config({
      transpiler: 'typescript'
    });
    System
      .import('main.ts')
      .then(null, console.error.bind(console));
  </script>
</head>
<body>
</body>
</html>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
	
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SystemJS</title>
  <script src="node_modules/systemjs/dist/system.js"></script>
  <script>
    System.config({
      transpiler: 'typescript'
    });
    System
      .import('main.ts')
      .then(null, console.error.bind(console));
  </script>
</head>
<body>
</body>
</html>

In line 6 we are loading the SystemJS in the browser. In lines 8-10 we are configuring SystemJS to use typescript as the transpiler for our code (the transpilation is going to be performed at runtime in the browser). Finally, in lines 11-13, we are importing the entry point of our application, in this case the file main.ts.

We are ready now so we can start the web server with the command npm run dev, open our browser and go to the address localhost:3000. If we open the browser’s console, we can see that something went wrong with SystemJS.
> SyntaxError: Unexpected token <(…)
1
	
> SyntaxError: Unexpected token <(…)

Whats missing? We told SystemJS that we are going to use typescript as the transpiler for our code but we didn’t give the browser access to the transpiler to perform the job. To fix that, we need to install the typescript transpiler locally using npm.
$ npm install typescript --save
1
	
$ npm install typescript --save

Then we need to go back to index.html and load the library.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SystemJS</title>
  <script src="node_modules/systemjs/dist/system.js"></script>
  <script src="node_modules/typescript/lib/typescript.js"></script>
  <script>
    System.config({
      transpiler: 'typescript'
    });
    System
      .import('main.ts')
      .then(null, console.error.bind(console));
  </script>
</head>
<body>
</body>
</html>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
	
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SystemJS</title>
  <script src="node_modules/systemjs/dist/system.js"></script>
  <script src="node_modules/typescript/lib/typescript.js"></script>
  <script>
    System.config({
      transpiler: 'typescript'
    });
    System
      .import('main.ts')
      .then(null, console.error.bind(console));
  </script>
</head>
<body>
</body>
</html>

At this point if we reload the browser, we are going to be able to see the string “David” in the browser’s console.

There’s one minor detail that we should fix. If we take a closer look at the file main.ts, we can see that we are defining the extension (.ts) of the dependency person.ts
main.ts
import {Person} from './person.ts';

let person = new Person();
console.log(person.name);
1
2
3
4
	
import {Person} from './person.ts';
 
let person = new Person();
console.log(person.name);

When working in node, we usually don’t specify the extension of a module so to be consisten in the frontend, we should be doing that import like:
import {Person} from './person';
1
	
import {Person} from './person';

To accomplish that, we need to configure SystemJS to use the .ts extension as the default. If we see the SystemJS config API we can notice that such property exists but for some reason, we are now forced to put our typescript code inside another folder, it can’t be directly in the root folder. Although the reason to enforce that is not clear to me, having a separate folder for our “source” code is actually a good practice. So we can stop protesting against the SystemJS convention and go ahead and create a new folder called src, and move the files main.ts and person.ts to that folder.
$ mkdir src
$ mv main.ts src
$ mv person.ts src
1
2
3
	
$ mkdir src
$ mv main.ts src
$ mv person.ts src

Our now folder structure is as follow:
.
├── index.html
├── package.json
└── src
    ├── main.ts
    └── person.ts
1
2
3
4
5
6
	
.
├── index.html
├── package.json
└── src
    ├── main.ts
    └── person.ts

We can now update our index.html file to define the default extension and load the main.ts file from it’s new location.
index.html
<!DOCTYPE html>
<html>
  <head>
    <title>SystemJS</title>
    <script src="node_modules/systemjs/dist/system.js"></script>
    <script src="node_modules/typescript/lib/typescript.js"></script>
    <script>
      System.config({
        transpiler: 'typescript',
        packages: {
          src: {
            defaultExtension: 'ts'
          }
        } 
      });
      System
        .import('src/main')
        .then(null, console.error.bind(console));
    </script>
  </head>
  <body>
  </body>
</html>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
	
<!DOCTYPE html>
<html>
  <head>
    <title>SystemJS</title>
    <script src="node_modules/systemjs/dist/system.js"></script>
    <script src="node_modules/typescript/lib/typescript.js"></script>
    <script>
      System.config({
        transpiler: 'typescript',
        packages: {
          src: {
            defaultExtension: 'ts'
          }
        } 
      });
      System
        .import('src/main')
        .then(null, console.error.bind(console));
    </script>
  </head>
  <body>
  </body>
</html>

In lines 10-13 we are defining the default extensions of our files using the package property. Notice that the keys right under the package property should match any of our folders, in this case we are referencing our src folder.

On line 17 we are changing the location of our main file and deleting the explicit mention to the .ts extension. Similarly, we can modify our main.ts file to delete the extension of the dependency.
main.ts
import {Person} from './person';

let person = new Person();
console.log(person.name);
1
2
3
4
	
import {Person} from './person';
 
let person = new Person();
console.log(person.name);

If we go back to see our browser’s console we can see that everything is working as expected with a more concise import syntax.
