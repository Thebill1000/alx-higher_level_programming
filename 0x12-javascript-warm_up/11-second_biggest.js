#!/usr/bin/node
/* a script that searches the second biggest integer in the list of arguments */
if (process.argv.length < 4) {
  console.log('0');
} else {
  console.log(process.argv.slice(2).sort((a, b) => b - a)[1]);
}
