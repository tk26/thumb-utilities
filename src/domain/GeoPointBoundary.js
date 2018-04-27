const GeoPoint = require('./GeoPoint.js');

module.exports = class GeoPointBoundary {
    /**
   *
   * @param nw
   * @param ne
   * @param se
   * @param sw
   */
  constructor(startOffset1, startOffset2, endOffset1, endOffset2) {
    this.startOffset1 = startOffset1;
    this.startOffset2 = startOffset2;
    this.endOffset1 = endOffset1;
    this.endOffset2 = endOffset2;
  }

    /**
   *
   * @param startPoint {GeoPoint}
   * @param endPoint {GeoPoint}
   * @param distanceToAdd {Number}
   * @returns {GeoPointBoundary}
   */
  static calculateBoundaryAroundPoints(startPoint, endPoint, distanceToAdd){
    //get slope
    const s = GeoPoint.calculateSlopeBetweenPoints(startPoint, endPoint);

    const startOffset1 = GeoPoint.getPointOffset(startPoint, s + 90, distanceToAdd);
    const startOffset2 = GeoPoint.getPointOffset(startPoint, s - 90, distanceToAdd);
    const endOffset1 = GeoPoint.getPointOffset(endPoint, s + 90, distanceToAdd);
    const endOffset2 = GeoPoint.getPointOffset(endPoint, s - 90, distanceToAdd);

    return new GeoPointBoundary(startOffset1, startOffset2, endOffset1, endOffset2);
  }
}
