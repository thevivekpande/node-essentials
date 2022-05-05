const fs = require("fs");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "utf-8");

let fileTxt = "";

readStream.on("data", (data) => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileTxt += data;
});

readStream.once("data", (data) => {
  console.log(data);
});

readStream.on("end", () => {
  console.log("finished reading files");
  console.log(`In total I read ${fileTxt.length - 1} characters pf text`);
});
