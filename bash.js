var pwd = require('./pwd.js');
var ls = require('./ls.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === 'pwd') {
        pwd.pwd();
    } else if (cmd === 'ls') {
        ls.ls();
    } else {
        process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');

});

//Let's write some code
