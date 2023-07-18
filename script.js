function decimalToBinary(decimal) {
  if (decimal === 0) {
    return "0";
  }
  
  let binary = "";
  
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  
  return binary;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a decimal number: ", (decimal) => {
  const binary = decimalToBinary(parseInt(decimal));
  console.log("Binary equivalent:", binary);
  readline.close();
});
