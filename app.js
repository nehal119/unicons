const path = require('path');
const fs = require('fs');
const directoryPath1 = path.join(__dirname, 'tabler-icons');
const directoryPath2 = path.join(__dirname, 'custom');
fs.readdir(directoryPath1, function (err, files1) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    fs.readdir(directoryPath2, function (err, files2) {
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      }
      var stream = fs.createWriteStream("generator/cmd/genbundle/bundle.txt");
      stream.once('open', function(fd) {
        files1.forEach(function (file) {
          // stream.write("'" + file + "',\n");
          stream.write("default/" + file.split('.svg')[0] + "\n");
        });
        files2.forEach(function (file) {
          stream.write("custom/" + file.split('.svg')[0] + "\n");
        });
        stream.end();
      });
    });
});