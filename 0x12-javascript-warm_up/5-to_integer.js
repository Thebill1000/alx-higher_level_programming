#!/usr/bin/node
/* a script that prints an integer */
if (!process.argv[2]) {
  console.log('No argument');
} else if (parseInt(process.argv[2])) {
  console.log('My number:', parseInt(process.argv[2]));
} else {
  console.log('Not a number');
}
