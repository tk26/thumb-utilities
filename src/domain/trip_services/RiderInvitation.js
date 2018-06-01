let Invitation = require('../Invitation.js');

module.exports = class RiderInvitation extends Invitation {
  /**
   * @param {String} fromUserId
   * @param {String} toUserId
   * @param {Date} sentOn - Optional param.  When not provided, the current datetime will be used.
   * @param {String} invitationId - Optional param.  When not provided, a new UUID will be created.
   * @param {String} comment
   * @param {String} driveId
   * @param {String} requestedTime
   * @param {String} rideId
   * @returns {RiderInvitation}
   */
  constructor({fromUserId, toUserId, sentOn, invitationId, comment, driveId, requestedTime, rideId}){
    super({fromUserId : fromUserId, toUserId : toUserId, sentOn : sentOn, invitationId : invitationId, comment : comment});
    if(!driveId || driveId === null) {
      throw new TypeError('DriveId is required for a Rider Invitation');
    }

    if(!requestedTime || requestedTime === null){
      throw new TypeError('Requested Time is required for a Rider Invitation');
    }
    this.driveId = driveId;
    this.requestedTime = requestedTime;
    this.rideId = rideId;
  }
}
