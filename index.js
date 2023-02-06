// person bits below as a reminder of the Common JS method of pulling in a module
// const Person = require('./person');

// const person1 = new Person('Dominic','Midlane');
// console.log(person1.greeting());

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // if (request.url == '/') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'),
    //             (err, content) => {
    //                 if (err) throw err;
    //                 response.writeHead(200, { 'Content-Type': 'text/html'});
    //                 response.end(content);
    //             }
    //         );
    // }
    
    // if (request.url == '/about') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'about.html'),
    //             (err, content) => {
    //                 if (err) throw err;
    //                 response.writeHead(200, { 'Content-Type': 'text/html'});
    //                 response.end(content);
    //             }
    //         );
    // }
    // // you would likely use Express js to create an API rather than node
    // if (request.url == '/api/users') {
    //     const users = [
    //         {name: 'Joe Bloggs', age: 40},
    //         {name: 'Jane Diggity', age:30}
    //     ];

    //     response.writeHead(200, { 'Content-Type': 'application/json'});
    //     response.end(JSON.stringify(users));
    // }

    // Build file path
    let filePath = path.join(
        __dirname,
        'public',
        request.url === '/' ? 'index.html' : request.url
    );

    let extname = path.extname(filePath);
    let contentType = 'text/html';

    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        
        case '.css':
            contentType = 'text/css';
            break;
        
        case '.json':
            contentType = 'application/json';
            break;
        
        case '.png':
            contentType = 'image/png';
            break;
        
        case '.jpg':
            contentType = 'image/jpg';
            break;
        
    }
    console.log(filePath);
    console.log(contentType);
    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            console.log('errored');
            console.log(err);
            if (err.code == 'ENOENT') {
                // page not found
                console.log('en');
                fs.readFile(
                    path.join(__dirname, 'public', '404.html'),
                    (err, content) => {
                        response.writeHead(200, { 'Content-Type': 'text/html'});
                        response.end(content, 'utf8');
                    });
            } else {
                response.writeHead(500);
                response.end(`Interal Server Error: ${err.code}`);
            }
        } else {
            response.writeHead(200, { 'ContentType' : contentType });
            response.end(content, 'utf8');
        }
        
        
    });
});

// process.env.PORT is looking at environment variables so consumer could overwite port
const PORT = process.env.PORT || 5000; 

server.listen(PORT, () => console.log(`Sever running on port: ${PORT}`));

// heroku deployment
// make sure PORT constant is set to process.env.PORT as above
// make sure the package.json has a start script calling node not nodemon