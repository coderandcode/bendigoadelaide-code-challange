import commandParser from '../commandParser';

describe('Command parser test', () => {
  test('An empty command line should get an exception', () => {
    expect(() => {
      commandParser('');
    }).toThrow(Error);
  });

  test('A wrong command line should get an exception', () => {
    expect(() => {
      commandParser('22 33 1 1');
    }).toThrow(Error);
  });

  test('Correct commands', () => {
    const expectedResult = [
      '22',
      '33',
      '1',
      '1',
      'S',
      'MMLQ',
    ];

    expect(commandParser('22 33 1 1 S MMLQ')).toEqual(expectedResult);
  });
});
