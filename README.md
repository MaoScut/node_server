# node_server
create a customization node server

希望能够用下面的方式调用
let server = require('./server');
server.get('/index', indexHandle);
server.post('/update',updateHandle);
server.use((req, res)=>console.log());//每次收到请求，输出请求的信息
server.listen(8080, ()=>console.log('listening on port 8080'));