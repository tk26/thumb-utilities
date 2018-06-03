const User = require('../../src/validation/User.js');
let chai = require('chai');
let should = chai.should();

describe('User', () => {
    describe('validateUsername tests', () => {
        it('should return invalid for length less than 3', () => {
            chai.expect(false).to.equal(User.validateUsername('ab'));
        });

        it('should return invalid for length more than 30', () => {
            chai.expect(false).to.equal(User.validateUsername('a'.repeat(31)));
        });

        it('should return invalid for special characters other than . or _', () => {
            chai.expect(false).to.equal(User.validateUsername('ab$cd'));
        });

        it('should return valid for alphanumeric and . and _ characters', () => {
            chai.expect(true).to.equal(User.validateUsername('Ab.cd_eF.12'));
        });
    });
});
