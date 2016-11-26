#!/usr/bin/env node
var _ = require('lodash');
var fs = require('fs');
var sourceKeyFile = 'meetup_api_key.txt';
var targetFileName = 'free-code-camp-events.mock.json';
var targetPath = 'js/';
var targetGroupUrlname = 'Free-Code-Camp-Indy';
var targetStatus = ['upcoming', 'past'];
var meetup_api_key = (function () {
  var environmentVariable = _.get(process, 'env.MEETUP_API_KEY');
  if (!_.isUndefined(environmentVariable)) {
    return environmentVariable;
  } else {
    return fs.readFileSync(sourceKeyFile, 'utf-8').replace(/\s/g,'');
  }
})();
function generateNewMeetupMockData(meetupApiKey) {
  var meetup = require('meetup-api')({key: meetupApiKey});
  return new Promise(function (resolve, reject) {
    meetup.getEvents({group_urlname: targetGroupUrlname, status: targetStatus}, function (err, response) {
      if (err) {
        reject(new Error(err));
      } else {
        // Strip away properties that contain sensitive information
        var results = {
          results: _.get(response, 'results')
        }
        resolve(results);
      }
    });
  });
};
function writeNewData(mockJson) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(targetPath + targetFileName, mockJson, function (err) {
      if (err) {
        reject(new Error(err))
      } else {
        resolve('Successfully written to file!');
      }
    });
  });
};
function handleError(error) {
  console.error(error);
  process.exit(1);
}

// "main"
if (_.isUndefined(meetup_api_key) || _.isEmpty(meetup_api_key)) {
  var error = new Error('MEETUP_API_KEY not found.  Please reference the README.md for instructions on how to set this up.');
  handleError(error);
} else {
  var getMockJson = generateNewMeetupMockData(meetup_api_key);
  getMockJson.then(function (mockJson) {
    var formattedMockJson = JSON.stringify(mockJson, null, 2);
    var writeResult = writeNewData(formattedMockJson);
    writeResult.then(function () {
      console.log('Successfully wrote new data to target file');
      process.exit(0);
    }, handleError);
  }, handleError);
}
