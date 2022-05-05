const events = require("events");

const emitter = new events.EventEmitter(); // used to create custom events

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

// emitter.emit("customEvent", "Hello World", "Computer");
// emitter.emit("customEvent", "That's pretty cool huh?", "Vivek");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "Good Bye !!", "process");
    process.exit();
  }

  emitter.emit("customEvent", input, "terminal");
});
