require('dotenv').config({ path: '../.env' });

const server = require('./config/server');

server.listen(4444, () => {
  console.log('Good luck, server is online on *3000');
});
