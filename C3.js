import readline from "read-console-input";

function fibonacci(n) {
  if (n <= 0) return [0];
  if (n === 1) return [0, 1];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

const n = parseInt(readline('Number: '));

if (n) {
  const result = fibonacci(n);
  console.log(result.join(', '));
}