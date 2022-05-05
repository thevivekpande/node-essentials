const fs = require("fs");
//remove async directory
// fs.renameSync("./storage-files", "./storage");

fs.readdirSync("./storage").forEach((fileName) => {
  fs.unlinkSync(`./storage/${fileName}`);
});

//remove directory
fs.rmdir("./storage", (err) => {
  if (err) {
    throw err;
  }

  console.log("./storage directory removed");
});
