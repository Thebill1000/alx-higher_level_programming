#!/usr/bin/node
/* a script that prints two arguments passed to it, following a format */
if (!process.argv[2] && !process.argv[3]) {
  console.log('undefined is undefined');
} else if (process.argv[2] && !process.argv[3]) {
  console.log(process.argv[2], 'is undefined');
} else if (process.argv[2] && process.argv[3]) {
  console.log(process.argv[2], 'is', process.argv[3]);
}
