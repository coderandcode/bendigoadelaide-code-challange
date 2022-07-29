import CommandFactory from '../commands/CommandFactory';
import LeftCommand from '../commands/LeftCommand';
import MoveCommand from '../commands/MoveCommand';
import ReportCommand from '../commands/ReportCommand';
import RightCommand from '../commands/RightCommand';

describe('Command factory test', () => {
  test('An unknown movement command or empty command should get an exception', () => {
    expect(() => {
      CommandFactory.create('MY_UNKNOWN_CMD');
    }).toThrow(Error);

    expect(() => {
      CommandFactory.create('');
    }).toThrow(Error);
  });

  test('All valid uppercased command names should get corresponding command instance', () => {
    expect(CommandFactory.create('M')).toBeInstanceOf(MoveCommand);
    expect(CommandFactory.create('L')).toBeInstanceOf(LeftCommand);
    expect(CommandFactory.create('R')).toBeInstanceOf(RightCommand);
    expect(CommandFactory.create('Q')).toBeInstanceOf(ReportCommand);
  });
});
