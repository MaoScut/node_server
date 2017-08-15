let server = require('./server.js');
let Router = require('./Router.js');
let RequestHandlers = require('./RequestHandlers.js');
let handle = {};
handle['/'] = RequestHandlers.Index;
handle['/index'] = RequestHandlers.Index;
server.start(Router.route, handle).listen(8080, ()=>console.log('listen'));
