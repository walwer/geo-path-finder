const pathFinder = require('../../model/PathFinder/pathFinder');
const finder = new pathFinder();

describe('path finder', () => {
    it('validateData throws an error when data format is invalid', () => {
        const invalidDataSet = [{latitude:0, longitude:22}, {}];

        expect(() => finder.validateData(invalidDataSet)).toThrow(Error);
    });

    it('validateData throws an error when dataset is not array', () => {
        const invalidDataSet = 'helloworld';

        expect(() => finder.validateData(invalidDataSet)).toThrow(Error);
    });

    it('validateData throws an error when dataset is an empty array', () => {
        const invalidDataSet = [];

        expect(() => finder.validateData(invalidDataSet)).toThrow(Error);
    });

    it('setWaypoints sets the waypoint when data format is valid', () => {
        const validDataSet = [{longitude: 12, latitude: 33}, {longitude: 24, latitude: 23}];
        finder.loadWaypoints(validDataSet);

        const result = finder.getWaypoints();

        expect(result).toEqual(validDataSet);
    });
});
