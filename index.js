const logEvents = require('./logEvents')

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {} // creating class

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
  logEvents(msg);
});
myEmitter.emit('log','log event emitted');
