const AbstractDataValidator = require('../abstractDataValidator');

class IsDatasetFormatValidDataValidator extends AbstractDataValidator {
    execute(data) {
        for (let x of data) {
            if (!x.hasOwnProperty('longitude') || !x.hasOwnProperty('latitude')) {
                throw new Error('Dataset contains not valid data objects');
            }
        }
    }
}

module.exports = IsDatasetFormatValidDataValidator;
