import { Direction } from './Direction';

export interface IDrone {
  drop(x: number, y: number, w: number, h: number, direction: Direction): void;
  move(): void;
  turnLeft(): void;
  turnRight(): void;
  isPlaced(): boolean;
  nextPosition(): {x: number, y: number};
  isValidPosition(x: number, y: number): boolean;
  report(): {x: number, y: number, direction?: Direction}
}

export default class Drone implements IDrone {
  private x: number = -1;

  private y: number = -1;

  private w: number = -1;

  private h: number = -1;

  private direction?: Direction;

  drop(x: number, y: number, w: number, h: number, direction: Direction) {
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

  nextPosition(): {x: number, y: number} {
    const result = { x: this.x, y: this.y };

    if (this.direction) {
      switch (this.direction) {
        case Direction.NORTH:
          result.y += 1;
          break;

        case Direction.SOUTH:
          result.y -= 1;
          break;

        case Direction.WEST:
          result.x -= 1;
          break;

        case Direction.EAST:
          result.x += 1;
          break;

        default:
          break;
      }
    }

    return result;
  }

  isValidPosition(x: number, y: number): boolean {
    return (x >= 0 && y >= 0 && x < this.w && y < this.h);
  }

  isPlaced(): boolean {
    return Boolean(this.direction);
  }

  report(): {x: number, y: number, direction?: Direction} {
    return {
      x: this.x,
      y: this.y,
      direction: this.direction,
    };
  }
}
