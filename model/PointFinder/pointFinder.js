class PointFinder {
    constructor(points, calculator) {
        this.points = points;
        this.calculator = calculator;
    }

    findNearest(start) {
        let candidate = {
            distance: Infinity,
            point: {}
        };

        for (let point of this.points) {
            this.calculator.setFinishPoint(point.latitude, point.longitude);
            this.calculator.setStartingPoint(start.latitude, start.longitude);
            const distance = this.calculator.getDistance();

            if (distance > 0 && distance < candidate.distance)  {
                candidate.distance = distance;
                candidate.point = point;
            }
        }

        return candidate;
    }
}

module.exports = PointFinder;
