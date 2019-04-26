import socketIo from 'socket.io';
import axios from 'axios';

export default (server) => {
  const io = socketIo(server);

  io.on('connection', function(socket) {
    console.log('an user connected');
    socket.on('refresh', async function(msg) {
      const response = await axios('http://127.0.0.1:5000/resources/33629612');
      const response2 = await axios('http://127.0.0.1:5000/production/33629612');
      const users = response.data;
      const production = response2.data;
      socket.emit('done', {users, production});
    });
  });
};
