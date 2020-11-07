const AbstractDataValidator = require('../abstractDataValidator');

class IsLatitudeValidDataValidator extends AbstractDataValidator {
    execute(data) {
        for (let x of data) {
            if (x.latitude > 90) {
                throw new Error(`Latitude cannot be higher than 90 degrees, ${x.latitude} given`)
            }

            if (x.latitude < -90) {
                throw new Error(`Latitude cannot be lower than 90 degrees, ${x.latitude} given`)
            }
        }
    }
}

module.exports = IsLatitudeValidDataValidator;
