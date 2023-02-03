const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4());

class Logger extends EventEmitter {
    log(message){
        this.emit('message', { id: uuid.v4(), message: message });
    }
}

module.exports = Logger;

// this could be in a new file e.g. index.js
// const Logger = require('./logger');

const logger = new Logger();
logger.on('message', (data) => console.log('Called listener', data));
logger.log('hello world');
logger.log('hello again');
logger.log('me again');