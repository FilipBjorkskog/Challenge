import readline from "read-console-input";

const array = [1, 2, 3, 4, 5];

const a = Number(readline('Tal 1:'));
const b = Number(readline('Tal 2:'));

const indexA = array.indexOf(a);
const indexB = array.indexOf(b);

if (indexA !== -1 && indexB !== -1) {

  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
  console.log(array);
} else {
  console.log("W");
}
