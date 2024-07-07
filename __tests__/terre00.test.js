describe('Alphabet Printer', () => {
    let consoleSpy;

    beforeEach(() => {
        // Spy on console.log to intercept outputs
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        // Restore console.log to its original state
        consoleSpy.mockRestore();
    });

    it('should print all lowercase alphabet letters each on new line', () => {
        require('../terre00.js'); 

        const expectedAlphabet = "abcdefghijklmnopqrstuvwxyz".split('');

        expectedAlphabet.forEach((letter, index) => {
            expect(consoleSpy.mock.calls[index][0]).toBe(letter);
        });

        // Verify that console.log was called 26 times
        expect(consoleSpy).toHaveBeenCalledTimes(26);
    });
});
