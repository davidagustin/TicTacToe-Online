const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./controller.js');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 3000;

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

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

http.listen(PORT, () => {
  console.log('MVP is now listening on port ', PORT)
});
