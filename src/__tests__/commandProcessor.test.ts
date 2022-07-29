import commandProcessor from '../commandProcessor';
import ErrorMessages from '../model/ErrorMessages';
import Drone, { IDrone } from '../model/Drone';

describe('Feeding command samples into command processor', () => {
  let drone: IDrone;
  let output = '';

  //
  beforeEach(() => {
    drone = new Drone();
    output = '';
  });

  //
  test('Test case 1 - valid commands should get expected report', () => {
    output = commandProcessor('4 5 2 1 N MMRMLMQ', drone);
    expect(output).toBe('3 4 N');

    output = commandProcessor('40 15 39 1 N MMRMLMQ', drone);
    expect(output).toBe('39 4 N');
  });

  test('Test case 2 - throw exception if drone is out of area', () => {
    expect(() => {
      output = commandProcessor('4 5 4 5 N MMRMLMQ', drone);
    }).toThrow(ErrorMessages.OUT_OF_AREA);
  });

  test('Test case 3 - throw exception if drop drone outside the area', () => {
    expect(() => commandProcessor('4 5 14 5 N MMRMLMQ', drone)).toThrow(ErrorMessages.OUT_OF_AREA);
  });
});
