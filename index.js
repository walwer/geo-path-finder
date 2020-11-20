const PathFinder = require('./model/PathFinder/pathFinder');
const input = require('./input/waypoints.json');

const pathFinder = new PathFinder();

pathFinder.loadWaypoints(input.waypoints);
pathFinder.generatePath();

