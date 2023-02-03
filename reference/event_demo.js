const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('amazing-event', () => console.log('Event fired!!'));


myEmitter.emit('amazing-event');
myEmitter.emit('amazing-event');
