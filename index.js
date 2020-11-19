const PathFinder = require('./model/PathFinder/pathFinder');
const input = require('./input/waypoints.json');
const Calculator = require('./model/DistanceCalculator/distanceCalculator');
const Validator = require('./model/PathFinder/Validator/validationEngine');


const pathFinder = new PathFinder(Calculator);

pathFinder.loadWaypoints(input.waypoints);
pathFinder.generatePath();

