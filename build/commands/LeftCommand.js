"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("./Command"));
class LeftCommand extends Command_1.default {
    run(drone) {
        this.ensureDronePlaced(drone);
        drone.turnLeft();
        return '';
    }
}
exports.default = LeftCommand;
