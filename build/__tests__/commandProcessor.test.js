"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commandProcessor_1 = __importDefault(require("../commandProcessor"));
const ErrorMessages_1 = __importDefault(require("../model/ErrorMessages"));
const Drone_1 = __importDefault(require("../model/Drone"));
describe('Feeding command samples into command processor', () => {
    let drone;
    let output = '';
    //
    beforeEach(() => {
        drone = new Drone_1.default();
        output = '';
    });
    //
    test('Test case 1 - valid commands should get expected report', () => {
        output = (0, commandProcessor_1.default)('4 5 2 1 N MMRMLMQ', drone);
        expect(output).toBe('3 4 N');
        output = (0, commandProcessor_1.default)('8 10 3 1 N MMRMMRMQ', drone);
        expect(output).toBe('5 2 S');
    });
    test('Test case 2 - throw exception if drone is out of area', () => {
        expect(() => {
            output = (0, commandProcessor_1.default)('4 5 4 5 N MMRMLMQ', drone);
        }).toThrow(ErrorMessages_1.default.OUT_OF_AREA);
    });
    test('Test case 3 - throw exception if drop drone outside the area', () => {
        expect(() => (0, commandProcessor_1.default)('4 5 14 5 N MMRMLMQ', drone)).toThrow(ErrorMessages_1.default.OUT_OF_AREA);
    });
});
