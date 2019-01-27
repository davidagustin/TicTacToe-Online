const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'mvp',
  port: '3306'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connection with database', err);
  } else {
    console.log('Successful connection to database');
  }
});

module.exports = connection;
