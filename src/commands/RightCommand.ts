import Command from './Command';
import { IDrone } from '../model/Drone';

export default class RightCommand extends Command {
  run(drone: IDrone): string {
    this.ensureDronePlaced(drone);

    drone.turnRight();

    return '';
  }
}
