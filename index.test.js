jest.mock('./lib/fizzbuzz');

const fizzbuzz = require('./lib/fizzbuzz')
describe('fizzbuzz', () => {
    beforeEach(() => {
        fizzbuzz.mockReturnValue('mocked result')
    })
    it('delegates mapping for 100 times', () => {
        const consoleLogSpy = jest.spyOn(console, 'log')
        require('./index') // import mit Seiteneffekt
        expect(fizzbuzz).toHaveBeenCalledTimes(100);
        expect(consoleLogSpy).toHaveBeenCalledTimes(100);
        expect(consoleLogSpy).toHaveBeenCalledWith('mocked result');
    })
})