import socketio from 'socket.io-client';

const socket = socketio('https://mychatteste.herokuapp.com');

export default socket;