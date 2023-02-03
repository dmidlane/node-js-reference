const fs = require('fs');
const path = require('path');


// // Create folder
// // mkdir is async by default and take a callback fn for when the result is returned
// // there is a synchronous version mkdirSync()

fs.mkdir(path.join(__dirname,'/test'),{}, err => {
    if (err) throw err;
    console.log('folder created...');
});

// Create and write to a file
// writeFile will overwrite the whole file content, appendFile will add

fs.writeFile(
    path.join(__dirname,'/test','hello.txt'),
    'First File content...',
    err => {
        if (err) throw err;
        console.log('file created and written to...');

        fs.appendFile(
            path.join(__dirname,'/test','hello.txt'),
            'New content added from the callback fn...',
            err => {
                if (err) throw err;
                console.log('file content added to...');
            }
        );
    }
);

// Read file - because it's async this would need to go in the callback of the other methods

// fs.readFile(path.join(__dirname, '/test','hello.txt'),'utf8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Rename file - because it's async this would need to go in the callback of the other methods

// fs.rename(
//     path.join(__dirname, '/test','hello.txt'),
//     path.join(__dirname, '/test','hello-world.txt'),
//     err => {
//         if (err) throw err;
//         console.log('file renamed');
//     }
// );