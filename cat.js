const fs = require('fs');

function cat( filename ){
    fs.readFile( filename, (err, data) => {
        if (err) throw err;
        process.stdout.write( data + '\nprompt > ');
    });
}

module.exports = cat;