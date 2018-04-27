const GeoPoint = require('../../src/domain/GeoPoint.js');
const GeoPointBoundary = require('../../src/domain/GeoPointBoundary.js');
let chai = require('chai');
let should = chai.should();

describe('GeoPointBoundary', () => {
  const offsetDistance = 16093.4; //10 miles converted to meters
  it('should return correct boundary when traveling northeast', () => {
    const startPoint = new GeoPoint(1,1);
    const endPoint = new GeoPoint(2,2);
    const boundary = GeoPointBoundary.calculateBoundaryAroundPoints(startPoint,endPoint,offsetDistance);
    chai.expect({ longitude: 1.1023530778921904, latitude: 0.8976578881987839 }).to.deep.equal(boundary.startOffset1);
    chai.expect({ longitude: 0.8976405396035199, latitude: 1.1023389210325736 }).to.deep.equal(boundary.startOffset2);
    chai.expect({ longitude: 2.102396673797792, latitude: 1.8976562919913418 }).to.deep.equal(boundary.endOffset1);
    chai.expect({ longitude: 1.8975905514660165, latitude: 2.102337324526445 }).to.deep.equal(boundary.endOffset2);
    console.log(boundary);
  });

  it('should return correct boundary when traveling northwest', () => {

  });

  it('should return correct boundary when traveling southeast', () => {

  });

  it('should return correct boundary when traveling southwest', () => {

  });

  it('should return correct boundary when traveling north', () => {

  });

  it('should return correct boundary when traveling south', () => {

  });

  it('should return correct boundary when traveling east', () => {

  });

  it('should return correct boundary when traveling west', () => {

  });
})
