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
        this.generateDistanceMap();
        let path = [];
        let maxLength = this.waypoints.length;
        // console.log(this.waypoints);
        // path.push(this.waypoints[0]); //Set starting point here
        //
        // while (path.length <= maxLength) {
        //     let lastPointInPath = path[path.length - 1];
        //     lastPointInPath.dependencies.sort((a, b) => a.distance - b.distance);
        //     path.push(this.waypoints[lastPointInPath.dependencies[0].index]);
        //     this.waypoints.splice(lastPointInPath.dependencies[0].index, 1);
        // }
        //
        // console.log(path);
        return path;
    }
}

module.exports = PathFinder;
