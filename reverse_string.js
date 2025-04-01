// reverse string without using reverse method
function reverseString(string) {
  if (typeof string === "string") {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
      result += string[i];
    }
    return result;
  } else {
    return "Enter Valid String";
  }
}

console.log(reverseString("string"));
console.log(reverseString(true));
