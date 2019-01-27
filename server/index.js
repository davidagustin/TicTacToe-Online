const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./controller.js');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, './../client/dist')));
app.use(bodyParser.json());

app.get('/mvp', (req, res) => {
  console.log('get fires');
  controller.getMessages((err, messages) => {
    console.log('inside callback of get request')
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('about to send messages');
      res.send(messages);
    }
  })
});

app.post('/mvp', (req, res) => {
  controller.postMessage(req.body, (err, success) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(success);
    }
  })
});

app.listen(PORT, () => {
  console.log('MVP is now listening on port ', PORT)
});
