'use strict';

const _ = require('lodash');
const deg2rad = require('compute-deg2rad');
const rad2deg = require('compute-rad2deg');

module.exports = class GeoPoint {
  constructor(longitude, latitude) {
    if (_.isUndefined(latitude) || _.isUndefined(longitude)) {
      throw new RangeError('Invalid geo point arguments');
    }
    if (latitude < -90 || latitude > 90) {
      throw new RangeError('Invalid latitude value');
    }

    if (longitude < -180 || longitude > 180) {
      throw new RangeError('Invalid longitude value');
    }

    this.longitude = longitude;
    this.latitude = latitude;
  }

  /**
   *
   * @param startPoint {GeoPoint}
   * @param endPoint {GeoPoint}
   * @returns {number}
   */
  static calculateSlopeBetweenPoints(startPoint, endPoint){
    const slopeInRadians = Math.atan2(endPoint.latitude - startPoint.latitude, endPoint.longitude - startPoint.longitude);
    return rad2deg(slopeInRadians);
  }

  static getPointOffset(point, bearing, distance){
    //calculations source - https://www.movable-type.co.uk/scripts/latlong.html
    let
        radius = 6371e3, //meters
        δ = distance / radius, // angular distance in radians
        θ = deg2rad(bearing),
        φ1 = deg2rad(point.latitude),
        λ1 = deg2rad(point.longitude);

    let φ2 = Math.asin(Math.sin(φ1)*Math.cos(δ) + Math.cos(φ1)*Math.sin(δ)*Math.cos(θ));
    let λ2 = λ1 + Math.atan2(Math.sin(θ)*Math.sin(δ)*Math.cos(φ1), Math.cos(δ)-Math.sin(φ1)*Math.sin(φ2));
    λ2 = (λ2+3*Math.PI) % (2*Math.PI) - Math.PI; // normalise to -180..+180°

    const offSetLat = λ2
    return new GeoPoint(rad2deg(λ2), rad2deg(φ2));
  }
}
