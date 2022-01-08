console.log('Hello From node.js');      //Printing a simple line of code in terminal using node

// Node file system

const fs = require('fs');       //importing functions for file system library

fs.writeFileSync('hello.txt','Hello from node.js');  //writeFileSync() is used to write content in a local file and content and filename is passed by the arg. 