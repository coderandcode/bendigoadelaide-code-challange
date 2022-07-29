export enum Direction {
  NORTH = 1,
  EAST = 2,
  SOUTH = 3,
  WEST = 4,
}

export function convertDirection(direction: string): Direction | undefined {
  const directionMap: any = {
    N: Direction.NORTH,
    E: Direction.EAST,
    S: Direction.SOUTH,
    W: Direction.WEST,
  };

  return directionMap[direction];
}

export function directionToString(direction?: Direction): string {
  if (!direction) {
    return 'UNKNOWN';
  }

  const directionMap: any = {
    [Direction.NORTH]: 'N',
    [Direction.EAST]: 'E',
    [Direction.SOUTH]: 'S',
    [Direction.WEST]: 'W',
  };

  return directionMap[direction] || 'UNKNOWN';
}
