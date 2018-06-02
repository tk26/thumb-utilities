let uuid = require('uuid/v1');

module.exports = class Invitation{
  /**
   * @param fromUserId {String}
   * @param toUserId {String}
   * @param sentOn {Date} - Optional param.  When not provided, the current datetime will be used.
   * @param invitationId {String} - Optional param.  When not provided, a new UUID will be created.
   * @param comment {Array}
   * @returns {Invitation}
   */
  constructor({fromUserId, toUserId, sentOn = new Date(), invitationId = uuid(), comment = null}){
    if(!fromUserId || fromUserId === null){
      throw new TypeError('From UserId is required to create Invitation.');
    }

    if(!toUserId || toUserId === null){
      throw new TypeError('To UserId is required to create Invitation.');
    }

    if (fromUserId === toUserId) {
      throw Error('From User and To User must be different.');
    }
    this.fromUserId = fromUserId;
    this.toUserId = toUserId;
    this.sentOn = sentOn;
    this.invitationId = invitationId;
    this.comment = comment;
  }
}
