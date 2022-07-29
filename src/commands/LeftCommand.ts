import Command from './Command';
import { IDrone } from '../model/Drone';

export default class LeftCommand extends Command {
  run(drone: IDrone): string {
    this.ensureDronePlaced(drone);

    drone.turnLeft();

    return '';
  }
}
