import express from 'express';
import {Server} from 'http';
import {join} from 'path';
import initSocket from './sockets';
import mainRouter from './routes/routes_handler';

const app = express();
const server = Server(app);

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(join(__dirname, '/public')));

app.use('/', mainRouter);

// Socket Initialization
initSocket(server);

server.listen(3000, function() {
  console.log('listening on *:3000');
});


