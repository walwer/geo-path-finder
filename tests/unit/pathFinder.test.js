const pathFinder = require('../../model/PathFinder/pathFinder');
const finder = new pathFinder();

describe('path finder', () => {
    it('setWaypoints sets the waypoint when data format is valid', () => {
        const validDataSet = [{longitude: 12, latitude: 33}, {longitude: 24, latitude: 23}];
        finder.loadWaypoints(validDataSet);

        const result = finder.getWaypoints();

        expect(result).toEqual(validDataSet);
    });
});
