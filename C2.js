import readline from "read-console-input";

const number = readline('Number: ');

function calculateN(n) {
  if (n <= 1) {
    return 1;
  }
  return n * calculateN(n - 1);
}

const n = parseInt(number);
const factorial = calculateN(n);
console.log(`${n}! = ${factorial}`);