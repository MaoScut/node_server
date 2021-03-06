let fs = require('fs');
let url = require('url');
function route(req, res, handle) {
    let pathname = url.parse(req.url).pathname;
    let para;
    if(typeof handle[pathname] == 'function')
        handle[pathname](req, res, para);
    else {
        fs.stat(__dirname + pathname, (err, stat) => {
            if(err || !stat.isFile()) {
                res.writeHead(404);
                res.end('not found for' + pathname);
                return;
            } else {
                fs.createReadStream(__dirname + pathname).pipe(res);
            }
        })
    }
}
exports.route = route;