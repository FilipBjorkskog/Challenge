import readline from "read-console-input";

function calculateAverage() {
    const num1 = parseFloat(readline('Nummer1: '));
    const num2 = parseFloat(readline('Nummer2: '));
    const num3 = parseFloat(readline('Nummer3: '));
    const num4 = parseFloat(readline('Nummer4: '));
    const num5 = parseFloat(readline('Nummer5: '));

    const sum = num1 + num2 + num3 + num4 + num5;
    const average = sum / 5;

    console.log("Medelvärdet är: " + average);
}

calculateAverage();
