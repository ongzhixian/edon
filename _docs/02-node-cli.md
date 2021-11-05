# node CLI


## Auto-reload (nodemon)

Monitor for any changes in your node.js application and automatically restart the server - perfect for developmen

```
npm install nodemon -g
nodemon app.js
```


## Getting arguments

Example:

    node app.js asd xcv

process.argv0; // argv0 = C:\Apps\nodejs\node.exe
process.argv;  // argv0 = node.exe, argv1 = <script-name>, argv2 = <arg1>

To print out all args, we can use the following snippet:

```
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
});
```

// creating a new array that excludes the first 2 params
const args = process.argv.slice(2);
console.log(args);

See: 
    https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
    https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/


## List all environment variables

```
Object.keys(process.env).forEach(function(key) {
    // console.log('export ' + key + '="' + env[key] +'"');
    console.log(key, process.env[key]);
});
```
