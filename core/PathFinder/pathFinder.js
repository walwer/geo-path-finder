const Calculator = require('../../model/DistanceCalculator/distanceCalculator');

class PathFinder {
    constructor() {
        this.waypoints = [];
        this.calulator = new Calculator();
    }

    loadWaypoints(waypoints) {
        this.waypoints = waypoints;
    }

    findNearestWaypoint(startingPoint, path, availableItems, currentIteration) {
            console.log(currentIteration);
            if(availableItems.length = 0 || availableItems === []) return path;

            currentIteration++;

            this.calulator.setStartingPoint(startingPoint.lat, startingPoint.lon);
            let bestMatching = null;

            for(let matching in availableItems) {
                if(availableItems[matching] === path[path.length-1]) continue;

                this.calulator.setFinishPoint(availableItems[matching].lat, availableItems[matching].lon);
                let distance = this.calulator.getDistance();

                if(distance === 0) {
                    continue;
                }

                if(distance < bestMatching || bestMatching === null) {
                    bestMatching = matching;
                }
            }

            if(bestMatching) {
                path.push[availableItems[bestMatching]];
                availableItems.splice(bestMatching, 1);
            }

            this.findNearestWaypoint(path[path.length-1], path, availableItems, currentIteration);
    }

    generatePath() {
        let tempWaypointsOrder = JSON.parse(JSON.stringify(this.waypoints));
        let startingPointIndex = 0;
        let finalPathOrder = [];

        finalPathOrder.push(tempWaypointsOrder[startingPointIndex]);

        console.log(this.findNearestWaypoint(tempWaypointsOrder[startingPointIndex], finalPathOrder, tempWaypointsOrder, 0));
    }
}

module.exports = PathFinder;
