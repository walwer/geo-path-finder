const Calculator = require('../DistanceCalculator/distanceCalculator');

class PathFinder {
    constructor() {
        this.waypoints = [];
        this.calulator = new Calculator();
    }

    loadWaypoints(waypoints) {
        this.validateData(waypoints);
        this.waypoints = waypoints;
    }

    getWaypoints() {
        return this.waypoints;
    }

    validateData(data) {
        if (!Array.isArray(data)) {
            throw new Error('Data should be an array');
        }

        if (data.length === 0) {
            throw new Error('Data should be an empty array');
        }

        for(let x of data) {
            if(!x.hasOwnProperty('longitude') || !x.hasOwnProperty('latitude')) {
                throw new Error('Dataset contains not valid data objects');
            }
        }
    }

    findNearestWaypoint(startingPoint, path, availableItems, currentIteration) {
        if (availableItems.length === 0 || availableItems === []) return path;

        currentIteration++;

        this.calulator.setStartingPoint(startingPoint.lat, startingPoint.lon);
        let bestMatching = null;

        for (let matching in availableItems) {
            if (availableItems[matching] === path[path.length - 1]) continue;

            this.calulator.setFinishPoint(availableItems[matching].lat, availableItems[matching].lon);
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
