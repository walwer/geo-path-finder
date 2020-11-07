const IsArrayDataValidator = require('./DataValidators/IsArrayDataValidator/isArrayDataValidator');
const IsNotNullArrayDataValidator = require('./DataValidators/IsNotNullArrayDataValidator/isNotNullDataValidator');
const IsDatasetFormatValidDataValidator = require('./DataValidators/IsDatasetFormatValidDataValidator/isDatasetFormatValidDataValidator');
const IsLatitudeValidDataValidator = require('./DataValidators/IsLatitudeValidDataValidator/isLatitudeValidDataValidator');
const IsLongitudeValidDataValidator = require('./DataValidators/IsLongitudeValidDataValidator/isLongitudeValidDataValidator');

class ValidatorProvider {
    getProvidedValidators() {
        return [
            new IsArrayDataValidator(),
            new IsNotNullArrayDataValidator(),
            new IsDatasetFormatValidDataValidator(),
            new IsLatitudeValidDataValidator(),
            new IsLongitudeValidDataValidator(),
        ]
    }
}

module.exports = ValidatorProvider;
