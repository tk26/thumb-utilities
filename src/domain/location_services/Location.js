const Address = require('./Address.js');
const GeoPoint = require('./GeoPoint.js');

module.exports = class Location {
  /**
   * @param address {string}
   * @param city {string}
   * @param longitude {number}
   * @param latitude {number}
   * @returns {Location}
   */
  constructor(address, city, longitude, latitude){
    this.address = address;
    this.city = city;
    this.coordinates = new GeoPoint(longitude, latitude);
  }
}
