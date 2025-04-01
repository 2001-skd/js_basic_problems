// find largest number in an array
function largestNumInanArray(array) {
  let largestNum = array[0];

  for (let number of array) {
    largestNum = number > largestNum ? number : largestNum;
  }
  return largestNum;
}

console.log(largestNumInanArray([1, 3895, 10, 50, 480]));
console.log(largestNumInanArray([1000, 39067, 567355656, 500]));
console.log(largestNumInanArray([1000091837, 45656990089839, 34, 3333]));
