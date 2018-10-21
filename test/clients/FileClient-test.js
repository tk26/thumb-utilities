const chai = require('chai');
const should = chai.should();
const sinon = require('sinon');
const fs = require('fs');
const uuid = require('uuid/v1');
const AWS = require('aws-sdk');

const testFileLocation = './assets/test-image.jpg';
const fileBucket = "thumb-profile-pictures";

//These tests are to debug S3 upload, but shouldn't run with other test runs as part of CI
describe.skip('FileClient', () => {
  describe('uploadBase64File', () => {
    it('should upload successfully to S3 when provided valid file params', async() => {
      // read binary data
      const fileClient = require('../../src/clients/FileClient');
      let bitmap = fs.readFileSync(testFileLocation);
      // convert binary data to base64 encoded string
      const fileData = new Buffer(bitmap).toString('base64');
      const fileId = uuid();

      let uploadData = await fileClient.uploadBase64File(fileBucket, fileData, fileId, "image/jpeg");
      let getResult = await fileClient.getFile(fileBucket, fileId);
      let deleteData = await fileClient.deleteFile(fileBucket, fileId);
    });
    it('should handle exception when provided invalid file id', async() => {
      // read binary data
      const fileClient = require('../../src/clients/FileClient');
      let bitmap = fs.readFileSync(testFileLocation);
      // convert binary data to base64 encoded string
      const fileData = new Buffer(bitmap).toString('base64');

      try {
        let uploadData = await fileClient.uploadBase64File(fileBucket, fileData, null, "image/jpeg");
      } catch(error) {
        error.message.should.equal("Missing required key 'Key' in params");
      }
    });
  });
});
