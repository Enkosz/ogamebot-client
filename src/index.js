import express from 'express';
import {Server} from 'http';
import join from 'path';
import initSocket from './sockets';

const app = express();
const server = Server(app);

// Socket Initialization
initSocket(server);

server.set('view engine', 'pug');
server.use(express.static(join(__dirname, './public')));


server.listen(3000, function() {
  console.log('listening on *:3000');
});


