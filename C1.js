import readline from "read-console-input";

const array = [1, 2, 3, 4, 5];

const a = Number(readline('Tal 1:')) - 1;
const b = Number(readline('Tal 2:')) - 1;

[array[a], array[b]] = [array[b], array[a]];

console.log(array);