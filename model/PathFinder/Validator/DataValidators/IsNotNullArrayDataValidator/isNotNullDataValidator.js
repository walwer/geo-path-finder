const AbstractDataValidator = require('../abstractDataValidator');

class isNotNullDataValidator extends AbstractDataValidator {
    execute(data) {
        if (data.length === 0) {
            throw new Error('Data should be an empty array');
        }
    }
}

module.exports = isNotNullDataValidator;
