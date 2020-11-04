const pathFinder = require('./core/PathFinder/pathFinder');
const input = require('./input/waypoints.json');


const finder = new pathFinder();

finder.loadWaypoints(input.waypoints);
finder.generatePath();

