const GeoPoint = require('../../src/domain/location_services/GeoPoint.js');
let chai = require('chai');
let should = chai.should();

describe('GeoPoint', () => {
  describe('validateCoordinates', () => {
    it('should throw RangeError when provided no latitude', () => {
      let invalidConstruct = function() {
        let lat;
        var p1 = new GeoPoint(1, lat);
      };
      chai.expect(invalidConstruct).to.throw(RangeError);
    });
    it('should throw RangeError when provided no longitude', () => {
      let invalidConstruct = function() {
        let long;
        var p1 = new GeoPoint(long,1);
      };
      chai.expect(invalidConstruct).to.throw(RangeError);
    });
    it('should throw RangeError when provided latitude greater than 90', () => {
      let invalidConstruct = function() {
        let long;
        var p1 = new GeoPoint(180,91);
      };
      chai.expect(invalidConstruct).to.throw(RangeError);
    });
    it('should throw RangeError when provided latitude less than -90', () => {
      let invalidConstruct = function() {
        let long;
        var p1 = new GeoPoint(-180,-91);
      };
      chai.expect(invalidConstruct).to.throw(RangeError);
    });
    it('should throw RangeError when provided longitude greater than 180', () => {
      let invalidConstruct = function() {
        let long;
        var p1 = new GeoPoint(181,90);
      };
      chai.expect(invalidConstruct).to.throw(RangeError);
    });
    it('should throw RangeError when provided longitude less than -180', () => {
      let invalidConstruct = function() {
        let long;
        var p1 = new GeoPoint(-181,-90);
      };
      chai.expect(invalidConstruct).to.throw(RangeError);
    });
  });

  describe('constructor', () => {
    it('should create point when provided max longitude and latitude', () => {
      let point = new GeoPoint(180,90);
      point.latitude.should.equal(90);
      point.longitude.should.equal(180);
    });
    it('should create point when provided min longitude and latitude', () => {
      let point = new GeoPoint(-180,-90);
      point.latitude.should.equal(-90);
      point.longitude.should.equal(-180);
    });
  })

  describe('calculateSlopeBetweenPoints', () => {
    it('should calculate correct slope when provided 2 valid points', () => {
      const startPoint = new GeoPoint(1,1);
      const endPoint = new GeoPoint(2,2);
      GeoPoint.calculateSlopeBetweenPoints(startPoint, endPoint).should.equal(44.978182941465036);
    });
  });
});
