const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Vivek Paney \n");
questionApp.stdin.write("Grater Noida \n");
questionApp.stdin.write("Change the world \n");

questionApp.stdout.on("data", (data) => {
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`questionApp process exited`);
});
