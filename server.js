let http = require('http');
function start(route, handle) {
    function onRequest(res, req) {
        route(res, req, handle);
    }
    http.createServer(onRequest);
}
