let server = require('./server.js');
let Router = require('./Router.js');
let RequestHandler = require('RequestHandlers.js');
let handle = {};
handle['/'] = RequestHandler.Index;
handle['/index'] = RequestHandle.Index;
server.start(Router.route, handle);
