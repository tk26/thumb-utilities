const Address = require('../../src/domain/location_services/Address.js');
const GeoPoint = require('../../src/domain/location_services/GeoPoint.js');
const Location = require('../../src/domain/location_services/Location.js');
let chai = require('chai');
let should = chai.should();

describe('Location', () => {
  describe('constructor', () => {
    it('should create location object when provided all properties', () => {
      const address = new Address('IN','S Ohio St','Martinsville','United States','46151','US','2–40 S Ohio St');
      const location = new Location(address, -86.42370196690753, 39.426645878197746);
      location.address.region.should.equal('IN');
      location.address.city.should.equal('Martinsville');
      location.address.country.should.equal('United States');
      location.address.postalCode.should.equal('46151');
      location.address.isoCountryCode.should.equal('US');
      location.address.name.should.equal('2–40 S Ohio St');
      location.coordinates.longitude.should.equal(-86.42370196690753);
      location.coordinates.latitude.should.equal(39.426645878197746);
    });
  });
});
