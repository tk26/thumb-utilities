const Address = require('../../src/domain/location_services/Address.js');
let chai = require('chai');
let should = chai.should();

describe('Address', () => {
  describe('constructor', () => {
    it('should create address object when provided all properties', () => {
      const address = new Address('IN','S Ohio St','Martinsville','United States','46151','US','2–40 S Ohio St');
      address.region.should.equal('IN');
      address.city.should.equal('Martinsville');
      address.country.should.equal('United States');
      address.postalCode.should.equal('46151');
      address.isoCountryCode.should.equal('US');
      address.name.should.equal('2–40 S Ohio St');
    });
  });
})
