const DataValidator = require('../../../model/PathFinder/Validator/DataValidators/IsNotNullArrayDataValidator/isNotNullDataValidator');
const validator = new DataValidator();

describe('isNotNullDataValidator', () => {
    it('throws an error when data is an empty array', () => {
        const emptyArrayData = [];

        expect(() => validator.execute(emptyArrayData)).toThrow(Error);
    })
});
