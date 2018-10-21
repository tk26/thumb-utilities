const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3();

module.exports = class FileClient {
  /**
   * @param {String} bucket - S3 bucket to upload to
   * @param {String} fileData - file in base64 format
   * @param {String} fileId - Id used to identify file
   * @param {String} fileType - type of file E.G. "image/jpeg"
   * @returns {Promise}
   */
  static uploadBase64File(bucket, fileData, fileId, fileType){
    const buffer = new Buffer(fileData.replace(/^data:image\/\w+;base64,/, ""),'base64');
    const  params = {
      Bucket : bucket,
      Key: fileId,
      Body: buffer,
      ContentEncoding: 'base64',
      ContentType: fileType
    };

    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }


    /**
   * @param {String} bucket - S3 bucket to upload to
   * @param {String} fileId - Id used to identify file
   * @returns {Promise<String>}
   */
  static getFile(bucket, fileId){
    const  params = {
      Bucket : bucket,
      Key: fileId
    };

    return new Promise((resolve, reject) => {
      s3.getObject(params, (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

      /**
   * @param {String} bucket - S3 bucket to upload to
   * @param {String} fileId - Id used to identify file
   * @returns {Promise<String>}
   */
  static deleteFile(bucket, fileId){
    const  params = {
      Bucket : bucket,
      Key: fileId
    };

    return new Promise((resolve, reject) => {
      s3.deleteObject(params, (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
