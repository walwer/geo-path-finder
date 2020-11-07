const Calculator = require('../DistanceCalculator/distanceCalculator');
const Validator = require('./../PathFinder/Validator/validationEngine');

class PathFinder {
    constructor() {
        this.waypoints = [];
        this.calulator = new Calculator();
        this.validator = new Validator();
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

    findNearestWaypoint(startingPoint, path, availableItems, currentIteration) {
        if (availableItems.length === 0 || availableItems === []) return path;

        currentIteration++;

        this.calulator.setStartingPoint(startingPoint.latitude, startingPoint.longitude);
        let bestMatching = null;

        for (let matching in availableItems) {
            if (availableItems[matching] === path[path.length - 1]) continue;

            this.calulator.setFinishPoint(availableItems[matching].latitude, availableItems[matching].longitude);
            let distance = this.calulator.getDistance();

            if (distance === 0) {
                continue;
            }

            if (distance < bestMatching || bestMatching === null) {
                bestMatching = matching;
            }
        }

        if (bestMatching) {
            console.log(`Matched the step for ${startingPoint.lat} a ${availableItems[bestMatching].lat}`);
            path.push[availableItems[bestMatching]];
            availableItems.splice(bestMatching, 1);
        }

        return this.findNearestWaypoint(path[path.length - 1], path, availableItems, currentIteration);
    }

    generatePath() {
        let tempWaypointsOrder = JSON.parse(JSON.stringify(this.waypoints));
        let startingPointIndex = 0;
        let finalPathOrder = [];

        let startingPoint = tempWaypointsOrder[startingPointIndex];

        finalPathOrder.push(tempWaypointsOrder[startingPointIndex]);
        tempWaypointsOrder.splice(startingPointIndex, 1);

        let path = (this.findNearestWaypoint(startingPoint, finalPathOrder, tempWaypointsOrder, 0));

        console.log(path);
    }
}

module.exports = PathFinder;
