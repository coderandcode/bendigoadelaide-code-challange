import ErrorMessages from '../model/ErrorMessages';
import Command from './Command';
import LeftCommand from './LeftCommand';
import MoveCommand from './MoveCommand';
import ReportCommand from './ReportCommand';
import RightCommand from './RightCommand';

export default class CommandFactory {
  // Please register your commands here
  private static readonly commands: any = {
    M: MoveCommand,
    L: LeftCommand,
    R: RightCommand,
    Q: ReportCommand,
  };

  static create(commandName: string): Command {
    const CmdConstructor = CommandFactory.commands[commandName];

    if (!CmdConstructor) {
      throw new Error(`${ErrorMessages.UNKNOWN_COMMAND_NAME} ${commandName}`);
    }

    return new CmdConstructor();
  }
}
