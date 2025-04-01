// implemet a function to vowels in a gievn string
function countVowels(string) {
  const vowels = "aeiou";
  let transformString = string.toLowerCase();
  let count = 0;
  let vowelChar = "";

  for (let char of transformString) {
    if (vowels.includes(char)) {
      count++;
      vowelChar += char;
    }
  }
  return count + " " + vowelChar;
}

console.log("String ->", countVowels("string"));
console.log("Hello World ->", countVowels("Hello World"));
console.log("Bubbles ->", countVowels("bubbles"));
console.log("Santhakumar->", countVowels("Santhakumar"));
