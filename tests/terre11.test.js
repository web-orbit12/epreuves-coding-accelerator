const convertTime = require('../terre11.js');

describe('convertTime function', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('converts 23:40 to 11:40PM', () => {
    convertTime('23:40');
    expect(consoleSpy).toHaveBeenCalledWith('Updated time is 11:40PM');
  });

  test('converts 12:00 to 12:00PM', () => {
    convertTime('12:00');
    expect(consoleSpy).toHaveBeenCalledWith('Time not updated, already: 12:00PM');
  });

  test('converts 00:30 to 12:30AM', () => {
    convertTime('00:30');
    expect(consoleSpy).toHaveBeenCalledWith('Updated time is 12:30AM');
  });

  test('converts 11:59 to 11:59AM', () => {
    convertTime('11:59');
    expect(consoleSpy).toHaveBeenCalledWith('Current time is: 11:59AM');
  });

  test('converts 13:00 to 1:00PM', () => {
    convertTime('13:00');
    expect(consoleSpy).toHaveBeenCalledWith('Updated time is 1:00PM');
  });

  test('handles incorrect hour input', () => {
    convertTime('25:00');
    expect(consoleSpy).toHaveBeenCalledWith('Please enter a valid time in the correct format. Example: 15:30');
  });

  test('handles incorrect minute input', () => {
    convertTime('12:60');
    expect(consoleSpy).toHaveBeenCalledWith('Please enter a valid time in the correct format. Example: 15:30');
  });

  test('handles non-numeric input', () => {
    convertTime('ab:cd');
    expect(consoleSpy).toHaveBeenCalledWith('Please enter a valid time in the correct format. Example: 15:30');
  });

  test('handles incorrect separator', () => {
    convertTime('12-00');
    expect(consoleSpy).toHaveBeenCalledWith('Please enter a valid time in the correct format. Example: 15:30');
  });

  test('handles extra characters', () => {
    convertTime('123:456');
    expect(consoleSpy).toHaveBeenCalledWith('Please enter a valid time in the correct format. Example: 15:30');
  });

  test('handles missing minutes', () => {
    convertTime('14:');
    expect(consoleSpy).toHaveBeenCalledWith('Please enter a valid time in the correct format. Example: 15:30');
  });

  test('handles empty input', () => {
    convertTime('');
    expect(consoleSpy).toHaveBeenCalledWith('Please provide a time to convert. Example: 15:30');
  });
});
