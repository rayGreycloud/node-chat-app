var socket = io();

socket.on('connect', function () {
  console.log('Connected to server.');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server.');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});

socket.emit('createMessage', {
  from: 'Yoda',
  text: 'Hello say I.'
}, function (data) {
  console.log('Message received.', data);
});
