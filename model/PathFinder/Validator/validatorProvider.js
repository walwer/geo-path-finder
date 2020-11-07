const IsArrayDataValidator = require('./DataValidators/IsArrayDataValidator/isArrayDataValidator');
const IsNotNullArrayDataValidator = require('./DataValidators/IsNotNullArrayDataValidator/isNotNullDataValidator');
const IsDatasetFormatValidDataValidator = require('./DataValidators/IsDatasetFormatValidDataValidator/isDatasetFormatValidDataValidator');
const IsLatitudeValidDataValidator = require('./DataValidators/IsLatitudeValidDataValidator/isLatitudeValidDataValidator');

class ValidatorProvider {
    getProvidedValidators() {
        return [
            new IsArrayDataValidator(),
            new IsNotNullArrayDataValidator(),
            new IsDatasetFormatValidDataValidator(),
            new IsLatitudeValidDataValidator(),
        ]
    }
}

module.exports = ValidatorProvider;
