"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Direction_1 = require("./Direction");
class Drone {
    constructor() {
        this.x = -1;
        this.y = -1;
        this.w = -1;
        this.h = -1;
    }
    drop(x, y, w, h, direction) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.direction = direction;
    }
    move() {
        const { x, y } = this.nextPosition();
        this.x = x;
        this.y = y;
    }
    turnLeft() {
        if (this.direction) {
            this.direction -= 1;
            if (this.direction < 1) {
                this.direction = 4;
            }
        }
    }
    turnRight() {
        if (this.direction) {
            this.direction += 1;
            if (this.direction > 4) {
                this.direction = 1;
            }
        }
    }
    nextPosition() {
        const result = { x: this.x, y: this.y };
        if (this.direction) {
            switch (this.direction) {
                case Direction_1.Direction.NORTH:
                    result.y += 1;
                    break;
                case Direction_1.Direction.SOUTH:
                    result.y -= 1;
                    break;
                case Direction_1.Direction.WEST:
                    result.x -= 1;
                    break;
                case Direction_1.Direction.EAST:
                    result.x += 1;
                    break;
                default:
                    break;
            }
        }
        return result;
    }
    isValidPosition(x, y) {
        return (x >= 0 && y >= 0 && x < this.w && y < this.h);
    }
    isPlaced() {
        return Boolean(this.direction);
    }
    report() {
        return {
            x: this.x,
            y: this.y,
            direction: this.direction,
        };
    }
}
exports.default = Drone;
