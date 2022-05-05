const fs = require("fs");
// console.log("started reading files");
// const files = fs.readdirSync("./assets");
// console.log("complete");
// started reading files
// complete
// [ 'alex.jpg', 'colors.json', 'Readme.md' ]

fs.readdir("./assets", (err, files) => {
  if (err) {
    throw err;
  }
  console.log(files);

  console.log("Complete");
});
console.log("started reading files");
// started reading files
// [ 'alex.jpg', 'colors.json', 'Readme.md' ]
// Complete

// console.log(files);
