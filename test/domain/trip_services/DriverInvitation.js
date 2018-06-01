const chai = require('chai');
const DriverInvitation = require('../../../src/domain/trip_services/DriverInvitation.js');
const should = chai.should();
const uuid = require('uuid/v1');

describe('DriverInvitation', () => {
  describe('constructor tests', () => {
    const fromUserId = uuid();
    const toUserId = uuid();
    const sentOn = new Date('3/31/2018');
    const invitationId = uuid();
    const comment = 'Test invitation.';
    const driveId = uuid();
    const requestedTime = '3pm';
    const rideId = uuid();

    it('should correctly construct DriverInvitation with all properties when all params are provided', () => {
      let driverInvite = new DriverInvitation({fromUserId, toUserId, sentOn, invitationId, comment, rideId, requestedTime, driveId});
      driverInvite.fromUserId.should.equal(fromUserId);
      driverInvite.toUserId.should.equal(toUserId);
      driverInvite.sentOn.should.equal(sentOn);
      driverInvite.invitationId.should.equal(invitationId);
      driverInvite.comment.should.equal(comment);
      driverInvite.driveId.should.equal(driveId);
      driverInvite.requestedTime.should.equal(requestedTime);
      driverInvite.rideId.should.equal(rideId);
    });
    it('should throw exception when rideId is not provided', () => {
      let inv = function(){new DriverInvitation({fromUserId, toUserId, sentOn, invitationId, comment, requestedTime, driveId})};
      chai.expect(inv).to.throw(TypeError);
      inv = function(){new DriverInvitation({fromUserId, toUserId, sentOn, invitationId, comment, rideId: null, requestedTime, driveId})};
      chai.expect(inv).to.throw(TypeError);
    });
    it('should throw exception when requestedTime is not provided', () => {
      let inv = function(){new DriverInvitation({fromUserId, toUserId, sentOn, invitationId, comment, rideId, driveId})};
      chai.expect(inv).to.throw(TypeError);
      inv = function(){new DriverInvitation({fromUserId, toUserId, sentOn, invitationId, comment, rideId, requestedTime: null, driveId})};
      chai.expect(inv).to.throw(TypeError);
    });
  });
});
