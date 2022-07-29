"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("./Command"));
const ErrorMessages_1 = __importDefault(require("../model/ErrorMessages"));
class MoveCommand extends Command_1.default {
    run(drone) {
        this.ensureDronePlaced(drone);
        const nextPosition = drone.nextPosition();
        if (drone.isValidPosition(nextPosition.x, nextPosition.y)) {
            drone.move();
        }
        else {
            throw new Error(ErrorMessages_1.default.OUT_OF_AREA);
        }
        return '';
    }
}
exports.default = MoveCommand;
