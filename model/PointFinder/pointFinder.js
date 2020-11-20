class PointFinder {
    constructor(calculator) {
        this.calculator = calculator;
    }

    findNearest(start, points) {
        let candidate = {
            distance: Infinity,
            point: {},
            index: -1,
        };

        for (let index in points) {
            let point = points[index];

            this.calculator.setFinishPoint(point.latitude, point.longitude);
            this.calculator.setStartingPoint(start.latitude, start.longitude);
            const distance = this.calculator.getDistance();

            if (distance > 0 && distance < candidate.distance)  {
                candidate.distance = distance;
                candidate.point = point;
                candidate.index = index;
            }
        }

        return candidate;
    }
}

module.exports = PointFinder;
