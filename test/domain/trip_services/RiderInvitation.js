const chai = require('chai');
const RiderInvitation = require('../../../src/domain/trip_services/RiderInvitation.js');
const should = chai.should();
const uuid = require('uuid/v1');

describe('RiderInvitation', () => {
  describe('constructor tests', () => {
    const fromUserId = uuid();
    const toUserId = uuid();
    const sentOn = new Date('3/31/2018');
    const invitationId = uuid();
    const comment = 'Test invitation.';
    const driveId = uuid();
    const requestedTime = '3pm';
    const rideId = uuid();

    it('should correctly construct RiderInvitation with all properties when all params are provided', () => {
      let riderInvite = new RiderInvitation({fromUserId, toUserId, sentOn, invitationId, comment, driveId, requestedTime, rideId});
      riderInvite.fromUserId.should.equal(fromUserId);
      riderInvite.toUserId.should.equal(toUserId);
      riderInvite.sentOn.should.equal(sentOn);
      riderInvite.invitationId.should.equal(invitationId);
      riderInvite.comment.should.equal(comment);
      riderInvite.driveId.should.equal(driveId);
      riderInvite.requestedTime.should.equal(requestedTime);
      riderInvite.rideId.should.equal(rideId);
    });
    it('should throw exception when driveId is not provided', () => {
      let inv = function(){new RiderInvitation({fromUserId, toUserId, sentOn, invitationId, comment, requestedTime, rideId})};
      chai.expect(inv).to.throw(TypeError);
      inv = function(){new RiderInvitation({fromUserId, toUserId, sentOn, invitationId, comment, driveId:null, requestedTime, rideId})};
      chai.expect(inv).to.throw(TypeError);
    });
    it('should throw exception when requestedTime is not provided', () => {
      let inv = function(){new RiderInvitation({fromUserId, toUserId, sentOn, invitationId, comment, driveId, rideId})};
      chai.expect(inv).to.throw(TypeError);
      inv = function(){new RiderInvitation({fromUserId, toUserId, sentOn, invitationId, comment, driveId, requestedTime: null, rideId})};
      chai.expect(inv).to.throw(TypeError);
    });
  });
});
