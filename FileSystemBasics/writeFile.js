const fs = require("fs");
const md = `
# This is a new File

we can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile("./assets/notes.md", md.trim(), (err) => {
  if (err) {
    throw err;
  }
  console.log("File Saved");
});
