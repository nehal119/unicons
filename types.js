const path = require('path');
const fs = require('fs');
const directoryPath1 = path.join(__dirname, 'tabler-icons');
fs.readdir(directoryPath1, function (err, files1) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    var stream = fs.createWriteStream("generator/cmd/genbundle/types.txt");
    stream.once('open', function(fd) {
      files1.forEach(function (file) {
        // stream.write("'" + file + "',\n");
        stream.write("'" + file.split('.svg')[0] + "',\n");
      });
      stream.end();
    });
});