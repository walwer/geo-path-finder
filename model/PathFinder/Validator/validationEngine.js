const ValidatorProvider = require('./validatorProvider');

class ValidationEngine {
    constructor() {
        this.validatorProvider = new ValidatorProvider();
    }

    validate(data) {
        for(let validator of this.validatorProvider.getProvidedValidators()) {
            validator.execute(data);
        }
        //TODO: To customize the main abstract Error interface for named Errors - should be in try catch
    }
}

module.exports = ValidationEngine;
