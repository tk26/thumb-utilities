const Address = require('../../src/domain/location_services/Address.js');
const GeoPoint = require('../../src/domain/location_services/GeoPoint.js');
const Location = require('../../src/domain/location_services/Location.js');
let chai = require('chai');
let should = chai.should();

describe('Location', () => {
  describe('constructor', () => {
    it('should create location object when provided all properties', () => {
      const address = '2–40 S Ohio St Martinsville, IN 46151 US';
      const city = 'Martinsville';
      const location = new Location(address, city, -86.42370196690753, 39.426645878197746);
      location.address.should.equal('2–40 S Ohio St Martinsville, IN 46151 US');
      location.city.should.equal('Martinsville');
      location.coordinates.longitude.should.equal(-86.42370196690753);
      location.coordinates.latitude.should.equal(39.426645878197746);
    });
  });
});
