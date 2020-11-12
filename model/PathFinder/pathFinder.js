const Calculator = require('../DistanceCalculator/distanceCalculator');
const Validator = require('./../PathFinder/Validator/validationEngine');

class PathFinder {
    constructor() {
        this.waypoints = [];
        this.calulator = new Calculator();
        this.validator = new Validator();
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
        for (let point of this.waypoints) {
            point['dependencies'] = [];

            for (let target in this.waypoints) {
                this.calulator.setStartingPoint(point.latitude, point.longitude);
                this.calulator.setFinishPoint(this.waypoints[target].latitude, this.waypoints[target].longitude);
                const distance = this.calulator.getDistance();

                if (distance > 0) {
                    point.dependencies.push({
                        index: target,
                        distance,
                    });
                }
            }
        }
    }

    generatePath() {

    }
}

module.exports = PathFinder;
