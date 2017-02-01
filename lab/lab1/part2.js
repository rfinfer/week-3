/* =====================
  # Lab 1, Part 2 — Functions as Values

  Functions can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function that *always* returns the number 1.
===================== */

var justOne = function(value) {
  return 1
};

console.log('justOne success:', justOne() === 1);

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

var isEven = function(val) {
  return val%2==0
};

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that *always* returns false.
              Use functions "justOne" and "isEven" somehow in the definition.
===================== */

var justFalse = function(num) {
  return isEven(justOne);
};

console.log('justFalse success:', justFalse() === false);

/* =====================
Instructions: Write a function that takes a boolean value and returns its opposite.
===================== */

var not = function(num) {
  var toggle = num ? false:true;
  return toggle
};

console.log('not success:', not(true) === false);

//tried if else statment, but then isOdd wouldn't work??
/* =====================
Instructions: Write a function that returns true if a number is odd
              Use functions "isEven" and "not" somehow in the definition.
===================== */

var isOdd = function(num) {
  return not(isEven)
};

console.log('isOdd success:', isOdd(4) === false);

/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
NOTE: We expect an error until this function is written properly!
===================== */

var filterOutLessThan10 = function (list){
  var isBig =function(list2){
  return list2>10;
};
 var filtered = list.filter(isBig);
 return filtered;
 };

//function isBigEnough(value) {
//   return value >= 10;
// }
//
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// var myStringArray = ["This", "is", "an", "array", "with", "several", "strings", "making", "up", "a", "sentence."];
// console.log(myStringArray.filter(function(str){
//   return str.length < 3; // keep strings with length < 3
// }));
// console.log(myStringArray);


var test = filterOutLessThan10([4, 11]).length === 1 && filterOutLessThan10([4, 11])[0] === 11;
console.log('filterOutLessThan10 success:', test)

/* =====================
Stretch goal — NOT required
Instructions: Let's bring it all together. Write a function that returns only odd numbers. It takes:
              1. a list of numbers
              2. a function that takes a number and returns true or false (isOdd, let's say)
===================== */

var filter = function(array, func) {
};

var test2 = filter([4, 11], isOdd).length === 1 && filter([4, 11], isOdd)[0] === 11;
console.log('filter success:', test2);
