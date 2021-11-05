# Node

## Module

In the Node.js module system, each file is treated as a separate module. 
For example, consider a file named foo.js with the following content:

```
const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
```

And 'circle.js' contains:

```
const { PI } = Math;

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;
```

The module circle.js has exported the functions:
    area() and 
    circumference(). 
    
Functions and objects are added to the root of a module by specifying additional properties on the special exports object.

When a file is run directly from Node.js, require.main is set to its module. 
That means that it is possible to determine whether a file has been run directly by testing require.main === module.