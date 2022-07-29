import * as readline from 'readline';
import commandProcessor from './commandProcessor';
import Drone from './model/Drone';

// Init drone instance
const drone = new Drone();

//
console.log('Welcome, please input command (case insensitive):');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (commandLine: string) => {
  try {
    const output = commandProcessor(commandLine, drone);

    if (output) {
      console.log(output);
    }
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
});
