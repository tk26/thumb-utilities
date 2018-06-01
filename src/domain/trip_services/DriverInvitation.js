let Invitation = require('../Invitation.js');

module.exports = class DriverInvitation extends Invitation {
  /**
   * @param {String} fromUserId
   * @param {String} toUserId
   * @param {Date} sentOn - Optional param.  When not provided, the current datetime will be used.
   * @param {String} invitationId - Optional param.  When not provided, a new UUID will be created.
   * @param {String} comment
   * @param {String} rideId
   * @param {String} requestedTime
   * @param {String} driveId
   * @returns {DriverInvitation}
   */
  constructor({fromUserId, toUserId, sentOn, invitationId, comment, rideId, requestedTime, driveId}){
    super({fromUserId : fromUserId, toUserId : toUserId, sentOn : sentOn, invitationId : invitationId, comment : comment});
    if(!rideId || rideId === null) {
      throw new TypeError('RideId is required for a Driver Invitation');
    }

    if(!requestedTime || requestedTime === null){
      throw new TypeError('Requested Time is required for a Driver Invitation');
    }
    this.rideId = rideId;
    this.requestedTime = requestedTime;
    this.driveId = driveId;
  }
}
