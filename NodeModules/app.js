// const vivek = require("./myModule");
// console.log(vivek);

// counter = require("./myModule");
// counter.inc();
// counter.inc();
// counter.inc();
// console.log(counter.getCount());
// console.log(counter.dec());

const { inc, dec, getCount } = require("./myModule");
inc();
dec();
inc();
inc();
console.log(getCount());
