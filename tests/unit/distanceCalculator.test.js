const distanceCalculator = require('../../model/DistanceCalculator/distanceCalculator');

describe('distance calculator', function () {
    it('returns valid distance when data is valid', () => {
        let calculator = new distanceCalculator();
        calculator.setStartingPoint(89, 21);
        calculator.setFinishPoint(89, 20);

        const expected = 1940;
        const result = calculator.calculateDistance();

        expect(result).toEqual(expected);
    })
});
