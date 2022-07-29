"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("./Command"));
const Direction_1 = require("../model/Direction");
class ReportCommand extends Command_1.default {
    run(drone) {
        this.ensureDronePlaced(drone);
        const report = drone.report();
        return `${report.x} ${report.y} ${(0, Direction_1.directionToString)(report.direction)}`;
    }
}
exports.default = ReportCommand;
