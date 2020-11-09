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

    generatePath() {

    }
}

module.exports = PathFinder;
