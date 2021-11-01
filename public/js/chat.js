const socket = window.io();

const form = document.querySelector('form')
const inputMsg = document.querySelector('#messageInput');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('clientMessage', inputMsg.value)
    inputMsg.value = '';
    return false;
});

const createMsg = (msg) => {
    const msgList = document.querySelector('#messages');
    const newMsg = document.createElement('li')
    newMsg.innerText = msg;
    msgList.appendChild(newMsg);
};

socket.on('serverMessage', (msg) => createMsg(msg));