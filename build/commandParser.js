"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorMessages_1 = __importDefault(require("./model/ErrorMessages"));
function commandParser(commandLine) {
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
    throw new Error(ErrorMessages_1.default.INPUT_VALID_COMMAND);
}
exports.default = commandParser;
