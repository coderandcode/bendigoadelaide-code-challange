import ErrorMessages from './model/ErrorMessages';

export default function commandParser(commandLine: string): string[] {
  const regex = /(\d+) (\d+) (\d+) (\d+) ([NSWE]) ([MLRQ]+)/;

  // Split command name and command arguments
  const match = commandLine.toUpperCase().trim().match(regex);
  if (match) {
    const width = match[1];
    const height = match[2];
    const x = match[3];
    const y = match[4];
    const direction = match[5];
    const movements = match[6];

    const commandArguments = [
      width,
      height,
      x,
      y,
      direction,
      movements,
    ];

    return commandArguments;
  }

  throw new Error(ErrorMessages.INPUT_VALID_COMMAND);
}
