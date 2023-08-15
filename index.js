// console.log('This is NodeJS Tutorial for Beginners');
// console.log('This is the first tutorial on NodeJS');
// console.log('We will cover NodeJS with command line');
// process.exit(1);
// process.exitCode = 1;

// const _ = require("lodash");
// const arr = [1, 4, 6, 8];
// console.log(_.last(arr));

const { tesla,ford } = require("./car");
console.log(JSON.stringify(tesla, null, 3));
console.log(JSON.stringify(ford, undefined, 2));