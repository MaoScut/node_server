let server = require('./index.js');
let RequestHandlers = require('./RequestHandlers.js');
let handle = {};
handle['/'] = RequestHandlers.Index;
handle['/index'] = RequestHandlers.Index;
function logMiddleware1(next) {
    return function(req, res) {
            console.log('start log1 handle');
            next(req, res);
            console.log('end log1 handle');
    }
}
function logMiddleware2(next) {
    return function(req, res) {
            console.log('start log2 handle');
            next(req, res);
            console.log('end log2 handle');
    }
}
server.use(logMiddleware1, logMiddleware2);
server.start(handle).listen(8080, ()=>console.log('listen'));