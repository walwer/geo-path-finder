const AbstractDataValidator = require('../abstractDataValidator');

class IsLongitudeValidDataValidator extends AbstractDataValidator {
    execute(data) {
        for (let x of data) {
            if (x.longitude > 180) {
                throw new Error(`Longitude cannot be higher than 180 degrees, ${x.longitude} given`)
            }

            if (x.longitude < -180) {
                throw new Error(`Longitude cannot be lower than -180 degrees, ${x.longitude} given`)
            }
        }
    }
}

module.exports = IsLongitudeValidDataValidator;
