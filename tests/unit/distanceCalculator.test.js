const distanceCalculator = require('../../model/DistanceCalculator/distanceCalculator');

describe('distance calculator logic test', function () {
    it('returns valid distance when data is valid', () => {
        let calculator = new distanceCalculator();
        calculator.setStartingPoint(89,21);
        calculator.setFinishPoint(89, 20);

        const expected = 1940;
        const result = calculator.calculateDistance();

        expect(result).toEqual(expected);
    })

    it('throws error when data is incomplete', () => {
        let calculator = new distanceCalculator();
        calculator.setStartingPoint(89,21);

        let execution = () => {
            calculator.calculateDistance();
        }

        expect(execution).toThrow(Error);
    })

    it('throws error when data is invalid', () => {
        let calculator = new distanceCalculator();
        calculator.setStartingPoint(120,3);
        calculator.setFinishPoint(89,21);

        let execution = () => {
            calculator.calculateDistance();
        }

        expect(execution).toThrow(Error);
    })
});
