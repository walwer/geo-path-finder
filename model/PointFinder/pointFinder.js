class PointFinder {
    constructor(points, start, calculator) {
        this.points = points;
        this.start = start;
        this.calculator = calculator;
    }

    findNearest() {
        for (let point in this.points) {
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

module.exports = PointFinder;
