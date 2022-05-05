const fs = require("fs");
// const text = fs.readFileSync("./assets/Readme.md", "utf-8");
// fs.readFile("./assets/Readme.md", "utf-8", (err, vivek) => {
//   console.log("file contents read");
//   console.log(vivek);
// });

fs.readFile("./assets/alex.jpg", (err, vivek) => {
  if (err) {
    console.log(`An error has occured: ${err.message}`);
  }
  console.log("file contents read");
  console.log(vivek);
});

// console.log(text);
