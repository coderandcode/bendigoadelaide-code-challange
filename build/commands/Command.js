"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorMessages_1 = __importDefault(require("../model/ErrorMessages"));
class Command {
    ensureDronePlaced(drone) {
        if (!drone.isPlaced()) {
            throw new Error(ErrorMessages_1.default.NOT_PLACED);
        }
    }
}
exports.default = Command;
