class DistanceCalculator {
    constructor() {
        //TODO: go with object here
        this.startingPoint = {latitude: 0, longitude: 0};
        this.finishPoint = {latitude: 0, longitude: 0};
    }

    setStartingPoint(latitude, longitude) {
        this.startingPoint.latitude = latitude;
        this.startingPoint.longitude = longitude;
        return this;
    }

    setFinishPoint(latitude,longitude) {
        this.finishPoint.latitude = latitude;
        this.finishPoint.longitude = longitude;
        return this;
    }

    getDistance() {
        return this.calculateDistance();
    }

    calculateDistance() {
        const earthRadius = 6371e3; // metres
        const fi1 = this.startingPoint.latitude * Math.PI/180; // φ, λ in radians
        const fi2 = this.finishPoint.latitude * Math.PI/180;
        const deltaFi = (this.finishPoint.latitude-this.startingPoint.latitude) * Math.PI/180;
        const deltaGamma = (this.finishPoint.longitude-this.startingPoint.longitude) * Math.PI/180;

        const a = Math.sin(deltaFi/2) * Math.sin(deltaFi/2) + Math.cos(fi1) * Math.cos(fi2) * Math.sin(deltaGamma/2) * Math.sin(deltaGamma/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
         // in metres
        return earthRadius * c;
    }
}

module.exports = DistanceCalculator;

