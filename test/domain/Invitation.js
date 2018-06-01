const chai = require('chai');
const Invitation = require('../../src/domain/Invitation.js');
const should = chai.should();
const uuid = require('uuid/v1');

describe('Invitation', () => {
  describe('constructor tests', () => {
    const fromUserId = uuid();
    const toUserId = uuid();
    const sentOn = new Date('3/31/2018');
    const invitationId = uuid();
    const comment = 'Test invitation.';

    it('should throw type error when no fromUserId is provided', () => {
      let inv = function(){new Invitation({toUserId : toUserId, sentOn : sentOn, invitationId : invitationId, comment : comment})};
      chai.expect(inv).to.throw(TypeError);
      inv = function(){new Invitation({fromUserId: null, toUserId : toUserId, sentOn : sentOn, invitationId : invitationId, comment : comment})};
      chai.expect(inv).to.throw(TypeError);
    });
    it('should throw type error when no toUserId is provided', () => {
      let inv = function(){new Invitation({fromUserId : fromUserId, sentOn : sentOn, invitationId : invitationId, comment : comment})};
      chai.expect(inv).to.throw(TypeError);
      inv = function(){new Invitation({fromUserId: fromUserId, toUserId : null, sentOn : sentOn, invitationId : invitationId, comment : comment})};
      chai.expect(inv).to.throw(TypeError);
    });
    it('should properly set all properties when provided all parameters', () => {
      let inv = new Invitation({fromUserId: fromUserId, toUserId : toUserId, sentOn : sentOn, invitationId : invitationId, comment : comment});
      inv.fromUserId.should.equal(fromUserId);
      inv.toUserId.should.equal(toUserId);
      inv.sentOn.should.equal(sentOn);
      inv.invitationId.should.equal(invitationId);
      inv.comment.should.equal(comment);
    });
    it('should properly set defaults when provided only fromUserId and toUserId', () => {
      let inv = new Invitation({fromUserId: fromUserId, toUserId : toUserId});
      inv.invitationId.should.not.be.null;
      inv.sentOn.should.not.be.null;
      chai.expect(inv.comment).to.be.null;
    });
  });
});
