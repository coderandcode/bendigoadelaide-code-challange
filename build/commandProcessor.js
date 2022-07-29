"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commandParser_1 = __importDefault(require("./commandParser"));
const CommandFactory_1 = __importDefault(require("./commands/CommandFactory"));
const Direction_1 = require("./model/Direction");
function commandProcessor(commandLine, drone) {
    const commandArguments = (0, commandParser_1.default)(commandLine);
    const width = parseInt(commandArguments[0], 10);
    const height = parseInt(commandArguments[1], 10);
    const x = parseInt(commandArguments[2], 10);
    const y = parseInt(commandArguments[3], 10);
    const direction = (0, Direction_1.convertDirection)(commandArguments[4]);
    const commands = commandArguments[5];
    if (direction) {
        drone.drop(x, y, width, height, direction);
    }
    //
    let output = '';
    for (const commandName of commands) {
        const command = CommandFactory_1.default.create(commandName);
        output = command.run(drone);
        if (commandName.toUpperCase() === 'Q') {
            break;
        }
    }
    return output;
}
exports.default = commandProcessor;
