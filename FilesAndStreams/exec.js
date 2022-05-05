const cp = require("child_process");

// cp.exec("open http://www.linkedin.com/learning");
// cp.exec("open -a terminal .");

cp.exec("node readStream", (err, data, stderr) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(data);
  console.log(data);
  //   console.log(stderr);
});
