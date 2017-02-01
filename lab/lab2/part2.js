/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

first example
*/
myArray= [];
myArray[99]=100;
_.each([],function(val,count){
if(array[count+1]%15===0) {
  console.log("FizzBuzz");
}
else if(array[count+1]%3===0){
  console.log("Fizz");
}
else if(array[count+1]%5===0){
  console.log("Buzz");
}
else {
  console.log(count+1);
}
})

//second example

// Here's an array that we need to loop through:
var theArray = ['A short story.', 42, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];

// Here's the variable we need to hold our count in:
var exampleSum = 0; // To count of the strings

// A loop for summing the contents of theArray
_.each(theArray,function (element){
        if (typeof element === 'string') {         // String case
          exampleSum = exampleSum + element.length;
        } else if (typeof element === 'number') {  // Number case
          exampleSum = exampleSum + element;
        } else {                                      // Otherwise
          console.log("Not sure how to proceed with value:", element);
        }
      });


console.log(exampleSum)
// //    function myFunction(arrayValue) {


/*
## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
