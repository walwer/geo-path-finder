const IsArrayDataValidator = require('./DataValidators/IsArrayDataValidator/isArrayDataValidator');
const IsNotNullArrayDataValidator = require('./DataValidators/IsNotNullArrayDataValidator/isNotNullDataValidator');
const IsDatasetFormatValidDataValidator = require('./DataValidators/IsDatasetFormatValidDataValidator/isDatasetFormatValidDataValidator');

class ValidatorProvider {
    getProvidedValidators() {
        return [
            new IsArrayDataValidator(),
            new IsNotNullArrayDataValidator(),
            new IsDatasetFormatValidDataValidator(),
        ]
    }
}

module.exports = ValidatorProvider;
