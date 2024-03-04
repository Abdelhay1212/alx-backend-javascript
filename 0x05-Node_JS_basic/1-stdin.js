/* eslint-disable linebreak-style */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
});

rl.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});
