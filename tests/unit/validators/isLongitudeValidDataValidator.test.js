const DataValidator = require('../../../model/PathFinder/Validator/DataValidators/IsLongitudeValidDataValidator/isLongitudeValidDataValidator');
const validator = new DataValidator();

describe('isLongitudeValidDataValidator', () => {
    it('throws an error when dataset longitude is higher than allowed', () => {
        const invalidDataset = [{latitude: 34, longitude: 220}];

        expect(() => validator.execute(invalidDataset)).toThrow(Error);
    });

    it('throws an error when dataset longitude is lower than allowed', () => {
        const invalidDataset = [{latitude: -91, longitude: -440}];

        expect(() => validator.execute(invalidDataset)).toThrow(Error);
    });
});
