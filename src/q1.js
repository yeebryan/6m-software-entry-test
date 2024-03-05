/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y) {
  // create temp variable
  let temp;

  if (typeof x !== "number" || type !== "number") return -1;
  else {
    temp = x;
    x = y;
    y = temp;

    console.log("Swapped values: x =", x, ", y =", y);
  }
}

// Task 2: Add code here
swap("Apple", 10);
swap(9, 17);

module.exports = swap;
