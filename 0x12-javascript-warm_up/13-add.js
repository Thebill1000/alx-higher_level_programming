#!/usr/bin/bash
/* a function that returns the addition of 2 integers */
function add (a, b) {
  if (isNaN(a) || isNaN(b)) {
    return ('NaN');
  } else {
    return (parseInt(a) + parseInt(b));
  }
}
exports.add = add;
