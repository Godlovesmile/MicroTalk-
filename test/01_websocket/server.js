const http = require('http');
const io = require('socket.io');

//普通http服务器
let server = http.createServer();
server.listen(3000);

//webSocket服务器
let wsServer = io.listen(server);

wsServer.on('connection', function (sock){
  //sock对象
  sock.on('hello', function (...arg){
    console.log('前台给我发了个', ...arg);
  });
});
