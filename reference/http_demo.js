const http = require('http');


// Create server object

http.createServer((request, response) => {
    // write response
    response.write('hello world');
    response.end();
}).listen(5000, () => console.log('server running..'));