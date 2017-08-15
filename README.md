# node_server
create a customization node server

希望能够用下面的方式调用
let server = require('./node_server');
server.get('/index', indexHandle);//待定
server.post('/update',updateHandle);//待定

server.use(middleware1, middleware2, ...)
server.start(handle); //handle是url和处理程序的对应关系

是不是下面这样子更合理呢？
let server = require('./node_server');
server.use();
server.setHandleMap();
server.listen();
暂时还不引用到其他项目中
