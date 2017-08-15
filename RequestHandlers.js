let fs = require('fs');
function Index(res, req, para) {
    fs.createReadStream(__dirname + pathname).pipe(res);
}