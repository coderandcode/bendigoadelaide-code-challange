"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commandParser_1 = __importDefault(require("../commandParser"));
describe('Command parser test', () => {
    test('An empty command line should get an exception', () => {
        expect(() => {
            (0, commandParser_1.default)('');
        }).toThrow(Error);
    });
    test('A wrong command line should get an exception', () => {
        expect(() => {
            (0, commandParser_1.default)('22 33 1 1');
        }).toThrow(Error);
    });
    test('Correct commands', () => {
        const expectedResult = [
            '22',
            '33',
            '1',
            '1',
            'S',
            'MMLQ',
        ];
        expect((0, commandParser_1.default)('22 33 1 1 S MMLQ')).toEqual(expectedResult);
    });
});
