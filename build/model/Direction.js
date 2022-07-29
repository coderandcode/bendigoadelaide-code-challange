"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.directionToString = exports.convertDirection = exports.Direction = void 0;
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 1] = "NORTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["SOUTH"] = 3] = "SOUTH";
    Direction[Direction["WEST"] = 4] = "WEST";
})(Direction = exports.Direction || (exports.Direction = {}));
function convertDirection(direction) {
    const directionMap = {
        N: Direction.NORTH,
        E: Direction.EAST,
        S: Direction.SOUTH,
        W: Direction.WEST,
    };
    return directionMap[direction];
}
exports.convertDirection = convertDirection;
function directionToString(direction) {
    if (!direction) {
        return 'UNKNOWN';
    }
    const directionMap = {
        [Direction.NORTH]: 'N',
        [Direction.EAST]: 'E',
        [Direction.SOUTH]: 'S',
        [Direction.WEST]: 'W',
    };
    return directionMap[direction] || 'UNKNOWN';
}
exports.directionToString = directionToString;
