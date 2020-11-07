const ValidatorProvider = require('./validatorProvider');

class ValidationEngine {
    constructor() {
        this.validatorProvider = new ValidatorProvider();
    }

    validate(data) {
        try {
            for(let validator of this.validatorProvider.getProvidedValidators()) {
                validator.execute(data);
            }
        } catch (error) {
            //TODO: To customize the main abstract Error interface for named Errors
            throw Error(error);
        }
    }
}

module.exports = ValidationEngine;
