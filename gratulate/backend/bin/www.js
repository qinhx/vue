'use strict';

let WSServer = require('ws').Server;
let server = require('http').createServer();
let app = require('../app');
var mongoose = require('mongoose');
var events = require('../events')
var db = mongoose.createConnection('mongodb://www.qinhx.cn:27017/wx',{useNewUrlParser:true});
var eventEmitter = events
var record = db.model('record',{
  openid:String,
  days:String,
  payOrNot:String,
  hours:String,
  cost:String,
  LP:Array,
  money:String,
  date:String
})
// Create web socket server on top of a regular http server
let wss = new WSServer({

  server: server
});

// Also mount the app here
server.on('request', app);

wss.on('connection', function connection(ws) {
  console.log('hello world')
  ws.on('open',function(event){
      console.log('ws is openning')
      ws.send('Hello I am from backend')
  })
  ws.on('message',event=>{
      console.log(event)
  })
  eventEmitter.on("dataChanged",function(id){
    record.findById(id,(err,data)=>{
        if(err) ws.send(err);
        var str = JSON.stringify(data)
         ws.send(str)
    })
})
  ws.on('close',event=>{
      console.log(event)
  })
});

server.listen(process.env.PORT || 3000, function() {

  console.log(`http/ws server listening on ${process.env.PORT}`);
});