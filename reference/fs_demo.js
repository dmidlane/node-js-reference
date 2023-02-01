const fs = require('fs');
const path = require('path');


// Create folder
// mkdir is async by default and take a callback fn for when the result is returned
// there is a synchronous version mkdirSync()
fs.mkdir(path.join(__dirname,'/test'),{}, err => {
    if (err) throw err;
    console.log('folder created...');
});

// Create and write to a file
// writeFile will overwrite the whole file content, appendFile will add
fs.writeFile(
    path.join(__dirname,'/test','hello.txt'),
    'File content here...',
    err => {
        if (err) throw err;
        console.log('file created and written to...');

        fs.appendFile(
            path.join(__dirname,'/test','hello.txt'),
            ' New content added from the callback fn...',
            err => {
                if (err) throw err;
                console.log('file content added to...');
            }
        );
    }
);