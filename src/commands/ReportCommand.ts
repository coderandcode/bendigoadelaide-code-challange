import Command from './Command';
import { IDrone } from '../model/Drone';
import { directionToString } from '../model/Direction';

export default class ReportCommand extends Command {
  run(drone: IDrone): string {
    this.ensureDronePlaced(drone);

    const report = drone.report();

    return `${report.x} ${report.y} ${directionToString(report.direction)}`;
  }
}
