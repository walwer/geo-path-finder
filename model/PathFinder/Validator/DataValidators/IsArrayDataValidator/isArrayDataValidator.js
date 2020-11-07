const AbstractDataValidator = require('../abstractDataValidator');

class IsArrayDataValidator extends AbstractDataValidator {
    execute(data) {
        if (!Array.isArray(data)) {
            throw new Error('Data should be an array');
        }
    }
}

module.exports = IsArrayDataValidator;
