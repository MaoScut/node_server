let http = require('http');
function start(route, handle) {
    function onRequest(req, res) {
        route(req, res, handle)
    }
    return http.createServer(onRequest);
}
exports.start = start;
