const db = require('../db/config.js');

const postMessage = (data, cb) => {
  console.log('inside postMessage with', data);
  const queryParams = `${data.userName}: ${data.body}`;
  const SQLCommand = 'INSERT INTO chatRoomText (text) VALUES (?)';

  db.query(SQLCommand, queryParams, (err, success) => {
    if (err) {
      cb(err);
    } else {
      cb(null, success)
    }
  })
};

const getMessages = (cb) => {
  db.query('SELECT * FROM chatRoomText', (err, messages) => {
  if (err) {
    console.log('error in getMessages: ', err);
    cb(err);
  } else {
    console.log('successful GET request', messages);
    cb(null, messages);
  }
  })
};

module.exports = {
  postMessage,
  getMessages
};