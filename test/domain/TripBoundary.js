const GeoPoint = require('../../src/domain/location_services/GeoPoint.js');
const TripBoundary = require('../../src/domain/location_services/TripBoundary.js');
let chai = require('chai');
let should = chai.should();

describe('TripBoundary', () => {
  const offsetDistance = 16093.4; //10 miles converted to meters

  it('should return correct boundary when traveling north', () => {
    const startPoint = new GeoPoint(1,1);
    const endPoint = new GeoPoint(1,2);
    const boundary = TripBoundary.calculateBoundaryAroundPoints(startPoint,endPoint,offsetDistance);
    chai.expect({ longitude: 1.1447475494911714, latitude: 0.8552658477898656 }).to.deep.equal(boundary.startOffset1);
    chai.expect({ longitude: 0.8552524505088286, latitude: 0.8552658477898656 }).to.deep.equal(boundary.startOffset2);
    chai.expect({ longitude: 1.1448328810657813, latitude: 2.144724577498668 }).to.deep.equal(boundary.endOffset1);
    chai.expect({ longitude: 0.8551671189342187, latitude: 2.144724577498668 }).to.deep.equal(boundary.endOffset2);
  });

  it('should return correct boundary when traveling northeast', () => {
    const startPoint = new GeoPoint(1,1);
    const endPoint = new GeoPoint(2,2);
    const boundary = TripBoundary.calculateBoundaryAroundPoints(startPoint,endPoint,offsetDistance);
    chai.expect({ longitude: 1.0000752468561132, latitude: 0.7953159547163523 }).to.deep.equal(boundary.startOffset1);
    chai.expect({ longitude: 0.7952908335972779, latitude: 0.9999190343075017 }).to.deep.equal(boundary.startOffset2);
    chai.expect({ longitude: 2.204812335815859, latitude: 2.0000713913151738 }).to.deep.equal(boundary.endOffset1);
    chai.expect({ longitude: 1.9999151305155465, latitude: 2.2046744705463244 }).to.deep.equal(boundary.endOffset2);
  });

  it('should return correct boundary when traveling east', () => {
    const startPoint = new GeoPoint(1,1);
    const endPoint = new GeoPoint(2,1);
    const boundary = TripBoundary.calculateBoundaryAroundPoints(startPoint,endPoint,offsetDistance);
    chai.expect({ longitude: 0.8552685784922005, latitude: 0.85524334431765 }).to.deep.equal(boundary.startOffset1);
    chai.expect({ longitude: 0.8552244850900479, latitude: 1.144706187614192 }).to.deep.equal(boundary.startOffset2);
    chai.expect({ longitude: 2.144775514910293, latitude: 0.8552874308638011 }).to.deep.equal(boundary.endOffset1);
    chai.expect({ longitude: 2.1447314215074584, latitude: 1.144750274160343 }).to.deep.equal(boundary.endOffset2);
  });

  it('should return correct boundary when traveling southeast', () => {
    const startPoint = new GeoPoint(1,1);
    const endPoint = new GeoPoint(2,0);
    const boundary = TripBoundary.calculateBoundaryAroundPoints(startPoint,endPoint,offsetDistance);
    chai.expect({ longitude: 0.7952844349864563, latitude: 0.9999810578110647 }).to.deep.equal(boundary.startOffset1);
    chai.expect({ longitude: 0.9999880903221765, latitude: 1.204677678189838 }).to.deep.equal(boundary.startOffset2);
    chai.expect({ longitude: 2.000015098428321, latitude: -0.20468086912041755 }).to.deep.equal(boundary.endOffset1);
    chai.expect({ longitude: 2.204681195583021,latitude: 0.00001575137819338898 }).to.deep.equal(boundary.endOffset2);
  });

  it('should return correct boundary when traveling south', () => {
    const startPoint = new GeoPoint(1,1);
    const endPoint = new GeoPoint(1,0);
    const boundary = TripBoundary.calculateBoundaryAroundPoints(startPoint,endPoint,offsetDistance);
    chai.expect({ longitude: 0.8552396855002371, latitude: 1.1447277706473957 }).to.deep.equal(boundary.startOffset1);
    chai.expect({ longitude: 1.144760314499763, latitude: 1.1447277706473957 }).to.deep.equal(boundary.startOffset2);
    chai.expect({ longitude: 0.8552681149170667, latitude: -0.1447309615694532 }).to.deep.equal(boundary.endOffset1);
    chai.expect({ longitude: 1.1447318850829333,latitude: -0.14473096156945317 }).to.deep.equal(boundary.endOffset2);
  });

  it('should return correct boundary when traveling southwest', () => {
    const startPoint = new GeoPoint(1,1);
    const endPoint = new GeoPoint(0,0);
    const boundary = TripBoundary.calculateBoundaryAroundPoints(startPoint,endPoint,offsetDistance);
    chai.expect({ longitude: 1.0000119096778235, latitude: 1.2046776781898376 }).to.deep.equal(boundary.startOffset1);
    chai.expect({ longitude: 1.2047155650135437, latitude: 0.9999810578110647 }).to.deep.equal(boundary.startOffset2);
    chai.expect({ longitude: -0.20468119558302078, latitude: 0.000015751378193326857 }).to.deep.equal(boundary.endOffset1);
    chai.expect({ longitude: -0.00001509842832092545, latitude: -0.20468086912041764 }).to.deep.equal(boundary.endOffset2);
  });

  it('should return correct boundary when traveling west', () => {
    const startPoint = new GeoPoint(1,1);
    const endPoint = new GeoPoint(0,1);
    const boundary = TripBoundary.calculateBoundaryAroundPoints(startPoint,endPoint,offsetDistance);
    chai.expect({ longitude: 1.144775514909952, latitude: 1.144706187614192 }).to.deep.equal(boundary.startOffset1);
    chai.expect({ longitude: 1.1447314215077995, latitude: 0.85524334431765 }).to.deep.equal(boundary.startOffset2);
    chai.expect({ longitude: -0.14473142150745844, latitude: 1.144750274160343 }).to.deep.equal(boundary.endOffset1);
    chai.expect({ longitude: -0.14477551491029317,latitude: 0.8552874308638011 }).to.deep.equal(boundary.endOffset2);
  });

  it('should return correct boundary when traveling northwest', () => {
    const startPoint = new GeoPoint(1,1);
    const endPoint = new GeoPoint(0,2);
    const boundary = TripBoundary.calculateBoundaryAroundPoints(startPoint,endPoint,offsetDistance);
    chai.expect({ longitude: 1.204709166402722, latitude: 0.9999190343075017 }).to.deep.equal(boundary.startOffset1);
    chai.expect({ longitude: 0.9999247531438868, latitude: 0.7953159547163522 }).to.deep.equal(boundary.startOffset2);
    chai.expect({ longitude: 0.00008486948445352027,latitude: 2.2046744705463244 }).to.deep.equal(boundary.endOffset1);
    chai.expect({ longitude: -0.20481233581585911, latitude: 2.000071391315173 }).to.deep.equal(boundary.endOffset2);
  });
})
