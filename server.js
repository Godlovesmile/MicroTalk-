const express = require('express'),
      app = express(),
      server = require('http').Server(app),
      io = require('socket.io')(server),
      port = process.env.PORT || 3000;

app.use('/',express.static(__dirname + '/www'));

// 记录用户
let users = [];

io.on('connection',socket => {

  // 发送文本信息
  socket.on('chatMessage', msg => {
    console.log('前台给我发信息了' + msg);
    io.emit('chatMessage', msg);
  });

});

server.listen(port, () => {
  console.log('listening on: ' + port)
});

