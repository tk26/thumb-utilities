const Address = require('./Address.js');
const GeoPoint = require('./GeoPoint.js');

module.exports = class Location {
  /**
   * @param address {Address}
   * @param longitude {number}
   * @param latitude {number}
   * @returns {Location}
   */
  constructor(address, longitude, latitude){
    this.address = new Address(address.region, address.street, address.city, address.country, address.postalCode, address.isoCountryCode, address.name);
    this.coordinates = new GeoPoint(longitude, latitude);
  }
}
