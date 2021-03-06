var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var rootDir = __dirname.replace('','');
var fs = require('fs-extra');
var bodyParser = require('body-parser');


router.get('/', (req, res, next) => {
  res.send('File Download');
});


function fileDownloadRaz(req, callback) {
  var newFileName = 'test';
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    if (err) {
      console.error(err);
    }
  });

  form.on('end', function(fields, files) {
    for (var i=0; i < this.openedFiles.length; i++) {
      var tempPath = this.openedFiles[i].path;
      var fileName = this.openedFiles[i].name;
      var fileExt = fileName.split(".")[fileName.split(".").length-1].toLowerCase();
      var index = fileName.indexOf('/');
      var newLoc = rootDir + '/raz_img/';

      // newFileName = fileName.split(".")[0] +"_test." + fileExt;//////////////////
      newFileName = fileName.split(".")[0] + "." + fileExt;//////////////////
      // console.log(tempPath, newLoc + newFileName);
      fs.copy(tempPath, newLoc + newFileName, function(err) {
        if (err) {
          console.error(err);
          console.log('**upload error**');
          return;
        }
        else {
          console.log(newLoc + newFileName + ' has been saved!');

          if (typeof callback === "function"){
            var filePath = newLoc+newFileName
            callback(filePath);
          };
          return;
        }
      });
    }
  });
};


function fileDownloadAndroid(req, callback) {
  var newFileName = 'test';
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    if (err) {
      console.error(err);
    }
  });

  form.on('end', function(fields, files) {
    for (var i=0; i < this.openedFiles.length; i++) {
      var tempPath = this.openedFiles[i].path;
      var fileName = this.openedFiles[i].name;
      var fileExt = fileName.split(".")[fileName.split(".").length-1].toLowerCase();
      var index = fileName.indexOf('/');
      var newLoc = rootDir + '/android_img/';

      // newFileName = fileName.split(".")[0] +"_test." + fileExt;//////////////////
      newFileName = fileName.split(".")[0] + "." + fileExt;//////////////////
      // console.log(tempPath, newLoc + newFileName);
      fs.copy(tempPath, newLoc + newFileName, function(err) {
        if (err) {
          console.error(err);
          console.log('**upload error**');
          return;
        }
        else {
          console.log(newLoc + newFileName + ' has been saved!');

          if (typeof callback === "function"){
            var filePath = newLoc+newFileName
            callback(filePath);
          };
          return;
        }
      });
    }
  });
};
module.exports = {
  fileDownloadRaz: fileDownloadRaz,
  fileDownloadAndroid: fileDownloadAndroid
};
