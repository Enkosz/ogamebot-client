import socketIo from 'socket.io';
import axios from 'axios';

export default (server) => {
  const io = socketIo(server);

  io.on('connection', function(socket) {
    socket.on('refresh', async function(msg) {
      const response = await axios('http://127.0.0.1:5000/resources/33629612');
      const productionData = response.data;
      socket.emit('done', {productionData});
    });
  });
};
