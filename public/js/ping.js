const socket = window.io();

const button = document.querySelector('#ping');

button.addEventListener('click', (e) => {
    console.log('cricou no butao');
    socket.emit('ping');
    return false;
});

const createMessage = (msg) => {
    const msgUl = document.querySelector('#messages');
    const li = document.createElement('li');
    li.innerText = msg;
    msgUl.appendChild(li);
}

socket.on('ola', (msg) => createMessage(msg))

socket.on('pong', (msg) => {
    console.log('chegou o pong');
    createMessage(msg)
});