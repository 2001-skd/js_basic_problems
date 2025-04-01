// factorial problem

function factorial(num) {
  let result = 1;
  if (num < 0 || !Number.isInteger(num)) {
    console.log("enter correct number");
  } else {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  }

  console.log(result);
}

factorial(6);
