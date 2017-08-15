let fs = require('fs');
function Index(req, res, para) {
    fs.createReadStream(__dirname + '/index.html').pipe(res);
}
exports.Index = Index;