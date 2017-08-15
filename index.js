let http = require('http');
let Router = require('./Router.js');
let middleware = [];
function start(handle) {
    let onRequest = function(handle){
        return function(req, res) {
        Router.route(req, res, handle);
    }}(handle);
    onRequest =  middleware.reduceRight((pre, cur) => cur(pre), onRequest)
    return http.createServer(onRequest);
}
function use(...funcs) {
    funcs.forEach(func => middleware.push(func));
}

exports.start = start;
exports.use = use;
