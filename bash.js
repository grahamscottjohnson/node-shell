var { pwd } = require('./pwd.js');
var { ls } = require('./ls.js');
var cat = require('./cat.js');
var curl = require( './curl.js' );

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === 'pwd') {
        pwd();
    } else if (cmd === 'ls') {
        ls();
    } else if (cmd.startsWith('cat')){
        const filename = cmd.slice(4);
        cat( filename );
    } else if ( cmd.startsWith('curl') ){
        curl();
    }
    else {
        process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');

});

//Let's write some code
