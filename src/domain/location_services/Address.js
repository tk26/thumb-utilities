module.exports = class Address {
    /**
   * @param region {String}
   * @param street {String}
   * @param city {String}
   * @param country {String}
   * @param postalCode {String}
   * @param isoCountryCode {String}
   * @param name {String}
   * @returns {Location}
   */
  constructor(region, street, city, country, postalCode, isoCountryCode, name){
    this.region = region;
    this.street = street;
    this.city = city;
    this.country = country;
    this.postalCode = postalCode;
    this.isoCountryCode = isoCountryCode;
    this.name = name;
  }
}
