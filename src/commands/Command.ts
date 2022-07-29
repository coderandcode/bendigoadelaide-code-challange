import ErrorMessages from '../model/ErrorMessages';
import { IDrone } from '../model/Drone';

export default abstract class Command {
  abstract run(drone: IDrone): string;

  protected ensureDronePlaced(drone: IDrone) {
    if (!drone.isPlaced()) {
      throw new Error(ErrorMessages.NOT_PLACED);
    }
  }
}
