const DataValidator = require('../../../model/PathFinder/Validator/DataValidators/IsArrayDataValidator/isArrayDataValidator');
const validator = new DataValidator();

describe('isArrayDataValidator', () => {
    it('throws an error when data is not array', () => {
        const notArrayData = 'hello here is the string';

        expect(() => validator.execute(notArrayData)).toThrow(Error);
    })
});
