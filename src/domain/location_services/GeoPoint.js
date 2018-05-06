'use strict';

const _ = require('lodash');
const deg2rad = require('compute-deg2rad');
const rad2deg = require('compute-rad2deg');

const cos = Math.cos;
const asin = Math.asin;
const sin = Math.sin;
const acos = Math.acos;
const atan2 = Math.atan2;

module.exports = class GeoPoint {
  /**
   *
   * @param longitude {number}
   * @param latitude {number}
   * @returns {GeoPoint}
   */
  constructor(longitude, latitude) {
    GeoPoint.validateCoordinates(longitude,latitude);
    this.longitude = Number(longitude);
    this.latitude = Number(latitude);
  }

  /**
   *
   * @param startPoint {GeoPoint}
   * @param endPoint {GeoPoint}
   * @returns {number}
   */
  static calculateSlopeBetweenPoints(startPoint, endPoint){
    const φ1 = deg2rad(startPoint.latitude), φ2 = deg2rad(endPoint.latitude);
    const Δλ = deg2rad(endPoint.longitude - startPoint.longitude);

    // see http://mathforum.org/library/drmath/view/55417.html
    const y = sin(Δλ) * cos(φ2);
    const x = cos(φ1) * sin(φ2) - sin(φ1) * cos(φ2) * cos(Δλ);
    const θ = atan2(y, x);

    return (rad2deg(θ) + 360) % 360;
  }

  /**
   *
   * @param point {GeoPoint}
   * @param bearing {number}
   * @param distance {number}
   * @returns {GeoPoint}
   */
  static getPointOffset(point, bearing, distance){
    //calculations source - https://www.movable-type.co.uk/scripts/latlong.html
    const radius = 6371e3;
    const δ = Number(distance) / radius; // angular distance in radians
    const θ = deg2rad(Number(bearing));

    const φ1 = deg2rad(point.latitude);
    const λ1 = deg2rad(point.longitude);

    const sinφ1 = sin(φ1), cosφ1 = cos(φ1);
    const sinδ = sin(δ), cosδ = cos(δ);
    const sinθ = sin(θ), cosθ = cos(θ);

    const sinφ2 = sinφ1 * cosδ + cosφ1 * sinδ * cosθ;
    const φ2 = asin(sinφ2);
    const y = sinθ * sinδ * cosφ1;
    const x = cosδ - sinφ1 * sinφ2;
    const λ2 = λ1 + atan2(y, x);

    const latitude = rad2deg(φ2);
    const longitude = (rad2deg(λ2) + 540) % 360 - 180; // normalise to −180..+180°

    return new GeoPoint(longitude, latitude);
  }

  /**
   *
   * @param longitude {number}
   * @param latitude {number}
   * @returns {bool}
   */
  static validateCoordinates(longitude, latitude){
    if (_.isUndefined(latitude) || _.isUndefined(longitude)) {
      throw new RangeError('Invalid geo point arguments');
    }
    if (latitude < -90 || latitude > 90) {
      throw new RangeError('Invalid latitude value');
    }
    if (longitude < -180 || longitude > 180) {
      throw new RangeError('Invalid longitude value');
    }
    return true;
  }
}
