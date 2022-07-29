import Command from './Command';
import { IDrone } from '../model/Drone';
import ErrorMessages from '../model/ErrorMessages';

export default class MoveCommand extends Command {
  run(drone: IDrone): string {
    this.ensureDronePlaced(drone);

    const nextPosition = drone.nextPosition();

    if (drone.isValidPosition(nextPosition.x, nextPosition.y)) {
      drone.move();
    } else {
      throw new Error(ErrorMessages.OUT_OF_AREA);
    }

    return '';
  }
}
