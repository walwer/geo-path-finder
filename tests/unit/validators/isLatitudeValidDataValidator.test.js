const DataValidator = require('../../../model/PathFinder/Validator/DataValidators/IsLatitudeValidDataValidator/isLatitudeValidDataValidator');
const validator = new DataValidator();

describe('isLatitudeValidDataValidator', () => {
    it('throws an error when dataset latitude is higher than allowed', () => {
        const invalidDataset = [{latitude: 220, longitude: 20}];

        expect(() => validator.execute(invalidDataset)).toThrow(Error);
    });

    it('throws an error when dataset latitude is lower than allowed', () => {
        const invalidDataset = [{latitude: -91, longitude: 20}];

        expect(() => validator.execute(invalidDataset)).toThrow(Error);
    });
});
