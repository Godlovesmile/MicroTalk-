const http = require('http');
const io = require('socket.io');

//普通http服务器
let server = http.createServer();
server.listen(3000);

//webSocket服务器
let wsServer = io.listen(server);

let aSock = [];
wsServer.on('connection', function (sock){
  aSock.push(sock);

  sock.on('qq', function (json){

    json.time = Math.floor(new Date().getTime()/1000);

    aSock.forEach(s => {
      if(s!=sock){
        s.emit('weixin', json);
      }
    });
  });
});
