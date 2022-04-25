const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, 'tabler-icons');
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    var stream = fs.createWriteStream("generator/cmd/genbundle/bundle.txt");
    stream.once('open', function(fd) {
      files.forEach(function (file) {
        // stream.write("'" + file + "',\n");
        stream.write("default/" + file.split('.svg')[0] + "\n");
      });
      stream.end();
    });
});