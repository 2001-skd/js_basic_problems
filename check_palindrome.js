function checkPalindrome(string) {
  let isString = typeof string === "string";
  let transformString = string.toLowerCase();
  let fromLast = transformString.length - 1;

  if (isString) {
    for (let i = 0; i < string.length / 2; i++) {
      if (transformString[i] !== transformString[fromLast]) {
        return false;
      }
      fromLast--;
    }
    return true;
  } else {
    return "Invalid String";
  }
}

console.log(checkPalindrome("Malayalam"));
console.log(checkPalindrome("Santhakumar"));
console.log(checkPalindrome("RaceCar"));
console.log(checkPalindrome("abba"));
