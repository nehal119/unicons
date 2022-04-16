//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'tabler-icons');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    const array = [];
    var stream = fs.createWriteStream("types.txt");
    stream.once('open', function(fd) {
      // stream.write("[\n");
      files.forEach(function (file) {
        stream.write("'" + file + "',\n");
        // stream.write("My second row\n");
        // fs.writeFileSync("types.txt", file);
      });
      // stream.write("]");
      stream.end();
    });
});