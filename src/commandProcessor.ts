import commandParser from './commandParser';
import CommandFactory from './commands/CommandFactory';
import { convertDirection } from './model/Direction';
import { IDrone } from './model/Drone';

export default function commandProcessor(commandLine: string, drone: IDrone): string {
  const commandArguments = commandParser(commandLine);

  const width = parseInt(commandArguments[0], 10);
  const height = parseInt(commandArguments[1], 10);
  const x = parseInt(commandArguments[2], 10);
  const y = parseInt(commandArguments[3], 10);
  const direction = convertDirection(commandArguments[4]);
  const commands = commandArguments[5];

  if (direction) {
    drone.drop(x, y, width, height, direction);
  }

  //
  let output = '';

  for (const commandName of commands) {
    const command = CommandFactory.create(commandName);
    output = command.run(drone);

    if (commandName.toUpperCase() === 'Q') {
      break;
    }
  }

  return output;
}
