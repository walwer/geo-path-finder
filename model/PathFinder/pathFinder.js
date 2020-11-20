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
        let pointFinder = new PointFinder(this.calculator);

        const WAYPOINTS_LENGTH = this.waypoints.length;

        let path = [];
        path.push(this.waypoints.shift());

        for (let i = 0; i < WAYPOINTS_LENGTH - 1; i++) {
            let startingPoint = path[path.length-1];
            let point = pointFinder.findNearest(startingPoint, this.waypoints);

            this.waypoints.splice(point.index, 1);
            path.push(point.point);
        }

        console.log(path);
    }
}

module.exports = PathFinder;
