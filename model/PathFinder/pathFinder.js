const PointFinder = require('./../PointFinder/pointFinder');
const ValidationEngine = require('../PathFinder/Validator/validationEngine');

class PathFinder {
    constructor(calculator) {
        this.waypoints = [];
        this.validator = new ValidationEngine();
        this.calculator = new calculator;
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

    generatePath() {
        let pointFinder = new PointFinder(this.waypoints, this.calculator);

        let bestPoint = pointFinder.findNearest({longitude: 11, latitude: 20})
        console.log(bestPoint);
    }
}

module.exports = PathFinder;
