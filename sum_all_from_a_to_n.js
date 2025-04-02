function sumAll(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumAllMathsFormula(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumAllMathsFormula(2));
console.log(sumAllMathsFormula(5));
console.log(sumAll(10));
console.log(sumAll(8));
