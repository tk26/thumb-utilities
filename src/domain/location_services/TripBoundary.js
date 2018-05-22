const GeoPoint = require('./GeoPoint.js');

module.exports = class TripBoundary {
    /**
   *
   * @param startOffset1
   * @param startOffset2
   * @param endOffset1
   * @param endOffset2
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
   * @returns {TripBoundary}
   */
  static calculateBoundaryAroundPoints(startPoint, endPoint, distanceToAdd){
    //get slope
    let s = GeoPoint.calculateSlopeBetweenPoints(startPoint, endPoint);

    const adjustedStartPoint = GeoPoint.getPointOffset(startPoint, s - 180, distanceToAdd);
    const adjustedEndPoint = GeoPoint.getPointOffset(endPoint, s, distanceToAdd);

    const startOffset1 = GeoPoint.getPointOffset(adjustedStartPoint, s + 90, distanceToAdd);
    const startOffset2 = GeoPoint.getPointOffset(adjustedStartPoint, s - 90, distanceToAdd);
    const endOffset1 = GeoPoint.getPointOffset(adjustedEndPoint, s + 90, distanceToAdd);
    const endOffset2 = GeoPoint.getPointOffset(adjustedEndPoint, s - 90, distanceToAdd);

    return new TripBoundary(startOffset1, startOffset2, endOffset1, endOffset2);
  }

      /**
   *
   * @param boundary {TripBoundary}
   * @returns {String}
   */
  ToPolygonString(){
    let boundary = 'POLYGON((';
    boundary += this.startOffset1.latitude + ' ' + this.startOffset1.longitude + ', ';
    boundary += this.startOffset2.latitude + ' ' + this.startOffset2.longitude + ', ';
    boundary += this.endOffset2.latitude + ' ' + this.endOffset2.longitude + ', ';
    boundary += this.endOffset1.latitude + ' ' + this.endOffset1.longitude + ', ';
    boundary += this.startOffset1.latitude + ' ' + this.startOffset1.longitude + '))';
    return boundary;
  }
}
