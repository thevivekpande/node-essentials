const readline = require("readline");
const rl = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

rl.question("How do you like Node?", (answer) => {
  console.log(`Your answer: ${answer}`);
});
