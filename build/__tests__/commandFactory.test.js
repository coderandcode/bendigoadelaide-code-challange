"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommandFactory_1 = __importDefault(require("../commands/CommandFactory"));
const LeftCommand_1 = __importDefault(require("../commands/LeftCommand"));
const MoveCommand_1 = __importDefault(require("../commands/MoveCommand"));
const ReportCommand_1 = __importDefault(require("../commands/ReportCommand"));
const RightCommand_1 = __importDefault(require("../commands/RightCommand"));
describe('Command factory test', () => {
    test('An unknown movement command or empty command should get an exception', () => {
        expect(() => {
            CommandFactory_1.default.create('MY_UNKNOWN_CMD');
        }).toThrow(Error);
        expect(() => {
            CommandFactory_1.default.create('');
        }).toThrow(Error);
    });
    test('All valid uppercased command names should get corresponding command instance', () => {
        expect(CommandFactory_1.default.create('M')).toBeInstanceOf(MoveCommand_1.default);
        expect(CommandFactory_1.default.create('L')).toBeInstanceOf(LeftCommand_1.default);
        expect(CommandFactory_1.default.create('R')).toBeInstanceOf(RightCommand_1.default);
        expect(CommandFactory_1.default.create('Q')).toBeInstanceOf(ReportCommand_1.default);
    });
});
