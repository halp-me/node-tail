var tail = require('./src/node-tail.js');

tail.run({
  host: process.argv[1],
  port: process.argv[2],
  file: process.argv[3],
});
