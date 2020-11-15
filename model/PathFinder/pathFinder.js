const PointFinder = require('./../PointFinder/pointFinder');

class PathFinder {
    constructor(calculator, validator) {
        this.waypoints = [];
        this.validator = new validator;
        this.path = [];

    }

    loadWaypoints(waypoints) {
        this.validateData(waypoints);
        this.waypoints = waypoints;
    }

    getWaypoints() {
        return this.waypoints;
    }

    validateData(data) {
        this.validator.validate(data);
    }

    findNearestWaypoint() {

    }


    generateDistanceMap() {

    }

    generatePath() {

    }
}

module.exports = PathFinder;
