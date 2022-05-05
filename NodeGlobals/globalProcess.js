// console.log(process.pid);
// console.log(process.versions.node);
// console.log(process.argv);

// node globalProcess Vivek Pandey
// const temp = process.argv;
// console.log(`Your name is ${temp[2]} ${temp[3]}`);

// node globalProcess Vivek Pandey
// const [, , firstName, lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`);

// const grab = (flag) => {
//   let indexAfterFlag = process.argv.indexOf(flag) + 1;
//   return process.argv[indexAfterFlag];
// };
// const greeting = grab("--greeting");
// const user = grab("--user");
// // node gloabalProcess --user "Vivek Pandey" --greeting "Happy BirthDay"
// console.log(`${greeting} ${user}`); // Happy Birthday Vivek Pandey
