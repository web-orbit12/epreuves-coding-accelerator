const convertTime = require('../terre12.js');

describe('Time Converter', () => {
    let consoleSpy;

    beforeEach(() => {
        // Spy on console.log to intercept outputs
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        // Restore console.log to its original state
        consoleSpy.mockRestore();
    });

    it('should prompt for valid time format when no argument is provided', () => {
        convertTime();
        expect(consoleSpy).toHaveBeenCalledWith("Please provide a time to convert, followed by AM or PM. Example: 5:30PM");
    });

    it('should prompt for valid time format when given an invalid time', () => {
        convertTime("25:61PM");
        expect(consoleSpy).toHaveBeenCalledWith("Please enter a valid time in the correct format. Example: 15:30");
    });

    it('should convert 11:40PM to 23:40', () => {
        convertTime("11:40PM");
        expect(consoleSpy).toHaveBeenCalledWith("Updated time is 23:40");
    });

    it('should convert 12:00PM to 12:00', () => {
        convertTime("12:00PM");
        expect(consoleSpy).toHaveBeenCalledWith("Time already in 24h format: 12:00");
    });

    it('should not change 01:00AM', () => {
        convertTime("01:00AM");
        expect(consoleSpy).toHaveBeenCalledWith("Updated time is 1:00");
    });

    it('should convert 12:30AM to 00:30', () => {
        convertTime("12:30AM");
        expect(consoleSpy).toHaveBeenCalledWith("Updated time is 0:30");
    });

    it('should not change 00:00AM (invalid time format)', () => {
        convertTime("00:00AM");
        expect(consoleSpy).toHaveBeenCalledWith("Wrong time format, cannot be 00 and AM at the same time");
    });

    it('should convert 01:00PM to 13:00', () => {
        convertTime("01:00PM");
        expect(consoleSpy).toHaveBeenCalledWith("Updated time is 13:00");
    });

    it('should convert 12:30PM to 12:30', () => {
        convertTime("12:30PM");
        expect(consoleSpy).toHaveBeenCalledWith("Time already in 24h format: 12:30");
    });

    it('should not change 11:59AM', () => {
        convertTime("11:59AM");
        expect(consoleSpy).toHaveBeenCalledWith("Updated time is 11:59");
    });
});
