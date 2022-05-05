// const { listenerCount } = require("process");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const questions = [
//   "what is your name? ",
//   "where do you live? ",
//   "what are you going to do with node js? ",
// ];
// const collectAnswers = (questions, done) => {
//   const answers = [];
//   const [firstQues] = questions;
//   const questionAnswered = (answer) => {
//     answers.push(answer);
//     if (answers.length < questions.length) {
//       rl.question(questions[answers.length], questionAnswered);
//     } else {
//       done(answers);
//     }
//   };
//   rl.question(firstQues, questionAnswered);
// };
// collectAnswers(questions, (answers) => {
//   console.log("Thank you for your answers");
//   console.log(answers);
//   process.exit();
// });

const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with Node js? ",
];

const answerEvents = collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});

answerEvents.on("answer", (answer) => {
  console.log(`question answered: ${answer}`);
});

answerEvents.on("complte", (answer) => {
  console.log(`Event Completed`);
  console.log(answer);
});

// collectAnswers(questions);
