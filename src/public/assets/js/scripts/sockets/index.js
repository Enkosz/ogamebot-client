$(function() {
  const socket = io();

  setInterval(function() {
    socket.emit('refresh', 'ciao');
  }, 5000);

  socket.on('done', function({productionData}) {
    const {metal, crystal, deuterium, energy} = productionData;

    $('#metalActual').text(`Metal ${metal} units`);
    $('#crystalActual').text(`Crystal ${crystal} units`);
    $('#deuteriumActual').text(`Deuterium ${deuterium} units`);
    $('#eneryActual').text(`Energy ${energy} power`);
  });
});
