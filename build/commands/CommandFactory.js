"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorMessages_1 = __importDefault(require("../model/ErrorMessages"));
const LeftCommand_1 = __importDefault(require("./LeftCommand"));
const MoveCommand_1 = __importDefault(require("./MoveCommand"));
const ReportCommand_1 = __importDefault(require("./ReportCommand"));
const RightCommand_1 = __importDefault(require("./RightCommand"));
class CommandFactory {
    static create(commandName) {
        const CmdConstructor = CommandFactory.commands[commandName];
        if (!CmdConstructor) {
            throw new Error(`${ErrorMessages_1.default.UNKNOWN_COMMAND_NAME} ${commandName}`);
        }
        return new CmdConstructor();
    }
}
exports.default = CommandFactory;
// Please register your commands here
CommandFactory.commands = {
    M: MoveCommand_1.default,
    L: LeftCommand_1.default,
    R: RightCommand_1.default,
    Q: ReportCommand_1.default,
};
