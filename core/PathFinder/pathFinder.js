const Calculator = require('../../model/DistanceCalculator/distanceCalculator');

class PathFinder {
    constructor() {
        this.waypoints = [];
        this.calulator = new Calculator();
    }

    loadWaypoints(waypoints) {
        this.waypoints = waypoints;
    }

    generatePath() {
        for(let point in this.waypoints) {
            let bestMatching = null;
            this.calulator.setStartingPoint(point.lat, point.lon);

            for(let matching in this.waypoints) {
                this.calulator.setFinishPoint(matching.lat, point.lon);

                let distance = this.calulator.getDistance();
                if(distance < bestMatching) bestMatching = matching;
            }


        }
    }

}
