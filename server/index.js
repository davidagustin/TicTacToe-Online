const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./controller.js');
const app = express();
var socket = require('socket.io');
const PORT = 3000;



app.use(express.static(path.join(__dirname, './../client/dist')));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendStatus(200);
});

app.get('/mvp', (req, res) => {
  controller.getMessages((err, messages) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(messages);
    }
  })
});

app.post('/mvp', (req, res) => {
  console.log('post fires');
  controller.postMessage(req.body, (err, success) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(success);
    }
  })
});

const server = app.listen(PORT, () => {
  console.log('MVP is now listening on port ', PORT)
});

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

  console.log('made socket connection', socket.id);

  // Handle chat event
  socket.on('chat room', function(data){
    console.log('this is data', data);
    io.sockets.emit('chat room', data);
  });

});
