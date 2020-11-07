const DataValidator = require('../../../model/PathFinder/Validator/DataValidators/IsDatasetFormatValidDataValidator/isDatasetFormatValidDataValidator');
const validator = new DataValidator()

describe('isDatasetFormatValidDataValidator', () => {
    it('throws an error when dataset is invalid', () => {
        const invalidDataset = [{logitude: 21, latitude: 30}, {longotuuudee: 2, latitude: 5}];

        expect(() => validator.execute(invalidDataset)).toThrow(Error);
    })
});
